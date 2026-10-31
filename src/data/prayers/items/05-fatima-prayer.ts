import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'fatima-prayer',
	title: 'Fatima Prayer',
	alsoKnownAs: 'The Decade Prayer; O My Jesus',
	excerpt:
		'Short prayer for mercy taught by Our Lady to the children of Fátima in 1917, prayed after each decade of the Rosary.',
	text: 'O my Jesus, forgive us our sins, save us from the fires of hell; lead all souls to heaven, especially those in most need of thy mercy. Amen.',
	relatedSaint: 'blessed-virgin-mary',
	relatedApparition: 'fatima',
	lastReviewed: '2026-10-31',
	sources: [
		{ label: 'Wikipedia: Fatima Prayers', url: 'https://en.wikipedia.org/wiki/Fatima_prayers' },
		{ label: 'Wikipedia: Our Lady of Fátima', url: 'https://en.wikipedia.org/wiki/Our_Lady_of_F%C3%A1tima' },
	],
	sections: [
		{
			heading: 'What is the Fatima Prayer?',
			paragraphs: [
				'The Fatima Prayer, often called the Decade Prayer, comes from the apparitions of Our Lady at Fátima, Portugal, in 1917. According to Sister Lúcia dos Santos, one of the three shepherd children, Mary taught it during the apparition of July 13, 1917, asking that it be said after each mystery of the Rosary.',
				'In a few words it asks Jesus for forgiveness, for deliverance from hell, and for the salvation of all souls, especially those most in need of His mercy. It reflects the heart of the Fátima message: prayer, penance, and the conversion of sinners.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'The Fatima Prayer is prayed at the end of each decade of the Rosary, after the Glory Be. Its use spread worldwide after the Church approved the Fátima apparitions in 1930.',
				'“Those in most need of thy mercy” is usually understood as those in greatest danger of losing their souls. Praying it, we join Mary’s concern that no one be lost, and we entrust the whole world to the mercy of her Son.',
			],
		},
	],
};

export default prayer;
