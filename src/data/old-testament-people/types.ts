import type { TrustInfo } from '../lib/trust';
import type { SectionImage } from '../../lib/article';

export type OldTestamentRole =
	| 'patriarch'
	| 'leader'
	| 'judge'
	| 'woman-of-faith'
	| 'king'
	| 'prophet'
	| 'major-prophet'
	| 'minor-prophet';

export interface OldTestamentPersonSection {
	heading: string;
	paragraphs: string[];
	image?: SectionImage;
}

/** A key moment, promise, prophecy, or deed highlighted on the article page */
export interface KeyMoment {
	title: string;
	reference: string;
	summary: string;
}

export interface OldTestamentPerson extends TrustInfo {
	slug: string;
	order: number;
	title: string;
	alsoKnownAs?: string;
	role: OldTestamentRole;
	excerpt: string;
	lifeDates?: string;
	scriptureReference: string;
	feastDays?: string;
	sections: OldTestamentPersonSection[];
	/** Promises, deeds, or turning points */
	keyMoments?: KeyMoment[];
	/** Named prophecies (writing prophets and similar) */
	prophecies?: KeyMoment[];
}
