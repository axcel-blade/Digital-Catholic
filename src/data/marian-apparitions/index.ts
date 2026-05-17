import { loadCollection } from '../lib/loadCollection';
import type { MarianApparition } from './types';
export { marianApparitionsIntro } from './intro';
export type * from './types';
const modules = import.meta.glob('./items/*.ts', { eager: true });
export const marianApparitions = loadCollection<MarianApparition>(modules);

export function getMarianApparition(slug: string) {
	return marianApparitions.find((a) => a.slug === slug);
}

export function getMarianApparitionImageSrc(slug: string): string {
	return `${import.meta.env.BASE_URL}marian-apparitions/${slug}.jpg`;
}
