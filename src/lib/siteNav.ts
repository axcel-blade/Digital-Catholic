import { stripBase, withBase } from './paths';
import { sectionGroups, siteSections, type SectionGroupKey } from './sections';

export interface ResolvedNavItem {
	href: string;
	label: string;
	blurb?: string;
	isActive: boolean;
}

export interface ResolvedNavGroup {
	key: SectionGroupKey;
	label: string;
	summary: string;
	items: ResolvedNavItem[];
	isActive: boolean;
}

export interface SiteNav {
	home: ResolvedNavItem;
	groups: ResolvedNavGroup[];
	about: ResolvedNavItem;
	contact: ResolvedNavItem;
}

function isNavActive(route: string, path: string): boolean {
	if (route === '/') return path === '/';
	return path === route || path.startsWith(`${route}/`);
}

function resolve(route: string, label: string, path: string, blurb?: string): ResolvedNavItem {
	return { href: withBase(route), label, blurb, isActive: isNavActive(route, path) };
}

export function buildSiteNav(currentPath: string): SiteNav {
	const path = stripBase(currentPath).replace(/(.)\/$/, '$1');

	const groups = sectionGroups.map((group) => {
		const items = siteSections
			.filter((section) => section.group === group.key)
			.map((section) => resolve(section.href, section.navLabel, path, section.blurb));
		return {
			key: group.key,
			label: group.label,
			summary: group.summary,
			items,
			isActive: items.some((item) => item.isActive),
		};
	});

	return {
		home: resolve('/', 'Home', path),
		groups,
		about: resolve('/about', 'About', path),
		contact: resolve('/contact', 'Contact', path),
	};
}
