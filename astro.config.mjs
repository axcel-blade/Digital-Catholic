// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** Re-register dynamic routes when content in src/data/ changes during dev. */
function refreshRoutesOnDataChange() {
	return {
		name: 'refresh-routes-on-data-change',
		handleHotUpdate({ file, server }) {
			const normalized = file.replace(/\\/g, '/');
			if (!normalized.includes('/src/data/')) return;

			const routeFiles = [
				'src/pages/saints/[slug].astro',
				'src/pages/sacraments/[slug].astro',
				'src/pages/rosary/[slug].astro',
			];

			const invalidated = [];
			for (const routeFile of routeFiles) {
				const id = path.resolve(projectRoot, routeFile);
				const mod = server.moduleGraph.getModuleById(id);
				if (mod) {
					server.moduleGraph.invalidateModule(mod);
					invalidated.push(mod);
				}
			}

			if (invalidated.length > 0) {
				server.ws.send({ type: 'full-reload' });
				return invalidated;
			}
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
