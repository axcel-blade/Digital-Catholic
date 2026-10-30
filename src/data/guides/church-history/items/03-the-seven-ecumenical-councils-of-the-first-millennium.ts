import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 3,
	title: 'The seven ecumenical councils of the first millennium',
	summary: 'Seven great councils, recognised by Catholics and Orthodox alike, that defined the Church’s faith in the Trinity and in Christ.',
	catechism: 'CCC 242–248, 465–468, 495, 2131',
	meaning: [
		'Faced with heresies that denied the full divinity or full humanity of Christ, the bishops of the whole Church gathered in council to state the apostolic faith clearly. These seven councils are accepted by both the Catholic and Eastern Orthodox Churches and remain the foundation of Christian doctrine about God and Christ.',
	],
	points: {
		title: 'The seven councils',
		items: [
			'Nicaea I (325): the Son is consubstantial (one in being) with the Father, against Arianism',
			'Constantinople I (381): the divinity of the Holy Spirit; the Nicene Creed completed',
			'Ephesus (431): Mary is Theotokos, Mother of God',
			'Chalcedon (451): Christ is one Person in two natures, divine and human',
			'Constantinople II (553): further clarified the teaching of Chalcedon',
			'Constantinople III (680–681): Christ has a divine and a human will',
			'Nicaea II (787): the veneration of holy images is lawful',
		],
	},
	image: { alt: 'Bishops in robes gathered in a domed hall around an open Gospel book at the Council of Chalcedon', caption: 'Vasily Surikov, The Fourth Ecumenical Council of Chalcedon (1876), Cathedral of Christ the Saviour, Moscow. Public domain.' },
};

export default topic;
