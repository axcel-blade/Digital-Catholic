import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'novena-for-the-holy-souls',
	title: 'Novena for the Holy Souls in Purgatory',
	alsoKnownAs: 'Prayer of St. Gertrude',
	excerpt: 'Novena of prayer for the faithful departed, prayed especially before All Souls’ Day on 2 November and throughout November.',
	text: 'Eternal Father, I offer Thee the Most Precious Blood of Thy Divine Son, Jesus, in union with the Masses said throughout the world today, for all the holy souls in purgatory, for sinners everywhere, for sinners in the universal Church, those in my own home and within my family. Amen. Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.',
	relatedGuideTopic: { guide: 'saints', slug: 'what-happens-to-our-guardian-angel-after-we-die' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: '2 Maccabees 12:43–46 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/2maccabees/12' },
		{ label: 'Catechism of the Catholic Church, §§1030–1032 (The final purification, or purgatory)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'Wikipedia: Gertrude the Great', url: 'https://en.wikipedia.org/wiki/Gertrude_the_Great' },
	],
	sections: [
		{
			heading: 'What is the Novena for the Holy Souls?',
			paragraphs: [
				'The Church teaches that those who die in God’s grace but are not yet fully purified undergo purification after death, so as to achieve the holiness necessary to enter heaven. This is called purgatory (CCC 1030–1031). From the beginning the Church has honoured the memory of the dead and offered prayers for them, above all the Eucharistic sacrifice (CCC 1032).',
				'The prayer above is popularly called the Prayer of St. Gertrude, after St. Gertrude the Great (1256–c. 1302), a German Benedictine mystic. Its link with her, and the promises sometimes printed with it, cannot be traced to her own writings, but the prayer itself is a beautiful offering of Christ’s Blood for the dead and for sinners.',
			],
		},
		{
			heading: 'How to pray it',
			paragraphs: [
				'The novena is traditionally prayed from 24 October to 1 November, ending on the eve of All Souls’ Day, 2 November. Many continue to pray for the dead throughout November, the month of the Holy Souls. Each day, pray the prayer above, a decade of the Rosary, and the Eternal Rest prayer for particular loved ones who have died.',
				'Visiting a cemetery and praying for the dead from 1 to 8 November is one of the traditional good works for the souls in purgatory.',
			],
		},
	],
};

export default prayer;
