import { loadCollection } from '../lib/loadCollection';
import type { MysterySet } from './types';

export {
	rosaryIntro,
	rosaryOriginIntro,
	rosaryOriginSections,
	rosaryHowToIntro,
	rosaryHowToSteps,
	rosaryMysterySchedule,
	rosaryPrayers,
} from './shared';
export type * from './types';

const modules = import.meta.glob('./mystery-sets/*.ts', { eager: true });
const mysterySetOrder = ['joyful', 'sorrowful', 'glorious', 'luminous'] as const;

export const mysterySets = loadCollection<MysterySet>(modules).sort(
	(a, b) => mysterySetOrder.indexOf(a.slug as (typeof mysterySetOrder)[number]) -
		mysterySetOrder.indexOf(b.slug as (typeof mysterySetOrder)[number])
);

export function getMysterySet(slug: string): MysterySet | undefined {
	return mysterySets.find((set) => set.slug === slug);
}
