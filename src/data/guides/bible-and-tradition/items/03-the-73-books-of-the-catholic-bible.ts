import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 3,
	title: 'The 73 books of the Catholic Bible',
	summary: 'Forty-six books of the Old Testament and twenty-seven of the New, recognised by the Church as inspired.',
	catechism: 'CCC 120; Council of Trent, Session IV (1546)',
	meaning: [
		'The Catholic Bible contains 73 books: 46 in the Old Testament and 27 in the New. The same list was affirmed by regional councils at Rome (382), Hippo (393), and Carthage (397), confirmed by the Council of Florence (1442), and solemnly defined by the Council of Trent in 1546.',
		'The New Testament is identical across Catholic, Orthodox, and Protestant Bibles. The difference lies in the Old Testament: Protestant Bibles generally contain 39 books, following the later Jewish canon, while Catholic Bibles include seven more books and longer forms of Esther and Daniel.',
	],
	points: {
		title: 'The canon at a glance',
		items: [
			'Pentateuch: Genesis to Deuteronomy (5 books)',
			'Historical books: Joshua to 2 Maccabees (16 books)',
			'Wisdom books: Job to Sirach (7 books)',
			'Prophets: Isaiah to Malachi (18 books)',
			'Gospels and Acts (5 books)',
			'Letters and Revelation (22 books)',
		],
	},
	links: [
		{ href: '/bible', label: 'Browse all 73 books' },
		{ href: '/bible/how-the-bible-was-formed', label: 'How the Bible was formed' },
	],
};

export default topic;
