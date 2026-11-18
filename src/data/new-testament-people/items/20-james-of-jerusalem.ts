import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 20,
	slug: "james-of-jerusalem",
	lastReviewed: "2026-11-18",
	title: "St. James of Jerusalem",
	alsoKnownAs: "James the Just; brother of the Lord",
	role: "apostle",
	excerpt: "“Brother of the Lord” who led the Jerusalem church, spoke at the Council of Jerusalem, and wrote the Letter of James on faith perfected by works—martyred for Christ.",
	lifeDates: "d. c. AD 62",
	scriptureReference: "Acts 12:17; 15; 21:18; Galatians 1:19; 2:9; Letter of James; 1 Corinthians 15:7",
	feastDays: "May 3 (with Philip in the General Roman Calendar for James the Less—tradition often identifies them closely); May 1 Eastern",
	primaryReferences: [
		{
			label: "Acts 15; Letter of James"
		}
	],
	keyMoments: [
		{
			title: "Judgement at the Council",
			reference: "Acts 15:13–21",
			summary: "James summarises the decision welcoming Gentiles with a few necessary abstentions—pastoral wisdom for unity."
		}
	],
	sections: [
		{
			heading: "Who was James?",
			paragraphs: [
				"James was a relative of Jesus (brother in the Semitic sense) who became a pillar of the Jerusalem church. Josephus and Hegesippus recount his martyrdom under the high priest Ananus."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"The risen Lord appeared to him (1 Corinthians 15:7). Ascetic and revered even by many Jews as “the Just,” he steered Jewish Christianity through the Gentile question. His letter insists that faith without works is dead."
			]
		},
		{
			heading: "Faith and works",
			paragraphs: [
				"James balances Paul without contradicting him: saving faith is living faith. Catholic moral teaching leans on his epistle for social justice and control of the tongue."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"Thrown from the Temple and beaten to death in tradition—seal of the Just."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Lead with fairness toward both conscience and community—and let your works match your creed."
			]
		}
	]
};

export default person;
