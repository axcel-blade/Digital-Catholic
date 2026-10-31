import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'sign-of-the-cross',
	title: 'Sign of the Cross',
	alsoKnownAs: 'Signum Crucis',
	excerpt:
		'The simplest and most familiar Catholic prayer: tracing the Cross on oneself while invoking the Father, the Son, and the Holy Spirit.',
	text: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
	relatedGuideTopic: { guide: 'core-beliefs', slug: 'the-holy-trinity' },
	lastReviewed: '2026-10-31',
	sources: [
		{ label: 'Catechism of the Catholic Church, §§232–235, 2157, 2166', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'Matthew 28:19 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/matthew/28' },
		{ label: 'Wikipedia: Sign of the cross', url: 'https://en.wikipedia.org/wiki/Sign_of_the_cross' },
	],
	sections: [
		{
			heading: 'What is the Sign of the Cross?',
			paragraphs: [
				'The Sign of the Cross is both a prayer and a gesture. Touching the forehead, the chest, the left shoulder, and then the right, Catholics trace the Cross on their bodies while saying the words Jesus gave for Baptism: “in the name of the Father, and of the Son, and of the holy Spirit” (Matthew 28:19).',
				'In one short act it professes the two central mysteries of the faith: the Holy Trinity, in the words, and our salvation through Christ’s death on the Cross, in the gesture. The Catechism notes that Christians begin their day, their prayers, and their activities with the Sign of the Cross, so that everything is done in God’s name (CCC 2157, 2166).',
			],
		},
		{
			heading: 'An ancient Christian practice',
			paragraphs: [
				'Christians have marked themselves with the Cross since the earliest centuries. Around the year 200, Tertullian wrote that believers traced the sign on their foreheads at every coming and going, at meals, and when lying down to sleep. The larger sign across the body developed later.',
				'Eastern Christians make the sign from the right shoulder to the left, while in the Latin Church it is usually made from left to right. Both express the same faith.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'The Sign of the Cross begins and ends the Mass and most Catholic prayers, including the Rosary and grace before meals. Many people make it when entering a church with holy water, recalling their Baptism, or when passing a church, hearing an ambulance, or facing temptation or danger.',
				'Because it is so simple, it is often the first prayer a child learns, and it can be the last prayer of the dying. Each time we make it, we place ourselves under the Cross and in the life of the Trinity.',
			],
		},
	],
};

export default prayer;
