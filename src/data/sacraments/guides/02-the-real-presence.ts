import type { SacramentGuide } from '../types';

const guide: SacramentGuide = {
	slug: 'the-real-presence',
	title: 'The Real Presence of Christ in the Eucharist',
	excerpt: 'Why Catholics believe Jesus is truly, really, and substantially present—Body, Blood, soul, and divinity—in the Blessed Sacrament.',
	sacraments: ['eucharist'],
	lastReviewed: '2026-10-26',
	sources: [
		{ label: 'Catechism of the Catholic Church, §§1373–1381 (The Presence of Christ)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'John 6:22–69 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/john/6' },
		{ label: '1 Corinthians 11:23–29 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/1corinthians/11' },
		{ label: 'Council of Trent, Session XIII (1551), Decree on the Most Holy Eucharist' },
	],
	sections: [
		{
			heading: 'What the Church believes',
			paragraphs: [
				'Christ is present to His Church in many ways: in the poor, in the Word of God, in the prayer of the faithful, in the sacraments, and in the person of the priest. But He is present in the Eucharist in a unique way. The Council of Trent taught that in the Most Blessed Sacrament “the body and blood, together with the soul and divinity, of our Lord Jesus Christ and, therefore, the whole Christ is truly, really, and substantially contained” (CCC 1374).',
				'This presence is called “real” not to suggest the other modes are unreal, but because it is presence in the fullest sense: it is substantial, the whole Christ, God and man, made wholly and entirely present (CCC 1374).',
			],
		},
		{
			heading: 'The witness of Scripture',
			paragraphs: [
				'In the Bread of Life discourse, Jesus says: “I am the living bread that came down from heaven… the bread that I will give is my flesh for the life of the world” (John 6:51). When many disciples were scandalized, He did not soften His words but insisted: “My flesh is true food, and my blood is true drink” (John 6:55). Many walked away, and He let them go.',
				'At the Last Supper Jesus took bread and said, “This is my body,” and the cup, “This is my blood of the covenant” (Mark 14:22–24). St. Paul warns that whoever eats the bread or drinks the cup unworthily “will have to answer for the body and blood of the Lord” (1 Corinthians 11:27)—a warning that only makes sense if Christ is truly present.',
			],
		},
		{
			heading: 'The witness of the early Church',
			paragraphs: [
				'From the earliest centuries Christians spoke plainly about the Real Presence. St. Ignatius of Antioch, writing around AD 107, called the Eucharist the flesh of our Savior Jesus Christ. St. Justin Martyr, around AD 155, explained that the food blessed by the prayer of His word is the flesh and blood of the incarnate Jesus.',
				'This faith has been held without interruption in East and West. The Orthodox Churches, too, profess the real change of the bread and wine into the Body and Blood of Christ.',
			],
		},
		{
			heading: 'How long Christ remains present',
			paragraphs: [
				'The Eucharistic presence of Christ begins at the moment of consecration and endures as long as the Eucharistic species subsist (CCC 1377). Christ is present whole and entire in each of the species and whole and entire in each of their parts, so that breaking the bread does not divide Christ.',
				'This is why consecrated hosts are reserved in the tabernacle, carried to the sick and dying, and treated with the greatest reverence. A sanctuary lamp burns near the tabernacle as a sign of His presence.',
			],
		},
		{
			heading: 'Responding with worship',
			paragraphs: [
				'Because Christ is present, the Church offers the Eucharist the worship of adoration due to God alone, both during Mass and outside it (CCC 1378). We genuflect before the tabernacle, kneel at the consecration, and keep a reverent silence in church.',
				'Eucharistic adoration, Benediction, Corpus Christi processions, and simple visits to the Blessed Sacrament are ways of returning love for love. As St. John Paul II wrote, “Jesus awaits us in this sacrament of love” (CCC 1380).',
			],
		},
	],
};

export default guide;
