import type { OldTestamentPerson } from '../types';

const person: OldTestamentPerson = {
	order: 10,
	slug: "daniel",
	title: "Daniel",
	alsoKnownAs: "Dan’el",
	role: "major-prophet",
	excerpt: "Jewish exile at the Babylonian and Persian courts who interpreted dreams, survived the lions’ den, and received visions of successive kingdoms and the coming “Son of Man.”",
	lifeDates: "6th century BC (setting of the book)",
	scriptureReference: "Book of Daniel (including deuterocanonical sections in the Catholic canon)",
	feastDays: "July 21 (Roman Martyrology)",
	lastReviewed: "2026-11-18",
	primaryReferences: [
		{
			label: "Book of Daniel (including deuterocanonical sections in the Catholic canon)"
		}
	],
	prophecies: [
		{
			title: "The stone that becomes a mountain",
			reference: "Daniel 2:31–45",
			summary: "A statue of successive kingdoms is shattered by a stone “cut without hands” that becomes a mountain filling the earth—God’s everlasting kingdom, identified by the Church with Christ’s reign."
		},
		{
			title: "One like a Son of Man",
			reference: "Daniel 7:13–14",
			summary: "One like a son of man comes with the clouds of heaven and receives everlasting dominion. Jesus applies this vision to Himself before the Sanhedrin (Mark 14:62)."
		},
		{
			title: "The seventy weeks",
			reference: "Daniel 9:24–27",
			summary: "Seventy weeks of years are decreed to finish transgression and anoint a most holy. Christian tradition has long read this timetable as pointing toward the messianic age fulfilled in Christ."
		},
		{
			title: "Resurrection of the dead",
			reference: "Daniel 12:2–3",
			summary: "Many who sleep in the dust shall awake, some to everlasting life. One of the clearest Old Testament witnesses to bodily resurrection, affirmed in Catholic faith (CCC 988–1001)."
		}
	],
	sections: [
		{
			heading: "Who was Daniel?",
			paragraphs: [
				"Daniel was taken as a youth to Babylon, trained in the literature of the Chaldeans, yet refused to defile himself with the king’s food. God gave him wisdom to interpret dreams and visions that no magician could explain.",
				"His book combines court tales of fidelity under pagan rule with apocalyptic visions that reveal God’s sovereignty over empires—central for Catholic hope in the final kingdom of God."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"Daniel interpreted Nebuchadnezzar’s statue dream and the writing on the wall at Belshazzar’s feast. Under Darius he was cast into a den of lions for praying to God and was delivered unharmed. His three companions—Shadrach, Meshach, and Abednego—survived the fiery furnace.",
				"Visions of four beasts, a ram and goat, and the seventy weeks of years frame history under divine judgment. The Catholic canon also includes the stories of Susanna and of Bel and the Dragon, and the Prayer of Azariah with the Song of the Three Young Men in the furnace—prayed in the liturgy."
			]
		},
		{
			heading: "Ministry and message",
			paragraphs: [
				"Daniel models prayer three times a day, fasting, and courage before kings. His visions teach that earthly kingdoms rise and fall, but God’s kingdom shall never be destroyed. Jesus’ favourite self-designation, “Son of Man,” draws on Daniel 7.",
				"Gabriel’s words about anointed leadership and the end of sin (Daniel 9) feed messianic expectation that the New Testament proclaims fulfilled in Christ."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Daniel is a patron of fidelity in diaspora and of trust under persecution. The furnace hymn enters Catholic Morning Prayer; apocalyptic imagery informs later Scripture, including Revelation.",
				"His life says that wisdom and holiness are possible even in a hostile culture when the heart remains undivided."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Serve faithfully in secular settings without surrendering worship. God is Lord of history when empires seem absolute."
			]
		}
	]
};

export default person;
