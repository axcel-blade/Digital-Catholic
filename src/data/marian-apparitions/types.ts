import type { TrustInfo } from '../lib/trust';

export type MarianApparitionCategory =
	| 'Pilgrimage shrine'
	| 'Healing spring'
	| 'Message and devotion'
	| 'Silent apparition';

export interface MarianApparitionSection {
	heading: string;
	paragraphs: string[];
}

export interface MarianApparition extends TrustInfo {
	slug: string;
	title: string;
	category: MarianApparitionCategory;
	location: string;
	date: string;
	excerpt: string;
	/** Alt text for the shrine or church photograph */
	imageAlt: string;
	sections: MarianApparitionSection[];
}
