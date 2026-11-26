import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'anima-christi',
	title: 'Anima Christi',
	alsoKnownAs: 'Soul of Christ, sanctify me',
	excerpt: 'Medieval prayer to Christ, often said after Holy Communion, asking to be made holy, hidden in his wounds and never separated from him.',
	text: 'Soul of Christ, sanctify me. Body of Christ, save me. Blood of Christ, inebriate me. Water from the side of Christ, wash me. Passion of Christ, strengthen me. O good Jesus, hear me. Within Thy wounds hide me. Suffer me not to be separated from Thee. From the malicious enemy defend me. In the hour of my death call me, and bid me come unto Thee, that with Thy saints I may praise Thee for ever and ever. Amen.',
	relatedGuideTopic: { guide: 'church-history', slug: 'the-pelican-symbol' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Anima Christi', url: 'https://en.wikipedia.org/wiki/Anima_Christi' },
		{ label: 'John 19:34 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/john/19' },
	],
	sections: [
		{
			heading: 'What is the Anima Christi?',
			paragraphs: [
				'The Anima Christi (“Soul of Christ”) is a short prayer addressed to Jesus, especially in the Eucharist. Each line names a part of Christ’s saving gift — his soul, body, blood, the water from his pierced side (John 19:34) and his Passion — and asks it to work in the one who prays.',
				'The prayer dates from at least the early fourteenth century. It is often linked with St. Ignatius of Loyola, who placed it at the beginning of his Spiritual Exercises, but it was already well known long before his time; its author is unknown.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'It is especially prayed in thanksgiving after receiving Holy Communion, and during Eucharistic adoration. Its final lines also make it a prayer for a holy death.',
				'The plea “within Thy wounds hide me” expresses complete trust in Christ’s love as a place of refuge from sin and evil.',
			],
		},
	],
};

export default prayer;
