import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'grace-before-meals',
	title: 'Grace Before Meals',
	alsoKnownAs: 'Bless us, O Lord',
	excerpt: 'Short blessing asked over food before eating, thanking God as the giver of every good gift.',
	text: 'Bless us, O Lord, and these Thy gifts, which we are about to receive from Thy bounty, through Christ our Lord. Amen.',
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Grace (prayer)', url: 'https://en.wikipedia.org/wiki/Grace_(prayer)' },
		{ label: 'Matthew 14:19 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/matthew/14' },
	],
	sections: [
		{
			heading: 'What is Grace Before Meals?',
			paragraphs: [
				'Saying grace is an ancient practice inherited from Judaism, in which every meal was blessed with thanks to God. Jesus himself “looked up to heaven and blessed” the loaves before feeding the crowds (Matthew 14:19), and he gave thanks over the bread at the Last Supper.',
				'This familiar Catholic grace asks God to bless the people at table and the food they share, and recognises that all food comes from his generosity. It is usually begun and ended with the Sign of the Cross.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'Families pray it together at the start of meals, at home or in public. It is one of the first prayers many children learn.',
				'Many families add an intention for those who are hungry, or a short spontaneous prayer of thanks. The habit of grace reminds Christians, three times a day, that “every generous act of giving… is from above” (James 1:17).',
			],
		},
	],
};

export default prayer;
