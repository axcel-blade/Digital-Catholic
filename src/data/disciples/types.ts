import type { TrustInfo } from '../lib/trust';
import type { SectionImage } from '../../lib/article';

export interface DiscipleSection {
	heading: string;
	paragraphs: string[];
	/** Optional illustration, e.g. a relic or a painting of a miracle */
	image?: SectionImage;
}

export interface Disciple extends TrustInfo {
	slug: string;
	/** Traditional list order among the Twelve */
	order: number;
	title: string;
	alsoKnownAs?: string;
	excerpt: string;
	/** Approximate birth and death, when known from Scripture or tradition */
	lifeDates?: string;
	gospelReference: string;
	feastDays?: string;
	sections: DiscipleSection[];
}
