import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 26,
	slug: "priscilla-and-aquila",
	lastReviewed: "2026-11-18",
	title: "Priscilla and Aquila",
	alsoKnownAs: "Prisca and Aquila",
	role: "coworker",
	excerpt: "Jewish Christian tentmaking couple who worked with Paul, risked their necks for him, and explained the Way more accurately to Apollos—model of married mission.",
	lifeDates: "1st century AD",
	scriptureReference: "Acts 18; Romans 16:3–5; 1 Corinthians 16:19; 2 Timothy 4:19",
	feastDays: "July 8 (Roman Martyrology)",
	primaryReferences: [
		{
			label: "Acts 18; Romans 16:3–5"
		}
	],
	keyMoments: [
		{
			title: "Instructing Apollos",
			reference: "Acts 18:24–26",
			summary: "Priscilla and Aquila take Apollos aside and expound the Way more accurately—gentle catechesis by a couple."
		}
	],
	sections: [
		{
			heading: "Who were they?",
			paragraphs: [
				"Aquila of Pontus and his wife Prisca (Priscilla) were expelled from Rome under Claudius, met Paul in Corinth, and shared his trade and mission."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"They moved with Paul to Ephesus, hosted a church in their house, and later returned to Rome where a congregation met with them. Paul says they risked their necks for his life; all Gentile churches give thanks."
			]
		},
		{
			heading: "Domestic church",
			paragraphs: [
				"Their marriage is apostolic. Scripture often names Priscilla first—sign of her prominence in teaching. Catholic couples find patrons for home as mission base."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"They disappear after the epistles; their legacy is hospitality and accurate teaching."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Open your home and your craft to the Gospel—and correct gifted teachers with humility and clarity."
			]
		}
	]
};

export default person;
