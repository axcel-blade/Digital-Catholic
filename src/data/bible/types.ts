export interface BibleBookSection {
	heading: string;
	paragraphs: string[];
}

export type BibleTestament = 'old' | 'new';

export type BibleCategory =
	| 'pentateuch'
	| 'historical'
	| 'wisdom'
	| 'prophetic'
	| 'gospels'
	| 'acts'
	| 'pauline'
	| 'catholic-epistles'
	| 'apocalyptic';

export interface BibleBook {
	/** Canonical order in the Catholic Bible (1–73) */
	order: number;
	slug: string;
	title: string;
	abbreviation: string;
	testament: BibleTestament;
	category: BibleCategory;
	excerpt: string;
	/** True for the seven deuterocanonical books in the Catholic Old Testament */
	deuterocanonical?: boolean;
	sections: BibleBookSection[];
}
