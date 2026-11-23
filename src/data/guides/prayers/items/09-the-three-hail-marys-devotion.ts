import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 9,
	title: 'The Three Hail Marys devotion',
	summary: 'A short daily devotion revealed to St. Mechtilde of Hackeborn: three Hail Marys, each honoring one Person of the Blessed Trinity.',
	scripture: 'Luke 1:28, 1:42; Matthew 28:19; 2 Corinthians 13:14',
	catechism: 'CCC 253–256, 2676–2677',
	meaning: [
		'St. Mechtilde of Hackeborn (c. 1241–1298) was a nun at the monastery of Helfta in Saxony, where she led the choir and guided St. Gertrude the Great. Her visions were gathered in the Book of Special Grace (Liber specialis gratiae). Her feast day is November 19.',
		'According to tradition, St. Mechtilde asked the Blessed Virgin Mary to be with her at the hour of her death. Our Lady answered that she would, and asked her to pray three Hail Marys every day. Each one honors a different Person of the Blessed Trinity and the gift that Person shared with Mary.',
		'The first Hail Mary honors God the Father, whose almighty power raised Mary above every other creature. The second honors God the Son, who gave her wisdom and understanding beyond all the saints. The third honors God the Holy Spirit, who filled her heart with His love and made her gentle and merciful.',
		'Many people pray the three Hail Marys in the morning and at night, often asking for purity and the grace of a holy death. St. Alphonsus Liguori spread the practice widely. Like every private revelation, it adds nothing to the faith. It is a simple way to honor the Trinity through Mary, who always leads us to her Son (CCC 67, 2674).',
	],
	text: {
		title: 'How to pray it',
		lines: [
			'First: O Mary, by the power the Eternal Father gave you, help me. Hail Mary…',
			'Second: O Mary, by the wisdom the Son gave you, help me. Hail Mary…',
			'Third: O Mary, by the love the Holy Spirit gave you, help me. Hail Mary…',
			'Many add at the end: O Mary, my Mother, keep me from mortal sin this day (or this night).',
		],
	},
	links: [
		{ href: '/rosary', label: 'The Hail Mary and the Rosary' },
		{ href: '/pray', label: 'Traditional Catholic prayers' },
	],
	image: { alt: 'The Father and the Son placing a crown of flowers on Mary’s head beneath the dove of the Holy Spirit', caption: 'Diego Velázquez, The Coronation of the Virgin (c. 1635–1636), Museo del Prado, Madrid. Public domain.' },
};

export default topic;
