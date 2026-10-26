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
	/** Sub-headings that keep navigation menus short and scannable */
	subgroups: { key: string; label: string }[];
}

export interface SiteSection {
	key: string;
	href: string;
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
			'Start with the Bible, sacraments, saints, commandments, and the foundations of Catholic faith.',
		anchor: 'learn',
		subgroups: [
			{ key: 'foundations', label: 'Foundations' },
			{ key: 'holy-spirit', label: 'Holy Spirit' },
			{ key: 'holy-lives', label: 'Holy lives' },
		],
	},
	{
		key: 'pray',
		label: 'Pray',
		summary:
			'Pray the Rosary, discover traditional prayers, and follow the seasons and feasts of the Church.',
		anchor: 'pray',
		subgroups: [
			{ key: 'devotion', label: 'Prayer & devotion' },
			{ key: 'liturgy', label: 'Liturgy' },
		],
	},
	{
		key: 'explore',
		label: 'Explore',
		summary:
			'Meet the apostles, read the parables, and explore miracles and Marian apparitions with context.',
		anchor: 'explore',
		subgroups: [
			{ key: 'gospels', label: 'Life of Jesus' },
			{ key: 'signs', label: 'Signs & wonders' },
		],
	},
];

export const siteSections: SiteSection[] = [
	{
		key: 'bible',
		href: '/bible',
		title: 'Holy Bible',
		navLabel: 'Holy Bible',
		group: 'learn',
		subgroup: 'foundations',
		label: 'Scripture',
		blurb: 'Summaries of all 73 books of the Catholic canon.',
	},
	{
		key: 'core-beliefs',
		href: '/core-beliefs',
		title: 'Core Catholic Beliefs',
		navLabel: 'Core Beliefs',
		group: 'learn',
		subgroup: 'foundations',
		label: 'Doctrine',
		blurb: 'The Trinity, Incarnation, Resurrection, salvation, and the life to come.',
	},
	{
		key: 'holy-trinity',
		href: '/holy-trinity',
		title: 'Holy Trinity',
		navLabel: 'Holy Trinity',
		group: 'learn',
		subgroup: 'foundations',
		label: 'Doctrine',
		blurb: 'One God in three Persons: Father, Son, and Holy Spirit.',
	},
	{
		key: 'saints',
		href: '/saints',
		title: 'Saints',
		navLabel: 'Saints',
		group: 'learn',
		subgroup: 'holy-lives',
		label: 'Saints',
		blurb: 'Lives of holy men and women, with feast days.',
	},
	{
		key: 'sacraments',
		href: '/sacraments',
		title: 'Sacraments',
		navLabel: 'Sacraments',
		group: 'learn',
		subgroup: 'foundations',
		label: 'Sacraments',
		blurb: 'The seven sacraments and what the Church teaches.',
	},
	{
		key: 'commandments',
		href: '/commandments',
		title: 'Ten Commandments',
		navLabel: 'Ten Commandments',
		group: 'learn',
		subgroup: 'foundations',
		label: 'Moral life',
		blurb: 'God’s law given to Moses and its meaning today.',
	},
	{
		key: 'gifts-of-the-holy-spirit',
		href: '/gifts-of-the-holy-spirit',
		title: 'Gifts of the Holy Spirit',
		navLabel: 'Gifts of the Holy Spirit',
		group: 'learn',
		subgroup: 'holy-spirit',
		label: 'Holy Spirit',
		blurb: 'The seven gifts that make us docile to the Spirit.',
	},
	{
		key: 'fruits-of-the-holy-spirit',
		href: '/fruits-of-the-holy-spirit',
		title: 'Fruits of the Holy Spirit',
		navLabel: 'Fruits of the Holy Spirit',
		group: 'learn',
		subgroup: 'holy-spirit',
		label: 'Holy Spirit',
		blurb: 'The twelve fruits of a life lived in the Spirit.',
	},
	{
		key: 'prayers',
		href: '/prayers',
		title: 'Prayers',
		navLabel: 'Prayers',
		group: 'pray',
		subgroup: 'devotion',
		label: 'Prayer',
		blurb: 'The Our Father, the Hail Mary, and their meaning.',
	},
	{
		key: 'rosary',
		href: '/rosary',
		title: 'Rosary',
		navLabel: 'Rosary',
		group: 'pray',
		subgroup: 'devotion',
		label: 'Prayer',
		blurb: 'How to pray it, its prayers, and the twenty mysteries.',
	},
	{
		key: 'mass',
		href: '/mass',
		title: 'Holy Mass',
		navLabel: 'Holy Mass',
		group: 'pray',
		subgroup: 'liturgy',
		label: 'Liturgy',
		blurb: 'The order of Mass and the items used at the altar.',
	},
	{
		key: 'liturgical-calendar',
		href: '/liturgical-calendar',
		title: 'Liturgical Calendar',
		navLabel: 'Liturgical Calendar',
		group: 'pray',
		subgroup: 'liturgy',
		label: 'Liturgy',
		blurb: 'Seasons, solemnities, feasts, and memorials of the year.',
	},
	{
		key: 'disciples',
		href: '/disciples',
		title: 'Disciples of Jesus',
		navLabel: 'Disciples of Jesus',
		group: 'explore',
		subgroup: 'gospels',
		label: 'Gospels',
		blurb: 'The Twelve Apostles, from their call to their deaths.',
	},
	{
		key: 'miracles',
		href: '/miracles',
		title: 'Miracles of Jesus',
		navLabel: 'Miracles of Jesus',
		group: 'explore',
		subgroup: 'gospels',
		label: 'Gospels',
		blurb: 'Signs in the Gospels that reveal who Christ is.',
	},
	{
		key: 'eucharistic-miracles',
		href: '/eucharistic-miracles',
		title: 'Eucharistic Miracles',
		navLabel: 'Eucharistic Miracles',
		group: 'explore',
		subgroup: 'signs',
		label: 'Eucharist',
		blurb: 'Reported signs of the Real Presence, with Church status.',
	},
	{
		key: 'marian-apparitions',
		href: '/marian-apparitions',
		title: 'Marian Apparitions',
		navLabel: 'Marian Apparitions',
		group: 'explore',
		subgroup: 'signs',
		label: 'Blessed Virgin Mary',
		blurb: 'Guadalupe, Lourdes, Fátima, and more, with Church status.',
	},
	{
		key: 'parables',
		href: '/parables',
		title: 'Parables of Jesus',
		navLabel: 'Parables of Jesus',
		group: 'explore',
		subgroup: 'gospels',
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
