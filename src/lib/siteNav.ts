import { stripBase, withBase } from './paths';

export interface SiteNavItem {
	href: string;
	label: string;
}

export interface ResolvedNavItem extends SiteNavItem {
	isActive: boolean;
}

export interface ResolvedNavGroup {
	label: string;
	items: ResolvedNavItem[];
	isActive: boolean;
}

export const primaryNavItems: SiteNavItem[] = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
];

export const exploreNavItems: SiteNavItem[] = [
	{ href: '/saints', label: 'Saints' },
	{ href: '/sacraments', label: 'Sacraments' },
	{ href: '/disciples', label: 'Disciples of Jesus' },
	{ href: '/miracles', label: 'Miracles of Jesus' },
	{ href: '/eucharistic-miracles', label: 'Eucharistic Miracles' },
	{ href: '/marian-apparitions', label: 'Marian Apparitions' },
	{ href: '/parables', label: 'Parables of Jesus' },
	{ href: '/commandments', label: 'Ten Commandments' },
	{ href: '/rosary', label: 'Rosary' },
	{ href: '/liturgical-calendar', label: 'Liturgical Calendar' },
];

function isNavActive(href: string, path: string): boolean {
	const route = stripBase(href);
	if (route === '/') return path === '/';
	return path === route || path.startsWith(`${route}/`);
}

function resolveItem(item: SiteNavItem, path: string): ResolvedNavItem {
	const href = withBase(item.href);
	return {
		...item,
		href,
		isActive: isNavActive(href, path),
	};
}

export function buildSiteNav(currentPath: string) {
	const path = stripBase(currentPath);
	const primary = primaryNavItems.map((item) => resolveItem(item, path));
	const explore = exploreNavItems.map((item) => resolveItem(item, path));
	const exploreGroup: ResolvedNavGroup = {
		label: 'Explore',
		items: explore,
		isActive: explore.some((item) => item.isActive),
	};

	return { primary, exploreGroup };
}
