/** Load default exports from `import.meta.glob('./items/*.ts', { eager: true })`. */
export function loadCollection<T extends { slug: string }>(
	modules: Record<string, { default: T }>
): T[] {
	return Object.values(modules)
		.map((module) => module.default)
		.sort((a, b) => a.slug.localeCompare(b.slug));
}

/** For items sorted by a numeric field (e.g. commandments). */
export function loadCollectionByNumber<T extends { number: number }>(
	modules: Record<string, { default: T }>
): T[] {
	return Object.values(modules)
		.map((module) => module.default)
		.sort((a, b) => a.number - b.number);
}
