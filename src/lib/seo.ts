export const SITE = {
	name: 'Digital Catholic',
	defaultTitle: 'Digital Catholic — Saints, Sacraments & Catholic Faith',
	defaultDescription:
		'Learn about Catholic saints, the seven sacraments, the Ten Commandments, and the faith. Clear teaching for prayer, formation, and knowledge sharing.',
	keywords:
		'Catholic, saints, sacraments, Ten Commandments, faith, catechism, biography, Digital Catholic, Christian',
	locale: 'en_US',
	themeColor: '#6b2d3c',
	productionOrigin: 'https://axcel-blade.github.io',
	productionBase: '/Digital-Catholic/',
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
	const origin = getSiteOrigin();
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${origin}${normalized}`;
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
