import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 7,
	title: 'The development of doctrine and ecumenical councils',
	summary: 'The deposit of faith does not change, but the Church’s understanding of it grows deeper over time, often clarified by ecumenical councils.',
	scripture: 'John 16:12–13; Acts 15:6–29',
	catechism: 'CCC 66, 94, 884, 891',
	meaning: [
		'Public revelation ended with the death of the last apostle, yet the Church continues to grow in understanding what was revealed. St. John Henry Newman compared this to the growth of a living body: a doctrine develops as a seed becomes a tree, unfolding without losing its identity. The definition of the Son’s divinity at Nicaea, for example, did not invent a new belief but expressed clearly what the Church had always prayed and believed.',
		'Ecumenical councils are gatherings of the world’s bishops with and under the Pope. Following the pattern of the Council of Jerusalem in Acts 15, the Church has held twenty-one ecumenical councils, from Nicaea I (325) to Vatican II (1962–1965). Their solemn definitions on faith and morals are held to be infallible.',
	],
	links: [
		{ href: '/church-history', label: 'Read about the councils in Church History' },
	],
};

export default topic;
