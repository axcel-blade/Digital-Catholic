import { loadCollection } from '../lib/loadCollection';
import type { Miracle } from './types';
export { miraclesIntro } from './intro';
export { shroudOfTurinIntro, shroudOfTurinSections, shroudOfTurinTrust } from './shroud';
export { veilOfVeronicaIntro, veilOfVeronicaSections, veilOfVeronicaTrust } from './veronica';
export type * from './types';
const modules = import.meta.glob('./items/*.ts', { eager: true });
export const miracles = loadCollection<Miracle>(modules);

export function getMiracle(slug: string) {
	return miracles.find((m) => m.slug === slug);
}
