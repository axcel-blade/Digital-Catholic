import type { SacramentGuide } from '../types';

const guide: SacramentGuide = {
	slug: 'state-of-grace-and-worthy-reception',
	title: 'The State of Grace and Worthy Reception of Holy Communion',
	excerpt: 'What it means to be in a state of grace, and how to prepare to receive the Lord worthily in Holy Communion.',
	sacraments: ['eucharist', 'penance'],
	lastReviewed: '2026-10-26',
	sources: [
		{ label: 'Catechism of the Catholic Church, §§1384–1390 (Holy Communion)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'Catechism of the Catholic Church, §§1854–1864 (Mortal and venial sin)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: '1 Corinthians 11:27–29 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/1corinthians/11' },
		{ label: 'Code of Canon Law, canons 916–920', url: 'https://www.vatican.va/archive/cod-iuris-canonici/cic_index_en.html' },
	],
	sections: [
		{
			heading: 'What is the state of grace?',
			paragraphs: [
				'Sanctifying grace is the gift of God’s own life poured into the soul by the Holy Spirit, first given at Baptism. It makes us holy and pleasing to God, His adopted children and heirs of heaven (CCC 1996–2000). To be in the state of grace means to possess this life—to be free from mortal sin.',
				'Mortal sin destroys charity in the heart and turns us away from God. For a sin to be mortal, three conditions must together be met: grave matter, full knowledge, and deliberate consent (CCC 1857). Venial sin weakens charity but does not break our friendship with God (CCC 1862–1863).',
			],
		},
		{
			heading: 'Why worthy reception matters',
			paragraphs: [
				'St. Paul warns: “Whoever eats the bread or drinks the cup of the Lord unworthily will have to answer for the body and blood of the Lord. A person should examine himself, and so eat the bread and drink the cup” (1 Corinthians 11:27–28).',
				'Therefore anyone conscious of grave sin must receive the Sacrament of Reconciliation before coming to Communion (CCC 1385). Church law allows an exception only when there is a grave reason and no opportunity to confess: then the person must make an act of perfect contrition, including the resolution to confess as soon as possible (canon 916).',
			],
		},
		{
			heading: 'Preparing body and soul',
			paragraphs: [
				'Besides being in the state of grace, communicants should know and believe what they receive. The Church asks the faithful to fast from all food and drink—except water and medicine—for at least one hour before Holy Communion (canon 919). The elderly, the sick, and those caring for them are exempt.',
				'We prepare with recollection and prayer, and our bodily posture expresses respect: a bow before receiving, receiving on the tongue or in the hand with reverence, and responding “Amen” to “The Body of Christ” as an act of faith (CCC 1387).',
			],
		},
		{
			heading: 'The fruits of Holy Communion',
			paragraphs: [
				'Holy Communion deepens our union with Christ, separates us from sin by wiping away venial sins and preserving us from future mortal sins, strengthens charity, unites us in the Church, and commits us to the poor (CCC 1391–1397).',
				'The Church urges the faithful to receive Communion each time they take part in Mass if they are properly disposed, and obliges them to receive at least once a year, if possible during the Easter season (CCC 1389).',
			],
		},
		{
			heading: 'When one cannot receive',
			paragraphs: [
				'Those who are not in a state of grace, or who for other reasons should not receive, are still warmly welcome at Mass and still fulfil their Sunday obligation by attending. Refraining from Communion out of honesty and reverence is itself an act of faith.',
				'They may make a spiritual communion, expressing their desire to be united with Christ: “My Jesus, I believe that you are present in the Most Holy Sacrament. I love you above all things, and I desire to receive you into my soul. Since I cannot at this moment receive you sacramentally, come at least spiritually into my heart.” The way back is always open through the Sacrament of Penance.',
			],
		},
	],
};

export default guide;
