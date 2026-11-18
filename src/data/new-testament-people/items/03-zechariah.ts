import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 3,
	slug: "zechariah",
	lastReviewed: "2026-11-18",
	title: "Zechariah",
	alsoKnownAs: "Zachary; father of John the Baptist",
	role: "holy-family",
	excerpt: "Priest of the division of Abijah who doubted Gabriel’s word in the Temple, was struck mute, and at John’s birth sang the Benedictus—blessing the God who visits His people.",
	lifeDates: "1st century BC–1st century AD",
	scriptureReference: "Luke 1",
	feastDays: "September 23 (with Elizabeth, in some calendars); November 5 (Roman Martyrology tradition)",
	primaryReferences: [
		{
			label: "Luke 1"
		}
	],
	keyMoments: [
		{
			title: "Vision in the Temple",
			reference: "Luke 1:5–22",
			summary: "Gabriel announces John’s birth; Zechariah asks for a sign and is muted until the promise is fulfilled."
		},
		{
			title: "His name is John",
			reference: "Luke 1:57–66",
			summary: "Zechariah writes the child’s name; his mouth opens and he prophesies."
		},
		{
			title: "The Benedictus",
			reference: "Luke 1:67–79",
			summary: "He blesses God for raising a horn of salvation and sending the dawn from on high—prayed daily in Morning Prayer."
		}
	],
	sections: [
		{
			heading: "Who was Zechariah?",
			paragraphs: [
				"Zechariah was a righteous priest married to Elizabeth, both advanced in years and childless until God intervened."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"While offering incense he met the angel’s word with hesitation born of long disappointment. Silence schooled him; obedience at the naming loosed his tongue into praise. He raised John in the hill country of Judea."
			]
		},
		{
			heading: "From doubt to praise",
			paragraphs: [
				"Zechariah shows that even priests and the devout can stumble—and that God turns muted faith into prophetic song."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"The Benedictus remains the Church’s morning canticle of hope."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"When God’s promise seems too late for you, do not stop serving at the altar—wait for the day your tongue is freed to bless."
			]
		}
	]
};

export default person;
