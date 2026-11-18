import type { OldTestamentPerson } from '../types';

const person: OldTestamentPerson = {
	order: 31,
	slug: "josiah",
	lastReviewed: "2026-11-18",
	title: "King Josiah",
	alsoKnownAs: "Josias",
	role: "king",
	excerpt: "Boy king who repaired the Temple, rediscovered the Book of the Law, and led Judah’s great reform—yet could not finally turn back the coming exile.",
	lifeDates: "reigned c. 640–609 BC",
	scriptureReference: "2 Kings 22–23; 2 Chronicles 34–35; Sirach 49:1–4",
	feastDays: "Remembered in Scripture for wholehearted reform",
	primaryReferences: [
		{
			label: "2 Kings 22–23"
		}
	],
	keyMoments: [
		{
			title: "The book of the Law found",
			reference: "2 Kings 22:8–13",
			summary: "During Temple repairs Hilkiah finds the Law; Josiah tears his clothes and seeks the Lord’s word through Huldah the prophetess."
		},
		{
			title: "Covenant renewal",
			reference: "2 Kings 23",
			summary: "Josiah reads the Law to the people, destroys high places, and keeps a Passover unmatched since the judges."
		}
	],
	sections: [
		{
			heading: "Who was Josiah?",
			paragraphs: [
				"Josiah son of Amon began to seek God as a youth. Scripture rates him with David for turning to the Lord with all his heart."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"His reform reached Bethel and the former northern shrines. Jeremiah prophesied in his days. He died in battle at Megiddo against Pharaoh Neco—lamented bitterly. After him Judah slid quickly toward exile."
			]
		},
		{
			heading: "Reform and the Word",
			paragraphs: [
				"Josiah shows what happens when Scripture is rediscovered by a responsive heart. Yet personal holiness in a king cannot automatically cancel a people’s long rebellion—exile still comes."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Sirach says his memory is sweet like music at a banquet."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"When God’s Word unsettles you, do not delay reform. Tear down the high places you have grown used to."
			]
		}
	]
};

export default person;
