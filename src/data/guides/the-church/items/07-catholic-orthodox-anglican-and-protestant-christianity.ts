import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 7,
	title: 'Catholic, Orthodox, Anglican and Protestant Christianity',
	summary: 'All baptised Christians share faith in the Trinity and in Christ, but differ on authority, the sacraments, and the Church.',
	catechism: 'CCC 817–822; Unitatis Redintegratio; Dominus Iesus',
	meaning: [
		'Catholics and Orthodox share seven sacraments, apostolic succession, devotion to Mary and the saints, and much of the same Tradition; they differ chiefly over the authority of the Pope and the addition of the Filioque (“and the Son”) to the Nicene Creed. Anglicanism began with the break of the Church of England from Rome under Henry VIII and blends Catholic and Reformed elements; the Catholic Church does not recognise Anglican orders as valid.',
		'Protestant communities arising from the sixteenth-century Reformation—Lutheran, Reformed, Baptist, Methodist, Pentecostal, and many others—generally hold to Scripture alone (sola scriptura) and faith alone (sola fide), recognise two sacraments or ordinances, and do not hold apostolic succession or the sacrificial nature of the Mass. Catholics recognise them as brothers and sisters in Christ through valid Baptism.',
	],
	points: {
		title: 'Key points of difference',
		items: [
			'Authority: Scripture, Tradition, and Magisterium (Catholic); Scripture and Tradition with councils (Orthodox); Scripture alone (most Protestants)',
			'Sacraments: seven (Catholic and Orthodox); usually two (Protestant)',
			'The Eucharist: the Real Presence and a true sacrifice (Catholic and Orthodox); views vary widely (Anglican and Protestant)',
			'Church leadership: bishops in apostolic succession with the Pope (Catholic); bishops without papal primacy (Orthodox); varied structures (Protestant)',
		],
	},
};

export default topic;
