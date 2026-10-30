import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 1,
	title: 'Why do Catholics confess to priests?',
	summary: 'Because Jesus gave the apostles the power to forgive sins in His name, and that ministry continues in the Church.',
	scripture: 'John 20:21–23; Matthew 16:19; James 5:16; 2 Corinthians 5:18–20',
	catechism: 'CCC 1440–1449, 1461–1467',
	meaning: [
		'Only God forgives sins—and Catholics agree. But on the evening of the Resurrection, Jesus breathed on the apostles and said, “Whose sins you forgive are forgiven them, and whose sins you retain are retained.” To forgive or retain, the apostles needed to hear what was confessed. St. Paul calls this “the ministry of reconciliation.”',
		'The priest acts in persona Christi, in the person of Christ: it is Christ who absolves. Confessing aloud brings the healing of honesty, the assurance of hearing “I absolve you,” spiritual counsel, and reconciliation with the Church, since every sin wounds the Body of Christ. The priest is bound by the absolute seal of confession and may never reveal what he hears.',
	],
	links: [
		{ href: '/sacraments/guides/confession-repentance-and-absolution', label: 'Confession, repentance and absolution in depth' },
		{ href: '/sacraments/penance', label: 'The Sacrament of Penance' },
		{ href: '/living-the-faith', label: 'How to go to Confession' },
	],
	image: { alt: 'A woman kneeling at a wooden confessional, her face close to the grille, as a priest inside listens', caption: 'Giuseppe Molteni, The Confession (1838), Fondazione Cariplo, Milan. Public domain.' },
};

export default topic;
