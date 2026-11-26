import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'surrender-novena',
	title: 'The Surrender Novena',
	alsoKnownAs: 'Novena of Surrender to the Will of God',
	excerpt: 'Twentieth-century novena of trust from Fr. Dolindo Ruotolo of Naples, built around one repeated prayer: “O Jesus, I surrender myself to You, take care of everything!”',
	text: 'O Jesus, I surrender myself to You, take care of everything!',
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Dolindo Ruotolo', url: 'https://en.wikipedia.org/wiki/Dolindo_Ruotolo' },
		{ label: 'Matthew 6:25–34 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/matthew/6' },
	],
	sections: [
		{
			heading: 'What is the Surrender Novena?',
			paragraphs: [
				'The Surrender Novena comes from the writings of Fr. Dolindo Ruotolo (1882–1970), a priest of Naples known for his holiness, his sufferings and his long commentary on the whole Bible. He was a friend of St. Padre Pio, and his cause for beatification has been opened, so he is called a Servant of God.',
				'The novena is written as if Jesus were speaking to the soul, gently urging it to stop worrying and to hand every problem over to him completely, instead of trying to solve things alone or telling God how to act. Each day ends with the same short prayer, repeated ten times: “O Jesus, I surrender myself to You, take care of everything!” Because English translations of the daily meditations are protected by copyright, only this refrain is given here.',
			],
		},
		{
			heading: 'How to pray it',
			paragraphs: [
				'Each day for nine days, read the meditation for that day, then repeat the prayer of surrender ten times, slowly and from the heart. Many people keep the refrain as a short prayer throughout the day, especially in moments of anxiety.',
				'The novena echoes Jesus’ words: “do not worry about tomorrow… strive first for the kingdom of God and his righteousness, and all these things will be given to you as well” (Matthew 6:33–34).',
			],
		},
	],
};

export default prayer;
