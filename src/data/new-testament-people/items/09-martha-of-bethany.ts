import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 9,
	slug: "martha-of-bethany",
	lastReviewed: "2026-11-18",
	title: "St. Martha of Bethany",
	alsoKnownAs: "Martha, sister of Mary and Lazarus",
	role: "woman-disciple",
	excerpt: "Friend of Jesus who served Him in her home, confessed Him as the Christ at Lazarus’s tomb, and learned that one thing is needful amid many labours.",
	lifeDates: "1st century AD",
	scriptureReference: "Luke 10:38–42; John 11–12",
	feastDays: "July 29 (with Mary and Lazarus)",
	primaryReferences: [
		{
			label: "Luke 10:38–42; John 11"
		}
	],
	keyMoments: [
		{
			title: "Martha and Mary",
			reference: "Luke 10:38–42",
			summary: "Jesus tells Martha she is anxious about many things; Mary has chosen the better part—yet both sisters are loved."
		},
		{
			title: "Confession of faith",
			reference: "John 11:20–27",
			summary: "Martha meets Jesus on the road and confesses, “I believe that you are the Christ, the Son of God.”"
		}
	],
	sections: [
		{
			heading: "Who was Martha?",
			paragraphs: [
				"Martha of Bethany opened her house to Jesus. Active, practical, and bold in speech, she is patron of servers and homemakers."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"She remonstrates about her sister’s sitting, then later shows deep theological faith before Lazarus’s raising. At the supper in Bethany she serves again while Mary anoints Jesus."
			]
		},
		{
			heading: "Service and contemplation",
			paragraphs: [
				"The Church needs both Marthas and Marys. Jesus corrects anxiety, not hospitality itself—service ordered to His presence."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"With her siblings she is honoured on 29 July as a household of friends of Christ."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Serve generously—but do not let worry steal the better part of sitting with the Lord."
			]
		}
	]
};

export default person;
