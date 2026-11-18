import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 17,
	slug: "barnabas",
	lastReviewed: "2026-11-18",
	title: "St. Barnabas",
	alsoKnownAs: "Joseph the Levite; Son of Encouragement",
	role: "apostle",
	excerpt: "Levite from Cyprus who sold a field for the Church, vouched for Paul in Jerusalem, and with him carried the Gospel to the Gentiles—apostle and encourager.",
	lifeDates: "1st century AD",
	scriptureReference: "Acts 4:36–37; 9:26–27; 11–15; 1 Corinthians 9:6",
	feastDays: "June 11",
	primaryReferences: [
		{
			label: "Acts 4:36–37; 13–15"
		}
	],
	keyMoments: [
		{
			title: "Son of encouragement",
			reference: "Acts 4:36–37",
			summary: "Joseph nicknamed Barnabas lays proceeds at the apostles’ feet—generosity that matches his name."
		},
		{
			title: "Mission from Antioch",
			reference: "Acts 13:1–3",
			summary: "The Spirit sets apart Barnabas and Saul; they sail to Cyprus and beyond."
		}
	],
	sections: [
		{
			heading: "Who was Barnabas?",
			paragraphs: [
				"Barnabas bridged suspicious Jerusalem believers and the newly converted Paul. He sought Paul in Tarsus for the Antioch harvest."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"At Lystra crowds called Barnabas “Zeus” and Paul “Hermes.” After sharp disagreement with Paul over Mark, Barnabas took Mark to Cyprus—still the encourager. Tradition holds his martyrdom on Cyprus."
			]
		},
		{
			heading: "Ministry of encouragement",
			paragraphs: [
				"Every community needs a Barnabas: someone who believes in reconciled sinners and funds mission with joy."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Cyprus claims him as founder; the Church keeps his feast in June."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Put your land and your reputation behind someone God has changed."
			]
		}
	]
};

export default person;
