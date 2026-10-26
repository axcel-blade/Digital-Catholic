/**
 * Single registry of the site's content areas and how they are grouped.
 * Navigation, the homepage library, About, and breadcrumbs all read from here
 * so section names, descriptions, and counts never drift apart.
 */

export type SectionGroupKey = 'learn' | 'study' | 'pray';

export interface SectionGroup {
	key: SectionGroupKey;
	label: string;
	summary: string;
	/** Anchor on the homepage that introduces this pathway */
	anchor: string;
	/** Sub-headings that keep navigation menus short and scannable */
	/** Menu columns; a column without a label is shown without a heading */
	subgroups: { key: string; label?: string }[];
}

export interface SiteSection {
	key: string;
	href: string;
	/** Other URL prefixes that belong to this section, so its menu item is marked active there */
	alsoActiveOn?: string[];
	title: string;
	/** Short label for navigation menus */
	navLabel: string;
	group: SectionGroupKey;
	/** Key of a subgroup within the group, used to organise menus */
	subgroup: string;
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
			'Start with the Bible, the sacraments, the saints, and the foundations of the faith; meet the apostles, read the parables, and explore Marian and Eucharistic signs.',
		anchor: 'learn',
		subgroups: [
			{ key: 'all' },
		],
	},
	{
		key: 'study',
		label: 'Study',
		summary:
			'Go deeper into Tradition, Church history, and moral and social teaching, with a glossary, FAQ, and study paths.',
		anchor: 'study',
		subgroups: [
			{ key: 'all' },
		],
	},
	{
		key: 'pray',
		label: 'Pray',
		summary:
			'Pray the Rosary, discover traditional prayers, and follow the seasons and feasts of the Church.',
		anchor: 'pray',
		subgroups: [
			{ key: 'all' },
		],
	},
];

export const siteSections: SiteSection[] = [
	{
		key: 'study',
		href: '/study',
		alsoActiveOn: [
			'/compare-christian-traditions',
			'/ask-a-catholic-question',
			'/glossary',
			'/moral-teaching',
			'/social-teaching',
			'/living-the-faith',
			'/study-paths',
			'/bible-and-tradition',
			'/the-church',
			'/church-history',
			'/church-history-timeline',
		],
		title: 'Study the Faith',
		navLabel: 'Study the Faith',
		group: 'study',
		subgroup: 'all',
		label: 'Study',
		blurb: 'Scripture, Tradition, and the Church; apologetics and FAQ; and Christian living.',
	},
	{
		key: 'pray',
		href: '/pray',
		alsoActiveOn: ['/prayers', '/rosary', '/daily-gospel', '/mass', '/liturgical-calendar'],
		title: 'Prayer and Liturgy',
		navLabel: 'Prayer & Liturgy',
		group: 'pray',
		subgroup: 'all',
		label: 'Prayer',
		blurb: 'Prayers and devotions, the Rosary, the Daily Gospel, the Holy Mass, and the liturgical calendar.',
	},
	{
		key: 'learn',
		href: '/learn',
		alsoActiveOn: [
			'/disciples',
			'/parables',
			'/miracles',
			'/signs-and-wonders',
			'/marian-apparitions',
			'/eucharistic-miracles',
			'/saints',
			'/sacraments',
			'/holy-trinity',
			'/holy-spirit',
			'/commandments',
			'/core-beliefs',
			'/bible',
		],
		title: 'Scripture, Doctrine, and the Saints',
		navLabel: 'Scripture, Doctrine & Saints',
		group: 'learn',
		subgroup: 'all',
		label: 'Doctrine',
		blurb: 'The Bible, core beliefs, the Trinity, the Commandments, the sacraments, Jesus, and the saints.',
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
