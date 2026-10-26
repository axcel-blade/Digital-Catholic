export interface GuideLink {
	href: string;
	label: string;
}

export interface GuideTopic {
	number: number;
	title: string;
	/** One-line summary of the topic */
	summary: string;
	/** Key Scripture references */
	scripture?: string;
	/** Catechism of the Catholic Church paragraphs or other Church documents */
	catechism?: string;
	/** Teaching, one paragraph per entry */
	meaning: string[];
	/** Optional bulleted list, such as steps or a list of virtues */
	points?: { title: string; items: string[] };
	/** Optional full text, such as the words of a prayer */
	text?: { title: string; lines: string[] };
	/** Optional links to fuller pages on the site */
	links?: GuideLink[];
}

export interface Guide {
	/** Folder name; matches the section key in src/lib/sections.ts */
	key: string;
	intro: string;
	topics: GuideTopic[];
}
