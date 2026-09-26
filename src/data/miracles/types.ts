import type { TrustInfo } from '../lib/trust';

export type MiracleCategory = 'Nature' | 'Healing' | 'Exorcism' | 'Raising the dead' | 'Glory';

export interface MiracleSection {
	heading: string;
	paragraphs: string[];
}

export interface Miracle extends TrustInfo {
	slug: string;
	title: string;
	category: MiracleCategory;
	gospelReference: string;
	excerpt: string;
	/** Alt text for the painting or mosaic of the miracle */
	imageAlt: string;
	sections: MiracleSection[];
}
