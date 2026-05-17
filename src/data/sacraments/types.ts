export interface SacramentSection {
	heading: string;
	paragraphs: string[];
}

export interface Sacrament {
	slug: string;
	title: string;
	excerpt: string;
	sections: SacramentSection[];
}
