import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 1,
	title: 'The Liturgy of the Hours',
	summary: 'The Church’s daily public prayer, sanctifying each part of the day with psalms, Scripture, and intercessions.',
	scripture: 'Psalm 119:164; 1 Thessalonians 5:17; Acts 3:1',
	catechism: 'CCC 1174–1178',
	meaning: [
		'Also called the Divine Office or Breviary, the Liturgy of the Hours continues the Jewish practice of praying at fixed times, which the apostles kept. Its heart is the Book of Psalms, prayed over a four-week cycle, together with hymns, Scripture readings, canticles, and intercessions.',
		'Priests, deacons, and religious pray the Hours daily on behalf of the whole Church, and the laity are warmly encouraged to join, especially in Morning and Evening Prayer. Free apps and printed volumes such as Christian Prayer make it easy to begin.',
	],
	points: {
		title: 'The principal hours',
		items: [
			'Office of Readings: longer Scripture and patristic readings, said at any time',
			'Morning Prayer (Lauds): consecrating the day',
			'Daytime Prayer: mid-morning, midday, or mid-afternoon',
			'Evening Prayer (Vespers): thanksgiving at day’s end, with the Magnificat',
			'Night Prayer (Compline): before sleep, with the Nunc Dimittis',
		],
	},
};

export default topic;
