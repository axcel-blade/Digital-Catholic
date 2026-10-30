import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 4,
	title: 'The Divine Mercy Chaplet',
	summary: 'A prayer on rosary beads, given through St. Faustina, pleading for mercy through the Passion of Christ.',
	scripture: 'Luke 23:34; Ephesians 2:4',
	catechism: 'CCC 1846–1848',
	meaning: [
		'St. Faustina Kowalska (1905–1938), a Polish sister, recorded in her Diary the revelations of Jesus as the Divine Mercy. The devotion includes the image of Jesus with rays of red and white light and the words “Jesus, I trust in You,” the Hour of Mercy at 3 p.m., and Divine Mercy Sunday on the Sunday after Easter, established by St. John Paul II in 2000.',
		'The chaplet is prayed on ordinary rosary beads. It begins with the Our Father, Hail Mary, and Apostles’ Creed; then on each of five decades the large bead and ten small beads carry the prayers below. It concludes by praying “Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world” three times.',
	],
	text: {
		title: 'The prayers of the chaplet',
		lines: [
			'On each large bead: Eternal Father, I offer you the Body and Blood, Soul and Divinity of Your dearly beloved Son, our Lord Jesus Christ, in atonement for our sins and those of the whole world.',
			'On each small bead: For the sake of His sorrowful Passion, have mercy on us and on the whole world.',
		],
	},
	links: [
		{ href: '/rosary', label: 'Rosary beads and the Rosary' },
	],
	image: { alt: 'The risen Christ guiding the doubting Thomas’s finger into the wound in his side', caption: 'Caravaggio, The Incredulity of Saint Thomas (1601–1602), Sanssouci, Potsdam. Public domain.' },
};

export default topic;
