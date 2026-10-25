import type { TrustInfo } from '../lib/trust';
import type { SectionImage } from '../../lib/article';

export interface SaintSection {
	heading: string;
	paragraphs: string[];
	/** Optional illustration, e.g. a relic or a painting of a miracle */
	image?: SectionImage;
}

/**
 * Stage of the person's cause for canonization:
 * - Servant of God: the cause has formally opened
 * - Venerable: the Church recognizes a life of heroic virtue
 * - Blessed: beatified, after one verified miracle (not required for martyrs)
 * - Saint: canonized, after a second verified miracle following beatification
 */
export type SaintStatus = 'Saint' | 'Blessed' | 'Venerable' | 'Servant of God';

export interface Saint extends TrustInfo {
	slug: string;
	title: string;
	/** Defaults to "Saint" (canonized) when omitted */
	status?: SaintStatus;
	excerpt: string;
	/** Approximate birth and death, when known from history or tradition */
	lifeDates?: string;
	feastDays?: string;
	sections: SaintSection[];
}
