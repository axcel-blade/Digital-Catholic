import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 30,
	slug: "cleopas",
	lastReviewed: "2026-11-18",
	title: "Cleopas",
	alsoKnownAs: "Disciple of Emmaus",
	role: "witness",
	excerpt: "Disciple who walked to Emmaus with a companion, heard the risen Jesus open the Scriptures, and recognised Him in the breaking of the bread.",
	lifeDates: "1st century AD",
	scriptureReference: "Luke 24:13–35",
	feastDays: "September 25 (Roman Martyrology)",
	primaryReferences: [
		{
			label: "Luke 24:13–35"
		},
		{
			label: "CCC 1329, 1347"
		}
	],
	keyMoments: [
		{
			title: "Breaking of the bread",
			reference: "Luke 24:28–35",
			summary: "Eyes opened at table, Cleopas and his companion rush back to Jerusalem to report that the Lord is risen indeed."
		}
	],
	sections: [
		{
			heading: "Who was Cleopas?",
			paragraphs: [
				"Cleopas is named among the two on the Emmaus road; his companion is unnamed (tradition sometimes suggests his wife or another disciple). They leave Jerusalem sad and return burning with joy."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"Jesus interprets Moses and the prophets concerning Himself. Their hospitality—“Stay with us”—becomes the doorway to recognition. The pattern mirrors the Mass: Word then Sacrament."
			]
		},
		{
			heading: "Word and table",
			paragraphs: [
				"Cleopas teaches every Sunday assembly: hearts burn when Scripture is opened; eyes open when bread is broken."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"He stands for all who thought their hope had ended—and met Christ on the ordinary road home."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Invite the stranger to your table; you may be entertaining the Lord, and your despair may catch fire as joy."
			]
		}
	]
};

export default person;
