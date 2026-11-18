import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 23,
	slug: "timothy",
	lastReviewed: "2026-11-18",
	title: "St. Timothy",
	alsoKnownAs: "Bishop of Ephesus; Paul’s beloved child",
	role: "coworker",
	excerpt: "Young companion of Paul, circumcised for mission’s sake, entrusted with churches and two New Testament letters—model of pastoral care under fire.",
	lifeDates: "1st century AD",
	scriptureReference: "Acts 16:1–3; 1–2 Timothy; Philippians 2:19–22; 1 Corinthians 4:17",
	feastDays: "January 26 (with Titus and Silas)",
	primaryReferences: [
		{
			label: "1–2 Timothy; Acts 16"
		}
	],
	keyMoments: [
		{
			title: "Fan into flame",
			reference: "2 Timothy 1:6–8",
			summary: "Paul urges Timothy to rekindle the gift of God through laying on of hands and not be ashamed of the Gospel."
		}
	],
	sections: [
		{
			heading: "Who was Timothy?",
			paragraphs: [
				"Timothy of Lystra had a Jewish mother, Eunice, and a Greek father. Paul called him a true child in the faith."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"He co-authored letters, carried correspondence, and shepherded Ephesus amid false teachers. Tradition says he died a martyr intervening against a pagan festival. The pastoral epistles sketch bishops, deacons, widows, and Scripture’s inspiration."
			]
		},
		{
			heading: "Young pastor",
			paragraphs: [
				"Let no one despise your youth—Timothy embodies that charge. Mentorship from Paul shows how apostolic tradition is handed on."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Honoured with Titus as a pillar of the pastoral office."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Guard the deposit of faith—and visit those your mentor would visit if he could."
			]
		}
	]
};

export default person;
