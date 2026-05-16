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
	integrations: [sitemap()],
	vite: {
		plugins: [refreshRoutesOnDataChange()],
	},
});
