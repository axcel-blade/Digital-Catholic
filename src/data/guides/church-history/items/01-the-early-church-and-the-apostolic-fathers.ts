import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 1,
	title: 'The early Church and the Apostolic Fathers',
	summary: 'From Pentecost to the second century: the first Christian communities and the writers who knew the apostles.',
	scripture: 'Acts 2:42–47; Acts 11:26',
	catechism: 'CCC 767, 857',
	meaning: [
		'The Church was born at Pentecost, when the Holy Spirit descended on the apostles and three thousand were baptised. The first Christians “devoted themselves to the teaching of the apostles and to the communal life, to the breaking of the bread and to the prayers.” The Gospel spread rapidly through the Roman Empire despite periodic persecution, and the blood of martyrs became, in Tertullian’s phrase, the seed of Christians.',
		'The Apostolic Fathers are the earliest Christian writers after the New Testament, many of whom knew the apostles or their disciples. Their writings—including the Didache, the Letter of Clement of Rome to the Corinthians, the letters of Ignatius of Antioch, and the letter of Polycarp of Smyrna—already show bishops, priests, and deacons, Sunday Eucharist, and Baptism.',
	],
	links: [
		{ href: '/disciples', label: 'The apostles and disciples' },
	],
	image: { alt: 'St. Peter being raised upside down on a cross by three labourers', caption: 'Caravaggio, The Crucifixion of Saint Peter (1600–1601), Santa Maria del Popolo, Rome. Public domain.' },
};

export default topic;
