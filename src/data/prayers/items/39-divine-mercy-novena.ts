import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'divine-mercy-novena',
	title: 'Divine Mercy Novena',
	excerpt: 'Novena from the revelations to St. Faustina Kowalska, prayed from Good Friday to Divine Mercy Sunday, bringing a different group of souls to Christ’s mercy each day.',
	text: 'Jesus, I trust in You.',
	relatedGuideTopic: { guide: 'prayers', slug: 'the-divine-mercy-chaplet' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Divine Mercy', url: 'https://en.wikipedia.org/wiki/Divine_Mercy' },
		{ label: 'Wikipedia: Faustina Kowalska', url: 'https://en.wikipedia.org/wiki/Faustina_Kowalska' },
		{ label: 'Catechism of the Catholic Church, §§1846–1848 (Mercy and sin)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Divine Mercy Novena?',
			paragraphs: [
				'St. Faustina Kowalska (1905–1938), a Polish sister of the Congregation of Our Lady of Mercy, recorded in her Diary that Jesus asked her to make a novena before the Feast of Mercy, from Good Friday to the Sunday after Easter. For each of the nine days he named a group of souls to be brought to his merciful Heart, and asked that they be immersed in the “ocean of my mercy.” Pope St. John Paul II canonised Faustina in 2000 and established Divine Mercy Sunday for the whole Church.',
				'Because the English translation of St. Faustina’s Diary is under copyright, the full daily prayers are not reproduced here. The short prayer above, “Jesus, I trust in You,” is the words inscribed beneath the Divine Mercy image. The daily prayers can be found in the Diary itself and in approved Divine Mercy prayer books.',
			],
		},
		{
			heading: 'How to pray it',
			paragraphs: [
				'Each day, a different group is brought before Christ: on the first day, all mankind, especially sinners; on the second, priests and religious; on the third, all devout and faithful souls; on the fourth, those who do not believe in God and those who do not yet know Christ; on the fifth, Christians separated from the Church; on the sixth, the meek and humble and little children; on the seventh, those who especially venerate and glorify God’s mercy; on the eighth, the souls in purgatory; and on the ninth, souls who have grown lukewarm.',
				'After the day’s prayer, the Divine Mercy Chaplet is prayed on ordinary rosary beads. The novena may also be prayed at any other time of the year.',
			],
		},
	],
};

export default prayer;
