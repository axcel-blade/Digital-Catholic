// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** Restart dev server when src/data changes so new getStaticPaths() entries are registered. */
function refreshRoutesOnDataChange() {
	const dataDir = path.join(projectRoot, 'src', 'data');

	return {
		name: 'refresh-routes-on-data-change',
		configureServer(server) {
			server.watcher.add(dataDir);
		},
		handleHotUpdate({ file, server }) {
			const normalized = file.replace(/\\/g, '/');
			if (!normalized.includes('/src/data/')) return;

			server.restart();
			return [];
		},
	};
}

const base = process.env.ASTRO_BASE
	? process.env.ASTRO_BASE.endsWith('/')
		? process.env.ASTRO_BASE
		: `${process.env.ASTRO_BASE}/`
	: '/';

// https://astro.build/config
export default defineConfig({
	site: process.env.ASTRO_SITE || 'https://axcel-blade.github.io',
	base,
	redirects: {
		// Merged sections
		'/life-of-jesus': '/learn',
		'/apologetics': '/study',
		'/prayers': '/pray',
		'/prayer-and-devotions': '/pray',
		'/liturgy-and-worship': '/mass',
		'/mary-and-the-saints': '/saints',
		'/gifts-of-the-holy-spirit': '/holy-spirit#gifts',
		'/fruits-of-the-holy-spirit': '/holy-spirit#fruits',
		// Kings and Prophets merged into People of the Old Testament
		'/kings-and-prophets': '/old-testament-people',
		'/kings-and-prophets/david': '/old-testament-people/david',
		'/kings-and-prophets/solomon': '/old-testament-people/solomon',
		'/kings-and-prophets/isaiah': '/old-testament-people/isaiah',
		'/kings-and-prophets/jeremiah': '/old-testament-people/jeremiah',
		'/kings-and-prophets/ezekiel': '/old-testament-people/ezekiel',
		'/kings-and-prophets/daniel': '/old-testament-people/daniel',
		'/kings-and-prophets/hosea': '/old-testament-people/hosea',
		'/kings-and-prophets/joel': '/old-testament-people/joel',
		'/kings-and-prophets/amos': '/old-testament-people/amos',
		'/kings-and-prophets/obadiah': '/old-testament-people/obadiah',
		'/kings-and-prophets/jonah': '/old-testament-people/jonah',
		'/kings-and-prophets/micah': '/old-testament-people/micah',
		'/kings-and-prophets/nahum': '/old-testament-people/nahum',
		'/kings-and-prophets/habakkuk': '/old-testament-people/habakkuk',
		'/kings-and-prophets/zephaniah': '/old-testament-people/zephaniah',
		'/kings-and-prophets/haggai': '/old-testament-people/haggai',
		'/kings-and-prophets/zechariah': '/old-testament-people/zechariah',
		'/kings-and-prophets/malachi': '/old-testament-people/malachi',
	},
	integrations: [
		sitemap({
			// The search index is a data file, not a page.
			filter: (page) => !page.endsWith('.json') && !page.includes('/404'),
		}),
	],
	vite: {
		plugins: [refreshRoutesOnDataChange()],
	},
});
