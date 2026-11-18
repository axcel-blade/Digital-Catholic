import type { TrustInfo } from '../lib/trust';

export type BibleStoryEra =
	| 'Creation & the Fall'
	| 'The Patriarchs'
	| 'Exodus & Wilderness'
	| 'The Promised Land'
	| 'Kings & Prophets'
	| 'Exile & Return';

export interface BibleStorySection {
	heading: string;
	paragraphs: string[];
}

export interface BibleStory extends TrustInfo {
	slug: string;
	/** Position in salvation history (stories are listed in this order) */
	order: number;
	title: string;
	era: BibleStoryEra;
	scriptureReference: string;
	excerpt: string;
	/** Alt text for an illustration, if one is added to /public/bible-stories */
	imageAlt: string;
	sections: BibleStorySection[];
}
