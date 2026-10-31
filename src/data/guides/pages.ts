export interface GuidePageConfig {
	/** URL of the guide's index page; each topic is an article at `{articleBase}/{slug}` */
	href: string;
	/** Where topic articles live; differs from `href` when the index URL already has other sub-pages */
	articleBase: string;
	/** Key from src/lib/sections.ts */
	sectionKey: string;
	/** Crumbs between the section and the article (the guide index, and any parent pages) */
	crumbs: { label: string; href: string }[];
	/** Eyebrow label shown above each article title */
	label: string;
}

const scriptureAndTradition = { label: 'Scripture, Tradition, and the Church', href: '/bible-and-tradition' };
const christianLiving = { label: 'Christian Living', href: '/moral-teaching' };

export const guidePages: Record<string, GuidePageConfig> = {
	apologetics: {
		href: '/study/topics',
		articleBase: '/study',
		sectionKey: 'study',
		crumbs: [{ label: 'Common Questions', href: '/study/topics' }],
		label: 'Apologetics',
	},
	'bible-and-tradition': {
		href: '/bible-and-tradition/topics',
		articleBase: '/bible-and-tradition',
		sectionKey: 'study',
		crumbs: [scriptureAndTradition, { label: 'The Bible and Catholic Tradition', href: '/bible-and-tradition/topics' }],
		label: 'Scripture and Tradition',
	},
	'church-history': {
		href: '/church-history',
		articleBase: '/church-history',
		sectionKey: 'study',
		crumbs: [scriptureAndTradition, { label: 'Catholic Church History', href: '/church-history' }],
		label: 'Church history',
	},
	'the-church': {
		href: '/the-church',
		articleBase: '/the-church',
		sectionKey: 'study',
		crumbs: [scriptureAndTradition, { label: 'The Catholic Church', href: '/the-church' }],
		label: 'The Church',
	},
	'moral-teaching': {
		href: '/moral-teaching/topics',
		articleBase: '/moral-teaching',
		sectionKey: 'study',
		crumbs: [christianLiving, { label: 'Moral Teaching', href: '/moral-teaching/topics' }],
		label: 'Christian living',
	},
	'social-teaching': {
		href: '/social-teaching',
		articleBase: '/social-teaching',
		sectionKey: 'study',
		crumbs: [christianLiving, { label: 'Catholic Social Teaching', href: '/social-teaching' }],
		label: 'Social teaching',
	},
	'living-the-faith': {
		href: '/living-the-faith',
		articleBase: '/living-the-faith',
		sectionKey: 'study',
		crumbs: [christianLiving, { label: 'Living the Catholic Faith', href: '/living-the-faith' }],
		label: 'Living the faith',
	},
	prayers: {
		href: '/pray/topics',
		articleBase: '/pray',
		sectionKey: 'pray',
		crumbs: [{ label: 'Devotions and Practices', href: '/pray/topics' }],
		label: 'Prayer and devotion',
	},
	mass: {
		href: '/mass/topics',
		articleBase: '/mass',
		sectionKey: 'pray',
		crumbs: [{ label: 'Holy Mass and Liturgy', href: '/mass' }, { label: 'Understanding the Liturgy', href: '/mass/topics' }],
		label: 'Liturgy',
	},
	// /saints/{slug} is taken by saint biographies
	saints: {
		href: '/saints/topics',
		articleBase: '/saints/topics',
		sectionKey: 'learn',
		crumbs: [{ label: 'Mary and the Saints', href: '/saints' }, { label: 'Mary and the Communion of Saints', href: '/saints/topics' }],
		label: 'Mary and the Saints',
	},
};

export function getGuidePage(key: string): GuidePageConfig {
	const page = guidePages[key];
	if (!page) throw new Error(`No page config for guide: ${key}`);
	return page;
}
