import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'regina-caeli',
	title: 'Regina Caeli',
	alsoKnownAs: 'Queen of Heaven, Rejoice',
	excerpt:
		'Joyful Easter antiphon to the Blessed Virgin Mary, rejoicing with her in the Resurrection of her Son; prayed in place of the Angelus from Easter to Pentecost.',
	text: [
		'V. Queen of Heaven, rejoice, alleluia.',
		'R. For he whom you did merit to bear, alleluia,',
		'V. Has risen, as he said, alleluia.',
		'R. Pray for us to God, alleluia.',
		'',
		'V. Rejoice and be glad, O Virgin Mary, alleluia.',
		'R. For the Lord has truly risen, alleluia.',
		'',
		'Let us pray. O God, who gave joy to the world through the resurrection of thy Son, our Lord Jesus Christ, grant, we beseech thee, that through the intercession of the Virgin Mary, his Mother, we may obtain the joys of everlasting life. Through the same Christ our Lord. Amen.',
	].join('\n'),
	relatedSaint: 'blessed-virgin-mary',
	relatedGuideTopic: { guide: 'prayers', slug: 'the-angelus-and-regina-caeli' },
	lastReviewed: '2026-10-31',
	sources: [
		{ label: 'Wikipedia: Regina Caeli', url: 'https://en.wikipedia.org/wiki/Regina_Caeli' },
		{ label: 'Matthew 28:6 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/matthew/28' },
	],
	sections: [
		{
			heading: 'What is the Regina Caeli?',
			paragraphs: [
				'The Regina Caeli (Latin for “Queen of Heaven”) is one of the four great Marian antiphons of the Church. It invites the Blessed Virgin Mary to rejoice because the Son she bore “has risen, as he said” (Matthew 28:6), and asks her to pray for us. Every line ends with “alleluia,” the Church’s great Easter cry of praise.',
				'Its author is unknown. The antiphon was in use by at least the twelfth century, when Franciscan friars helped spread it, and it has been sung at Night Prayer (Compline) during the Easter season for centuries.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'From Easter Sunday until Pentecost, the Regina Caeli replaces the Angelus, prayed at 6 a.m., noon, and 6 p.m. During these weeks the Pope leads it from St. Peter’s Square on Sundays at noon.',
				'Where the Angelus recalls the Incarnation, the Regina Caeli celebrates the Resurrection. Mary, who stood at the foot of the Cross in sorrow, now shares fully in the joy of her risen Son, and we rejoice with her.',
			],
		},
	],
};

export default prayer;
