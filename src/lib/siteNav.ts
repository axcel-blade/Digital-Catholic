import { stripBase, withBase } from './paths';
import { sectionGroups, siteSections, type SectionGroupKey } from './sections';

export interface ResolvedNavItem {
	href: string;
	label: string;
	blurb?: string;
	isActive: boolean;
}

export interface ResolvedNavSubgroup {
	key: string;
	label: string;
	items: ResolvedNavItem[];
}

export interface ResolvedNavGroup {
	key: SectionGroupKey;
	label: string;
	summary: string;
	items: ResolvedNavItem[];
	subgroups: ResolvedNavSubgroup[];
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
		const sections = siteSections.filter((section) => section.group === group.key);
		const subgroups = group.subgroups.map((subgroup) => ({
			key: subgroup.key,
			label: subgroup.label,
			items: sections
				.filter((section) => section.subgroup === subgroup.key)
				.map((section) => resolve(section.href, section.navLabel, path, section.blurb)),
		}));
		const items = subgroups.flatMap((subgroup) => subgroup.items);
		return {
			key: group.key,
			label: group.label,
			summary: group.summary,
			items,
			subgroups,
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
