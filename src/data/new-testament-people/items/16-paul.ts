import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 16,
	slug: "paul",
	lastReviewed: "2026-11-18",
	title: "St. Paul the Apostle",
	alsoKnownAs: "Saul of Tarsus; Apostle to the Gentiles",
	role: "apostle",
	excerpt: "Pharisee and persecutor converted on the Damascus road, who preached Christ crucified to the nations, founded churches, and wrote letters that still shape Catholic faith.",
	lifeDates: "c. AD 5–67",
	scriptureReference: "Acts 7–28; Romans–Philemon; 2 Peter 3:15–16",
	feastDays: "June 29 (with St. Peter); January 25 (Conversion)",
	relatedHref: "/saints/st-paul-the-apostle",
	relatedLabel: "Full saint biography",
	primaryReferences: [
		{
			label: "Acts 9; Galatians 1–2"
		},
		{
			label: "CCC 442, 639, 659"
		}
	],
	keyMoments: [
		{
			title: "Damascus road",
			reference: "Acts 9:1–22",
			summary: "A light from heaven fells Saul; the risen Jesus asks, “Why do you persecute me?” Ananias baptises him."
		},
		{
			title: "Council of Jerusalem",
			reference: "Acts 15",
			summary: "Paul argues that Gentiles need not keep the whole Mosaic Law; the apostles decide for freedom in Christ."
		},
		{
			title: "Martyrdom in Rome",
			reference: "Tradition; 2 Timothy 4",
			summary: "Under Nero, Paul is beheaded on the Ostian Way—finishing the race, keeping the faith."
		}
	],
	sections: [
		{
			heading: "Who was Paul?",
			paragraphs: [
				"Saul was a Benjaminite, trained under Gamaliel, zealous for the Law. As Paul he became the tireless missionary of grace. A fuller biography is among the saints."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"Three missionary journeys carried him across Asia Minor and Greece. He suffered beatings, shipwreck, and imprisonment, yet wrote to Rome, Corinth, Galatia, Philippi, and more. Luke’s Acts and Paul’s letters together sketch his path to Rome."
			]
		},
		{
			heading: "Gospel of grace",
			paragraphs: [
				"Paul proclaims justification by faith working through love, the Body of Christ, and the supremacy of charity. The Church’s theology is unthinkable without him."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Buried beneath St. Paul Outside the Walls; feast with Peter crowns June."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Let Christ turn your strongest certainties inside out—then spend them for the Gospel."
			]
		}
	]
};

export default person;
