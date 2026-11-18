import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 19,
	slug: "luke",
	lastReviewed: "2026-11-18",
	title: "St. Luke the Evangelist",
	alsoKnownAs: "Luke the physician; beloved physician",
	role: "evangelist",
	excerpt: "Companion of Paul and author of the Gospel of Luke and Acts—portrait painter of mercy, the poor, women, and the Holy Spirit’s work from Nazareth to Rome.",
	lifeDates: "1st century AD",
	scriptureReference: "Colossians 4:14; 2 Timothy 4:11; Philemon 24; Gospel of Luke; Acts",
	feastDays: "October 18",
	primaryReferences: [
		{
			label: "Luke–Acts; Colossians 4:14"
		}
	],
	keyMoments: [
		{
			title: "Orderly account",
			reference: "Luke 1:1–4",
			summary: "Luke writes for Theophilus an orderly narrative so that certainty about the Gospel may be firm."
		}
	],
	sections: [
		{
			heading: "Who was Luke?",
			paragraphs: [
				"Paul calls Luke the beloved physician. The “we” passages of Acts place him on Paul’s journeys, including toward Rome."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"His Gospel uniquely gives the infancy canticles, the Good Samaritan, the prodigal son, and Emmaus. Acts charts the Spirit from Pentecost to Paul’s house arrest. Tradition paints him as artist of Marian icons and martyr or confessor in Boeotia."
			]
		},
		{
			heading: "Evangelist of mercy",
			paragraphs: [
				"Luke emphasises Jesus’ compassion for sinners and outsiders. Catholic social concern and Marian devotion drink deeply from his well."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"His ox symbol marks the sacrificial Gospel; physicians claim him as patron."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Use your skill—medicine, writing, travel—to make the story of Jesus clear and merciful."
			]
		}
	]
};

export default person;
