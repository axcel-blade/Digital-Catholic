import type { OldTestamentPerson } from '../types';

const person: OldTestamentPerson = {
	order: 13,
	slug: "miriam",
	lastReviewed: "2026-11-18",
	title: "Miriam",
	alsoKnownAs: "Mariám; sister of Moses and Aaron",
	role: "woman-of-faith",
	excerpt: "Prophetess who watched over Moses in the Nile reeds, led Israel in the song of the sea, and learned through discipline that leadership is shared under God.",
	lifeDates: "Exodus period",
	scriptureReference: "Exodus 2; 15:20–21; Numbers 12; Micah 6:4",
	feastDays: "Remembered with Moses and Aaron in Scripture’s praise (Micah 6:4)",
	primaryReferences: [
		{
			label: "Exodus 15:20–21; Numbers 12"
		}
	],
	keyMoments: [
		{
			title: "Watching the basket",
			reference: "Exodus 2:1–10",
			summary: "The sister (traditionally Miriam) watches Moses and arranges for their mother to nurse him—courage that saves the deliverer."
		},
		{
			title: "Song at the sea",
			reference: "Exodus 15:20–21",
			summary: "Miriam the prophetess takes a tambourine and leads the women: “Sing to the Lord, for he has triumphed gloriously.”"
		},
		{
			title: "Challenge and leprosy",
			reference: "Numbers 12",
			summary: "Miriam and Aaron speak against Moses; Miriam becomes leprous seven days, then is restored after Moses’ prayer—humility after jealousy."
		}
	],
	sections: [
		{
			heading: "Who was Miriam?",
			paragraphs: [
				"Miriam is named a prophetess and counted with Moses and Aaron as leaders God sent (Micah 6:4). She embodies liturgical joy and the cost of rivalry."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"She celebrates the Exodus with music and dance. Later she contests Moses’ unique role, perhaps also regarding the Cushite wife. Shut out of the camp, she is healed and rejoins the people. She dies at Kadesh and is buried there."
			]
		},
		{
			heading: "Prophetic joy and purified leadership",
			paragraphs: [
				"Miriam teaches the Church to sing salvation history—and to accept that charismatic gifts do not cancel the order God establishes."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Israel remembered her death in the wilderness wanderings; her song still echoes in the Easter Vigil’s Exodus praise."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Lead with praise, not comparison. When jealousy rises, let prayer—and waiting outside the camp—heal you."
			]
		}
	]
};

export default person;
