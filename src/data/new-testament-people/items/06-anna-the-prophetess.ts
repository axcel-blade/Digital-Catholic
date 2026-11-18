import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 6,
	slug: "anna-the-prophetess",
	lastReviewed: "2026-11-18",
	title: "Anna the Prophetess",
	alsoKnownAs: "Anna daughter of Phanuel",
	role: "holy-family",
	excerpt: "Elderly prophetess of Asher’s tribe who worshipped in the Temple with fasting and prayer, and spoke of the Child Jesus to all who awaited redemption.",
	lifeDates: "1st century AD",
	scriptureReference: "Luke 2:36–38",
	feastDays: "September 1 (Roman Martyrology); linked with the Presentation",
	primaryReferences: [
		{
			label: "Luke 2:36–38"
		}
	],
	keyMoments: [
		{
			title: "Witness in the Temple",
			reference: "Luke 2:36–38",
			summary: "Anna gives thanks to God and speaks of the Child to those looking for Jerusalem’s redemption."
		}
	],
	sections: [
		{
			heading: "Who was Anna?",
			paragraphs: [
				"Anna had lived with a husband seven years from her virginity, then as a widow to eighty-four—devoted night and day to the Temple."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"She appears only in Luke’s Presentation scene, paired with Simeon as male and female witnesses of the Old Covenant greeting the New. Her life of prayer becomes proclamation."
			]
		},
		{
			heading: "Widow’s vocation",
			paragraphs: [
				"Anna honours consecrated widowhood and the dignity of aged women as evangelists. The Church needs her voice still."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"She stands at the threshold of Advent hope fulfilled in a Child."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Let long fidelity in prayer ripen into speech that points others to Jesus."
			]
		}
	]
};

export default person;
