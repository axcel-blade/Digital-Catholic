import type { TrustInfo } from '../lib/trust';

export interface PrayerSection {
	heading: string;
	paragraphs: string[];
}

export interface Prayer extends TrustInfo {
	slug: string;
	title: string;
	alsoKnownAs?: string;
	excerpt: string;
	/** Full text of the prayer */
	text: string;
	/** Slug of a saint page to show as a related link */
	relatedSaint?: string;
	sections: PrayerSection[];
}
