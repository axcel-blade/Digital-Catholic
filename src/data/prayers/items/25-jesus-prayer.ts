import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'jesus-prayer',
	title: 'The Jesus Prayer',
	alsoKnownAs: 'Lord Jesus Christ, Son of God, have mercy on me',
	excerpt: 'Ancient one-sentence prayer of the Eastern Church, repeated slowly to call on the name of Jesus and ask for his mercy.',
	text: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner.',
	relatedGuideTopic: { guide: 'church-history', slug: 'the-ihs-symbol' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Jesus Prayer', url: 'https://en.wikipedia.org/wiki/Jesus_Prayer' },
		{ label: 'Catechism of the Catholic Church, §§2665–2669 (The name of Jesus)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'Luke 18:9–14 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/luke/18' },
	],
	sections: [
		{
			heading: 'What is the Jesus Prayer?',
			paragraphs: [
				'The Jesus Prayer brings together the confession of faith in Jesus as Lord, Christ and Son of God, with the plea of the tax collector in Jesus’ parable, “God, be merciful to me, a sinner!” (Luke 18:13), and of the blind man, “Jesus, Son of David, have mercy on me!” (Mark 10:47).',
				'It grew up among the monks of the Egyptian desert in the early centuries and became central to the spirituality of the Eastern Churches, especially through the writings collected in the Philokalia. The Catechism praises it, teaching that the invocation of the holy name of Jesus “is the simplest way of praying always” (CCC 2667–2668).',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'It is repeated slowly and attentively, often in rhythm with the breath, sometimes using a prayer rope or rosary to count. It can be prayed anywhere: while walking, working or waiting, answering St. Paul’s call to “pray without ceasing” (1 Thessalonians 5:17).',
				'Shorter forms, such as “Lord Jesus, have mercy on me,” or simply the name of Jesus, are also used.',
			],
		},
	],
};

export default prayer;
