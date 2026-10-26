import type { SacramentGuide } from './types';

const modules = import.meta.glob<{ default: SacramentGuide }>('./guides/*.ts', { eager: true });

/** In-depth guides, ordered by file name prefix (01-, 02-, …). */
export const sacramentGuides = Object.entries(modules)
	.sort(([a], [b]) => a.localeCompare(b))
	.map(([, module]) => module.default);

export function getSacramentGuide(slug: string) {
	return sacramentGuides.find((g) => g.slug === slug);
}

/** Guides that expand on a given sacrament. */
export function getGuidesForSacrament(slug: string) {
	return sacramentGuides.filter((g) => g.sacraments.includes(slug));
}

export function getSacramentGuideImageAlt(title: string): string {
	return `Sacred art illustrating ${title}`;
}
