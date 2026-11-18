import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 11,
	slug: "lazarus",
	lastReviewed: "2026-11-18",
	title: "St. Lazarus of Bethany",
	alsoKnownAs: "Lazarus, whom Jesus loved",
	role: "witness",
	excerpt: "Brother of Martha and Mary whom Jesus raised from the dead after four days in the tomb—sign of glory that hastened the plot against Christ.",
	lifeDates: "1st century AD",
	scriptureReference: "John 11–12",
	feastDays: "July 29 (with Martha and Mary)",
	primaryReferences: [
		{
			label: "John 11"
		},
		{
			label: "CCC 994"
		}
	],
	keyMoments: [
		{
			title: "Lazarus, come out",
			reference: "John 11:38–44",
			summary: "Jesus weeps, prays, and calls Lazarus from the tomb—pledge of the resurrection of the body."
		}
	],
	sections: [
		{
			heading: "Who was Lazarus?",
			paragraphs: [
				"Lazarus of Bethany was Jesus’ friend. His illness and death become the stage for the seventh sign in John’s Gospel."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"Jesus delays, then goes to Judea despite danger. After the raising, crowds flock; chief priests plot to kill Lazarus too because many believe on account of him. Tradition variously places his later witness in Cyprus or elsewhere."
			]
		},
		{
			heading: "Sign of the Resurrection",
			paragraphs: [
				"Lazarus is restored to mortal life; Christ will rise never to die again. Still, the sign teaches Jesus’ power over death and His compassion—“Jesus wept.”"
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"He remains the Gospel’s great image of friendship with Christ stronger than the grave."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Trust the Lord’s timing when He seems to delay—His delays are not denials of love."
			]
		}
	]
};

export default person;
