import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 15,
	slug: "matthias",
	lastReviewed: "2026-11-18",
	title: "St. Matthias",
	alsoKnownAs: "Apostle chosen after Judas",
	role: "apostle",
	excerpt: "Disciple who had followed Jesus from John’s baptism to the Ascension, chosen by lot to take Judas’s place among the Twelve—restoring the apostolic number.",
	lifeDates: "1st century AD",
	scriptureReference: "Acts 1:15–26",
	feastDays: "May 14",
	primaryReferences: [
		{
			label: "Acts 1:15–26"
		},
		{
			label: "CCC 880"
		}
	],
	keyMoments: [
		{
			title: "The lot falls on Matthias",
			reference: "Acts 1:23–26",
			summary: "After prayer the community casts lots between Joseph Barsabbas and Matthias; Matthias is enrolled with the eleven apostles."
		}
	],
	sections: [
		{
			heading: "Who was Matthias?",
			paragraphs: [
				"Matthias was a witness of the Resurrection from the wider company of disciples. Peter insists Judas’s office must be filled so that Twelve again stand as foundation."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"Scripture says no more of his labours. Tradition variously sends him to Judea, Ethiopia, or Colchis, and recounts martyrdom. The Church’s point in Acts is apostolic continuity under prayer."
			]
		},
		{
			heading: "Office and succession",
			paragraphs: [
				"Matthias embodies succession: ministry continues beyond failure and betrayal. Catholic bishops stand in this logic of unbroken witness."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"His feast recalls that God knows how to replace what sin tried to ruin."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Be faithful in the larger circle of disciples—God may call you into a vacant place of service."
			]
		}
	]
};

export default person;
