import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 5,
	slug: "simeon",
	lastReviewed: "2026-11-18",
	title: "Simeon",
	alsoKnownAs: "Holy Simeon of the Temple",
	role: "holy-family",
	excerpt: "Righteous man in Jerusalem who had been promised he would see the Messiah, took the infant Jesus in his arms, and sang the Nunc Dimittis.",
	lifeDates: "1st century AD",
	scriptureReference: "Luke 2:25–35",
	feastDays: "February 3 (Roman Martyrology); linked with the Presentation on February 2",
	primaryReferences: [
		{
			label: "Luke 2:25–35"
		}
	],
	keyMoments: [
		{
			title: "The Nunc Dimittis",
			reference: "Luke 2:29–32",
			summary: "Simeon blesses God for the light of revelation to the Gentiles and glory for Israel—prayed in Night Prayer."
		},
		{
			title: "A sword for Mary",
			reference: "Luke 2:34–35",
			summary: "He prophesies the Child as a sign contradicted and tells Mary a sword will pierce her soul."
		}
	],
	sections: [
		{
			heading: "Who was Simeon?",
			paragraphs: [
				"Simeon waited in the Spirit for Israel’s consolation. Luke presents him as the meeting of Old Covenant hope with the Child who fulfils it."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"Led to the Temple at the Presentation, he recognised Jesus, blessed the parents, and spoke hard truth about suffering. Tradition often pictures him aged; Scripture stresses his Spirit-led patience more than his years."
			]
		},
		{
			heading: "Faithful waiting",
			paragraphs: [
				"Simeon teaches the Church how to die in peace: having seen Christ, we can let go. Candlemas processions echo his recognition of the Light."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"His canticle closes the day for countless Christians each night."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Hold Christ when He is placed in your arms—and accept that love of Him may come with a sword."
			]
		}
	]
};

export default person;
