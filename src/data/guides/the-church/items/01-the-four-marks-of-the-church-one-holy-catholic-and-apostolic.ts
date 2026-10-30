import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 1,
	title: 'The four marks of the Church: one, holy, catholic and apostolic',
	summary: 'Four essential features, professed in the Nicene Creed, by which the true Church of Christ can be recognised.',
	scripture: 'John 17:20–23; Ephesians 4:4–6; Matthew 28:19–20; Ephesians 2:19–20',
	catechism: 'CCC 811–870',
	meaning: [
		'The Church is one because she has one Lord, one faith, and one Baptism, and is united in the sacraments and in apostolic succession. She is holy because Christ, her founder, is holy and gives her the means of holiness, even though her members are sinners in need of conversion.',
		'She is catholic—from the Greek for “universal”—because the fullness of Christ’s presence and the means of salvation are found in her, and because she is sent to all peoples. She is apostolic because she is built on the foundation of the apostles, hands on their teaching, and is governed by their successors, the bishops in communion with the Pope.',
	],
	points: {
		title: 'The four marks',
		items: [
			'One: united in faith, worship, and governance',
			'Holy: sanctified by Christ and the Holy Spirit',
			'Catholic: universal, possessing the fullness of the faith, sent to all',
			'Apostolic: founded on and faithful to the apostles',
		],
	},
	image: { alt: 'The apostles seated in a room as the Holy Spirit descends on them in rays of light', caption: 'Giotto, Pentecost (c. 1305), Scrovegni Chapel, Padua. Public domain.' },
};

export default topic;
