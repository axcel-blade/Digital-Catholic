import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'act-of-love',
	title: 'Act of Love',
	alsoKnownAs: 'Act of Charity',
	excerpt: 'Traditional prayer of love for God above all things and for one’s neighbour, including forgiveness of those who have hurt us.',
	text: 'O my God, I love Thee above all things, with my whole heart and soul, because Thou art all good and worthy of all love. I love my neighbour as myself for the love of Thee. I forgive all who have injured me, and ask pardon of all whom I have injured. Amen.',
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Theological virtues', url: 'https://en.wikipedia.org/wiki/Theological_virtues' },
		{ label: 'Catechism of the Catholic Church, §§1822–1829 (Charity)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'Matthew 22:34–40 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/matthew/22' },
	],
	sections: [
		{
			heading: 'What is the Act of Love?',
			paragraphs: [
				'Charity is the theological virtue “by which we love God above all things for his own sake, and our neighbour as ourselves for the love of God” (CCC 1822). It is the greatest of the virtues (1 Corinthians 13:13).',
				'The Act of Love follows Jesus’ two great commandments: to love God with all your heart and soul, and to love your neighbour as yourself (Matthew 22:37–39). It also includes forgiveness given and asked for, because love of neighbour is proven in reconciliation.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'It is prayed with the Acts of Faith and Hope, often at the beginning or end of the day. It is especially fitting before receiving Holy Communion and when one is struggling to forgive someone.',
				'Saying “I love Thee above all things” is a commitment to grow in that love day by day, with God’s help.',
			],
		},
	],
};

export default prayer;
