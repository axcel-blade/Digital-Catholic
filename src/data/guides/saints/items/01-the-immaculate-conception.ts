import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 1,
	title: 'The Immaculate Conception',
	summary: 'From the first moment of her conception, Mary was preserved free from all stain of original sin.',
	scripture: 'Luke 1:28; Genesis 3:15',
	catechism: 'CCC 490–493; Ineffabilis Deus (1854)',
	meaning: [
		'The Immaculate Conception refers to Mary’s own conception in the womb of her mother, St. Anne—not to the conception of Jesus. By a singular grace of God and in view of the merits of Jesus Christ, Mary was redeemed from the first moment of her existence in a more exalted way, preserved from original sin rather than cleansed of it.',
		'The angel Gabriel greets her as kecharitōmenē, “full of grace” or “highly favoured.” The belief was held for centuries and solemnly defined by Pope Pius IX in 1854. Four years later, at Lourdes, Mary identified herself to St. Bernadette with the words “I am the Immaculate Conception.” The feast is celebrated on December 8.',
	],
	links: [
		{ href: '/marian-apparitions', label: 'Marian apparitions, including Lourdes' },
	],
	image: { alt: 'Mary in white and blue standing on a crescent moon and a globe with a serpent, surrounded by cherubs', caption: 'Giovanni Battista Tiepolo, The Immaculate Conception (1767–1769), Prado. Public domain.' },
};

export default topic;
