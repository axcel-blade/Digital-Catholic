/**
 * Splits monolithic src/data/*.ts into per-item modules under src/data/<collection>/items/.
 * Run: npx tsx scripts/split-data.ts
 */
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { saints } from '../src/data/saints.ts';
import { miracles, miraclesIntro } from '../src/data/miracles.ts';
import { parables, parablesIntro } from '../src/data/parables.ts';
import { sacraments } from '../src/data/sacraments.ts';
import { eucharisticMiracles, eucharisticMiraclesIntro } from '../src/data/eucharisticMiracles.ts';
import { marianApparitions, marianApparitionsIntro } from '../src/data/marianApparitions.ts';
import { commandments, commandmentsIntro } from '../src/data/commandments.ts';
import {
	mysterySets,
	rosaryIntro,
	rosaryHowToIntro,
	rosaryHowToSteps,
	rosaryMysterySchedule,
	rosaryPrayers,
} from '../src/data/rosary.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function writeFile(path: string, content: string) {
	mkdirSync(dirname(path), { recursive: true });
	writeFileSync(path, content, 'utf8');
}

function serializeItem(typeName: string, varName: string, data: unknown): string {
	return `import type { ${typeName} } from '../types';\n\nconst ${varName}: ${typeName} = ${JSON.stringify(data, null, '\t')};\n\nexport default ${varName};\n`;
}

function extractTypes(sourcePath: string, stopBefore: string): string {
	const source = readFileSync(join(root, sourcePath), 'utf8');
	const stop = source.indexOf(stopBefore);
	return source.slice(0, stop).trim() + '\n';
}

function writeSlugCollection(config: {
	folder: string;
	shimFile: string;
	typeName: string;
	varName: string;
	arrayName: string;
	typesPath: string;
	stopBefore: string;
	intro?: { name: string; value: string };
	items: { slug: string }[];
	extraExports?: string;
	helpers?: string;
}) {
	const dir = join(root, 'src/data', config.folder);
	const types = extractTypes(config.typesPath, config.stopBefore);
	writeFile(join(dir, 'types.ts'), types);

	if (config.intro) {
		writeFile(
			join(dir, 'intro.ts'),
			`export const ${config.intro.name} = ${JSON.stringify(config.intro.value)};\n`
		);
	}

	for (const item of config.items) {
		writeFile(
			join(dir, 'items', `${item.slug}.ts`),
			serializeItem(config.typeName, config.varName, item)
		);
	}

	const indexLines = [
		`import { loadCollection } from '../lib/loadCollection';`,
		`import type { ${config.typeName} } from './types';`,
	];
	if (config.intro) {
		indexLines.push(`export { ${config.intro.name} } from './intro';`);
	}
	indexLines.push(`export type * from './types';`);
	indexLines.push(`const modules = import.meta.glob('./items/*.ts', { eager: true });`);
	indexLines.push(
		`export const ${config.arrayName} = loadCollection<${config.typeName}>(modules);`
	);
	if (config.helpers) {
		indexLines.push('', config.helpers.trim());
	}
	writeFile(join(dir, 'index.ts'), indexLines.join('\n') + '\n');

	writeFile(join(root, 'src/data', config.shimFile), `export * from './${config.folder}/index';\n`);
}

function writeCommandments() {
	const dir = join(root, 'src/data/commandments');
	const types = extractTypes('src/data/commandments.ts', 'export const commandmentsIntro');
	writeFile(join(dir, 'types.ts'), types);
	writeFile(
		join(dir, 'intro.ts'),
		`export const commandmentsIntro = ${JSON.stringify(commandmentsIntro)};\n`
	);

	for (const item of commandments) {
		writeFile(
			join(dir, 'items', `${String(item.number).padStart(2, '0')}-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.ts`),
			serializeItem('Commandment', 'commandment', item)
		);
	}

	writeFile(
		join(dir, 'index.ts'),
		`import { loadCollectionByNumber } from '../lib/loadCollection';
import type { Commandment } from './types';

export { commandmentsIntro } from './intro';
export type * from './types';

const modules = import.meta.glob('./items/*.ts', { eager: true });
export const commandments = loadCollectionByNumber<Commandment>(modules);
`
	);
	writeFile(join(root, 'src/data/commandments.ts'), `export * from './commandments/index';\n`);
}

