import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 25,
	slug: "silas",
	lastReviewed: "2026-11-18",
	title: "St. Silas",
	alsoKnownAs: "Silvanus",
	role: "coworker",
	excerpt: "Leading brother of the Jerusalem church who carried the Council’s letter, sang hymns with Paul in a Philippian jail, and is named with Paul and Timothy in the Thessalonian letters.",
	lifeDates: "1st century AD",
	scriptureReference: "Acts 15–18; 1 Thessalonians 1:1; 1 Peter 5:12",
	feastDays: "January 26 (with Timothy and Titus)",
	primaryReferences: [
		{
			label: "Acts 15–16"
		}
	],
	keyMoments: [
		{
			title: "Hymns at midnight",
			reference: "Acts 16:25–34",
			summary: "Beaten and chained, Paul and Silas pray and sing; an earthquake opens doors; the jailer is baptised."
		}
	],
	sections: [
		{
			heading: "Who was Silas?",
			paragraphs: [
				"Silas (Silvanus in Latin form) was a prophet who encouraged the brethren. He replaced Barnabas as Paul’s partner after the Mark dispute."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"He endures imprisonment, helps plant churches in Macedonia and Achaia, and later seems linked with Peter’s first letter as a faithful brother. Tradition varies on his end."
			]
		},
		{
			heading: "Worship under wounds",
			paragraphs: [
				"Silas teaches joy in affliction. Midnight praise precedes conversion of a household."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Honoured among Paul’s companions as a bridge between Jerusalem and the Gentile mission."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Sing when you are chained—someone in the next cell may be listening toward faith."
			]
		}
	]
};

export default person;
