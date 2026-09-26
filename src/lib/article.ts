export interface ArticleSection {
	heading: string;
	paragraphs: string[];
}

export interface TocEntry {
	id: string;
	heading: string;
}

export interface ArticleLink {
	href: string;
	title: string;
	label?: string;
	excerpt?: string;
}

/** Minimum number of sections before an "On this page" list is useful. */
export const TOC_MIN_SECTIONS = 3;

export function slugify(text: string): string {
	return text
		.toLowerCase()
		.normalize('NFD')
		.replace(/\p{M}/gu, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/** Stable, unique anchor ids for article section headings. */
export function buildToc(sections: ArticleSection[]): TocEntry[] {
	const seen = new Map<string, number>();
	return sections.map((section) => {
		const base = slugify(section.heading) || 'section';
		const count = seen.get(base) ?? 0;
		seen.set(base, count + 1);
		return { id: count === 0 ? base : `${base}-${count + 1}`, heading: section.heading };
	});
}

/** Previous and next items within an ordered collection. */
export function getNeighbors<T>(items: T[], index: number): { prev?: T; next?: T } {
	return {
		prev: index > 0 ? items[index - 1] : undefined,
		next: index >= 0 && index < items.length - 1 ? items[index + 1] : undefined,
	};
}

/**
 * Related items: those sharing `groupOf` first, then the nearest neighbors
 * in collection order, never including the current item.
 */
export function getRelated<T>(
	items: T[],
	index: number,
	count = 3,
	groupOf?: (item: T) => string | undefined
): T[] {
	const current = items[index];
	const group = groupOf && current ? groupOf(current) : undefined;
	const others = items
		.map((item, i) => ({ item, i }))
		.filter(({ i }) => i !== index);
	const distance = (i: number) => {
		const d = Math.abs(i - index);
		return Math.min(d, items.length - d);
	};
	others.sort((a, b) => {
		if (group && groupOf) {
			const aSame = groupOf(a.item) === group ? 0 : 1;
			const bSame = groupOf(b.item) === group ? 0 : 1;
			if (aSame !== bSame) return aSame - bSame;
		}
		return distance(a.i) - distance(b.i);
	});
	return others.slice(0, count).map(({ item }) => item);
}
