import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 21,
	slug: "stephen",
	lastReviewed: "2026-11-18",
	title: "St. Stephen",
	alsoKnownAs: "Protomartyr",
	role: "martyr",
	excerpt: "One of the seven deacons, full of grace and power, who preached Christ before the Sanhedrin and was stoned—first martyr of the Church, whose death Saul approved.",
	lifeDates: "d. c. AD 34–36",
	scriptureReference: "Acts 6–7",
	feastDays: "December 26",
	primaryReferences: [
		{
			label: "Acts 6–7"
		},
		{
			label: "CCC 2473–2474"
		}
	],
	keyMoments: [
		{
			title: "Face like an angel",
			reference: "Acts 6:8–15",
			summary: "Stephen’s wisdom cannot be withstood; false witnesses accuse him of speaking against Temple and Law."
		},
		{
			title: "Vision and forgiveness",
			reference: "Acts 7:54–60",
			summary: "He sees the Son of Man standing at God’s right hand and prays, “Lord, do not hold this sin against them.”"
		}
	],
	sections: [
		{
			heading: "Who was Stephen?",
			paragraphs: [
				"Stephen, a Hellenist, was chosen to serve widows at table yet shone as preacher and wonder-worker. His Greek name marks the Church’s wide reach."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"His long speech retells Israel’s history as resistance to the Holy Spirit culminating in the murder of the Righteous One. As stones fall he entrusts his spirit to Jesus—echo of Calvary. Devout men bury him; persecution scatters the Church for mission."
			]
		},
		{
			heading: "First of the martyrs",
			paragraphs: [
				"Stephen shows diaconal service joined to bold proclamation. His forgiveness mid-stoning converts the meaning of violence into seed (Tertullian)."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Boxing Day in many cultures is his feast—gifts recalling charity under persecution."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Serve tables without silencing truth—and forgive while the stones are still in the air."
			]
		}
	]
};

export default person;
