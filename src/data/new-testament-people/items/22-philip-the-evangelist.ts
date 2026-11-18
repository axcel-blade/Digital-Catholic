import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 22,
	slug: "philip-the-evangelist",
	lastReviewed: "2026-11-18",
	title: "St. Philip the Evangelist",
	alsoKnownAs: "Philip the Deacon",
	role: "coworker",
	excerpt: "One of the seven deacons who preached in Samaria, baptised the Ethiopian eunuch on the Gaza road, and hosted Paul at Caesarea—evangelist of the margins.",
	lifeDates: "1st century AD",
	scriptureReference: "Acts 6:5; 8:4–40; 21:8–9",
	feastDays: "June 6 (Roman Martyrology)",
	primaryReferences: [
		{
			label: "Acts 8"
		}
	],
	keyMoments: [
		{
			title: "The Ethiopian eunuch",
			reference: "Acts 8:26–39",
			summary: "Guided by the Spirit, Philip explains Isaiah 53 and baptises the eunuch—who goes on his way rejoicing."
		}
	],
	sections: [
		{
			heading: "Who was Philip?",
			paragraphs: [
				"Not Philip the Apostle but the deacon-evangelist. After Stephen’s death he brings the Gospel to Samaria with signs and joy."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"Simon Magus tries to buy the Spirit’s power in Philip’s wake; Peter and John follow to lay on hands. Later Philip settles in Caesarea with four unmarried daughters who prophesy—household of charism."
			]
		},
		{
			heading: "Mission on the road",
			paragraphs: [
				"Philip runs to chariots. Catholic evangelisation learns from his Scripture-opened Baptism of an outsider."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"He shows that diaconate and proclamation belong together."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Listen for the Spirit’s nudge toward one person—and open the Scriptures until water appears for Baptism."
			]
		}
	]
};

export default person;
