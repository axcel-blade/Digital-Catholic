import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'glory-be',
	title: 'Glory Be',
	alsoKnownAs: 'Gloria Patri; the Doxology',
	excerpt:
		'Short hymn of praise to the Holy Trinity—Father, Son, and Holy Spirit—prayed after each decade of the Rosary and throughout the Liturgy of the Hours.',
	text: 'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.',
	lastReviewed: '2026-10-31',
	sources: [
		{ label: 'Wikipedia: Gloria Patri', url: 'https://en.wikipedia.org/wiki/Gloria_Patri' },
		{ label: 'Matthew 28:19 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/matthew/28' },
	],
	sections: [
		{
			heading: 'What is the Glory Be?',
			paragraphs: [
				'The Glory Be, known in Latin as the Gloria Patri, is a doxology—a short prayer of praise. It gives glory equally to the Father, the Son, and the Holy Spirit, echoing Jesus’ command to baptise “in the name of the Father, and of the Son, and of the holy Spirit” (Matthew 28:19).',
				'Its roots go back to the early Church. In the fourth century, when the Arian heresy denied that the Son is fully God, the prayer’s equal praise of all three Persons became a clear statement of faith in the Trinity. The words “as it was in the beginning” were added to confess that the Son has always been God, from all eternity.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'The Glory Be is prayed after each decade of the Rosary, at the end of every psalm in the Liturgy of the Hours, and in many other devotions. Because it is so short, many people also pray it on its own throughout the day as a simple act of praise.',
				'Praying it, we join the unending worship of heaven, giving God glory not for what He gives us but simply for who He is.',
			],
		},
	],
};

export default prayer;
