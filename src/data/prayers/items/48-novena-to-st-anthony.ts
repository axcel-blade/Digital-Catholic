import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'novena-to-st-anthony',
	title: 'Novena to St. Anthony',
	alsoKnownAs: 'Nine Tuesdays of St. Anthony; Si quaeris',
	excerpt: 'Novena to St. Anthony of Padua, traditionally prayed on nine Tuesdays or before his feast on 13 June, using the ancient responsory “Si quaeris.”',
	text: 'If you seek miracles: death, error, calamities, the devil and leprosy flee; the sick rise up healed. The sea obeys, and chains are broken; young and old ask for and receive lost limbs and lost things. Dangers vanish, and need comes to an end: let those who have experienced it tell of it; let the people of Padua say it. Glory be to the Father, and to the Son, and to the Holy Spirit. V. Pray for us, St. Anthony. R. That we may be made worthy of the promises of Christ. Amen.',
	relatedSaint: 'st-anthony-of-padua',
	relatedGuideTopic: { guide: 'saints', slug: 'the-st-anthony-of-padua-medal' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Anthony of Padua', url: 'https://en.wikipedia.org/wiki/Anthony_of_Padua' },
		{ label: 'Wikipedia: Si quaeris miracula', url: 'https://en.wikipedia.org/wiki/Si_quaeris_miracula' },
	],
	sections: [
		{
			heading: 'What is the Novena to St. Anthony?',
			paragraphs: [
				'St. Anthony of Padua (c. 1195–1231), Franciscan preacher and Doctor of the Church, is invoked for lost things and in every kind of need. The responsory Si quaeris, “If you seek miracles,” has been sung in his honour since the thirteenth century. It is traditionally attributed to St. Bonaventure, but was probably written by Julian of Speyer, a Franciscan who composed an early office for the saint. The English above is a close translation made for this page.',
				'The devotion of the “Nine Tuesdays” comes from a seventeenth-century story from Bologna, in which St. Anthony is said to have appeared to a childless woman and promised that if she visited his image on nine Tuesdays her prayer would be answered. Tuesday became St. Anthony’s day, recalling the day of his funeral.',
			],
		},
		{
			heading: 'How to pray it',
			paragraphs: [
				'Pray the responsory above, with your intention, an Our Father, a Hail Mary and a Glory Be, on nine consecutive Tuesdays, or on nine days from 4 to 12 June, before his feast on 13 June. Some also pray a thirteen-Tuesday novena, ending on his feast.',
				'In thanksgiving for favours received, many give alms for the poor, known as “St. Anthony’s Bread.”',
			],
		},
		{
			heading: 'The Latin text',
			paragraphs: [
				'Si quaeris miracula, mors, error, calamitas, daemon, lepra fugiunt, aegri surgunt sani. Cedunt mare, vincula; membra resque perditas petunt et accipiunt iuvenes et cani. Pereunt pericula, cessat et necessitas; narrent hi qui sentiunt, dicant Paduani.',
			],
		},
	],
};

export default prayer;
