import { loadCollection } from '../lib/loadCollection';
import type { Sacrament } from './types';
export type * from './types';
const modules = import.meta.glob('./items/*.ts', { eager: true });
export const sacraments = loadCollection<Sacrament>(modules);

export function getSacrament(slug: string) {
	return sacraments.find((s) => s.slug === slug);
}

export function getSacramentImageSrc(slug: string): string {
	return `${import.meta.env.BASE_URL}sacraments/${slug}.jpg`;
}

export function getSacramentImageAlt(title: string): string {
	return `Sacred art depicting the sacrament of ${title}`;
}
