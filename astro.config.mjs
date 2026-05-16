// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
});
