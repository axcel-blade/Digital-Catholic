import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 10,
	slug: "mary-of-bethany",
	lastReviewed: "2026-11-18",
	title: "St. Mary of Bethany",
	alsoKnownAs: "Mary, sister of Martha and Lazarus",
	role: "woman-disciple",
	excerpt: "Sister of Martha and Lazarus who sat at Jesus’ feet, anointed Him for burial with costly nard, and chose the better part that will not be taken away.",
	lifeDates: "1st century AD",
	scriptureReference: "Luke 10:38–42; John 11–12; Matthew 26:6–13",
	feastDays: "July 29 (with Martha and Lazarus)",
	primaryReferences: [
		{
			label: "John 12:1–8; Luke 10:38–42"
		}
	],
	keyMoments: [
		{
			title: "Anointing at Bethany",
			reference: "John 12:1–8",
			summary: "Mary pours pure nard on Jesus’ feet and wipes them with her hair; He defends her against Judas’s complaint."
		}
	],
	sections: [
		{
			heading: "Who was Mary of Bethany?",
			paragraphs: [
				"Mary listened while Martha served. Jesus praises her contemplative love without despising her sister’s work."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"She falls at Jesus’ feet after Lazarus’s death, weeps with Him, and later extravagantly anoints Him. The fragrance fills the house—image of worship that seems “waste” to the calculating."
			]
		},
		{
			heading: "The better part",
			paragraphs: [
				"Mary teaches adoration and costly devotion. Wherever the Gospel is preached, Jesus says, her deed will be told."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Honoured with Martha and Lazarus as friends who gave Jesus a home."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Spend yourself on love of Christ even when others call it impractical."
			]
		}
	]
};

export default person;
