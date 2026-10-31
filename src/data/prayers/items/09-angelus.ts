import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'angelus',
	title: 'The Angelus',
	alsoKnownAs: 'Angelus Domini',
	excerpt:
		'Traditional prayer honouring the Incarnation, prayed morning, noon, and evening, recalling the angel’s message to Mary and the Word made flesh.',
	text: [
		'V. The Angel of the Lord declared unto Mary,',
		'R. And she conceived of the Holy Spirit.',
		'Hail Mary…',
		'',
		'V. Behold the handmaid of the Lord,',
		'R. Be it done unto me according to thy word.',
		'Hail Mary…',
		'',
		'V. And the Word was made flesh,',
		'R. And dwelt among us.',
		'Hail Mary…',
		'',
		'V. Pray for us, O holy Mother of God,',
		'R. That we may be made worthy of the promises of Christ.',
		'',
		'Let us pray. Pour forth, we beseech thee, O Lord, thy grace into our hearts, that we, to whom the Incarnation of Christ thy Son was made known by the message of an angel, may by his Passion and Cross be brought to the glory of his Resurrection. Through the same Christ our Lord. Amen.',
	].join('\n'),
	relatedSaint: 'st-gabriel-the-archangel',
	relatedGuideTopic: { guide: 'prayers', slug: 'the-angelus-and-regina-caeli' },
	lastReviewed: '2026-10-31',
	sources: [
		{ label: 'Wikipedia: Angelus', url: 'https://en.wikipedia.org/wiki/Angelus' },
		{ label: 'Luke 1:26–38 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/luke/1' },
		{ label: 'John 1:14 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/john/1' },
	],
	sections: [
		{
			heading: 'What is the Angelus?',
			paragraphs: [
				'The Angelus takes its name from its first words in Latin, “Angelus Domini” (“The Angel of the Lord”). It is a short devotion that recalls the mystery of the Incarnation: the angel Gabriel’s message to Mary, her “yes” to God, and the Son of God becoming man (Luke 1:26–38; John 1:14).',
				'It is made up of three short verses and responses, each followed by a Hail Mary, and ends with a closing prayer that leads from the Incarnation to Christ’s Passion and Resurrection. The devotion grew in the Middle Ages from the custom of praying Hail Marys at the sound of the evening bell, and took its present form by the sixteenth or seventeenth century.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'The Angelus is traditionally prayed three times a day—at 6 a.m., noon, and 6 p.m.—and many churches still ring the “Angelus bell” at those hours. Each Sunday at noon, the Pope leads the Angelus from a window overlooking St. Peter’s Square.',
				'During the Easter season, from Easter Sunday to Pentecost, the Regina Caeli (“Queen of Heaven, rejoice”) is prayed in its place. Pausing to pray the Angelus sanctifies the rhythm of the day by returning again and again to the moment God became one of us.',
			],
		},
	],
};

export default prayer;
