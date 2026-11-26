import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'prayer-before-a-crucifix',
	title: 'Prayer Before a Crucifix',
	alsoKnownAs: 'En ego, O bone et dulcissime Iesu',
	excerpt: 'Traditional prayer of contemplation on Christ’s five wounds, asking for faith, hope, charity and true sorrow for sin.',
	text: 'Look down upon me, good and gentle Jesus, while before Thy face I humbly kneel and, with burning soul, pray and beseech Thee to fix deep in my heart lively sentiments of faith, hope and charity; true contrition for my sins, and a firm purpose of amendment. While I contemplate, with great love and tender pity, Thy five most precious wounds, pondering over them within me and calling to mind the words which David, Thy prophet, said of Thee, my Jesus: “They have pierced My hands and My feet, they have numbered all My bones.” Amen.',
	relatedGuideTopic: { guide: 'church-history', slug: 'the-crucifix-symbol' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Psalm 22:17–18 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/psalms/22' },
		{ label: 'Catechism of the Catholic Church, §§616–618 (Christ’s sacrifice)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Prayer Before a Crucifix?',
			paragraphs: [
				'This prayer, known in Latin by its opening words En ego, O bone et dulcissime Iesu, invites the one praying to kneel before an image of Christ crucified and to meditate on his five wounds — in his hands, feet and side. It closes with words from Psalm 22, which the Church reads as a prophecy of the crucifixion: “they have pierced my hands and my feet; I can count all my bones.”',
				'The prayer asks for the three theological virtues and for true sorrow for sin with the resolve to change. It was long printed in prayer books for use after Holy Communion.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'It is traditionally prayed kneeling before a crucifix, especially after receiving Holy Communion, on Fridays and during Lent. The Church’s current Manual of Indulgences grants a plenary indulgence, under the usual conditions, for praying it devoutly before an image of Christ crucified after Communion on the Fridays of Lent.',
				'Gazing on the crucifix in this way echoes St. Paul: “the Son of God… loved me and gave himself for me” (Galatians 2:20).',
			],
		},
	],
};

export default prayer;
