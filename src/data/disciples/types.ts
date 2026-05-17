export interface DiscipleSection {
	heading: string;
	paragraphs: string[];
}

export interface Disciple {
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
