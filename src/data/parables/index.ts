import { loadCollection } from '../lib/loadCollection';
import type { Parable } from './types';
export { parablesIntro } from './intro';
export type * from './types';
const modules = import.meta.glob('./items/*.ts', { eager: true });
export const parables = loadCollection<Parable>(modules);

export function getParable(slug: string) {
	return parables.find((p) => p.slug === slug);
}
