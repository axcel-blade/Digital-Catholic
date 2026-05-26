export const SITE = {
	name: 'Digital Catholic',
	defaultTitle:
		'Digital Catholic — Saints, Sacraments, Gospel, Marian Apparitions & Catholic Faith',
	defaultDescription:
		'Learn the Catholic faith with full saint and apostle biographies, summaries of all 73 books of the Catholic Bible, the Our Father, Hail Mary, the seven sacraments, Gospel miracles and parables, Eucharistic miracles, Marian apparitions, the Ten Commandments, the liturgical calendar, and how to pray the Rosary. Clear articles for prayer, formation, and sharing.',
	keywords:
		'Catholic, Catholic faith, contact, saints, apostles, disciples of Jesus, Twelve Apostles, Peter, Paul, St. Nicholas, Santa Claus, liturgical calendar, feast days, solemnities, Advent, Lent, Easter, Carlo Acutis, Blessed Virgin Mary, Marian apparitions, Guadalupe, Lourdes, Fatima, Velankanni, India, sacraments, Baptism, Eucharist, Real Presence, Eucharistic miracles, Lanciano, miracles of Jesus, parables of Jesus, Gospel, Ten Commandments, Holy Bible, Catholic Bible, Old Testament, New Testament, deuterocanonical, Tobit, Maccabees, Our Father, Lord\'s Prayer, Hail Mary, Ave Maria, rosary, mysteries of the rosary, prayer, catechism, Scripture, Digital Catholic, Christian',
	locale: 'en_US',
	themeColor: '#6b2d3c',
	themeColorDark: '#1a1816',
	productionOrigin: 'https://axcel-blade.github.io',
	productionBase: '/Digital-Catholic/',
} as const;

/** Meta descriptions for main section pages — keep in sync with site content. */
export const PAGE_DESCRIPTIONS = {
	home: SITE.defaultDescription,
	about:
		'About Digital Catholic — a free site for saint biographies, the apostles, sacraments, Gospel miracles and parables, Eucharistic miracles, Marian apparitions, the Commandments, the liturgical calendar, and the Rosary, with search and articles for faith formation.',
	contact:
		'Contact Digital Catholic — email the maintainer or open a GitHub issue for corrections, suggestions, or questions about this Catholic faith formation site.',
	saints:
		'Saint biographies for the Catholic Church — full lives from birth to death, feast days, and lessons from Mary, Joseph, Nicholas of Myra, Anthony of Padua, Carlo Acutis, and more.',
	sacraments:
		'Articles on the seven sacraments — Baptism, Confirmation, Eucharist, Penance, Anointing of the Sick, Holy Orders, and Matrimony — what the Church teaches and why they matter.',
	disciples:
		'The Twelve Apostles of Jesus Christ — full biographies from call to death, Gospel and Acts accounts, feast days, and lessons for following Christ.',
	miracles:
		'Miracles of Jesus Christ in the Gospels of Matthew, Mark, Luke, and John — signs of the Kingdom with Scripture references and reflections for faith.',
	eucharisticMiracles:
		'Eucharistic miracles in the Catholic Church — hosts and blood that witness to the Real Presence, from Lanciano and Bolsena to modern shrines studied by science.',
	marianApparitions:
		'Marian apparitions in the Catholic Church — Our Lady appearing to the faithful at Guadalupe, Lourdes, Fátima, Velankanni in India, Knock, and other approved shrines in the real world.',
	parables:
		'Parables of Jesus Christ in the New Testament Gospels — stories of God’s Kingdom with Scripture references and lessons for discipleship.',
	commandments:
		'The Ten Commandments — God’s moral law given to Moses, with each commandment’s text and meaning for love of God and neighbor.',
	bible:
		'The Holy Bible in the Catholic canon — all 73 books with brief summaries of each book, including the deuterocanonical books, for study and faith formation.',
	prayers:
		'The Our Father and Hail Mary — full text and brief explanations of the Lord’s Prayer and the Hail Mary, the heart of Catholic prayer and the Rosary.',
	mass:
		'Items used at Mass in the Catholic Church — sacred vessels, altar linens, liturgical books, vestments, liturgical colors, and other objects used in the celebration of the Eucharist.',
	rosary:
		'How to recite the Holy Rosary, the traditional prayers, and the twenty mysteries — Joyful, Sorrowful, Glorious, and Luminous — for meditation and prayer.',
	liturgicalCalendar:
		'Catholic liturgical calendar — solemnities, feasts, and memorials from the General Roman Calendar, moveable celebrations from Easter, liturgical seasons, and links to saint feast days.',
} as const;

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
	return title === 'Digital Catholic' ? SITE.defaultTitle : `${title} · Digital Catholic`;
}

export function getDefaultOgImage(): string {
	return getAbsoluteUrl(`${import.meta.env.BASE_URL}favicon.svg`);
}

export function getOrganizationJsonLd() {
	return {
		'@type': 'Organization',
		name: SITE.name,
		url: getAbsoluteUrl('/'),
		description: SITE.defaultDescription,
	};
}

export function getWebSiteJsonLd() {
	return {
		'@type': 'WebSite',
		name: SITE.name,
		url: getAbsoluteUrl('/'),
		description: SITE.defaultDescription,
		inLanguage: 'en',
		publisher: getOrganizationJsonLd(),
	};
}
