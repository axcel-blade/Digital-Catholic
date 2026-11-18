/**
 * Rebuild public/popes/CREDITS.md for every local pope jpg via Wikidata P18 + Commons metadata.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Reuse helpers by importing the download script's logic inline (duplicated lightly for a standalone pass).
const ROOT = path.resolve(import.meta.dirname, '..');
const ITEMS_DIR = path.join(ROOT, 'src/data/popes/items');
const OUT_DIR = path.join(ROOT, 'public/popes');
const CREDITS = path.join(OUT_DIR, 'CREDITS.md');
const UA = 'DigitalCatholicBot/1.0 (https://github.com/axcel-blade/Digital-Catholic; educational portraits)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
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
	const url = 'https://query.wikidata.org/sparql?format=json&query=' + encodeURIComponent(sparql);
	const data = await fetchJson(url);
	return data.results.bindings
		.filter((b) => b.image?.value)
		.map((b) => {
			const label = b.popeLabel?.value || '';
			const imageUrl = b.image.value;
			return {
				label,
				norm: normalizeName(label),
				num: b.num ? Number(b.num.value) : undefined,
				startYear: b.start ? Number(String(b.start.value).slice(0, 4)) : undefined,
				fileName: decodeURIComponent(imageUrl.split('/').pop() || ''),
			};
		})
		.filter((r) => r.label && !r.label.startsWith('Q'));
}

function matchWikidata(local, wikiRows) {
	const localNorm = normalizeName(local.title);
	const exact = wikiRows.filter((r) => r.norm === localNorm);
	if (exact.length === 1) return exact[0];
	if (exact.length > 1 && local.reignStart) {
		return (
			exact
				.filter((c) => c.startYear)
				.sort((a, b) => Math.abs(a.startYear - local.reignStart) - Math.abs(b.startYear - local.reignStart))[0] ||
			exact[0]
		);
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
	const byNum = wikiRows.filter((r) => r.num === local.papalNumber);
	if (byNum.length === 1) return byNum[0];
	return null;
}

async function commonsInfo(fileName) {
	const title = fileName.startsWith('File:') ? fileName : `File:${fileName}`;
	const url =
		'https://commons.wikimedia.org/w/api.php?action=query&titles=' +
		encodeURIComponent(title) +
		'&prop=imageinfo&iiprop=extmetadata&format=json';
	const data = await fetchJson(url);
	const page = Object.values(data.query.pages)[0];
	const ii = page?.imageinfo?.[0];
	const em = ii?.extmetadata || {};
	const strip = (html) =>
		String(html || '')
			.replace(/<[^>]+>/g, ' ')
			.replace(/\s+/g, ' ')
			.trim();
	const license = em.LicenseShortName?.value || em.License?.value || 'See Commons';
	const licenseUrl = strip(em.LicenseUrl?.value) || '';
	let licenseMd = license;
	if (/public domain/i.test(license) || license === 'PD' || /CC0/i.test(license)) licenseMd = 'Public domain';
	else if (licenseUrl) licenseMd = `[${license}](${licenseUrl})`;
	return {
		fileTitle: title.replace(/^File:/, ''),
		descriptionUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`,
		artist: strip(em.Artist?.value) || 'Unknown',
		licenseMd,
	};
}

async function main() {
	const wikiRows = await queryWikidataPopes();
	const rows = [];
	const files = fs.readdirSync(ITEMS_DIR).filter((f) => f.endsWith('.ts'));
	for (const file of files) {
		const src = fs.readFileSync(path.join(ITEMS_DIR, file), 'utf8');
		const local = {
			slug: src.match(/slug:\s*'([^']+)'/)?.[1],
			title: src.match(/title:\s*'([^']+)'/)?.[1],
			papalNumber: Number(src.match(/papalNumber:\s*(\d+)/)?.[1]),
			reignStart: Number(src.match(/reignStart:\s*(\d+)/)?.[1]),
		};
		if (!local.slug || !fs.existsSync(path.join(OUT_DIR, `${local.slug}.jpg`))) continue;
		const match = matchWikidata(local, wikiRows);
		if (!match) {
			rows.push({
				slug: local.slug,
				fileTitle: '(source unknown)',
				descriptionUrl: 'https://commons.wikimedia.org/',
				artist: 'Unknown',
				licenseMd: 'See Commons',
			});
			continue;
		}
		await sleep(120);
		try {
			const info = await commonsInfo(match.fileName);
			rows.push({ slug: local.slug, ...info });
			process.stdout.write('.');
		} catch {
			rows.push({
				slug: local.slug,
				fileTitle: match.fileName,
				descriptionUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(match.fileName)}`,
				artist: 'Unknown',
				licenseMd: 'See Commons',
			});
			process.stdout.write('x');
		}
	}
	process.stdout.write('\n');

	rows.sort((a, b) => a.slug.localeCompare(b.slug));
	const body = rows
		.map((r) => {
			const source = `[${r.fileTitle}](${r.descriptionUrl})`;
			const author = (r.artist || 'Unknown').replace(/\|/g, '\\|').slice(0, 120);
			return `| ${r.slug}.jpg | ${source} | ${author} | ${r.licenseMd} |`;
		})
		.join('\n');

	fs.writeFileSync(
		CREDITS,
		`# Image credits — Popes

Images shown on the Popes pages (\`/popes\`). All images are from Wikimedia Commons (via Wikidata P18), resized to at most 960px.

| File | Source | Author | Licence |
| --- | --- | --- | --- |
${body}
`,
		'utf8'
	);
	console.log(`Wrote ${rows.length} credit rows`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
