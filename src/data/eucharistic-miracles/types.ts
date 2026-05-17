export type EucharisticMiracleCategory =
	| 'Host transformed'
	| 'Bleeding host'
	| 'Pilgrimage shrine'
	| 'Modern investigation';

export interface EucharisticMiracleSection {
	heading: string;
	paragraphs: string[];
}

export interface EucharisticMiracle {
	slug: string;
	title: string;
	category: EucharisticMiracleCategory;
	location: string;
	date: string;
	excerpt: string;
	/** Alt text for the shrine or church photograph */
	imageAlt: string;
	sections: EucharisticMiracleSection[];
}
