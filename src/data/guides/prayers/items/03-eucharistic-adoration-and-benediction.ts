import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 3,
	title: 'Eucharistic adoration and Benediction',
	summary: 'Prayer before Jesus truly present in the Blessed Sacrament, outside of Mass.',
	scripture: 'Matthew 26:40; John 6:35',
	catechism: 'CCC 1378–1381, 1418',
	meaning: [
		'Because Christ is truly and substantially present in the consecrated Host, the Church worships Him in the Eucharist not only during Mass but also outside it. The Host is kept in the tabernacle and may be exposed on the altar in a monstrance for adoration. Many parishes offer regular or perpetual adoration, where the faithful keep a “holy hour” with the Lord.',
		'Benediction is a short service that concludes a period of exposition. The priest or deacon incenses the Blessed Sacrament, the hymn Tantum Ergo is sung, and the minister blesses the people with the monstrance, followed by the Divine Praises.',
	],
	links: [
		{ href: '/eucharistic-miracles', label: 'Eucharistic miracles' },
		{ href: '/sacraments/eucharist', label: 'The Sacrament of the Eucharist' },
	],
	image: { alt: 'A triptych centred on Christ at the Last Supper blessing the bread, with Old Testament scenes on the side panels', caption: 'Dieric Bouts, Altarpiece of the Holy Sacrament (1464–1467), St. Peter’s Church, Leuven. Public domain.' },
};

export default topic;
