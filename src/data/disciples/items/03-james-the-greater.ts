import type { Disciple } from '../types';

const disciple: Disciple = {
	order: 3,
	slug: 'james-the-greater',
	title: 'James the Greater',
	alsoKnownAs: 'James, son of Zebedee',
	excerpt:
		'Son of Zebedee and brother of John—among the three apostles closest to Jesus, the first apostle martyred for the faith.',
	lifeDates: 'd. c. AD 44',
	gospelReference: 'Matthew 4:21–22; Mark 10:35–40',
	feastDays: 'July 25',
	lastReviewed: '2026-10-25',
	sources: [
		{ label: 'Pilgrimaps: Whose bones lie in Compostela?', url: 'https://www.pilgrimaps.com/whose-bones-lie-in-compostela/' },
		{ label: 'Fr. Tommy Lane: Tomb of St. James the Great in Santiago de Compostela', url: 'https://frtommylane.com/homilies/pilgrimage/saint_james_compostela.htm' },
		{ label: 'Acts 12:2' },
	],
	sections: [
		{
			heading: 'Who was James?',
			paragraphs: [
				'James, son of Zebedee, was a fisherman called with his brother John while mending nets with their father. Jesus nicknamed the brothers Boanerges—“sons of thunder”—perhaps for their fiery zeal.',
				'With Peter and John he witnessed the raising of Jairus’s daughter, the Transfiguration, and Christ’s agony in Gethsemane.',
			],
		},
		{
			heading: 'In the Gospels',
			paragraphs: [
				'James and John once asked for places at Christ’s right and left in glory; Jesus taught them that greatness in His Kingdom means service and sharing His cup of suffering.',
				'He was present at key moments of revelation and prayer, learning that closeness to Christ means conformity to the cross.',
			],
		},
		{
			heading: 'After Easter',
			paragraphs: [
				'Acts records that King Herod Agrippa had James beheaded with the sword about A.D. 44—the first apostle to die for Christ. His shrine at Santiago de Compostela in Spain became one of the greatest pilgrim destinations in Christendom.',
			],
		},
		{
			heading: 'Full biography',
			paragraphs: [
				'James, son of Zebedee, was a fisherman on the Sea of Galilee, called with his brother John while mending nets with their father. Jesus named the brothers Boanerges—“sons of thunder”—for their fervent spirit. With Peter and John, James belonged to the inner circle who witnessed the raising of Jairus’s daughter, the Transfiguration, and Christ’s agony in Gethsemane.',
				'He once asked, with John, for places of honor in the Kingdom; Jesus taught that greatness means service and sharing His cup. After the Resurrection James was among the apostles in Jerusalem; at Pentecost he received the Holy Spirit and preached the risen Christ.',
				'His ministry in the early Church was cut short, but his witness opened the age of apostolic martyrdom. Spanish tradition later linked his preaching in Iberia with the great shrine at Santiago de Compostela, though details belong to pious legend as well as history.',
			],
		},
		{
			heading: 'Miracles',
			image: { src: '/disciples/sections/james-the-greater-miracles.jpg', alt: 'The Virgin Mary appearing on a pillar to St. James and his kneeling companions', caption: 'The Apparition of the Virgin to St. James the Great, Nicolas Poussin (Louvre).' },
			paragraphs: [
				'James was one of the three apostles Jesus chose to witness the raising of Jairus’s daughter (Mark 5:37–43) and the Transfiguration (Matthew 17:1–8). Scripture says that Jesus gave the Twelve authority to heal every disease (Matthew 10:1), and that after Pentecost “many signs and wonders were done among the people by the hands of the apostles” (Acts 5:12).',
				'A Spanish tradition holds that while James was preaching in Spain, the Virgin Mary appeared to him at Zaragoza standing on a pillar to encourage him; the Basilica of Our Lady of the Pillar honors this tradition.',
			],
		},
		{
			heading: 'Relics',
			image: { src: '/disciples/sections/james-the-greater-relics.jpg', alt: 'An ornate silver urn in the crypt beneath the high altar of Santiago Cathedral', caption: 'The silver urn holding the relics of St. James, Cathedral of Santiago de Compostela. Photo: Lancastermerrin88, CC BY-SA 3.0.' },
			paragraphs: [
				'Acts 12:2 records that Herod Agrippa had James put to death by the sword, making him the first of the Twelve to be martyred. Tradition says his disciples carried his body to Galicia in Spain.',
				'In the early ninth century a hermit named Pelagius reported mysterious lights over a field, and Bishop Theodemir investigated and found a tomb identified as that of James. King Alfonso II of Asturias ordered a church built over the site, which grew into the Cathedral of Santiago de Compostela, the goal of the Camino de Santiago pilgrimage.',
			],
		},
		{
			heading: 'Death and legacy',
			paragraphs: [
				'Acts 12:2 records the only apostolic death named in the New Testament: “King Herod laid hands upon some members of the church to harm them. He killed James the brother of John with the sword.” This occurred about A.D. 44, when Herod Agrippa I sought to please Jewish leaders by persecuting Christians.',
				'James was the first apostle to shed his blood for Christ. His feast on July 25 and the pilgrimage to Santiago de Compostela—where his relics have been venerated since the Middle Ages—keep his martyrdom alive as a call to courage and witness.',
			],
		},
		{
			heading: 'Lesson for disciples today',
			paragraphs: [
				'James reminds us that following Jesus may demand everything, and that the path of glory runs through the cross.',
			],
		},
	],
};

export default disciple;
