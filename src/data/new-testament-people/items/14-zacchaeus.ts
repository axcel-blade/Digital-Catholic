import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 14,
	slug: "zacchaeus",
	lastReviewed: "2026-11-18",
	title: "Zacchaeus",
	alsoKnownAs: "Zacchaeus the tax collector",
	role: "witness",
	excerpt: "Chief tax collector of Jericho who climbed a sycamore to see Jesus, welcomed Him to his house, and pledged restitution—proof that the Son of Man seeks and saves the lost.",
	lifeDates: "1st century AD",
	scriptureReference: "Luke 19:1–10",
	feastDays: "April 20 (Eastern calendars); remembered in the Gospel as a convert",
	primaryReferences: [
		{
			label: "Luke 19:1–10"
		}
	],
	keyMoments: [
		{
			title: "Come down",
			reference: "Luke 19:5–9",
			summary: "Jesus calls Zacchaeus by name; salvation comes to his house as he vows half his goods to the poor and fourfold restitution."
		}
	],
	sections: [
		{
			heading: "Who was Zacchaeus?",
			paragraphs: [
				"Zacchaeus was short of stature and short on reputation—a collaborator enriched by Rome’s tax system. Desire to see Jesus overcame dignity; he climbed a tree."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"The crowd murmurs that Jesus lodges with a sinner. Zacchaeus answers with justice and mercy in action. Tradition sometimes links him with later church ministry; Luke’s point is conversion now."
			]
		},
		{
			heading: "Seeking the lost",
			paragraphs: [
				"Zacchaeus is every person who feels too small to see Jesus yet is seen by Him first. Restitution seals repentance."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"His story is a favourite of Catholic preaching on Confession and almsgiving."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Climb past pride to see Christ—then let meeting Him change how you handle money and neighbours."
			]
		}
	]
};

export default person;
