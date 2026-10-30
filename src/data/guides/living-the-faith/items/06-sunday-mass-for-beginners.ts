import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 6,
	title: 'Sunday Mass for beginners',
	summary: 'What to expect, and how to take part, if you are new to Mass or returning after a long time.',
	catechism: 'CCC 1322–1419, 2180–2183',
	meaning: [
		'Everyone is welcome at Mass. On arrival, Catholics often dip their fingers in holy water and make the Sign of the Cross, then genuflect towards the tabernacle before sitting. A missalette or screen will usually show the responses and readings. Do not worry about getting every posture right—follow those around you.',
		'Mass usually lasts about an hour. At Communion, Catholics who are prepared come forward to receive. If you are not Catholic, or not ready to receive, you are welcome to remain in your seat in prayer or come forward with arms crossed over your chest to receive a blessing. Afterward, consider introducing yourself to the priest or parish staff.',
	],
	links: [
		{ href: '/mass', label: 'Holy Mass and Liturgy' },
		{ href: '/mass/the-meaning-of-every-part-of-the-mass', label: 'The meaning of every part of the Mass' },
	],
};

export default topic;
