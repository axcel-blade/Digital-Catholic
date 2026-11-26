import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'novena-to-the-immaculate-conception',
	title: 'Novena to the Immaculate Conception',
	alsoKnownAs: 'Tota pulchra es',
	excerpt: 'Novena prayed from 29 November to 7 December in preparation for the Solemnity of the Immaculate Conception on 8 December.',
	text: 'You are all beautiful, O Mary, and the original stain is not in you. You are the glory of Jerusalem, you are the joy of Israel, you are the honour of our people, you are the advocate of sinners. O Mary, Virgin most prudent, Mother most merciful, pray for us, intercede for us with our Lord Jesus Christ. Amen. O Mary, conceived without sin, pray for us who have recourse to thee.',
	relatedSaint: 'blessed-virgin-mary',
	relatedGuideTopic: { guide: 'saints', slug: 'the-immaculate-conception' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Pope Pius IX, Apostolic Constitution Ineffabilis Deus (1854)', url: 'https://en.wikipedia.org/wiki/Ineffabilis_Deus' },
		{ label: 'Wikipedia: Tota pulchra es', url: 'https://en.wikipedia.org/wiki/Tota_pulchra_es' },
		{ label: 'Catechism of the Catholic Church, §§490–493 (The Immaculate Conception)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Novena to the Immaculate Conception?',
			paragraphs: [
				'The Immaculate Conception is the dogma, solemnly defined by Pope Pius IX in 1854, that the Virgin Mary was preserved free from all stain of original sin from the first moment of her conception, by a singular grace of God and in view of the merits of Jesus Christ (CCC 491). The Solemnity of the Immaculate Conception on 8 December is a holy day of obligation in many countries.',
				'The prayer given here combines the ancient antiphon Tota pulchra es, “You are all beautiful,” sung at Vespers on the solemnity, in a close translation made for this page, with the invocation of the Miraculous Medal, “O Mary, conceived without sin.”',
			],
		},
		{
			heading: 'How to pray it',
			paragraphs: [
				'The novena is prayed for nine days from 29 November to 7 December, ending on the eve of the solemnity. Each day, pray the prayer above, followed by a Hail Mary or a decade of the Rosary, and present your intentions to Mary.',
				'The Latin antiphon reads: Tota pulchra es, Maria, et macula originalis non est in te. Tu gloria Ierusalem, tu laetitia Israel, tu honorificentia populi nostri, tu advocata peccatorum. O Maria, Virgo prudentissima, Mater clementissima, ora pro nobis, intercede pro nobis ad Dominum Iesum Christum.',
			],
		},
	],
};

export default prayer;
