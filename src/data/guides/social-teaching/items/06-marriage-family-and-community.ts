import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 6,
	title: 'Marriage, family and community',
	summary: 'The family, founded on marriage, is the first and vital cell of society.',
	scripture: 'Genesis 2:24; Ephesians 5:21–33; Mark 10:6–9',
	catechism: 'CCC 2201–2233; Familiaris Consortio; Amoris Laetitia',
	meaning: [
		'The family is a community of life and love, the “domestic church” where faith, virtue, and responsibility are first learned. Society and the state have a duty to support families: through policies that protect marriage, support parents in raising and educating their children, and provide decent housing and work.',
		'The family is also called to look outward, practising hospitality and caring for the elderly, the sick, and the poor. Strong families build strong communities and parishes.',
	],
	links: [
		{ href: '/sacraments/matrimony', label: 'The Sacrament of Matrimony' },
		{ href: '/living-the-faith', label: 'Catholic marriage and family life' },
	],
	image: { alt: 'St. Joseph holding the Child Jesus, who shows a small bird to a dog, while Mary pauses at her spinning', caption: 'Bartolomé Esteban Murillo, The Holy Family with a Little Bird (c. 1650), Prado. Public domain.' },
};

export default topic;
