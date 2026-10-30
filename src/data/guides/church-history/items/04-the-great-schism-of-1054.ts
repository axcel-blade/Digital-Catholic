import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 4,
	title: 'The Great Schism of 1054',
	summary: 'The break in communion between the Church of Rome and the Church of Constantinople that divides Catholics and Orthodox to this day.',
	catechism: 'CCC 817–818, 838',
	meaning: [
		'Tensions between the Latin West and the Greek East grew for centuries over language, culture, politics, the authority of the Pope, and the Western addition of the Filioque (“and the Son”) to the Creed. In 1054 a papal legate, Cardinal Humbert, and Patriarch Michael Cerularius of Constantinople excommunicated one another.',
		'The division hardened after the Crusaders’ sack of Constantinople in 1204. Attempts at reunion at the Second Council of Lyons (1274) and the Council of Florence (1439) did not last. In 1965 Pope St. Paul VI and Patriarch Athenagoras lifted the mutual excommunications, and dialogue towards full communion continues today.',
	],
	links: [
		{ href: '/the-church', label: 'The Orthodox Churches today' },
	],
	image: { alt: 'The vast nave of Hagia Sophia beneath its great dome, with worshippers on the floor below', caption: 'Gaspare Fossati and Louis Haghe, The Nave of Hagia Sophia (1852). Public domain.' },
};

export default topic;
