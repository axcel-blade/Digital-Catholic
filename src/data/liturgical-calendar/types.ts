export type LiturgicalRank =
	| 'solemnity'
	/** All Souls: not a solemnity, but takes precedence with them (Universal Norms, Table of Liturgical Days, no. 3) */
	| 'commemoration'
	| 'feast'
	| 'memorial'
	| 'optional-memorial'
	| 'season';

export type LiturgicalColor = 'white' | 'red' | 'green' | 'purple' | 'rose';

export interface LiturgicalCelebration {
	/** Month 1–12 */
	month: number;
	/** Day 1–31 */
	day: number;
	title: string;
	rank: LiturgicalRank;
	color: LiturgicalColor;
	note?: string;
	/** Optional link shown after the note, such as a related guide topic */
	noteLink?: { href: string; label: string };
	/** Link to a saint biography on this site */
	saintSlug?: string;
}

export interface LiturgicalDayEntry {
	/** ISO date YYYY-MM-DD */
	date: string;
	title: string;
	rank: LiturgicalRank;
	color: LiturgicalColor;
	note?: string;
	/** Optional link shown after the note, such as a related guide topic */
	noteLink?: { href: string; label: string };
	saintSlug?: string;
}

export interface LiturgicalMonth {
	month: number;
	label: string;
	days: LiturgicalDayEntry[];
}

export interface LiturgicalYear {
	year: number;
	easter: string;
	seasons: { name: string; start: string; end: string }[];
	months: LiturgicalMonth[];
}
