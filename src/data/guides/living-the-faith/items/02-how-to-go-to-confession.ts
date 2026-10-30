import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 2,
	title: 'How to go to Confession',
	summary: 'A simple, step-by-step guide to the Sacrament of Reconciliation.',
	scripture: '1 John 1:9; Psalm 51; Luke 15:20–24',
	catechism: 'CCC 1450–1460',
	meaning: [
		'Catholics must confess any mortal sins at least once a year, and frequent confession is encouraged. Check your parish schedule or make an appointment; you may confess face to face or anonymously behind a screen. If you are nervous or it has been a long time, simply tell the priest—he will gladly help you.',
		'Begin with an examination of conscience, then follow the simple steps below. The full guide to Confession explains contrition, absolution, and the fruits of the sacrament, and includes an Act of Contrition.',
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
	links: [
		{ href: '/sacraments/guides/confession-repentance-and-absolution', label: 'Confession, repentance and absolution: the full guide' },
		{ href: '/sacraments/penance', label: 'The Sacrament of Penance' },
	],
	image: { alt: 'A penitent kneeling at a confessional in a dark church while the priest leans to listen', caption: 'Giuseppe Maria Crespi, Confession (c. 1712), Gemäldegalerie, Dresden. Public domain.' },
};

export default topic;
