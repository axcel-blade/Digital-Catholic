import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'act-of-hope',
	title: 'Act of Hope',
	alsoKnownAs: 'O my God, relying on Thy infinite goodness',
	excerpt: 'Traditional prayer of trust that God will forgive our sins, give us his grace and bring us to eternal life.',
	text: 'O my God, relying on Thy infinite goodness and promises, I hope to obtain pardon of my sins, the help of Thy grace, and life everlasting, through the merits of Jesus Christ, my Lord and Redeemer. Amen.',
	relatedGuideTopic: { guide: 'church-history', slug: 'the-anchor-symbol' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Theological virtues', url: 'https://en.wikipedia.org/wiki/Theological_virtues' },
		{ label: 'Catechism of the Catholic Church, §§1817–1821 (Hope)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Act of Hope?',
			paragraphs: [
				'Hope is the theological virtue “by which we desire the kingdom of heaven and eternal life as our happiness, placing our trust in Christ’s promises and relying not on our own strength, but on the help of the grace of the Holy Spirit” (CCC 1817).',
				'The Act of Hope expresses this trust in three requests: forgiveness, grace and eternal life. Its confidence rests not on our own merits, but on God’s goodness and faithfulness to his promises and on the merits of Christ.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'It is often prayed with the Acts of Faith and Love, and is especially helpful in times of discouragement or despair. The Letter to the Hebrews calls hope “a sure and steadfast anchor of the soul” (Hebrews 6:19).',
				'Christian hope is not wishful thinking, but certainty grounded in God, who “is faithful” (Hebrews 10:23).',
			],
		},
	],
};

export default prayer;
