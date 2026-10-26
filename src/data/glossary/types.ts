export interface GlossaryTerm {
	term: string;
	definition: string;
	/** Catechism of the Catholic Church paragraphs */
	catechism?: string;
	/** Optional link to a fuller explanation on the site */
	link?: { href: string; label: string };
}
