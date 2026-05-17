export interface PrayerSection {
	heading: string;
	paragraphs: string[];
}

export interface Prayer {
	slug: string;
	title: string;
	alsoKnownAs?: string;
	excerpt: string;
	/** Full text of the prayer */
	text: string;
	sections: PrayerSection[];
}
