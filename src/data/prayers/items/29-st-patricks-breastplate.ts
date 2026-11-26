import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'st-patricks-breastplate',
	title: 'St. Patrick’s Breastplate',
	alsoKnownAs: 'The Lorica of St. Patrick; Christ be with me',
	excerpt: 'Ancient Irish prayer of protection that surrounds the one who prays with the presence of Christ on every side.',
	text: 'Christ be with me, Christ within me, Christ behind me, Christ before me, Christ beside me, Christ to win me, Christ to comfort and restore me. Christ beneath me, Christ above me, Christ in quiet, Christ in danger, Christ in hearts of all that love me, Christ in mouth of friend and stranger.',
	relatedSaint: 'st-patrick',
	relatedGuideTopic: { guide: 'church-history', slug: 'symbols-of-the-trinity' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Saint Patrick’s Breastplate', url: 'https://en.wikipedia.org/wiki/Saint_Patrick%27s_Breastplate' },
		{ label: 'Ephesians 6:10–17 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/ephesians/6' },
	],
	sections: [
		{
			heading: 'What is St. Patrick’s Breastplate?',
			paragraphs: [
				'St. Patrick’s Breastplate is a long Old Irish prayer of protection, also called a lorica, from the Latin for a soldier’s breastplate. It recalls St. Paul’s call to “put on the whole armour of God” (Ephesians 6:11). It begins, “I arise today through a mighty strength, the invocation of the Trinity,” and calls on the power of Christ, the angels, the saints and creation itself against every evil.',
				'Tradition attributes it to St. Patrick, the apostle of Ireland in the fifth century, though scholars generally date the text in its present form to around the eighth century. The section given here is the best-known passage, in the verse translation by Cecil Frances Alexander published in 1889.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'It is prayed especially on St. Patrick’s Day, 17 March, and as a morning prayer of protection before the day’s work or a journey. Its hymn version is sung in many churches.',
				'The “Christ be with me” passage reminds believers that Christ surrounds them on every side, in every circumstance and in every person they meet.',
			],
		},
	],
};

export default prayer;
