import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'guardian-angel-prayer',
	title: 'Guardian Angel Prayer',
	alsoKnownAs: 'Angel of God (Angele Dei)',
	excerpt:
		'Simple prayer asking the angel God has given each of us to light our way, guard us, rule over us, and guide us.',
	text: 'Angel of God, my guardian dear, to whom God’s love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen.',
	relatedGuideTopic: { guide: 'saints', slug: 'angels-guardian-angels-and-the-archangels' },
	lastReviewed: '2026-10-31',
	sources: [
		{ label: 'Catechism of the Catholic Church, §336 (guardian angels)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'Matthew 18:10 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/matthew/18' },
		{ label: 'Wikipedia: Guardian angel', url: 'https://en.wikipedia.org/wiki/Guardian_angel' },
	],
	sections: [
		{
			heading: 'What is the Guardian Angel Prayer?',
			paragraphs: [
				'The Church teaches that “from its beginning until death, human life is surrounded by their watchful care and intercession. Beside each believer stands an angel as protector and shepherd leading him to life” (Catechism, §336). Jesus Himself said of little ones, “their angels in heaven always look upon the face of my heavenly Father” (Matthew 18:10).',
				'This short prayer, known in Latin as the Angele Dei, asks our guardian angel to stay beside us and to light, guard, rule, and guide our way. Its Latin form dates back to the Middle Ages, and the rhyming English version is one of the first prayers many Catholic children learn.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'Many families pray it in the morning, at bedtime, or before a journey. For the night, “ever this day” is often changed to “ever this night.”',
				'The Church celebrates the Holy Guardian Angels on October 2. The prayer reminds us that God’s care is personal: He has given each of us a companion to help us on the way to heaven.',
			],
		},
	],
};

export default prayer;
