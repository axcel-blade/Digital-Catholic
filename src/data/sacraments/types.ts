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
