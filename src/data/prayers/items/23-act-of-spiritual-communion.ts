import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'act-of-spiritual-communion',
	title: 'Act of Spiritual Communion',
	alsoKnownAs: 'My Jesus, I believe that Thou art present',
	excerpt: 'Prayer by St. Alphonsus Liguori for those who cannot receive the Eucharist, asking Jesus to come spiritually into the heart.',
	text: 'My Jesus, I believe that Thou art present in the Most Holy Sacrament. I love Thee above all things, and I desire to receive Thee into my soul. Since I cannot at this moment receive Thee sacramentally, come at least spiritually into my heart. I embrace Thee as if Thou wert already there and unite myself wholly to Thee. Never permit me to be separated from Thee. Amen.',
	relatedGuideTopic: { guide: 'church-history', slug: 'the-loaves-and-fishes-symbol' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Spiritual communion', url: 'https://en.wikipedia.org/wiki/Spiritual_communion' },
		{ label: 'Catechism of the Catholic Church, §§1384–1390 (Holy Communion)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is a Spiritual Communion?',
			paragraphs: [
				'A spiritual communion is an act of faith and desire by which a person who cannot receive the Eucharist sacramentally unites themselves to Christ in love. The Council of Trent recognised that the faithful may receive the fruits of the sacrament spiritually through a living faith and desire.',
				'This form was written by St. Alphonsus Liguori (1696–1787), a Doctor of the Church, in his devotional book Visits to the Blessed Sacrament. He encouraged the faithful to make spiritual communions often throughout the day.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'It is prayed by those unable to receive Communion: the sick and housebound, those watching Mass on television or online, those not in a state of grace who are preparing for confession, and those prevented from attending Mass. Many Catholics prayed it daily during the COVID-19 pandemic, when public Masses were suspended.',
				'It is also a fitting prayer during Eucharistic adoration or a visit to the Blessed Sacrament.',
			],
		},
	],
};

export default prayer;
