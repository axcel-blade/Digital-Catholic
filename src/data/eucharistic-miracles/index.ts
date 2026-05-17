import { loadCollection } from '../lib/loadCollection';
import type { EucharisticMiracle } from './types';
export { eucharisticMiraclesIntro } from './intro';
export type * from './types';
const modules = import.meta.glob('./items/*.ts', { eager: true });
export const eucharisticMiracles = loadCollection<EucharisticMiracle>(modules);

export function getEucharisticMiracle(slug: string) {
	return eucharisticMiracles.find((m) => m.slug === slug);
}

export function getEucharisticMiracleImageSrc(slug: string): string {
	return `${import.meta.env.BASE_URL}eucharistic-miracles/${slug}.jpg`;
}
