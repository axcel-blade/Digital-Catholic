import type { TrustInfo } from '../lib/trust';
import type { SectionImage } from '../../lib/article';

export type NewTestamentRole =
	| 'holy-family'
	| 'forerunner'
	| 'woman-disciple'
	| 'witness'
	| 'apostle'
	| 'evangelist'
	| 'martyr'
	| 'coworker';

export interface NewTestamentPersonSection {
	heading: string;
	paragraphs: string[];
	image?: SectionImage;
}

export interface KeyMoment {
	title: string;
	reference: string;
	summary: string;
}

export interface NewTestamentPerson extends TrustInfo {
	slug: string;
	order: number;
	title: string;
	alsoKnownAs?: string;
	role: NewTestamentRole;
	excerpt: string;
	lifeDates?: string;
	scriptureReference: string;
	feastDays?: string;
	/** Optional link to a fuller saint or apostle page */
	relatedHref?: string;
	relatedLabel?: string;
	sections: NewTestamentPersonSection[];
	keyMoments?: KeyMoment[];
}
