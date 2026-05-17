import { loadCollectionByNumber } from '../lib/loadCollection';
import type { Disciple } from './types';

export { disciplesIntro } from './intro';
export type * from './types';

const modules = import.meta.glob('./items/*.ts', { eager: true });
export const disciples = loadCollectionByNumber<Disciple>(modules);

export function getDisciple(slug: string) {
	return disciples.find((d) => d.slug === slug);
}

export function getDiscipleImageSrc(slug: string): string {
	return `${import.meta.env.BASE_URL}disciples/${slug}.jpg`;
}

export function getDiscipleImageAlt(title: string): string {
	return `Sacred art depicting ${title}`;
}