function writeRosary() {
	const dir = join(root, 'src/data/rosary');
	const types = extractTypes('src/data/rosary.ts', 'export const rosaryIntro');
	writeFile(join(dir, 'types.ts'), types);

	writeFile(
		join(dir, 'shared.ts'),
		`export const rosaryIntro = ${JSON.stringify(rosaryIntro)};
export const rosaryHowToIntro = ${JSON.stringify(rosaryHowToIntro)};
export const rosaryMysterySchedule = ${JSON.stringify(rosaryMysterySchedule)};

export const rosaryHowToSteps = ${JSON.stringify(rosaryHowToSteps, null, '\t')};
export const rosaryPrayers = ${JSON.stringify(rosaryPrayers, null, '\t')};
`
	);

	for (const set of mysterySets) {
		writeFile(
			join(dir, 'mystery-sets', `${set.slug}.ts`),
			serializeItem('MysterySet', 'mysterySet', set)
		);
	}

	writeFile(
		join(dir, 'index.ts'),
		`import { loadCollection } from '../lib/loadCollection';
import type { MysterySet } from './types';

export {
	rosaryIntro,
	rosaryHowToIntro,
	rosaryHowToSteps,
	rosaryMysterySchedule,
	rosaryPrayers,
} from './shared';
export type * from './types';

const modules = import.meta.glob('./mystery-sets/*.ts', { eager: true });
export const mysterySets = loadCollection<MysterySet>(modules);

export function getMysterySet(slug: string): MysterySet | undefined {
	return mysterySets.find((set) => set.slug === slug);
}
`
	);
	writeFile(join(root, 'src/data/rosary.ts'), `export * from './rosary/index';\n`);
}

writeSlugCollection({
	folder: 'saints',
	shimFile: 'saints.ts',
	typesPath: 'src/data/saints.ts',
	stopBefore: 'export const saints',
	typeName: 'Saint',
	varName: 'saint',
	arrayName: 'saints',
	items: saints,
	helpers: `export function getSaint(slug: string) {
	return saints.find((s) => s.slug === slug);
}

export function getSaintImageSrc(slug: string): string {
	return \`\${import.meta.env.BASE_URL}saints/\${slug}.jpg\`;
}

export function getSaintImageAlt(title: string): string {
	return \`Sacred art depicting \${title}\`;
}`,
});

writeSlugCollection({
	folder: 'miracles',
	shimFile: 'miracles.ts',
	typesPath: 'src/data/miracles.ts',
	stopBefore: 'export const miraclesIntro',
	typeName: 'Miracle',
	varName: 'miracle',
	arrayName: 'miracles',
	intro: { name: 'miraclesIntro', value: miraclesIntro },
	items: miracles,
	helpers: `export function getMiracle(slug: string) {
	return miracles.find((m) => m.slug === slug);
}`,
});

writeSlugCollection({
	folder: 'parables',
	shimFile: 'parables.ts',
	typesPath: 'src/data/parables.ts',
	stopBefore: 'export const parablesIntro',
	typeName: 'Parable',
	varName: 'parable',
	arrayName: 'parables',
	intro: { name: 'parablesIntro', value: parablesIntro },
	items: parables,
	helpers: `export function getParable(slug: string) {
	return parables.find((p) => p.slug === slug);
}`,
});

writeSlugCollection({
	folder: 'sacraments',
	shimFile: 'sacraments.ts',
	typesPath: 'src/data/sacraments.ts',
	stopBefore: 'export const sacraments',
	typeName: 'Sacrament',
	varName: 'sacrament',
	arrayName: 'sacraments',
	items: sacraments,
	helpers: `export function getSacrament(slug: string) {
	return sacraments.find((s) => s.slug === slug);
}

export function getSacramentImageSrc(slug: string): string {
	return \`\${import.meta.env.BASE_URL}sacraments/\${slug}.jpg\`;
}

export function getSacramentImageAlt(title: string): string {
	return \`Sacred art depicting the sacrament of \${title}\`;
}`,
});

writeSlugCollection({
	folder: 'eucharistic-miracles',
	shimFile: 'eucharisticMiracles.ts',
	typesPath: 'src/data/eucharisticMiracles.ts',
	stopBefore: 'export const eucharisticMiraclesIntro',
	typeName: 'EucharisticMiracle',
	varName: 'eucharisticMiracle',
	arrayName: 'eucharisticMiracles',
	intro: { name: 'eucharisticMiraclesIntro', value: eucharisticMiraclesIntro },
	items: eucharisticMiracles,
	helpers: `export function getEucharisticMiracle(slug: string) {
	return eucharisticMiracles.find((m) => m.slug === slug);
}

export function getEucharisticMiracleImageSrc(slug: string): string {
	return \`\${import.meta.env.BASE_URL}eucharistic-miracles/\${slug}.jpg\`;
}`,
});

writeSlugCollection({
	folder: 'marian-apparitions',
	shimFile: 'marianApparitions.ts',
	typesPath: 'src/data/marianApparitions.ts',
	stopBefore: 'export const marianApparitionsIntro',
	typeName: 'MarianApparition',
	varName: 'marianApparition',
	arrayName: 'marianApparitions',
	intro: { name: 'marianApparitionsIntro', value: marianApparitionsIntro },
	items: marianApparitions,
	helpers: `export function getMarianApparition(slug: string) {
	return marianApparitions.find((a) => a.slug === slug);
}

export function getMarianApparitionImageSrc(slug: string): string {
	return \`\${import.meta.env.BASE_URL}marian-apparitions/\${slug}.jpg\`;
}`,
});

writeCommandments();
writeRosary();

console.log('Data split into per-item files under src/data/*/items/');
