import type { TrustInfo } from '../lib/trust';

export interface SacramentSection {
	heading: string;
	paragraphs: string[];
}

export interface Sacrament extends TrustInfo {
	slug: string;
	title: string;
	excerpt: string;
	sections: SacramentSection[];
}

export interface SacramentGuide extends TrustInfo {
	slug: string;
	title: string;
	excerpt: string;
	/** Sacrament slugs this guide expands on */
	sacraments: string[];
	sections: SacramentSection[];
}
