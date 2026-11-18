import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 8,
	slug: "mary-magdalene",
	lastReviewed: "2026-11-18",
	title: "St. Mary Magdalene",
	alsoKnownAs: "Apostle to the Apostles",
	role: "woman-disciple",
	excerpt: "Disciple healed of seven demons who stood by the Cross, came first to the empty tomb, and was sent by the risen Lord to announce the Resurrection to the apostles.",
	lifeDates: "1st century AD",
	scriptureReference: "Luke 8:1–3; Matthew 27:55–61; 28:1–10; John 20:1–18",
	feastDays: "July 22",
	primaryReferences: [
		{
			label: "John 20:1–18"
		},
		{
			label: "CCC 641"
		}
	],
	keyMoments: [
		{
			title: "At the tomb",
			reference: "John 20:11–18",
			summary: "Weeping, she mistakes Jesus for the gardener until He speaks her name—“Mary”—and sends her to the brothers."
		}
	],
	sections: [
		{
			heading: "Who was Mary Magdalene?",
			paragraphs: [
				"Mary of Magdala followed Jesus after deliverance from seven demons. She is not identified by Scripture with the sinful woman of Luke 7 or with Mary of Bethany—though later tradition sometimes conflated them."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"She accompanies Jesus in Galilee, watches the crucifixion, notes the tomb, and brings spices at dawn. The risen Christ appears to her first among the disciples in John’s account; the Church names her apostolorum apostola."
			]
		},
		{
			heading: "Witness of the Resurrection",
			paragraphs: [
				"Mary Magdalene models converted love and courageous presence when most of the Twelve have fled. Easter faith begins with her commission."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Her feast was raised in rank by Pope Francis in 2016 as a feast of apostolic witness."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Stay near the Cross; return to the tomb; when He calls your name, run and tell the others."
			]
		}
	]
};

export default person;
