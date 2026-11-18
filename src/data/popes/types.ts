import type { TrustInfo } from '../lib/trust';
import type { SectionImage } from '../../lib/article';

export interface PopeSection {
	heading: string;
	paragraphs: string[];
	/** Optional illustration, e.g. a portrait or a historic scene */
	image?: SectionImage;
}

/**
 * Popes who are canonised or beatified may also appear under Saints.
 * Use this collection for papal biographies focused on the office and
 * pontificate—especially for popes who are not (yet) saints.
 */
export interface Pope extends TrustInfo {
	slug: string;
	title: string;
	/** Birth name before election, when helpful */
	birthName?: string;
	/** Traditional ordinal among the Bishops of Rome (St. Peter = 1) */
	papalNumber: number;
	excerpt: string;
	/** Approximate birth and death, when known */
	lifeDates?: string;
	/** Years of the pontificate, e.g. "1878–1903" */
	pontificate: string;
	/** Year the pontificate began; used with papalNumber for sorting */
	reignStart: number;
	feastDays?: string;
	/** Slug of a matching entry in `saints/items/` when one exists */
	relatedSaintSlug?: string;
	sections: PopeSection[];
}
