import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 27,
	slug: "lydia",
	lastReviewed: "2026-11-18",
	title: "Lydia of Thyatira",
	alsoKnownAs: "Lydia the seller of purple",
	role: "woman-disciple",
	excerpt: "God-fearing businesswoman of Philippi whose heart the Lord opened at Paul’s preaching—first recorded convert in Europe and host of a house church.",
	lifeDates: "1st century AD",
	scriptureReference: "Acts 16:11–15, 40",
	feastDays: "August 3 (Roman Martyrology)",
	primaryReferences: [
		{
			label: "Acts 16:11–15"
		}
	],
	keyMoments: [
		{
			title: "The Lord opened her heart",
			reference: "Acts 16:14–15",
			summary: "Lydia listens at the river, is baptised with her household, and prevails on Paul to stay in her house."
		}
	],
	sections: [
		{
			heading: "Who was Lydia?",
			paragraphs: [
				"Lydia dealt in purple goods from Thyatira and lived in Philippi. She worshipped God among the women at the place of prayer by the river."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"Her conversion inaugurates the Macedonian mission. After Paul and Silas leave prison they encourage the brethren at Lydia’s house—centre of the new church."
			]
		},
		{
			heading: "Patron of hospitality and trade",
			paragraphs: [
				"Lydia shows laywomen as first fruits of mission and as leaders of domestic churches. Commerce becomes consecrated."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Philippi’s joy-filled letter later grows from soil she helped till."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Offer your house and livelihood when God opens your heart—hospitality is evangelisation."
			]
		}
	]
};

export default person;
