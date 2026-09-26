export const SITE = {
	name: 'Digital Catholic',
	defaultTitle: 'Digital Catholic — Learn the Faith, Pray with the Church',
	defaultDescription:
		'Clear Catholic resources for Scripture, saints, sacraments, prayer, and the liturgical year—with apostle biographies, Gospel miracles and parables, Marian apparitions, Eucharistic miracles, and the Rosary.',
	tagline: 'Learn the faith. Pray with the Church. Live it daily.',
	locale: 'en_US',
	themeColor: '#6f2f3f',
	themeColorDark: '#1b1614',
	productionOrigin: 'https://axcel-blade.github.io',
	productionBase: '/Digital-Catholic/',
	repoUrl: 'https://github.com/axcel-blade/Digital-Catholic',
	/** Branded 1200×630 social image in /public */
	ogImagePath: 'og-image.png',
	ogImageAlt: 'Digital Catholic — Learn the faith. Pray with the Church. Live it daily.',
} as const;

/** Meta descriptions for every non-article page — keep in sync with site content. */
export const PAGE_DESCRIPTIONS = {
	home: SITE.defaultDescription,
	about:
		'What Digital Catholic is, who it is for, how its thirteen content areas are organized, and its approach to accuracy and devotion.',
	contact:
		'Contact Digital Catholic with questions, corrections, or suggestions—by email or by opening an issue in the project’s GitHub repository.',
	bible:
		'Summaries of all 73 books of the Catholic Bible—46 Old Testament and 27 New Testament, including the deuterocanonical books—with themes and context for reading.',
	prayers:
		'Traditional Catholic prayers—the Our Father and the Hail Mary—with their full text, origins in Scripture, and meaning for daily prayer.',
	saints:
		'Saint biographies for the Catholic Church—lives from birth to death, feast days, and lessons from Mary, Joseph, Nicholas of Myra, Anthony of Padua, Carlo Acutis, and more.',
	sacraments:
		'The seven sacraments—Baptism, Confirmation, Eucharist, Penance, Anointing of the Sick, Holy Orders, and Matrimony—what the Church teaches and why they matter.',
	disciples:
		'The Twelve Apostles of Jesus Christ—biographies from their call to their deaths, Gospel and Acts accounts, feast days, and lessons for following Christ.',
	miracles:
		'Miracles of Jesus Christ in the Gospels of Matthew, Mark, Luke, and John—signs of the Kingdom with Scripture references and reflections for faith.',
	eucharisticMiracles:
		'Eucharistic miracles in Catholic history—Lanciano, Bolsena, and more recent events—with a clear note on the Church status of each account.',
	marianApparitions:
		'Marian apparitions such as Guadalupe, Lourdes, Fátima, Knock, and Velankanni—what happened, what it means, and the Church status of each.',
	parables:
		'Parables of Jesus Christ in the Gospels—stories of God’s Kingdom with Scripture references and lessons for discipleship.',
	commandments:
		'The Ten Commandments—God’s moral law given to Moses—with the text of each commandment and its meaning for love of God and neighbor.',
	mass:
		'Items used at Mass in the Catholic Church—sacred vessels, altar linens, liturgical books, vestments, liturgical colors, and other objects used in the Eucharist.',
	rosaryOrigin:
		'The origin of the Holy Rosary—from early monastic prayer through St. Dominic, the Battle of Lepanto, the Rosary popes, and the Luminous Mysteries.',
	rosary:
		'How to pray the Holy Rosary, its traditional prayers, and the twenty mysteries—Joyful, Sorrowful, Glorious, and Luminous—for meditation.',
	liturgicalCalendar:
		'The Catholic liturgical calendar—solemnities, feasts, and memorials of the General Roman Calendar, moveable celebrations from Easter, and the seasons of the Church year.',
	notFound: 'The page you were looking for could not be found on Digital Catholic.',
} as const;

export interface BreadcrumbItem {
	label: string;
	/** Root-relative path with base already applied; omit for the current page */
	href?: string;
}

export function getSiteOrigin(): string {
	const site = import.meta.env.SITE;
	if (site) return site.replace(/\/$/, '');
	return SITE.productionOrigin;
}

/** Absolute URL for a path (with base) or full URL. */
export function getAbsoluteUrl(path: string): string {
	if (path.startsWith('http://') || path.startsWith('https://')) {
		return path;
	}
	const normalized = path.startsWith('/') ? path : `/${path}`;
	if (import.meta.env.SITE) {
		return new URL(normalized, import.meta.env.SITE).href;
	}
	const base = SITE.productionBase.replace(/\/$/, '');
	const origin = SITE.productionOrigin;
	if (normalized === '/') {
		return `${origin}${base}/`;
	}
	if (normalized.startsWith(base)) {
		return `${origin}${normalized}`;
	}
	return `${origin}${base}${normalized}`;
}

export function getCanonicalUrl(url: URL): string {
	if (import.meta.env.SITE) {
		return new URL(url.pathname, import.meta.env.SITE).href;
	}
	return getAbsoluteUrl(url.pathname);
}

export function formatPageTitle(title: string): string {
	return title === SITE.name ? SITE.defaultTitle : `${title} · ${SITE.name}`;
}

export function getDefaultOgImage(): string {
	return getAbsoluteUrl(`${import.meta.env.BASE_URL}${SITE.ogImagePath}`);
}

export function getOrganizationJsonLd() {
	return {
		'@type': 'Organization',
		'@id': `${getAbsoluteUrl(import.meta.env.BASE_URL)}#organization`,
		name: SITE.name,
		url: getAbsoluteUrl(import.meta.env.BASE_URL),
		logo: getAbsoluteUrl(`${import.meta.env.BASE_URL}favicon.svg`),
		description: SITE.defaultDescription,
		sameAs: [SITE.repoUrl],
	};
}

export function getWebSiteJsonLd() {
	return {
		'@type': 'WebSite',
		'@id': `${getAbsoluteUrl(import.meta.env.BASE_URL)}#website`,
		name: SITE.name,
		url: getAbsoluteUrl(import.meta.env.BASE_URL),
		description: SITE.defaultDescription,
		inLanguage: 'en',
		publisher: { '@id': `${getAbsoluteUrl(import.meta.env.BASE_URL)}#organization` },
	};
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[], currentUrl: string) {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.label,
			item: item.href ? getAbsoluteUrl(item.href) : currentUrl,
		})),
	};
}
