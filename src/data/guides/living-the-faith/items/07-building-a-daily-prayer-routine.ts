import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 7,
	title: 'Building a daily prayer routine',
	summary: 'Small, faithful habits that keep the heart turned towards God throughout the day.',
	scripture: 'Psalm 5:4; Mark 1:35; 1 Thessalonians 5:16–18',
	catechism: 'CCC 2697–2699, 2720',
	meaning: [
		'The Catechism describes the rhythms of prayer that nourish continual prayer: morning and evening prayer, grace before and after meals, the Liturgy of the Hours, and Sunday Eucharist. Start small and be consistent; a few minutes every day are better than an hour now and then.',
		'Choose a regular time and place, and keep a Bible or prayer book there. Over time, add practices such as the Rosary, Lectio Divina, a visit to the Blessed Sacrament, or daily Mass when possible.',
	],
	points: {
		title: 'A simple daily rhythm',
		items: [
			'Morning: offer the day to God with a Morning Offering',
			'Meals: say grace',
			'Midday: pause for the Angelus',
			'During the day: read the Gospel of the day for five or ten minutes',
			'Evening: examine your conscience, give thanks, and ask forgiveness',
			'Weekly: Sunday Mass; monthly: Confession',
		],
	},
	links: [
		{ href: '/prayer-and-devotions', label: 'Catholic prayer and devotions' },
		{ href: '/rosary', label: 'Pray the Rosary' },
	],
};

export default topic;
