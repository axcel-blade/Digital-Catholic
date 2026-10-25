import type { Disciple } from '../types';

const disciple: Disciple = {
	order: 11,
	slug: 'simon-the-zealot',
	title: 'Simon the Zealot',
	alsoKnownAs: 'Simon the Cananaean',
	excerpt:
		'Member of the Twelve called “the Zealot”—perhaps once zealous for Jewish independence, now zealous for Christ and His Kingdom.',
	lifeDates: 'd. c. AD 65',
	gospelReference: 'Matthew 10:2–4',
	feastDays: 'October 28 (with St. Jude)',
	lastReviewed: '2026-10-25',
	sources: [
		{ label: 'St. Peter’s Basilica Info: Altar of St. Joseph', url: 'https://stpetersbasilica.info/Altars/StJoseph/StJoseph.htm' },
		{ label: 'Vatican News: Sts. Simon and Jude (Taddeo), Apostles', url: 'https://www.vaticannews.va/en/saints/10/28/sts--simon-and-jude--taddeo---apostles.html' },
	],
	sections: [
		{
			heading: 'Who was Simon?',
			paragraphs: [
				'Simon is distinguished from Simon Peter by the title “the Zealot” (or Cananaean, from a Hebrew word for zeal). Some think he belonged to a movement opposed to Roman rule; others see the title as describing fervent devotion.',
				'His pairing with Jude in feast days and tradition suggests they traveled and preached together.',
			],
		},
		{
			heading: 'In the Gospels',
			paragraphs: [
				'Simon appears only in the lists of apostles in the Synoptic Gospels and Acts. His call shows that Jesus gathers followers from every background into one mission.',
			],
		},
		{
			heading: 'After Easter',
			paragraphs: [
				'Tradition holds that Simon preached in Egypt and Persia and was martyred by sawing or crucifixion. He is patron of curriers and tanners in some calendars.',
			],
		},
		{
			heading: 'Full biography',
			paragraphs: [
				'Simon, called the Zealot or Cananaean (from Hebrew qana, “zealous”), was chosen among the Twelve. Some think he had belonged to a movement resisting Roman rule; others read the title as describing fervent devotion to God. In either case, Jesus redirected his zeal toward the Kingdom of heaven.',
				'He appears in the apostolic lists in Matthew, Mark, Luke, and Acts but is not singled out in narrative scenes—showing how the Lord gathers followers from every background into one mission. After Pentecost he preached Christ with the rest of the apostles.',
				'Tradition links him closely with Jude Thaddeus. Together they are said to have traveled through Egypt and Mesopotamia into Persia, converting multitudes and enduring hardship for the Gospel.',
			],
		},
		{
			heading: 'Relics',
			image: { src: '/disciples/sections/simon-the-zealot-relics.jpg', alt: 'The altar of St. Joseph in the left transept of St. Peter’s Basilica', caption: 'The altar of St. Joseph in St. Peter’s Basilica, beneath which the relics of Sts. Simon and Jude rest. Photo: John Samuel, CC BY-SA 4.0.' },
			paragraphs: [
				'Relics of Simon rest with those of Jude Thaddeus in an ancient sarcophagus beneath the altar of the left transept of St. Peter’s Basilica in Rome, where they have been venerated since October 27, 1605. The two apostles share a feast day on October 28.',
			],
		},
		{
			heading: 'Death and legacy',
			paragraphs: [
				'In Persia, Simon is traditionally said to have been martyred after Jude—some accounts say sawn in half, others crucified or beheaded—around A.D. 65, during the same persecution that claimed his companion. He died refusing to worship pagan gods.',
				'His feast with Jude on October 28 honors an apostle who turned political or religious fervor into apostolic charity. He is patron of curriers and tanners in some calendars, and a model of zeal offered entirely to Christ.',
			],
		},
		{
			heading: 'Lesson for disciples today',
			paragraphs: [
				'Simon teaches that holy zeal belongs not to political violence but to proclaiming Christ and building His Church.',
			],
		},
	],
};

export default disciple;
