import { loadCollection } from '../lib/loadCollection';
import type { Pope } from './types';

export { popesIntro } from './intro';
export type * from './types';

const modules = import.meta.glob('./items/*.ts', { eager: true });
/** Chronological order by start of pontificate */
export const popes = loadCollection<Pope>(modules).sort(
	(a, b) => a.reignStart - b.reignStart || a.papalNumber - b.papalNumber
);

export function getPope(slug: string) {
	return popes.find((p) => p.slug === slug);
}

export function getPopeImageSrc(slug: string): string {
	return `${import.meta.env.BASE_URL}popes/${slug}.jpg`;
}

export function getPopeImageAlt(title: string): string {
	return `Portrait or sacred art depicting ${title}`;
}
