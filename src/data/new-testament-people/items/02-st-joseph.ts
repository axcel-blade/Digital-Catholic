import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 2,
	slug: "st-joseph",
	lastReviewed: "2026-11-18",
	title: "St. Joseph",
	alsoKnownAs: "Joseph of Nazareth; Spouse of the Blessed Virgin",
	role: "holy-family",
	excerpt: "Just man and foster father of Jesus who received Mary into his home, protected the Child in Egypt, and taught Him the carpenter’s trade—patron of the universal Church.",
	lifeDates: "1st century BC–1st century AD",
	scriptureReference: "Matthew 1–2; Luke 1–2",
	feastDays: "March 19; May 1 (St. Joseph the Worker)",
	relatedHref: "/saints/st-joseph",
	relatedLabel: "Full saint biography",
	primaryReferences: [
		{
			label: "Matthew 1–2"
		},
		{
			label: "CCC 437, 532, 1014"
		}
	],
	keyMoments: [
		{
			title: "The dream of the angel",
			reference: "Matthew 1:18–25",
			summary: "Joseph resolves to divorce Mary quietly; an angel reveals the Child is of the Holy Spirit, and he takes her as wife."
		},
		{
			title: "Flight into Egypt",
			reference: "Matthew 2:13–15",
			summary: "Warned in a dream, Joseph rises by night and saves Jesus from Herod—guardian of the Holy Family."
		}
	],
	sections: [
		{
			heading: "Who was Joseph?",
			paragraphs: [
				"Joseph, son of David, was a tekton—craftsman—of Nazareth. Scripture calls him just: righteous, merciful, obedient.",
				"He never speaks a recorded word; his actions are his Gospel. A fuller life is told among the saints."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"He named Jesus, presented Him in the Temple with Mary, settled in Nazareth, and sought the lost Boy among the teachers. After the hidden years he disappears from the narrative; tradition holds he died before Jesus’ public ministry, with Mary and Jesus near."
			]
		},
		{
			heading: "Silent strength",
			paragraphs: [
				"Joseph shows fatherhood as protection, provision, and listening to God in the night. Popes have named him patron of workers and of the Church."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"His feast on 19 March honours the guardian of the Redeemer."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Do the next faithful thing God shows you—even if you must rise in the night to do it."
			]
		}
	]
};

export default person;
