import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 7,
	slug: "john-the-baptist",
	lastReviewed: "2026-11-18",
	title: "St. John the Baptist",
	alsoKnownAs: "John the Forerunner; the Baptiser",
	role: "forerunner",
	excerpt: "Prophet who leapt in Elizabeth’s womb, preached repentance at the Jordan, baptised Jesus, and died for truth—greatest born of women, yet least in the Kingdom he announced.",
	lifeDates: "c. 1 BC–c. AD 30",
	scriptureReference: "Luke 1; 3; Matthew 3; 11; 14; John 1; 3",
	feastDays: "June 24 (Nativity); August 29 (Passion)",
	primaryReferences: [
		{
			label: "Luke 1; 3; Matthew 14"
		},
		{
			label: "CCC 523, 717–720"
		}
	],
	keyMoments: [
		{
			title: "Voice in the wilderness",
			reference: "Luke 3:1–18",
			summary: "John proclaims a baptism of repentance and points beyond himself to the mightier One."
		},
		{
			title: "Behold the Lamb",
			reference: "John 1:29–34",
			summary: "He identifies Jesus as the Lamb of God who takes away the sin of the world."
		},
		{
			title: "Martyrdom",
			reference: "Matthew 14:1–12",
			summary: "Imprisoned by Herod Antipas, John is beheaded at Herodias’s request—witness unto death."
		}
	],
	sections: [
		{
			heading: "Who was John?",
			paragraphs: [
				"John, son of Zechariah and Elizabeth, lived as a Nazirite-like ascetic in the desert, clothed in camel’s hair, eating locusts and wild honey.",
				"Jesus calls him more than a prophet—the Elijah who was to come. He must decrease so Christ may increase."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"Crowds, tax collectors, and soldiers sought his baptism. He confronted Herod’s unlawful marriage and sealed his testimony in blood at Machaerus. Disciples of John later joined Jesus; some confusion lingered until the Gospel clarified his role as friend of the Bridegroom."
			]
		},
		{
			heading: "Forerunner and friend",
			paragraphs: [
				"John bridges Old and New: last prophet of the old order and herald of the Lamb. Advent and his nativity feast keep his cry alive."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"His head is venerated in tradition; his words still prepare the way of the Lord in every generation."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Point away from yourself toward Christ—and tell the truth even when it costs your head."
			]
		}
	]
};

export default person;
