import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'christmas-novena',
	title: 'Christmas Novena',
	alsoKnownAs: 'St. Andrew Christmas Novena; Hail and blessed be the hour',
	excerpt: 'Advent prayer said fifteen times a day from the feast of St. Andrew (30 November) until Christmas, recalling the hour of Christ’s birth.',
	text: 'Hail and blessed be the hour and moment in which the Son of God was born of the most pure Virgin Mary, at midnight, in Bethlehem, in piercing cold. In that hour vouchsafe, O my God, to hear my prayer and grant my desires, through the merits of Our Saviour Jesus Christ, and of His blessed Mother. Amen.',
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Luke 2:1–20 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/luke/2' },
		{ label: 'Catechism of the Catholic Church, §§524–526 (Advent and Christmas)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Christmas Novena?',
			paragraphs: [
				'This popular Advent devotion is often called the St. Andrew Christmas Novena because it begins on the feast of St. Andrew the Apostle, 30 November, the traditional start of the Advent season. It is not strictly a novena of nine days, but a prayer repeated daily throughout Advent until Christmas Eve.',
				'The prayer is believed to have been composed in Ireland in the late nineteenth century. It invites the one praying to return in spirit to the stable at Bethlehem, at the very moment when the Son of God was born, and to bring every need to the newborn Christ.',
			],
		},
		{
			heading: 'How to pray it',
			paragraphs: [
				'The prayer is said fifteen times each day, from 30 November until 24 December. It need not be said fifteen times in a row; many people divide it through the day, for example five times in the morning, five at noon and five in the evening.',
				'Many families pray it together as part of their Advent preparation, alongside the Advent wreath, as a way of keeping Christ at the centre of the season.',
			],
		},
	],
};

export default prayer;
