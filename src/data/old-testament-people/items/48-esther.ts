import type { OldTestamentPerson } from '../types';

const person: OldTestamentPerson = {
	order: 48,
	slug: "esther",
	lastReviewed: "2026-11-18",
	title: "Esther",
	alsoKnownAs: "Hadassah",
	role: "woman-of-faith",
	excerpt: "Jewish queen of Persia who risked her life to stop Haman’s genocide—“for such a time as this”—and whose feast of Purim the Church also reads in Catholic Bibles with deuterocanonical additions.",
	lifeDates: "Persian period (5th century BC setting)",
	scriptureReference: "Book of Esther (Hebrew and Greek texts)",
	feastDays: "Remembered with Purim and in Catholic biblical tradition",
	primaryReferences: [
		{
			label: "Book of Esther"
		},
		{
			label: "CCC 120"
		}
	],
	keyMoments: [
		{
			title: "For such a time as this",
			reference: "Esther 4:13–16",
			summary: "Mordecai warns that silence will not save her; Esther fasts and resolves to go to the king unsummoned: “If I perish, I perish.”"
		},
		{
			title: "Haman’s fall",
			reference: "Esther 5–8",
			summary: "Through banquets and providence, Haman is hanged on his own gallows; the Jews receive right to defend themselves."
		}
	],
	sections: [
		{
			heading: "Who was Esther?",
			paragraphs: [
				"Esther, orphaned and raised by Mordecai, became queen to Ahasuerus (Xerxes). Her Jewish identity hidden at first becomes the hinge of her people’s survival."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"Catholic editions include prayers of Mordecai and Esther that make explicit the book’s theology of providence. She intercedes as queen; her courage is political and spiritual at once."
			]
		},
		{
			heading: "Providence in the palace",
			paragraphs: [
				"God’s name is sparse in the Hebrew text, yet His hand is everywhere—a lesson for believers in secular courts and workplaces."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Purim still recalls deliverance; Christians read Esther among the women who prefigure Mary’s intercession and the Church’s role under threat."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"When your position could protect others, do not stay silent. Fast, then speak."
			]
		}
	]
};

export default person;
