import { loadCollection } from '../lib/loadCollection';
import type { Pope } from './types';

export { popesIntro } from './intro';
export type * from './types';

const modules = import.meta.glob('./items/*.ts', { eager: true });
/** Chronological order by start of pontificate */
export const popes = loadCollection<Pope>(modules).sort(
	(a, b) => a.reignStart - b.reignStart || a.papalNumber - b.papalNumber
);

/** Popes shown on each directory page */
export const POPES_PER_PAGE = 24;

export function getPope(slug: string) {
	return popes.find((p) => p.slug === slug);
}

export function getPopeImageSrc(slug: string): string {
	return `${import.meta.env.BASE_URL}popes/${slug}.jpg`;
}

export function getPopeImageAlt(title: string): string {
	return `Portrait or sacred art depicting ${title}`;
}

export function getPopesPageCount(total = popes.length): number {
	return Math.max(1, Math.ceil(total / POPES_PER_PAGE));
}

export function getPopesPage(page: number): {
	page: number;
	totalPages: number;
	items: Pope[];
	firstNumber: number;
	lastNumber: number;
} {
	const totalPages = getPopesPageCount();
	const safePage = Math.min(Math.max(1, page), totalPages);
	const start = (safePage - 1) * POPES_PER_PAGE;
	const items = popes.slice(start, start + POPES_PER_PAGE);
	return {
		page: safePage,
		totalPages,
		items,
		firstNumber: items[0]?.papalNumber ?? 0,
		lastNumber: items[items.length - 1]?.papalNumber ?? 0,
	};
}

/** Site path without base: `/popes` or `/popes/page/2` */
export function getPopesPagePath(page: number): string {
	return page <= 1 ? '/popes' : `/popes/page/${page}`;
}
