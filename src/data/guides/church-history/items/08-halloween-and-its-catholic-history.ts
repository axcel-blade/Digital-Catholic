import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 8,
	title: 'Halloween and its Catholic history',
	summary: 'How All Hallows’ Eve grew out of the Church’s feasts of All Saints and All Souls.',
	scripture: 'Hebrews 12:1; Revelation 7:9–17; 2 Maccabees 12:43–46',
	catechism: 'CCC 946–962, 1030–1032',
	meaning: [
		'The word “Halloween” is a contraction of “All Hallows’ Eve,” the evening before All Saints’ Day (All Hallows) on November 1. Like Christmas Eve or the Easter Vigil, it began as the vigil of a great feast. In the early centuries Christians honoured martyrs on local anniversaries; in 609 Pope Boniface IV dedicated the Pantheon in Rome to Mary and all the martyrs on May 13. Pope Gregory III (731–741) dedicated a chapel in St. Peter’s to all the saints on November 1, and Pope Gregory IV extended the November 1 feast to the whole Church around 835.',
		'In 998 St. Odilo, abbot of Cluny, established a day of prayer for all the faithful departed on November 2, and this commemoration of All Souls spread throughout the Western Church. Together these days, sometimes called Allhallowtide, express the communion of saints: the Church on earth honours the saints in heaven and prays for the souls being purified in purgatory.',
		'Many customs grew up around these days. In medieval England and Ireland, the poor went “souling,” going door to door on All Hallows’ Eve and All Souls’ Day to receive “soul cakes” in return for praying for the household’s dead, a likely ancestor of trick-or-treating. Bells were rung for the departed and candles were lit on graves. Some historians link the date to the Celtic harvest festival of Samhain, but the feast’s placement on November 1 came from Rome, and its meaning has always been Christian. Irish and Scottish immigrants later carried their customs to North America, where Halloween took on its modern, largely secular form.',
		'Catholics may enjoy Halloween’s harmless fun while keeping its true focus: the victory of Christ over sin and death and the hope of heaven. Families often attend Mass on All Saints’ Day, a holy day of obligation in many countries; dress children as saints; visit cemeteries; and pray for the dead throughout November. The Church warns against any involvement with the occult, which contradicts the first commandment (CCC 2116–2117).',
	],
	points: {
		title: 'Key dates',
		items: [
			'609: Pope Boniface IV dedicates the Pantheon to Mary and all martyrs',
			'731–741: Pope Gregory III dedicates a chapel in St. Peter’s to all saints on November 1',
			'c. 835: Pope Gregory IV extends the Feast of All Saints to the universal Church',
			'998: St. Odilo of Cluny institutes All Souls’ Day on November 2',
			'October 31: All Hallows’ Eve, the vigil of All Saints',
			'November 1: Solemnity of All Saints; November 2: Commemoration of All the Faithful Departed',
		],
	},
	links: [
		{ href: '/saints', label: 'Mary and the Saints' },
		{ href: '/liturgical-calendar', label: 'Liturgical calendar' },
	],
	image: { alt: 'The risen Christ holding a white banner with a red cross, surrounded by ranks of gold-haloed angels playing trumpets and other instruments', caption: 'Fra Angelico, Christ Glorified in the Court of Heaven (c. 1423–1424), predella of the Fiesole altarpiece, National Gallery, London. Public domain.' },
};

export default topic;
