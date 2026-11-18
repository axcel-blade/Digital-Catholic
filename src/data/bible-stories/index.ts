import type { BibleStory } from './types';
export { bibleStoriesIntro } from './intro';
export type * from './types';
const modules = import.meta.glob<{ default: BibleStory }>('./items/*.ts', { eager: true });
export const bibleStories: BibleStory[] = Object.values(modules)
	.map((m) => m.default)
	.sort((a, b) => a.order - b.order);

export function getBibleStory(slug: string) {
	return bibleStories.find((s) => s.slug === slug);
}
