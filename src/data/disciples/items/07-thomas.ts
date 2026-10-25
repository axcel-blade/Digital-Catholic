import type { Disciple } from '../types';

const disciple: Disciple = {
	order: 7,
	slug: 'thomas',
	title: 'Thomas',
	alsoKnownAs: 'Didymus (“the twin”)',
	excerpt:
		'The apostle who doubted until he saw the risen Lord—then proclaimed the fullest confession of Christ’s divinity in the Gospels.',
	lifeDates: 'd. c. AD 72',
	gospelReference: 'John 20:24–29',
	feastDays: 'July 3',
	lastReviewed: '2026-10-25',
	sources: [
		{ label: 'Atlas Obscura: Relics of the Apostle St. Thomas', url: 'https://www.atlasobscura.com/places/relics-of-the-apostle-st-thomas' },
		{ label: 'New World Encyclopedia: Thomas the Apostle', url: 'https://www.newworldencyclopedia.org/entry/Thomas_the_Apostle' },
	],
	sections: [
		{
			heading: 'Who was Thomas?',
			paragraphs: [
				'Thomas, called Didymus, was one of the Twelve. He is remembered for honest questioning and for courage: when Jesus set out toward Jerusalem where Lazarus had died, Thomas said to the others, “Let us also go, that we may die with him.”',
			],
		},
		{
			heading: 'In the Gospels',
			paragraphs: [
				'After the Resurrection Thomas was not with the disciples when Jesus first appeared. He refused to believe unless he saw the nail marks and put his hand in Christ’s side.',
				'Eight days later Jesus came again and invited Thomas to touch His wounds. Thomas answered, “My Lord and my God!”—a confession of divinity that the Church has treasured ever since. Jesus added, “Blessed are those who have not seen and yet believe.”',
			],
		},
		{
			heading: 'After Easter',
			paragraphs: [
				'Tradition holds that Thomas preached the Gospel in India, where the ancient Mar Thoma churches trace their origins to him. He is said to have been martyred by spearing near Madras (Chennai).',
			],
		},
		{
			heading: 'Full biography',
			paragraphs: [
				'Thomas, called Didymus (“the twin”), was one of the Twelve from Galilee. When Jesus resolved to go to Bethany after Lazarus’s death, Thomas urged the others, “Let us also go, that we may die with him”—showing loyal courage beneath his later reputation for doubt.',
				'At the Last Supper he asked how the disciples could know the way; Jesus answered, “I am the way, and the truth, and the life.” After the Resurrection Thomas insisted on seeing and touching Christ’s wounds; the Lord granted his request and Thomas proclaimed, “My Lord and my God!”',
				'Tradition, supported by the ancient Syrian and Indian churches, holds that Thomas preached the Gospel eastward—through Persia and into India, where the Mar Thoma (“St. Thomas”) Christian communities trace their origins to his missionary work.',
			],
		},
		{
			heading: 'Miracles',
			image: { src: '/disciples/sections/thomas-miracles.jpg', alt: 'Thomas putting his finger into the wound in the side of the risen Christ', caption: 'The Incredulity of Saint Thomas, Caravaggio (Sanssouci, Potsdam).' },
			paragraphs: [
				'Thomas’s best-known moment is not a miracle he worked but one he witnessed: the risen Jesus invited him to touch His wounds, and Thomas confessed, “My Lord and my God!” (John 20:24–29). Scripture also says that after Pentecost “many signs and wonders were done among the people by the hands of the apostles” (Acts 5:12).',
			],
		},
		{
			heading: 'Relics',
			image: { src: '/disciples/sections/thomas-relics.jpg', alt: 'The tomb chapel of St. Thomas beneath San Thome Basilica', caption: 'The tomb of St. Thomas in San Thome Basilica, Chennai. Photo: Sailko, CC BY 3.0.' },
			paragraphs: [
				'Tradition holds that Thomas was martyred in India and buried at Mylapore, where the San Thome Basilica in Chennai now stands over his traditional first tomb.',
				'His relics were later taken to Edessa in Syria, then to the Greek island of Chios, and from there to Ortona in Italy, where they arrived on September 6, 1258. They rest in the crypt of Ortona Cathedral, and his head is kept in a silver bust reliquary.',
			],
		},
		{
			heading: 'Death and legacy',
			paragraphs: [
				'Near Mylapore (modern Chennai) in India, Thomas is said to have built a church and converted many, provoking local rulers. He was martyred about A.D. 72 by spearing—some accounts say on a hill now called St. Thomas Mount—while praying. His body was buried there and later enshrined.',
				'The Basilica of St. Thomas in Mylapore and the ancient Thomas Christians in Kerala preserve his memory. His feast on July 3 celebrates the apostle whose doubt became the Church’s strongest Gospel confession of Christ’s divinity.',
			],
		},
		{
			heading: 'Lesson for disciples today',
			paragraphs: [
				'Thomas shows that sincere doubt brought to Christ leads to stronger faith—and that the Church is built on witnesses who have seen and believed for our sake.',
			],
		},
	],
};

export default disciple;
