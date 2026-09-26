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
	sections: MiracleSection[];
}
