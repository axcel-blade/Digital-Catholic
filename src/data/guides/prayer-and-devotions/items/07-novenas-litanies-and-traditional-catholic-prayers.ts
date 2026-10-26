import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 7,
	title: 'Novenas, litanies and traditional Catholic prayers',
	summary: 'Time-tested forms of prayer that help Catholics persevere and pray with the whole Church.',
	scripture: 'Acts 1:14; Luke 18:1–8',
	catechism: 'CCC 2663–2679',
	meaning: [
		'A novena (from the Latin novem, “nine”) is a prayer offered for nine consecutive days, recalling the nine days the apostles and Mary prayed together between the Ascension and Pentecost. Novenas are offered for particular intentions or in preparation for feasts—such as the Divine Mercy Novena before Divine Mercy Sunday.',
		'A litany is a series of invocations with a repeated response, such as “pray for us” or “have mercy on us.” Approved litanies include the Litany of the Saints, the Litany of Loreto (of the Blessed Virgin Mary), and the Litanies of the Sacred Heart, the Holy Name, the Precious Blood, and St. Joseph. Other traditional prayers every Catholic can learn include the Sign of the Cross, the Glory Be, the Memorare, the Hail Holy Queen, the Prayer to St. Michael, and the Act of Contrition.',
	],
	links: [
		{ href: '/prayers', label: 'Read traditional Catholic prayers' },
		{ href: '/rosary', label: 'Pray the Rosary' },
	],
};

export default topic;
