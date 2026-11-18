import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 1,
	slug: "blessed-virgin-mary",
	lastReviewed: "2026-11-18",
	title: "The Blessed Virgin Mary",
	alsoKnownAs: "Mary of Nazareth; Mother of God; Theotokos",
	role: "holy-family",
	excerpt: "Mother of Jesus, overshadowed by the Holy Spirit at the Annunciation, present at Cana, Calvary, and Pentecost—the first disciple and Mother of the Church.",
	lifeDates: "1st century BC–1st century AD",
	scriptureReference: "Luke 1–2; John 2; 19:25–27; Acts 1:14; Revelation 12",
	feastDays: "January 1; March 25; August 15; and many Marian feasts",
	relatedHref: "/saints/blessed-virgin-mary",
	relatedLabel: "Full saint biography",
	primaryReferences: [
		{
			label: "Luke 1–2; John 19"
		},
		{
			label: "CCC 484–511, 963–975"
		}
	],
	keyMoments: [
		{
			title: "The Annunciation",
			reference: "Luke 1:26–38",
			summary: "Mary gives her fiat—“Let it be to me according to your word”—and the Word becomes flesh in her womb."
		},
		{
			title: "The Magnificat",
			reference: "Luke 1:46–55",
			summary: "She praises God who exalts the lowly and keeps mercy toward Abraham’s children forever."
		},
		{
			title: "At the Cross",
			reference: "John 19:25–27",
			summary: "Jesus gives Mary to the beloved disciple as mother—and the disciple to her as son; the Church sees here Mary’s motherhood of believers."
		}
	],
	sections: [
		{
			heading: "Who was Mary?",
			paragraphs: [
				"Mary of Nazareth was a young Jewish woman betrothed to Joseph when the angel Gabriel announced she would conceive the Son of the Most High by the Holy Spirit.",
				"Immaculately conceived, ever-virgin, and assumed into heaven, she is honoured above all saints as Mother of God. A fuller biography lives among Mary and the Saints."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"She visited Elizabeth, gave birth in Bethlehem, fled to Egypt, searched for the boy Jesus in the Temple, and kept all these things in her heart. At Cana she interceded; on Calvary she stood; in the Upper Room she prayed for the Spirit.",
				"The Gospels are spare about her later years; tradition holds her dormition and Assumption. The Church’s dogmas and liturgy unfold what Scripture seeds."
			]
		},
		{
			heading: "Mother and disciple",
			paragraphs: [
				"Mary is both unique Mother of God and the model disciple who hears the Word and keeps it. Every Christian vocation passes somehow through her yes."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Her feasts fill the liturgical year. To know Mary is to be led more deeply to Jesus."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Say yes to God without knowing the whole path—and stay at the foot of whatever cross He assigns."
			]
		}
	]
};

export default person;
