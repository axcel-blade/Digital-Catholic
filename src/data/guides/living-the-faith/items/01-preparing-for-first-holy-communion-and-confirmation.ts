import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 1,
	title: 'Preparing for First Holy Communion and Confirmation',
	summary: 'How children, teens, and adults prepare to complete their Christian initiation.',
	catechism: 'CCC 1306–1311, 1322, 1385–1389',
	meaning: [
		'In the Latin Church, children baptised as infants usually receive First Confession and First Holy Communion around the age of reason (about seven), after a period of parish or school catechesis. Preparation helps them understand that the Eucharist is truly Jesus and to receive Him with faith and reverence. Families play a central role by praying together and bringing children to Sunday Mass.',
		'Confirmation completes baptismal grace by a special outpouring of the Holy Spirit. The age varies by diocese, from about seven to sixteen. Candidates study the faith, take part in service and prayer, choose a sponsor who is a confirmed, practising Catholic, and often choose a saint’s name. Adults who were baptised Catholic but never confirmed can arrange preparation through their parish.',
	],
	points: {
		title: 'Preparing as a family',
		items: [
			'Contact your parish early to register for the programme',
			'Attend Sunday Mass together every week',
			'Learn the basic prayers: Sign of the Cross, Our Father, Hail Mary, Glory Be, and Act of Contrition',
			'Choose a sponsor or godparent who will support the candidate’s faith',
			'Make a good Confession before the celebration',
		],
	},
	links: [
		{ href: '/sacraments/eucharist', label: 'The Eucharist' },
		{ href: '/sacraments/confirmation', label: 'Confirmation' },
	],
};

export default topic;
