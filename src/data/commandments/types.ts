export interface Commandment {
	number: number;
	title: string;
	text: string;
	meaning: string;
	/** Where the commandment is given in Scripture */
	scripture: string;
	/** Catechism of the Catholic Church paragraphs */
	catechism: string;
}
