import type { OldTestamentPerson } from '../types';

const person: OldTestamentPerson = {
	order: 1,
	slug: "noah",
	lastReviewed: "2026-11-18",
	title: "Noah",
	alsoKnownAs: "Noe",
	role: "patriarch",
	excerpt: "Righteous man who built the ark at God’s command, saved his family through the flood, and received the covenant of the rainbow—a type of Baptism and of Christ the new beginning.",
	lifeDates: "Primeval history (Genesis)",
	scriptureReference: "Genesis 5–9; Sirach 44:17–18; Hebrews 11:7; 1 Peter 3:20–21",
	feastDays: "Remembered in salvation history and the Easter Vigil readings",
	primaryReferences: [
		{
			label: "Genesis 6–9"
		},
		{
			label: "CCC 56–58, 845, 1219"
		}
	],
	keyMoments: [
		{
			title: "Build an ark",
			reference: "Genesis 6:13–22",
			summary: "God warns Noah of the flood; Noah obeys and builds the ark—faith that takes God at His word (Hebrews 11:7)."
		},
		{
			title: "The flood and the dove",
			reference: "Genesis 7–8",
			summary: "The waters cover the earth; the ark rests on Ararat; a dove returns with an olive leaf—peace after judgement."
		},
		{
			title: "The rainbow covenant",
			reference: "Genesis 9:8–17",
			summary: "God covenants with Noah and all flesh never again to destroy the earth by flood; the bow in the clouds is the sign."
		}
	],
	sections: [
		{
			heading: "Who was Noah?",
			paragraphs: [
				"Noah found favour with God in a violent generation. Scripture calls him righteous and blameless in his generation; he walked with God.",
				"Through him God preserves a remnant and renews creation—foreshadowing Baptism, which 1 Peter links to the eight persons saved through water."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"When wickedness filled the earth, God told Noah to build an ark of gopher wood. Noah took his wife, his three sons—Shem, Ham, and Japheth—and their wives, with animals as God commanded. Rain fell forty days; the flood prevailed, then subsided.",
				"Noah offered sacrifice; God promised seedtime and harvest would not cease. The covenant forbade shedding human blood and set the rainbow as a sign. Noah planted a vineyard, became drunk, and a family shame involving Ham followed; he blessed Shem and Japheth and lived 950 years."
			]
		},
		{
			heading: "Ark, Baptism, and the Church",
			paragraphs: [
				"The Fathers saw the ark as a figure of the Church: one vessel of salvation amid the waters. The Catechism links the flood to Baptism’s judgement of sin and gift of new life (CCC 1219)."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Noah stands at the head of a new humanity. Every rainbow and every Baptism recalls that God judges evil and still chooses mercy for a remnant."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Obey God even when the culture does not. Salvation is received in the “ark” He provides—not by swimming alone."
			]
		}
	]
};

export default person;
