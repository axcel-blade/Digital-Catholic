export type ParableCategory =
	| 'Kingdom of God'
	| 'Mercy'
	| 'Prayer'
	| 'Discipleship'
	| 'Wealth & judgment';

export interface ParableSection {
	heading: string;
	paragraphs: string[];
}

export interface Parable {
	slug: string;
	title: string;
	category: ParableCategory;
	gospelReference: string;
	excerpt: string;
	sections: ParableSection[];
}
