import type { APIRoute } from 'astro';
import { buildSearchIndex } from '../lib/searchIndex';

/** Static search index, fetched by the site search on first use. */
export const GET: APIRoute = () =>
	new Response(JSON.stringify(buildSearchIndex()), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
