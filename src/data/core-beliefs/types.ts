export interface CoreBeliefLink {
	href: string;
	label: string;
}

export interface CoreBelief {
	number: number;
	title: string;
	/** One-line summary of the doctrine */
	summary: string;
	/** Key Scripture references */
	scripture: string;
	/** Catechism of the Catholic Church paragraphs */
	catechism: string;
	/** Teaching, one paragraph per entry */
	meaning: string[];
	/** Optional full text, such as the words of a creed */
	text?: { title: string; lines: string[] };
	/** Optional link to a fuller page on the site */
	link?: CoreBeliefLink;
	/** Optional artwork for the article, stored as `public/core-beliefs/{slug}.jpg` */
	image?: { alt: string; caption: string };
}
