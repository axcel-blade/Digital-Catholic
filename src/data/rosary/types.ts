export interface RosaryMystery {
	number: number;
	title: string;
	fruit: string;
	meditation: string;
}

export interface MysterySet {
	slug: string;
	title: string;
	excerpt: string;
	days: string;
	intro: string;
	mysteries: RosaryMystery[];
}
