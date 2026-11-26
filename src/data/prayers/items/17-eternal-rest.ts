import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'eternal-rest',
	title: 'Eternal Rest',
	alsoKnownAs: 'Requiem aeternam',
	excerpt: 'Prayer for the souls of the dead, asking God to grant them eternal rest and the light of his presence.',
	text: 'Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen. May their souls and the souls of all the faithful departed, through the mercy of God, rest in peace. Amen.',
	relatedGuideTopic: { guide: 'saints', slug: 'what-happens-to-our-guardian-angel-after-we-die' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Eternal Rest', url: 'https://en.wikipedia.org/wiki/Eternal_Rest' },
		{ label: '2 Maccabees 12:43–46 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/2maccabees/12' },
		{ label: 'Catechism of the Catholic Church, §§1030–1032 (Purification after death)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Eternal Rest prayer?',
			paragraphs: [
				'The Eternal Rest prayer, in Latin Requiem aeternam, asks God to welcome the dead into his peace. Its words are drawn from 2 Esdras 2:34–35, an ancient Jewish-Christian text, and they open the Church’s traditional Mass for the dead, which is why that Mass is called a “Requiem.”',
				'The Church has always prayed for the dead. Scripture praises Judas Maccabeus for making atonement for the dead “so that they might be delivered from their sin” (2 Maccabees 12:46), and the Catechism teaches that prayer, especially the Eucharist, helps those being purified after death (CCC 1032).',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'Catholics pray it on hearing of a death, at funerals and graves, at the end of grace after meals, after each decade of the Rosary in some traditions, and especially in November, the month dedicated to the Holy Souls, and on All Souls’ Day, 2 November.',
				'The prayer is an act of charity: by praying for the dead we remain united with them in the communion of saints.',
			],
		},
	],
};

export default prayer;
