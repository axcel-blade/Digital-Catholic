import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 2,
	title: 'The Sunday obligation and holy days of obligation',
	summary: 'Catholics are bound to attend Mass on Sundays and holy days, keeping the Lord’s Day holy.',
	scripture: 'Exodus 20:8–11; Acts 20:7; Hebrews 10:25',
	catechism: 'CCC 2174–2188; Code of Canon Law 1246–1248',
	meaning: [
		'Sunday, the day of the Resurrection, is the “Lord’s Day” and the first holy day of obligation. The obligation is fulfilled by attending Mass on the day itself or on the evening before. Missing Mass deliberately without a serious reason, such as illness or the care of infants, is a grave matter. Sunday is also a day for rest, family, and works of mercy.',
		'The universal law of the Latin Church lists ten holy days of obligation in addition to Sundays, but bishops’ conferences may transfer some to a Sunday or remove the obligation. Catholics should check the list for their own country.',
	],
	points: {
		title: 'The ten holy days in universal law',
		items: [
			'The Nativity of the Lord (Christmas), December 25',
			'Mary, Mother of God, January 1',
			'The Epiphany',
			'The Ascension',
			'The Body and Blood of Christ (Corpus Christi)',
			'St. Joseph, March 19',
			'Sts. Peter and Paul, June 29',
			'The Assumption, August 15',
			'All Saints, November 1',
			'The Immaculate Conception, December 8',
		],
	},
	links: [
		{ href: '/commandments', label: 'The Third Commandment' },
	],
};

export default topic;
