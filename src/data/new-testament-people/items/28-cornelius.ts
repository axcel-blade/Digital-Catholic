import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 28,
	slug: "cornelius",
	lastReviewed: "2026-11-18",
	title: "Cornelius the Centurion",
	alsoKnownAs: "Cornelius of Caesarea",
	role: "witness",
	excerpt: "Devout Roman centurion who feared God, gave alms, and received the Holy Spirit before Baptism—opening the Church’s door wide to the Gentiles.",
	lifeDates: "1st century AD",
	scriptureReference: "Acts 10–11",
	feastDays: "February 2 (Roman Martyrology)",
	primaryReferences: [
		{
			label: "Acts 10"
		},
		{
			label: "CCC 1226"
		}
	],
	keyMoments: [
		{
			title: "Peter and Cornelius",
			reference: "Acts 10",
			summary: "Visions converge; Peter preaches Jesus; the Spirit falls on Gentiles; Peter baptises them—“Who can refuse water?”"
		}
	],
	sections: [
		{
			heading: "Who was Cornelius?",
			paragraphs: [
				"Cornelius of the Italian Cohort prayed constantly and was respected by the Jewish nation. An angel told him to send for Peter."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"Meanwhile Peter sees unclean animals made clean. At Cornelius’s house he learns God shows no partiality. The Pentecost of the Gentiles silences Judaizing objections when Peter reports to Jerusalem."
			]
		},
		{
			heading: "No partiality",
			paragraphs: [
				"Cornelius is the Gospel to the nations in one household. Catholic universality stands on this floor."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Tradition makes him a bishop and martyr; Acts needs only his piety and Baptism."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Keep praying and giving alms—God may use your household to open a locked door for millions."
			]
		}
	]
};

export default person;
