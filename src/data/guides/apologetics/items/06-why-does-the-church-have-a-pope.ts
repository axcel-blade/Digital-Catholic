import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 6,
	title: 'Why does the Church have a Pope?',
	summary: 'Because Christ made Peter the rock of His Church and gave him the keys, and Peter’s role continues in his successors.',
	scripture: 'Matthew 16:18–19; Luke 22:31–32; John 21:15–17; Isaiah 22:20–22',
	catechism: 'CCC 552–553, 880–882',
	meaning: [
		'Jesus changed Simon’s name to Peter (“rock”) and said, “upon this rock I will build my church.” He gave Peter the keys of the kingdom—an echo of Isaiah 22, where the king’s chief steward holds the keys as an office that passes to a successor. Jesus also prayed that Peter’s faith would not fail and charged him to feed His sheep.',
		'A visible Church needs a visible principle of unity. From the first century, the Church of Rome exercised a special role: St. Clement wrote to correct the Corinthians around AD 96, and St. Irenaeus said every church must agree with Rome “on account of its preeminent authority.” The Pope serves as the “servant of the servants of God,” guarding the unity of faith and communion.',
	],
	links: [
		{ href: '/the-church', label: 'The Pope and the papacy' },
	],
	image: { alt: 'The risen Christ handing two large keys to the kneeling St. Peter', caption: 'Peter Paul Rubens, Christ Giving the Keys to St. Peter (1612), Gemäldegalerie, Berlin. Public domain.' },
};

export default topic;
