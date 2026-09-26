/**
 * Single registry of the site's content areas and how they are grouped.
 * Navigation, the homepage library, About, and breadcrumbs all read from here
 * so section names, descriptions, and counts never drift apart.
 */

export type SectionGroupKey = 'learn' | 'pray' | 'explore';

export interface SectionGroup {
	key: SectionGroupKey;
	label: string;
	summary: string;
	/** Anchor on the homepage that introduces this pathway */
	anchor: string;
}

export interface SiteSection {
	key: string;
	href: string;
	title: string;
	/** Short label for navigation menus */
	navLabel: string;
	group: SectionGroupKey;
	/** Category label shown above section titles */
	label: string;
	/** One-line description for menus and the library list */
	blurb: string;
}

export const sectionGroups: SectionGroup[] = [
	{
		key: 'learn',
		label: 'Learn',
		summary:
			'Start with the Bible, sacraments, saints, commandments, and the foundations of Catholic faith.',
		anchor: 'learn',
	},
	{
		key: 'pray',
		label: 'Pray',
		summary:
			'Pray the Rosary, discover traditional prayers, and follow the seasons and feasts of the Church.',
		anchor: 'pray',
	},
	{
		key: 'explore',
		label: 'Explore',
		summary:
			'Meet the apostles, read the parables, and explore miracles and Marian apparitions with context.',
		anchor: 'explore',
	},
];

export const siteSections: SiteSection[] = [
	{
		key: 'bible',
		href: '/bible',
		title: 'Holy Bible',
		navLabel: 'Holy Bible',
		group: 'learn',
		label: 'Scripture',
		blurb: 'Summaries of all 73 books of the Catholic canon.',
	},
	{
		key: 'saints',
		href: '/saints',
		title: 'Saints',
		navLabel: 'Saints',
		group: 'learn',
		label: 'Saints',
		blurb: 'Lives of holy men and women, with feast days.',
	},
	{
		key: 'sacraments',
		href: '/sacraments',
		title: 'Sacraments',
		navLabel: 'Sacraments',
		group: 'learn',
		label: 'Sacraments',
		blurb: 'The seven sacraments and what the Church teaches.',
	},
	{
		key: 'commandments',
		href: '/commandments',
		title: 'Ten Commandments',
		navLabel: 'Ten Commandments',
		group: 'learn',
		label: 'Moral life',
		blurb: 'God’s law given to Moses and its meaning today.',
	},
	{
		key: 'prayers',
		href: '/prayers',
		title: 'Prayers',
		navLabel: 'Prayers',
		group: 'pray',
		label: 'Prayer',
		blurb: 'The Our Father, the Hail Mary, and their meaning.',
	},
	{
		key: 'rosary',
		href: '/rosary',
		title: 'Rosary',
		navLabel: 'Rosary',
		group: 'pray',
		label: 'Prayer',
		blurb: 'How to pray it, its prayers, and the twenty mysteries.',
	},
	{
		key: 'mass',
		href: '/mass',
		title: 'Holy Mass',
		navLabel: 'Holy Mass',
		group: 'pray',
		label: 'Liturgy',
		blurb: 'The order of Mass and the items used at the altar.',
	},
	{
		key: 'liturgical-calendar',
		href: '/liturgical-calendar',
		title: 'Liturgical Calendar',
		navLabel: 'Liturgical Calendar',
		group: 'pray',
		label: 'Liturgy',
		blurb: 'Seasons, solemnities, feasts, and memorials of the year.',
	},
	{
		key: 'disciples',
		href: '/disciples',
		title: 'Disciples of Jesus',
		navLabel: 'Disciples of Jesus',
		group: 'explore',
		label: 'Gospels',
		blurb: 'The Twelve Apostles, from their call to their deaths.',
	},
	{
		key: 'miracles',
		href: '/miracles',
		title: 'Miracles of Jesus',
		navLabel: 'Miracles of Jesus',
		group: 'explore',
		label: 'Gospels',
		blurb: 'Signs in the Gospels that reveal who Christ is.',
	},
	{
		key: 'eucharistic-miracles',
		href: '/eucharistic-miracles',
		title: 'Eucharistic Miracles',
		navLabel: 'Eucharistic Miracles',
		group: 'explore',
		label: 'Eucharist',
		blurb: 'Reported signs of the Real Presence, with Church status.',
	},
	{
		key: 'marian-apparitions',
		href: '/marian-apparitions',
		title: 'Marian Apparitions',
		navLabel: 'Marian Apparitions',
		group: 'explore',
		label: 'Blessed Virgin Mary',
		blurb: 'Guadalupe, Lourdes, Fátima, and more, with Church status.',
	},
	{
		key: 'parables',
		href: '/parables',
		title: 'Parables of Jesus',
		navLabel: 'Parables of Jesus',
		group: 'explore',
		label: 'Gospels',
		blurb: 'Stories of the Kingdom and what they teach.',
	},
];

export function getSection(key: string): SiteSection {
	const section = siteSections.find((s) => s.key === key);
	if (!section) throw new Error(`Unknown site section: ${key}`);
	return section;
}

export function getSectionGroup(key: SectionGroupKey): SectionGroup {
	const group = sectionGroups.find((g) => g.key === key);
	if (!group) throw new Error(`Unknown section group: ${key}`);
	return group;
}

export function getSectionsInGroup(key: SectionGroupKey): SiteSection[] {
	return siteSections.filter((s) => s.group === key);
}
