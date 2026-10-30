import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 5,
	title: 'The Angelus and Regina Caeli',
	summary: 'A short prayer recalling the Incarnation, traditionally prayed at 6 a.m., noon, and 6 p.m.',
	scripture: 'Luke 1:26–38; John 1:14',
	catechism: 'CCC 2678',
	meaning: [
		'For centuries, church bells rang three times a day to call the faithful to pause for the Angelus. It consists of three short verses and responses recalling the Annunciation, each followed by a Hail Mary, and a closing prayer. The Pope leads the Angelus from St. Peter’s Square each Sunday at noon.',
		'During the Easter season, from Easter Sunday to Pentecost, the Regina Caeli (“Queen of Heaven”) replaces the Angelus, rejoicing with Mary in the Resurrection of her Son.',
	],
	text: {
		title: 'The Angelus (verses)',
		lines: [
			'V. The Angel of the Lord declared unto Mary. R. And she conceived of the Holy Spirit. (Hail Mary…)',
			'V. Behold the handmaid of the Lord. R. Be it done unto me according to your word. (Hail Mary…)',
			'V. And the Word was made flesh. R. And dwelt among us. (Hail Mary…)',
			'V. Pray for us, O holy Mother of God. R. That we may be made worthy of the promises of Christ.',
			'Let us pray: Pour forth, we beseech you, O Lord, your grace into our hearts, that we, to whom the Incarnation of Christ your Son was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection, through the same Christ our Lord. Amen.',
		],
	},
	links: [
		{ href: '/pray', label: 'Traditional Catholic prayers' },
	],
	image: { alt: 'The angel Gabriel bowing before Mary seated in a simple loggia', caption: 'Fra Angelico, The Annunciation (c. 1440), San Marco, Florence. Public domain.' },
};

export default topic;
