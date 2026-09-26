import { loadCollection } from '../lib/loadCollection';
import type { Sacrament } from './types';
export type * from './types';
const modules = import.meta.glob('./items/*.ts', { eager: true });
/** Order and grouping used by the Catechism of the Catholic Church (CCC 1212, 1420, 1534). */
const sacramentOrder = [
	'baptism',
	'confirmation',
	'eucharist',
	'penance',
	'anointing-of-the-sick',
	'holy-orders',
	'matrimony',
] as const;

export const sacramentGroupLabels: Record<string, string> = {
	baptism: 'Sacrament of Initiation',
	confirmation: 'Sacrament of Initiation',
	eucharist: 'Sacrament of Initiation',
	penance: 'Sacrament of Healing',
	'anointing-of-the-sick': 'Sacrament of Healing',
	'holy-orders': 'Sacrament at the Service of Communion',
	matrimony: 'Sacrament at the Service of Communion',
};

const orderOf = (slug: string) => {
	const i = sacramentOrder.indexOf(slug as (typeof sacramentOrder)[number]);
	return i === -1 ? sacramentOrder.length : i;
};

export const sacraments = loadCollection<Sacrament>(modules).sort(
	(a, b) => orderOf(a.slug) - orderOf(b.slug)
);

export function getSacrament(slug: string) {
	return sacraments.find((s) => s.slug === slug);
}

export function getSacramentImageSrc(slug: string): string {
	return `${import.meta.env.BASE_URL}sacraments/${slug}.jpg`;
}

export function getSacramentImageAlt(title: string): string {
	return `Sacred art depicting the sacrament of ${title}`;
}
