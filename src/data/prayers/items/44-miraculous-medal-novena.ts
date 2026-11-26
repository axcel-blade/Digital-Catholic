import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'miraculous-medal-novena',
	title: 'Miraculous Medal Novena',
	alsoKnownAs: 'Novena to Our Lady of the Miraculous Medal',
	excerpt: 'Novena to Mary based on the apparitions to St. Catherine Labouré in 1830, prayed especially before the feast on 27 November.',
	text: 'O Mary, conceived without sin, pray for us who have recourse to thee. (three times) Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thine intercession was left unaided. Inspired by this confidence, I fly unto thee, O Virgin of virgins, my Mother; to thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.',
	relatedSaint: 'blessed-virgin-mary',
	relatedApparition: 'miraculous-medal',
	relatedGuideTopic: { guide: 'saints', slug: 'the-miraculous-medal' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Miraculous Medal', url: 'https://en.wikipedia.org/wiki/Miraculous_Medal' },
		{ label: 'Catechism of the Catholic Church, §§2673–2679 (In communion with the holy Mother of God)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Miraculous Medal Novena?',
			paragraphs: [
				'In 1830 the Virgin Mary appeared to St. Catherine Labouré in Paris and showed her the design of the Miraculous Medal, encircled by the prayer “O Mary, conceived without sin, pray for us who have recourse to thee.” Devotion to Our Lady of the Miraculous Medal grew quickly, and in the twentieth century the Vincentian priests of the Central Association of the Miraculous Medal promoted a perpetual novena in her honour, held weekly in many parishes, often on Mondays.',
				'The official novena booklet’s prayers are protected by copyright and are not reproduced here. The prayer above joins the medal’s own invocation with the traditional Memorare, a simple form many Catholics use when praying the novena privately.',
			],
		},
		{
			heading: 'How to pray it',
			paragraphs: [
				'Pray the prayer above on nine consecutive days, adding your intentions and a Hail Mary. It is especially prayed from 18 to 26 November, before the feast of Our Lady of the Miraculous Medal on 27 November, the anniversary of the apparition in which Mary showed Catherine the medal.',
				'Many who pray the novena also wear the Miraculous Medal as a sign of trust in Mary’s intercession.',
			],
		},
	],
};

export default prayer;
