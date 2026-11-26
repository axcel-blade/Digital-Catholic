import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'morning-offering',
	title: 'The Morning Offering',
	alsoKnownAs: 'O Jesus, through the Immaculate Heart of Mary',
	excerpt:
		'Prayer at the start of the day that offers all of one’s prayers, work, joys and sufferings to God through the Heart of Jesus.',
	text: 'O Jesus, through the Immaculate Heart of Mary, I offer Thee my prayers, works, joys and sufferings of this day for all the intentions of Thy Sacred Heart, in union with the Holy Sacrifice of the Mass throughout the world, in reparation for my sins, for the intentions of all our associates, and in particular for the intention of the Holy Father this month. Amen.',
	relatedGuideTopic: { guide: 'church-history', slug: 'the-sacred-heart-symbol' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Morning offering', url: 'https://en.wikipedia.org/wiki/Morning_offering' },
		{ label: 'Catechism of the Catholic Church, §§2659–2660 (Prayer in daily life)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Morning Offering?',
			paragraphs: [
				'The Morning Offering is a short prayer said on waking that gives the whole coming day to God. Instead of keeping prayer for a few moments, it turns every task, joy and difficulty of the day into an offering, joined to Christ’s own sacrifice offered in every Mass around the world.',
				'This form was written in 1844 by Fr. François-Xavier Gautrelet, a French Jesuit, for the seminarians he guided. It became the daily prayer of the Apostleship of Prayer (now the Pope’s Worldwide Prayer Network), which invites its members to pray each month for an intention chosen by the Pope.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'It is prayed first thing in the morning, often before getting out of bed. It reflects St. Paul’s teaching: “whatever you do, in word or deed, do everything in the name of the Lord Jesus” (Colossians 3:17).',
				'Many shorter and modern versions exist, but all share the same idea: that ordinary life, offered to God with love, becomes a form of prayer and a share in the work of salvation.',
			],
		},
	],
};

export default prayer;
