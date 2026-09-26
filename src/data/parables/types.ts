import type { TrustInfo } from '../lib/trust';

export type ParableCategory =
	| 'Kingdom of God'
	| 'Mercy'
	| 'Prayer'
	| 'Discipleship'
	| 'Wealth & judgment';

export interface ParableSection {
	heading: string;
	paragraphs: string[];
}

export interface Parable extends TrustInfo {
	slug: string;
	title: string;
	category: ParableCategory;
	gospelReference: string;
	excerpt: string;
	/** Alt text for the painting or illustration of the parable */
	imageAlt: string;
	sections: ParableSection[];
}
