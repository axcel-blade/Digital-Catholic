export interface SaintSection {
	heading: string;
	paragraphs: string[];
}

export interface Saint {
	slug: string;
	title: string;
	excerpt: string;
	feastDays?: string;
	sections: SaintSection[];
}
