/**
 * Download Wikimedia Commons portraits for popes missing public/popes/{slug}.jpg.
 * Uses Wikidata P18 images + Commons metadata; resizes to max 960px JPEG.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require(path.resolve('node_modules/.pnpm/node_modules/sharp'));

const ROOT = path.resolve(import.meta.dirname, '..');
const ITEMS_DIR = path.join(ROOT, 'src/data/popes/items');
const OUT_DIR = path.join(ROOT, 'public/popes');
const CREDITS = path.join(OUT_DIR, 'CREDITS.md');
const UA = 'DigitalCatholicBot/1.0 (https://github.com/axcel-blade/Digital-Catholic; educational portraits)';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function loadLocalPopes() {
	const keepExisting = new Set(
		fs
			.readdirSync(OUT_DIR)
			.filter((f) => f.endsWith('.jpg'))
			.map((f) => f.replace(/\.jpg$/, ''))
	);

	const items = [];
	for (const file of fs.readdirSync(ITEMS_DIR).filter((f) => f.endsWith('.ts'))) {
		const src = fs.readFileSync(path.join(ITEMS_DIR, file), 'utf8');
		const slug = src.match(/slug:\s*'([^']+)'/)?.[1];
		const title = src.match(/title:\s*'([^']+)'/)?.[1];
		const papalNumber = Number(src.match(/papalNumber:\s*(\d+)/)?.[1]);
		const reignStart = Number(src.match(/reignStart:\s*(\d+)/)?.[1]);
		if (!slug || !title || !papalNumber) continue;
		items.push({
			slug,
			title,
			papalNumber,
			reignStart,
			hasImage: keepExisting.has(slug),
		});
	}
	return items.sort((a, b) => a.papalNumber - b.papalNumber);
}

function normalizeName(name) {
	return name
		.toLowerCase()
		.replace(/^pope\s+/i, '')
		.replace(/^st\.?\s+/i, '')
		.replace(/^bl\.?\s+/i, '')
		.replace(/^blessed\s+/i, '')
		.replace(/^servant of god\s+/i, '')
		.replace(/\([^)]*\)/g, '')
		.replace(/[^a-z0-9]+/g, ' ')
		.trim();
}

async function fetchJson(url) {
	const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'application/json' } });
	if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
	return res.json();
}

async function queryWikidataPopes() {
	const sparql = `
SELECT ?pope ?popeLabel ?image ?num ?start WHERE {
  ?pope p:P39 ?stmt .
  ?stmt ps:P39 wd:Q19546 .
  OPTIONAL { ?stmt pq:P1545 ?num . }
  OPTIONAL { ?stmt pq:P580 ?start . }
  OPTIONAL { ?pope wdt:P18 ?image . }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en" . }
}
ORDER BY ?start
`;
	const url =
		'https://query.wikidata.org/sparql?format=json&query=' + encodeURIComponent(sparql);
	const data = await fetchJson(url);
	const rows = [];
	for (const b of data.results.bindings) {
		if (!b.image?.value) continue;
		const label = b.popeLabel?.value || '';
		if (!label || label.startsWith('Q')) continue;
		const imageUrl = b.image.value; // https://commons.wikimedia.org/wiki/Special:FilePath/Foo.jpg
		const fileName = decodeURIComponent(imageUrl.split('/').pop() || '');
		rows.push({
			qid: b.pope.value.split('/').pop(),
			label,
			norm: normalizeName(label),
			num: b.num ? Number(b.num.value) : undefined,
			startYear: b.start ? Number(String(b.start.value).slice(0, 4)) : undefined,
			fileName,
			imageUrl,
		});
	}
	return rows;
}

function matchWikidata(local, wikiRows) {
	const localNorm = normalizeName(local.title);
	const exact = wikiRows.filter((r) => r.norm === localNorm);
	if (exact.length === 1) return exact[0];
	if (exact.length > 1 && local.reignStart) {
		return exact
			.filter((c) => c.startYear)
			.sort((a, b) => Math.abs(a.startYear - local.reignStart) - Math.abs(b.startYear - local.reignStart))[0] || exact[0];
	}

	const candidates = wikiRows.filter(
		(r) => r.norm === localNorm || (localNorm.length > 4 && (r.norm.includes(localNorm) || localNorm.includes(r.norm)))
	);
	if (candidates.length === 1) return candidates[0];

	if (candidates.length > 1 && local.reignStart) {
		const near = candidates.filter((c) => c.startYear && Math.abs(c.startYear - local.reignStart) <= 3);
		if (near.length) {
			return near.sort((a, b) => Math.abs(a.startYear - local.reignStart) - Math.abs(b.startYear - local.reignStart))[0];
		}
	}

	// Fall back to unique ordinal only when name also overlaps.
	const byNum = wikiRows.filter((r) => r.num === local.papalNumber);
	if (byNum.length === 1) {
		const first = localNorm.split(' ')[0];
		if (!first || byNum[0].norm.includes(first) || first.length <= 3) return byNum[0];
	}

	return null;
}

async function commonsInfo(fileName) {
	const title = fileName.startsWith('File:') ? fileName : `File:${fileName}`;
	const url =
		'https://commons.wikimedia.org/w/api.php?action=query&titles=' +
		encodeURIComponent(title) +
		'&prop=imageinfo&iiprop=url|extmetadata|size|mime&format=json';
	const data = await fetchJson(url);
	const page = Object.values(data.query.pages)[0];
	const ii = page?.imageinfo?.[0];
	if (!ii?.url) return null;
	const em = ii.extmetadata || {};
	const strip = (html) =>
		String(html || '')
			.replace(/<[^>]+>/g, ' ')
			.replace(/\s+/g, ' ')
			.trim();
	return {
		url: ii.url.split('?')[0],
		width: ii.width,
		height: ii.height,
		mime: ii.mime,
		artist: strip(em.Artist?.value) || 'Unknown',
		license: em.LicenseShortName?.value || em.License?.value || 'See Commons',
		licenseUrl: strip(em.LicenseUrl?.value) || '',
		descriptionUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`,
		fileTitle: title.replace(/^File:/, ''),
	};
}

async function fetchWithRetry(url, attempts = 6) {
	let lastErr;
	for (let i = 0; i < attempts; i++) {
		try {
			const res = await fetch(url, { headers: { 'User-Agent': UA } });
			if (res.status === 429 || res.status === 503) {
				const wait = 2000 * (i + 1);
				await sleep(wait);
				continue;
			}
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			return Buffer.from(await res.arrayBuffer());
		} catch (error) {
			lastErr = error;
			await sleep(1500 * (i + 1));
		}
	}
	throw lastErr || new Error('fetch failed');
}

async function downloadAndWrite(slug, info) {
	// Prefer Commons thumbnail endpoint (smaller payload, less likely to 429).
	const thumb = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(info.fileTitle)}?width=960`;
	let buf;
	try {
		buf = await fetchWithRetry(thumb);
	} catch {
		buf = await fetchWithRetry(info.url);
	}
	const out = path.join(OUT_DIR, `${slug}.jpg`);
	await sharp(buf)
		.rotate()
		.resize({ width: 960, height: 960, fit: 'inside', withoutEnlargement: true })
		.jpeg({ quality: 82, mozjpeg: true })
		.toFile(out);
	return out;
}

function licenseMarkdown(info) {
	if (/public domain/i.test(info.license) || info.license === 'PD' || /CC0/i.test(info.license)) {
		return 'Public domain';
	}
	if (info.licenseUrl) {
		return `[${info.license}](${info.licenseUrl})`;
	}
	return info.license;
}

function updateCredits(rows) {
	const header = `# Image credits — Popes

Images shown on the Popes pages (\`/popes\`). All images are from Wikimedia Commons, resized to at most 960px.

| File | Source | Author | Licence |
| --- | --- | --- | --- |
`;
	const lines = rows
		.sort((a, b) => a.slug.localeCompare(b.slug))
		.map((r) => {
			const source = `[${r.fileTitle}](${r.descriptionUrl})`;
			const author = r.artist.replace(/\|/g, '\\|').slice(0, 120) || 'Unknown';
			return `| ${r.slug}.jpg | ${source} | ${author} | ${r.licenseMd} |`;
		});
	fs.writeFileSync(CREDITS, header + lines.join('\n') + '\n', 'utf8');
}

function loadExistingCredits() {
	if (!fs.existsSync(CREDITS)) return [];
	const text = fs.readFileSync(CREDITS, 'utf8');
	const rows = [];
	for (const line of text.split('\n')) {
		const m = line.match(/^\| ([a-z0-9-]+)\.jpg \| \[([^\]]+)\]\(([^)]+)\) \| (.+?) \| (.+) \|$/);
		if (!m) continue;
		rows.push({
			slug: m[1],
			fileTitle: m[2],
			descriptionUrl: m[3],
			artist: m[4],
			licenseMd: m[5],
		});
	}
	return rows;
}

async function main() {
	fs.mkdirSync(OUT_DIR, { recursive: true });
	const locals = loadLocalPopes();
	const missing = locals.filter((p) => !p.hasImage);
	console.log(`Local popes: ${locals.length}; already have images: ${locals.length - missing.length}; missing: ${missing.length}`);

	console.log('Querying Wikidata…');
	const wikiRows = await queryWikidataPopes();
	console.log(`Wikidata rows with images: ${wikiRows.length}`);

	const creditRows = loadExistingCredits();
	const credited = new Set(creditRows.map((r) => r.slug));

	let downloaded = 0;
	let skipped = 0;
	let failed = 0;

	for (const local of missing) {
		const match = matchWikidata(local, wikiRows);
		if (!match) {
			skipped += 1;
			continue;
		}

		process.stdout.write(`#${local.papalNumber} ${local.slug} ← ${match.fileName} … `);
		try {
			await sleep(700);
			const info = await commonsInfo(match.fileName);
			if (!info) {
				console.log('no commons info');
				failed += 1;
				continue;
			}
			if (!/^image\//.test(info.mime || '') && !/\.(jpe?g|png|webp|tif?f|gif)$/i.test(match.fileName)) {
				console.log('skip non-image', info.mime);
				failed += 1;
				continue;
			}
			await downloadAndWrite(local.slug, info);
			if (!credited.has(local.slug)) {
				creditRows.push({
					slug: local.slug,
					fileTitle: info.fileTitle,
					descriptionUrl: info.descriptionUrl,
					artist: info.artist || 'Unknown',
					licenseMd: licenseMarkdown(info),
				});
				credited.add(local.slug);
			}
			downloaded += 1;
			console.log('ok');
		} catch (error) {
			failed += 1;
			console.log('fail', error.message || error);
		}
	}

	updateCredits(creditRows);
	console.log(`Done. downloaded=${downloaded} skipped(no match)=${skipped} failed=${failed}`);
	console.log(`Images on disk: ${fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.jpg')).length}`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
