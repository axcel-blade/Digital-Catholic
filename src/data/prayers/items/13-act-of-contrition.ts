import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'act-of-contrition',
	title: 'Act of Contrition',
	alsoKnownAs: 'O my God, I am heartily sorry',
	excerpt:
		'Prayer of sorrow for sin and resolve to change, prayed in the sacrament of Confession and at the end of the day.',
	text: 'O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasion of sin. Amen.',
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Act of Contrition', url: 'https://en.wikipedia.org/wiki/Act_of_Contrition' },
		{ label: 'Catechism of the Catholic Church, §§1451–1454 (Contrition)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Act of Contrition?',
			paragraphs: [
				'Contrition is “sorrow of the soul and detestation for the sin committed, together with the resolution not to sin again” (CCC 1451). The Act of Contrition puts this sorrow into words. It expresses regret for sin, acknowledges that sin offends God who is all good, and promises, with the help of his grace, to avoid sin in the future.',
				'The prayer distinguishes two motives for sorrow. Sorrow out of fear of punishment is called imperfect contrition; sorrow because sin offends God, whom we love above all, is called perfect contrition (CCC 1452–1453). The prayer moves from the first to the second: “but most of all because they offend Thee.”',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'The penitent prays an Act of Contrition in the sacrament of Penance, after confessing their sins and before the priest gives absolution. Many versions exist, and any sincere prayer of sorrow may be used. The traditional form above is the one many Catholics learn as children.',
				'Catholics are also encouraged to pray it each night as part of an examination of conscience, and in danger of death. Perfect contrition, joined to the resolve to go to confession as soon as possible, obtains forgiveness even of grave sins (CCC 1452).',
			],
		},
	],
};

export default prayer;
