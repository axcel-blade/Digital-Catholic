import { loadCollection } from '../lib/loadCollection';
import type { Saint } from './types';
export type * from './types';
const modules = import.meta.glob('./items/*.ts', { eager: true });
export const saints = loadCollection<Saint>(modules);

export function getSaint(slug: string) {
	return saints.find((s) => s.slug === slug);
}

export function getSaintImageSrc(slug: string): string {
	return `${import.meta.env.BASE_URL}saints/${slug}.jpg`;
}

export function getSaintImageAlt(title: string): string {
	return `Sacred art depicting ${title}`;
}
