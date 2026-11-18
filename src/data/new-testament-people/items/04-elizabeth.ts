import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 4,
	slug: "elizabeth",
	lastReviewed: "2026-11-18",
	title: "Elizabeth",
	alsoKnownAs: "Mother of John the Baptist",
	role: "holy-family",
	excerpt: "Righteous wife of Zechariah who conceived John in old age, greeted Mary with a loud cry, and became the first to honour Mary as “mother of my Lord.”",
	lifeDates: "1st century BC–1st century AD",
	scriptureReference: "Luke 1",
	feastDays: "November 5 (Roman Martyrology, with Zechariah)",
	primaryReferences: [
		{
			label: "Luke 1:5–45"
		}
	],
	keyMoments: [
		{
			title: "The Visitation",
			reference: "Luke 1:39–45",
			summary: "At Mary’s greeting the child leaps in Elizabeth’s womb; filled with the Spirit she blesses Mary and the fruit of her womb."
		}
	],
	sections: [
		{
			heading: "Who was Elizabeth?",
			paragraphs: [
				"Elizabeth, of Aaron’s line, shared Zechariah’s righteousness and his long sorrow of barrenness—until Gabriel’s word reached their home."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"She hid herself five months, then received Mary for about three months. Her prophetic blessing frames the Visitation mystery of the Rosary. After John’s birth she insisted on the angel’s name against neighbours’ custom."
			]
		},
		{
			heading: "Joy of the Visitation",
			paragraphs: [
				"Elizabeth recognises Christ before His birth and honours Mary without envy—model of spiritual friendship between generations."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"She fades from the narrative after John’s infancy; her legacy is the leap of joy and the title she gave Mary."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Welcome Christ in others promptly—and speak blessing over those God has favoured."
			]
		}
	]
};

export default person;
