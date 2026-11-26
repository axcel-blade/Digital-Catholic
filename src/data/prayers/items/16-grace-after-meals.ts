import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'grace-after-meals',
	title: 'Grace After Meals',
	alsoKnownAs: 'We give Thee thanks, almighty God',
	excerpt: 'Short prayer of thanksgiving after eating, traditionally followed by a prayer for the faithful departed.',
	text: 'We give Thee thanks, almighty God, for all Thy benefits, who livest and reignest world without end. Amen. May the souls of the faithful departed, through the mercy of God, rest in peace. Amen.',
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Grace (prayer)', url: 'https://en.wikipedia.org/wiki/Grace_(prayer)' },
		{ label: 'Deuteronomy 8:10 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/deuteronomy/8' },
	],
	sections: [
		{
			heading: 'What is Grace After Meals?',
			paragraphs: [
				'Scripture commands thanksgiving after eating as well as before: “You shall eat your fill and bless the Lord your God for the good land that he has given you” (Deuteronomy 8:10). The Jewish tradition of the Birkat Hamazon, a blessing after meals, reflects this, and the Church kept the custom.',
				'The Catholic grace after meals gives thanks “for all Thy benefits,” not only food. It traditionally ends with a short prayer for the dead, remembering those who once shared our table and now await the fullness of the heavenly banquet.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'It is said at the end of a meal, often less widely than grace before meals, but it remains part of the life of many families, schools and religious communities. Monasteries traditionally end every meal with a longer form of thanksgiving.',
				'Pausing to give thanks after receiving helps form a grateful heart, which the Catechism describes as a mark of Christian prayer (CCC 2637–2638).',
			],
		},
	],
};

export default prayer;
