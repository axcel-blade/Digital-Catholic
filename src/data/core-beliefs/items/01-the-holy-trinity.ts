import type { CoreBelief } from '../types';

const belief: CoreBelief = {
	number: 1,
	title: 'The Holy Trinity',
	summary: 'One God in three divine Persons: the Father, the Son, and the Holy Spirit.',
	scripture: 'Deuteronomy 6:4; Matthew 28:19; 2 Corinthians 13:14',
	catechism: 'CCC 232–267',
	meaning: [
		'The mystery of the Most Holy Trinity is the central mystery of Christian faith and life. There is only one God, yet God is not solitary: He is three Persons—Father, Son, and Holy Spirit—each fully God, equal in glory and sharing one divine nature.',
		'The Persons are really distinct from one another by their relations: the Father begets, the Son is begotten, and the Holy Spirit proceeds. We could never discover this by reason alone; it was revealed by Jesus Christ, who commanded His disciples to baptise “in the name of the Father and of the Son and of the Holy Spirit.”',
	],
	link: { href: '/holy-trinity', label: 'Read more about the Holy Trinity' },
};

export default belief;
