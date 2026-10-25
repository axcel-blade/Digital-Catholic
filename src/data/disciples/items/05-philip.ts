import type { Disciple } from '../types';

const disciple: Disciple = {
	order: 5,
	slug: 'philip',
	title: 'Philip',
	excerpt:
		'From Bethsaida, called directly by Jesus—who tested him at the feeding of the multitude and brought Greeks to see the Lord.',
	lifeDates: 'd. c. AD 80',
	gospelReference: 'John 1:43–46; John 6:5–7',
	feastDays: 'May 3 (with St. James the Less)',
	lastReviewed: '2026-10-25',
	sources: [
		{ label: 'OrthoChristian: Tomb of St. Philip the Apostle discovered in Turkey', url: 'https://orthochristian.com/47881.html' },
		{ label: 'OrthodoxWiki: Apostle Philip (of the Twelve)', url: 'https://orthodoxwiki.org/Apostle_Philip_(of_the_Twelve)' },
	],
	sections: [
		{
			heading: 'Who was Philip?',
			paragraphs: [
				'Philip came from Bethsaida, the same town as Andrew and Peter. Jesus found him and said, “Follow me.” Philip then told Nathanael that they had found the one Moses and the prophets wrote about.',
				'He is not to be confused with Philip the deacon in Acts, who preached to the Ethiopian eunuch.',
			],
		},
		{
			heading: 'In the Gospels',
			paragraphs: [
				'Before the multiplication of loaves, Jesus asked Philip where to buy bread; Philip answered that two hundred denarii would not suffice—showing honest realism before the miracle.',
				'At the end of Christ’s public ministry, Greeks who came to worship at the feast said to Philip, “Sir, we wish to see Jesus”—a sign that the Gospel would reach the nations.',
			],
		},
		{
			heading: 'After Easter',
			paragraphs: [
				'Philip preached the Gospel in Phrygia and Hierapolis. Tradition holds he was martyred by crucifixion, proclaiming Christ to the end.',
			],
		},
		{
			heading: 'Full biography',
			paragraphs: [
				'Philip came from Bethsaida, the same town as Andrew and Peter. Jesus found him and said, “Follow me.” He immediately sought Nathanael and testified that they had found the one Moses and the prophets wrote about—showing his instinct to lead others to Christ.',
				'During Jesus’ public ministry Philip appeared at the multiplication of loaves and when Greeks asked to see Jesus at Passover—signs of the Gospel reaching the nations. After the Resurrection he was in the upper room at Pentecost and then carried the faith into Asia Minor.',
				'Tradition holds that he preached in Phrygia and Hierapolis, healed the sick, and drove out idols. He is distinct from Philip the deacon who baptized the Ethiopian eunuch in Acts 8.',
			],
		},
		{
			heading: 'Relics',
			image: { src: '/disciples/sections/philip-relics.jpg', alt: 'Stone ruins of the octagonal Martyrium of St. Philip on a hillside at Hierapolis', caption: 'The Martyrium of St. Philip at Hierapolis (Pamukkale, Turkey). Photo: Dosseman, CC BY-SA 4.0.' },
			paragraphs: [
				'Tradition holds that Philip was martyred at Hierapolis in Phrygia (near Pamukkale in modern Turkey). In July 2011 the Italian archaeologist Francesco D’Andria announced that his team had found a tomb they identified as Philip’s inside a newly uncovered church at Hierapolis.',
				'Relics of Philip are venerated in Rome at the Basilica of the Holy Twelve Apostles (Santi Apostoli), together with those of James the Less, with whom he shares a feast day.',
			],
		},
		{
			heading: 'Death and legacy',
			paragraphs: [
				'At Hierapolis in Phrygia, Philip is said to have converted many and enraged the pagan authorities. He was arrested with Bartholomew and other companions, scourged, and crucified upside down around A.D. 80, continuing to preach from the cross until he died.',
				'His feast is shared with James the Less on May 3. The Church remembers him as an apostle who bridged Jewish discipleship and the Gentile world, always pointing others toward Jesus.',
			],
		},
		{
			heading: 'Lesson for disciples today',
			paragraphs: [
				'Philip shows that bringing others to Jesus—whether a friend or a stranger—is central to apostolic life.',
			],
		},
	],
};

export default disciple;
