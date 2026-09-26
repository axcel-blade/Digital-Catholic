import type { TrustInfo } from '../lib/trust';

export interface SaintSection {
	heading: string;
	paragraphs: string[];
}

export interface Saint extends TrustInfo {
	slug: string;
	title: string;
	excerpt: string;
	/** Approximate birth and death, when known from history or tradition */
	lifeDates?: string;
	feastDays?: string;
	sections: SaintSection[];
}
