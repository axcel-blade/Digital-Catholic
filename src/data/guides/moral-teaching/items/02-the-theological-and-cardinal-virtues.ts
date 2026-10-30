import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 2,
	title: 'The theological and cardinal virtues',
	summary: 'Faith, hope, and charity unite us to God; prudence, justice, fortitude, and temperance order our actions.',
	scripture: '1 Corinthians 13:13; Wisdom 8:7',
	catechism: 'CCC 1803–1845',
	meaning: [
		'A virtue is a habitual and firm disposition to do the good. The three theological virtues—faith, hope, and charity—are infused by God at Baptism and have God Himself as their object. The greatest of these, St. Paul says, is charity.',
		'The four cardinal virtues (from the Latin cardo, “hinge”) are the hinges on which all other human virtues turn. They are acquired by effort and repeated good acts, and are purified and elevated by grace. The Book of Wisdom already names them: “she teaches moderation and prudence, justice and courage.”',
	],
	points: {
		title: 'The seven virtues',
		items: [
			'Faith: believing God and all He has revealed',
			'Hope: desiring heaven and trusting in Christ’s promises',
			'Charity: loving God above all and our neighbour as ourselves',
			'Prudence: discerning the true good and the right means to achieve it',
			'Justice: giving God and neighbour their due',
			'Fortitude: firmness in difficulty and constancy in pursuing the good',
			'Temperance: moderation of pleasures and balance in the use of created goods',
		],
	},
	links: [
		{ href: '/holy-spirit#gifts', label: 'Gifts of the Holy Spirit' },
		{ href: '/holy-spirit#fruits', label: 'Fruits of the Holy Spirit' },
	],
	image: { alt: 'Three women personifying Fortitude, Prudence and Temperance seated in a lunette with cherubs above', caption: 'Raphael, The Cardinal and Theological Virtues (1511), Vatican. Public domain.' },
};

export default topic;
