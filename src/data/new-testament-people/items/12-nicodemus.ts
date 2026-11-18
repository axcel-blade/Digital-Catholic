import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 12,
	slug: "nicodemus",
	lastReviewed: "2026-11-18",
	title: "Nicodemus",
	alsoKnownAs: "Nicodemus the Pharisee",
	role: "witness",
	excerpt: "Pharisee and ruler of the Jews who came to Jesus by night, heard of birth from water and Spirit, and later helped bury Him with a hundred pounds of spices.",
	lifeDates: "1st century AD",
	scriptureReference: "John 3; 7:50–52; 19:39–42",
	feastDays: "August 3 (Roman Martyrology)",
	primaryReferences: [
		{
			label: "John 3; 19:39–42"
		}
	],
	keyMoments: [
		{
			title: "Born anew",
			reference: "John 3:1–21",
			summary: "Jesus teaches Nicodemus that one must be born of water and Spirit; God so loved the world that He gave His only Son."
		}
	],
	sections: [
		{
			heading: "Who was Nicodemus?",
			paragraphs: [
				"Nicodemus belonged to the Sanhedrin yet sought Jesus sincerely. His journey moves from night conversation to public burial reverence."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"He cautiously defends Jesus before the Pharisees—“Does our law judge a man without hearing him?”—and finally brings myrrh and aloes to the tomb with Joseph of Arimathea. Tradition holds he became a believer at cost."
			]
		},
		{
			heading: "From night to day",
			paragraphs: [
				"Nicodemus encourages seekers who begin in secret. Truth drawn out in dialogue can mature into costly discipleship."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"The Church remembers him as a witness who honoured Christ’s body when others fled."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Bring your questions to Jesus honestly—and be ready for the day secrecy must become courage."
			]
		}
	]
};

export default person;
