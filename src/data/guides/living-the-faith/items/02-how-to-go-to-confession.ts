import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 2,
	title: 'How to go to Confession',
	summary: 'A simple, step-by-step guide to the Sacrament of Reconciliation.',
	scripture: '1 John 1:9; Psalm 51; Luke 15:20–24',
	catechism: 'CCC 1450–1460',
	meaning: [
		'Catholics must confess any mortal sins at least once a year, and frequent confession is encouraged. Check your parish schedule or make an appointment; you may confess face to face or anonymously behind a screen. If you are nervous or it has been a long time, simply tell the priest—he will gladly help you.',
		'Begin with an examination of conscience, reflecting on your life in the light of the Ten Commandments and the Beatitudes. Then follow the simple steps below. The priest will speak the words of absolution, and your sins are truly forgiven.',
	],
	points: {
		title: 'Steps of Confession',
		items: [
			'Make the Sign of the Cross and say, “Bless me, Father, for I have sinned. It has been [time] since my last confession.”',
			'Confess your sins honestly, including the kind and number of any mortal sins',
			'Listen to the priest’s counsel and accept your penance',
			'Pray an Act of Contrition',
			'Receive absolution, and respond “Amen”',
			'Complete your penance promptly',
		],
	},
	text: {
		title: 'An Act of Contrition',
		lines: [
			'My God, I am sorry for my sins with all my heart. In choosing to do wrong and failing to do good, I have sinned against you whom I should love above all things. I firmly intend, with your help, to do penance, to sin no more, and to avoid whatever leads me to sin. Our Saviour Jesus Christ suffered and died for us. In his name, my God, have mercy. Amen.',
		],
	},
	links: [
		{ href: '/sacraments/penance', label: 'The Sacrament of Penance' },
	],
};

export default topic;
