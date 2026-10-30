import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 8,
	title: 'Practising the faith at university and in the workplace',
	summary: 'Bringing Christ into study, career, and friendships with integrity and joy.',
	scripture: 'Colossians 3:17, 23; Matthew 5:13–16',
	catechism: 'CCC 898–900, 2427–2428',
	meaning: [
		'University can be a time of freedom and testing. Many campuses have a Catholic chaplaincy or Newman Centre offering Mass, Confession, study groups, and community. Seek out friends who share your faith, keep Sunday Mass a non-negotiable priority, and bring your questions into the open—the Church has a rich intellectual tradition that welcomes them.',
		'At work, the laity are called to sanctify the world from within. St. Josemaría Escrivá taught that ordinary work, done well and offered to God, can become a path to holiness. Practise honesty and fairness, treat colleagues with charity, rest on Sundays where possible, and look for natural opportunities to witness to your faith—most often by the way you live.',
	],
	points: {
		title: 'Practical ideas',
		items: [
			'Find the nearest chaplaincy, Newman Centre, or parish and attend regularly',
			'Join or start a Catholic society, Bible study, or professional network',
			'Pray briefly before starting work or study each day',
			'Offer up difficulties and successes alike',
			'Keep Sundays for worship, rest, and family',
		],
	},
	links: [
		{ href: '/social-teaching', label: 'Workers’ rights and the dignity of work' },
	],
	image: { alt: 'A farmer striding across a ploughed field scattering seed', caption: 'Vincent van Gogh, The Sower, after Millet (1889). Public domain.' },
};

export default topic;
