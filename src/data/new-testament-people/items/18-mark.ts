import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 18,
	slug: "mark",
	lastReviewed: "2026-11-18",
	title: "St. Mark the Evangelist",
	alsoKnownAs: "John Mark",
	role: "evangelist",
	excerpt: "Companion of Peter and Paul who wrote the earliest Gospel—a swift, vivid testimony to Jesus the Crucified Son of God—and founded the Church of Alexandria in tradition.",
	lifeDates: "1st century AD",
	scriptureReference: "Acts 12:12, 25; 13:13; 15:37–39; Colossians 4:10; 1 Peter 5:13; Gospel of Mark",
	feastDays: "April 25",
	primaryReferences: [
		{
			label: "Gospel of Mark; 1 Peter 5:13"
		}
	],
	keyMoments: [
		{
			title: "The young man who fled",
			reference: "Mark 14:51–52",
			summary: "Many see Mark’s signature in the young man who flees Gethsemane naked—humble memory of fear."
		}
	],
	sections: [
		{
			heading: "Who was Mark?",
			paragraphs: [
				"John Mark’s mother Mary hosted a house church in Jerusalem. He accompanied Barnabas and Saul, left them at Perga, later proved useful to Paul, and was with Peter in “Babylon” (Rome)."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"Ancient tradition says he recorded Peter’s preaching as the Gospel of Mark. He is symbolised by the winged lion. Martyrdom at Alexandria is traditional."
			]
		},
		{
			heading: "Peter’s interpreter",
			paragraphs: [
				"Mark shows that second-generation witness can be Spirit-inspired Scripture. Failure on mission need not be the last word—Paul later wants him again."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Venice enshrines his relics; his lion guards the Gospel’s roar."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"If you once deserted a post, return as Mark did—useful again for the Kingdom."
			]
		}
	]
};

export default person;
