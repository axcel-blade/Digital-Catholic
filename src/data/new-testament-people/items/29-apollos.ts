import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 29,
	slug: "apollos",
	lastReviewed: "2026-11-18",
	title: "Apollos",
	alsoKnownAs: "Apollos of Alexandria",
	role: "coworker",
	excerpt: "Eloquent Alexandrian, fervent in spirit, who preached Jesus accurately yet learned the Way more fully from Priscilla and Aquila—and watered what Paul had planted.",
	lifeDates: "1st century AD",
	scriptureReference: "Acts 18:24–28; 1 Corinthians 1–4; 16:12; Titus 3:13",
	feastDays: "February 13 (Roman Martyrology)",
	primaryReferences: [
		{
			label: "Acts 18:24–28; 1 Corinthians 3"
		}
	],
	keyMoments: [
		{
			title: "Mighty in the Scriptures",
			reference: "Acts 18:24–28",
			summary: "Apollos powerfully refutes Jews in public, showing from the Scriptures that the Christ is Jesus."
		}
	],
	sections: [
		{
			heading: "Who was Apollos?",
			paragraphs: [
				"Apollos knew the baptism of John and taught boldly in Ephesus before fuller instruction. Paul later lists him among coworkers; factions at Corinth tried to pit “I am of Apollos” against “I am of Paul.”"
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"Paul insists they are only servants—one plants, another waters, God gives growth. He urges Apollos to visit Corinth again. Titus is told to help him on his journey."
			]
		},
		{
			heading: "Gifted and teachable",
			paragraphs: [
				"Brilliance without humility splits churches; Apollos models gifts submitted to fuller truth and to apostolic unity."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"He remains the New Testament’s image of the eloquent catechist who still lets a tentmaking couple refine him."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Stay teachable when you are already impressive—and refuse to become anyone’s party banner."
			]
		}
	]
};

export default person;
