import type { OldTestamentPerson } from '../types';

const person: OldTestamentPerson = {
	order: 23,
	slug: "saul",
	lastReviewed: "2026-11-18",
	title: "King Saul",
	alsoKnownAs: "Saul son of Kish",
	role: "king",
	excerpt: "First king of Israel, anointed by Samuel—tall and promising, yet undone by impatience and jealousy, whose fall clears the way for David’s throne.",
	lifeDates: "c. 11th century BC",
	scriptureReference: "1 Samuel 9–31; 1 Chronicles 10; Acts 13:21",
	feastDays: "Remembered in Scripture as a warning about obedience",
	primaryReferences: [
		{
			label: "1 Samuel 9–15; 28–31"
		}
	],
	keyMoments: [
		{
			title: "Anointed prince",
			reference: "1 Samuel 9–10",
			summary: "Samuel anoints Saul while he seeks lost donkeys; the Spirit rushes upon him and he prophesies."
		},
		{
			title: "Rejected for disobedience",
			reference: "1 Samuel 13; 15",
			summary: "Saul offers sacrifice unlawfully and spares Agag against the ban; Samuel declares the kingdom torn from him."
		},
		{
			title: "Death on Gilboa",
			reference: "1 Samuel 31",
			summary: "Wounded in battle with the Philistines, Saul falls on his sword; David laments him and Jonathan."
		}
	],
	sections: [
		{
			heading: "Who was Saul?",
			paragraphs: [
				"Saul of Benjamin was Israel’s answer to the cry for a king. He began in humility—hiding among the baggage—and won early victories, including over Nahash of Ammon."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"Jealousy of David poisoned his reign: spear throws, pursuit in the wilderness, slaughter of priests at Nob. He banned mediums yet sought the witch of Endor before his last battle. His death ends the first experiment in monarchy under a king after the nation’s own heart."
			]
		},
		{
			heading: "Charism without perseverance",
			paragraphs: [
				"Saul shows that spiritual gifts and office require ongoing obedience. Catholic moral tradition reads him as a case study in envy and the tragedy of unfinished conversion."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"David’s elegy—“How the mighty have fallen”—teaches honour even for a failed anointed."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Do not let fear of people push you past God’s command—or let another’s success turn your vocation into rivalry."
			]
		}
	]
};

export default person;
