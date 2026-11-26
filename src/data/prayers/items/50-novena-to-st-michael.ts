import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'novena-to-st-michael',
	title: 'Novena to St. Michael the Archangel',
	excerpt: 'Novena to St. Michael for protection against evil, traditionally prayed from 20 to 28 September before the feast of the Archangels.',
	text: 'St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the heavenly host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen. St. Michael, who is like God? Pray for us.',
	relatedSaint: 'st-michael-the-archangel',
	relatedGuideTopic: { guide: 'saints', slug: 'the-st-michael-the-archangel-medal' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Revelation 12:7–9 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/revelation/12' },
		{ label: 'Catechism of the Catholic Church, §§328–336 (The angels)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Novena to St. Michael?',
			paragraphs: [
				'St. Michael the Archangel, whose name means “Who is like God?”, leads the angels against Satan in the Book of Revelation (Revelation 12:7–9). He is invoked as protector of the Church and of every believer in the spiritual battle, and as the angel who accompanies souls at the hour of death.',
				'Many forms of the novena exist. At its heart is the Prayer to St. Michael composed by Pope Leo XIII in 1886, given above. Some also pray the Chaplet of St. Michael, which honours the nine choirs of angels, during the nine days.',
			],
		},
		{
			heading: 'How to pray it',
			paragraphs: [
				'The novena is traditionally prayed from 20 to 28 September, ending on the eve of the feast of Sts. Michael, Gabriel and Raphael on 29 September. It may also be prayed at any time of temptation, danger or spiritual struggle.',
				'Some Catholics keep a longer devotion called “St. Michael’s Lent,” forty days of prayer and fasting from 15 August to 29 September, a practice of St. Francis of Assisi.',
			],
		},
	],
};

export default prayer;
