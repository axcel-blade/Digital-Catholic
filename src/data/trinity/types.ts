export interface TrinityPerson {
	number: number;
	title: string;
	/** One-line summary of who this Person is */
	summary: string;
	/** Key Scripture references */
	scripture: string;
	meaning: string;
}

export interface TrinityPassage {
	/** Scripture reference, e.g. "Genesis 1:26" */
	reference: string;
	title: string;
	/** How the passage reveals or foreshadows the Trinity */
	meaning: string;
}

export interface TrinityTestament {
	id: 'old-testament' | 'new-testament';
	title: string;
	intro: string;
	passages: TrinityPassage[];
}
