import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 1,
	title: 'The meaning of every part of the Mass',
	summary: 'The Mass has two great parts—the Liturgy of the Word and the Liturgy of the Eucharist—framed by the Introductory and Concluding Rites.',
	scripture: 'Luke 24:13–35; Acts 2:42; 1 Corinthians 11:23–26',
	catechism: 'CCC 1345–1355; General Instruction of the Roman Missal',
	meaning: [
		'The structure of the Mass goes back to the earliest Christians: St. Justin Martyr described it around AD 155, with readings from the apostles and prophets, a homily, prayers, the bringing of bread and wine, a great prayer of thanksgiving, and Communion. Like the disciples on the road to Emmaus, we first hear Christ in the Scriptures and then recognise Him in the breaking of the bread.',
		'Each part has a purpose: the Introductory Rites gather us and prepare us to listen; the Liturgy of the Word nourishes us with God’s Word; the Liturgy of the Eucharist makes present Christ’s sacrifice and gives us His Body and Blood; the Concluding Rites send us out to live what we have celebrated.',
	],
	points: {
		title: 'Outline of the Mass',
		items: [
			'Introductory Rites: Entrance, Sign of the Cross, Greeting, Penitential Act, Kyrie, Gloria, Collect',
			'Liturgy of the Word: First Reading, Psalm, Second Reading, Gospel Acclamation, Gospel, Homily, Creed, Universal Prayer',
			'Liturgy of the Eucharist: Preparation of the Gifts, Eucharistic Prayer, Lord’s Prayer, Sign of Peace, Lamb of God, Communion',
			'Concluding Rites: Blessing and Dismissal',
		],
	},
	links: [
		{ href: '/mass/order-of-mass', label: 'Walk through the Order of Mass' },
		{ href: '/mass', label: 'The Holy Mass' },
	],
};

export default topic;
