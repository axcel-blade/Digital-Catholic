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
	/** Slug of a Marian apparition page to show as a related link */
	relatedApparition?: string;
	/** A guide article to show as a related link (each links back to the other) */
	relatedGuideTopic?: { guide: string; slug: string };
	sections: PrayerSection[];
}
