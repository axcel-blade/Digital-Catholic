import type { Guide, GuideTopic } from './types';

export type * from './types';

/**
 * Each guide lives in its own folder: `intro.ts` plus one file per topic in `items/`.
 * Adding a folder or topic file is enough — no manual registration.
 */
const introModules = import.meta.glob<{ intro: string }>('./*/intro.ts', { eager: true });
const topicModules = import.meta.glob<{ default: GuideTopic }>('./*/items/*.ts', { eager: true });

function folderOf(path: string): string {
	return path.split('/')[1];
}

export const guides: Guide[] = Object.entries(introModules).map(([path, module]) => {
	const key = folderOf(path);
	const topics = Object.entries(topicModules)
		.filter(([topicPath]) => folderOf(topicPath) === key)
		.map(([, topic]) => topic.default)
		.sort((a, b) => a.number - b.number);
	return { key, intro: module.intro, topics };
});

export function getGuide(key: string): Guide {
	const guide = guides.find((g) => g.key === key);
	if (!guide) throw new Error(`Unknown guide: ${key}`);
	return guide;
}
