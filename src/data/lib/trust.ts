/**
 * Optional trust and source metadata shared by article data models.
 *
 * Only fill these fields with verified information. Pages render each field
 * only when it is present, so leaving a field out is always safe.
 */

export interface SourceReference {
	label: string;
	/** Optional external link; must point at the actual cited source */
	url?: string;
}

/**
 * Church status for private-revelation topics (Marian apparitions,
 * Eucharistic miracles). Assign a status only when the article text itself
 * supports it, and summarize that support in `statusNote`.
 */
export type ChurchStatus =
	| 'approved'
	| 'recognized'
	| 'under-investigation'
	| 'historical-tradition'
	| 'reported';

export interface TrustInfo {
	churchStatus?: ChurchStatus;
	/** One sentence, drawn from the article, explaining the status */
	statusNote?: string;
	sources?: SourceReference[];
	primaryReferences?: SourceReference[];
	furtherReading?: SourceReference[];
	/** ISO date (YYYY-MM-DD) when the article was last reviewed */
	lastReviewed?: string;
}

export const churchStatusLabels: Record<ChurchStatus, string> = {
	approved: 'Approved for devotion',
	recognized: 'Recognized or permitted',
	'under-investigation': 'Under investigation',
	'historical-tradition': 'Historical tradition',
	reported: 'Reported, not officially recognized',
};

export const churchStatusDescriptions: Record<ChurchStatus, string> = {
	approved:
		'A competent Church authority has judged the events worthy of belief or approved public devotion. Catholics are still not required to believe any private revelation.',
	recognized:
		'Church authorities have honored, authenticated, or permitted devotion connected with the event, without every detail being formally judged.',
	'under-investigation': 'Church authorities are still studying the reported events.',
	'historical-tradition':
		'The account is handed down by long tradition and venerated locally; this site does not record a formal modern judgment.',
	reported:
		'The events have been reported and studied, but this article records no formal Church judgment on them.',
};

/** Order used when listing or filtering by status */
export const churchStatusOrder: ChurchStatus[] = [
	'approved',
	'recognized',
	'under-investigation',
	'historical-tradition',
	'reported',
];
