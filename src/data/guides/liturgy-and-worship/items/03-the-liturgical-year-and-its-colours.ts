import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 3,
	title: 'The liturgical year and its colours',
	summary: 'Through the year the Church unfolds the whole mystery of Christ, from His coming to His Resurrection and return.',
	catechism: 'CCC 1163–1173',
	meaning: [
		'The liturgical year begins on the First Sunday of Advent and moves through Christmas, Ordinary Time, Lent, the Sacred Paschal Triduum, Easter, and Ordinary Time again, ending with the Solemnity of Christ the King. Woven through it are feasts of Mary and the saints. The Triduum—from the evening Mass of the Lord’s Supper on Holy Thursday to Easter Sunday—is the summit of the year.',
		'The colours of the vestments and altar cloths change with the seasons, helping the faithful enter into each mystery.',
	],
	points: {
		title: 'Liturgical colours',
		items: [
			'Violet: Advent and Lent—penance and preparation',
			'White or gold: Christmas, Easter, feasts of the Lord, Mary, and saints who were not martyrs—joy and purity',
			'Red: Palm Sunday, Good Friday, Pentecost, apostles and martyrs—the Holy Spirit and the blood of witness',
			'Green: Ordinary Time—hope and growth',
			'Rose: optional on Gaudete Sunday (Advent) and Laetare Sunday (Lent)—joy amid penance',
			'Black: optional for funerals and All Souls—mourning',
		],
	},
	links: [
		{ href: '/liturgical-calendar', label: 'The Liturgical Calendar' },
	],
};

export default topic;
