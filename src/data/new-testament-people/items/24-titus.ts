import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 24,
	slug: "titus",
	lastReviewed: "2026-11-18",
	title: "St. Titus",
	alsoKnownAs: "Bishop of Crete",
	role: "coworker",
	excerpt: "Gentile coworker of Paul who handled the tense Corinthian reconciliation and organised the Church on Crete—addressee of the Epistle to Titus.",
	lifeDates: "1st century AD",
	scriptureReference: "Galatians 2:1–3; 2 Corinthians 7–8; Titus",
	feastDays: "January 26 (with Timothy and Silas)",
	primaryReferences: [
		{
			label: "Epistle to Titus; 2 Corinthians 7–8"
		}
	],
	keyMoments: [
		{
			title: "Uncircumcised coworker",
			reference: "Galatians 2:1–3",
			summary: "Titus stands as proof that Gentile believers need not be circumcised to belong fully."
		}
	],
	sections: [
		{
			heading: "Who was Titus?",
			paragraphs: [
				"Titus, a Greek, accompanied Paul to Jerusalem as a living argument for Gospel freedom. Paul trusted him with delicate collections and corrections."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"On Crete he was to appoint elders in every town and teach sound doctrine. Tradition makes him first bishop there. His letter stresses grace that trains us to renounce ungodliness."
			]
		},
		{
			heading: "Pastoral firmness",
			paragraphs: [
				"Titus shows administration as a spiritual gift. Unity sometimes needs a firm, affectionate envoy."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Crete remembers him as founder; the Church reads his epistle for holy orders and household holiness."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Accept hard assignments that heal churches—and teach grace that produces good works."
			]
		}
	]
};

export default person;
