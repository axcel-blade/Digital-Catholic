import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'novena-to-our-lady-of-guadalupe',
	title: 'Novena to Our Lady of Guadalupe',
	excerpt: 'Novena to Mary as she appeared to St. Juan Diego in Mexico in 1531, prayed from 3 to 11 December before her feast.',
	text: 'Our Lady of Guadalupe, Mother of the true God, you came to Juan Diego on the hill of Tepeyac and spoke to him with a mother’s tenderness. Look upon us also, your children, in our needs and sorrows. Bring us to your Son Jesus, protect the unborn and all who are poor and forgotten, and keep us under your mantle, as you promised: “Am I not here, I who am your mother?” Our Lady of Guadalupe, pray for us. Amen.',
	relatedSaint: 'blessed-virgin-mary',
	relatedApparition: 'guadalupe',
	relatedGuideTopic: { guide: 'saints', slug: 'the-our-lady-of-guadalupe-medal' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Our Lady of Guadalupe', url: 'https://en.wikipedia.org/wiki/Our_Lady_of_Guadalupe' },
		{ label: 'Catechism of the Catholic Church, §§963–970 (Mary, Mother of the Church)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Novena to Our Lady of Guadalupe?',
			paragraphs: [
				'In December 1531 the Virgin Mary appeared four times to St. Juan Diego Cuauhtlatoatzin at Tepeyac, near Mexico City, and left her image on his tilma, his cloak, among roses that bloomed out of season. Our Lady of Guadalupe is Patroness of the Americas and of the unborn, and her feast on 12 December is one of the greatest celebrations of the year in Mexico and across Latin America.',
				'Many forms of the novena exist. The short prayer above was written for this page; its closing words are the famous promise Mary gave to Juan Diego in the Nican Mopohua, the sixteenth-century Nahuatl account of the apparitions.',
			],
		},
		{
			heading: 'How to pray it',
			paragraphs: [
				'The novena is prayed from 3 to 11 December, ending on the eve of the feast. Each day, pray the prayer above, a decade of the Rosary, and your intentions. In many communities the novena ends with “Las Mañanitas,” a song sung to Our Lady before dawn on 12 December.',
				'The novena may be prayed at any time, especially for the protection of mothers and their unborn children.',
			],
		},
	],
};

export default prayer;
