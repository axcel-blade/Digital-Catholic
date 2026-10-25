import type { Disciple } from '../types';

const disciple: Disciple = {
	order: 4,
	slug: 'john',
	title: 'John the Apostle',
	alsoKnownAs: 'The Beloved Disciple, son of Zebedee',
	excerpt:
		'Son of Zebedee, brother of James, and witness at the cross—traditionally identified with the Fourth Gospel and the Book of Revelation.',
	lifeDates: 'c. AD 6–c. AD 100',
	gospelReference: 'John 19:25–27; John 21:20–24',
	feastDays: 'December 27',
	lastReviewed: '2026-10-25',
	sources: [
		{ label: 'Wikipedia: Basilica of St. John', url: 'https://en.wikipedia.org/wiki/Basilica_of_St._John' },
		{ label: 'NASSCAL: Chapel of San Giovanni in Oleo, Rome', url: 'https://www.nasscal.com/materiae-apocryphorum/chapel-of-san-giovanni-in-oleo-rome/' },
		{ label: 'Britannica: How did St. John the Apostle die?', url: 'https://britannica.com/question/How-did-St-John-the-Apostle-die' },
	],
	sections: [
		{
			heading: 'Who was John?',
			paragraphs: [
				'John was a fisherman called with his brother James. He reclined next to Jesus at the Last Supper and stood at the foot of the cross, where the dying Lord entrusted His mother Mary to John’s care.',
				'The Church honors him as the “beloved disciple,” the only apostle not martyred in the usual sense, though tradition says he suffered exile on Patmos.',
			],
		},
		{
			heading: 'In the Gospels',
			paragraphs: [
				'John’s Gospel emphasizes Christ’s divinity and love: the Word made flesh, the Bread of Life, the Good Shepherd. He records intimate scenes—the wedding at Cana, Nicodemus, the Samaritan woman, Lazarus, and Thomas’s confession “My Lord and my God!”',
				'At the empty tomb John saw and believed. When the risen Christ appeared at the sea, Peter asked about John’s future; Jesus replied, “If it is my will that he remain until I come, what is that to you?”',
			],
		},
		{
			heading: 'After Easter',
			paragraphs: [
				'John preached in Ephesus and cared for the Virgin Mary according to Christ’s command. He wrote the Fourth Gospel, three epistles, and Revelation. Ancient tradition holds he lived to a great age, exhorting the faithful: “Little children, love one another.”',
			],
		},
		{
			heading: 'Full biography',
			paragraphs: [
				'John, son of Zebedee, was a Galilean fisherman called with his brother James. He reclined next to Jesus at the Last Supper and stood at the foot of the cross, where Christ entrusted His mother Mary to John’s care. The Church honors him as the beloved disciple who leaned on the Lord’s breast and ran with Peter to the empty tomb.',
				'After Pentecost he preached in Jerusalem and, according to tradition, took Mary to Ephesus. He wrote the Fourth Gospel, three epistles, and the Book of Revelation—the last while exiled on the island of Patmos under the Emperor Domitian. His writings stress Christ’s divinity and the command to love one another.',
				'Early Fathers report that he lived to a great age in Ephesus, cared for churches throughout Asia Minor, and resisted heresies that denied Christ had come in the flesh. When too weak to walk to gatherings, he was carried and simply exhorted, “Little children, love one another.”',
			],
		},
		{
			heading: 'Miracles',
			paragraphs: [
				'With Peter, John was present when the man lame from birth was healed at the Temple gate (Acts 3:1–10). Scripture also says that after Pentecost “many signs and wonders were done among the people by the hands of the apostles” (Acts 5:12).',
				'Ancient tradition adds two famous stories. Tertullian, writing around AD 200, reports that John was plunged into boiling oil in Rome and emerged unharmed. The apocryphal Acts of John tells how he drank a cup of poison without harm, which is why he is often shown holding a chalice with a serpent.',
			],
		},
		{
			heading: 'Relics',
			image: { src: '/disciples/sections/john-relics.jpg', alt: 'Four marble columns marking the site of St. John’s tomb amid the ruins of a basilica', caption: 'The traditional site of St. John’s tomb in the ruins of Justinian’s basilica, Selçuk (Ephesus). Photo: Bernard Gagnon, CC BY-SA 3.0.' },
			paragraphs: [
				'Tradition holds that John died at Ephesus in old age. In the sixth century the Emperor Justinian built the Basilica of St. John over the site where he was said to be buried, with the grave beneath its central dome. The basilica is now in ruins near Selçuk in Turkey; no relics of his body are known to survive.',
			],
		},
		{
			heading: 'Death and legacy',
			paragraphs: [
				'Unlike most apostles, John is not traditionally said to have died by martyrdom. Tertullian and others report that he was plunged into boiling oil at Rome under Domitian yet emerged unharmed, then was exiled to Patmos. He returned to Ephesus and died of natural causes around the year 100 during the reign of Trajan—the only apostle who witnessed the Church into the second century.',
				'His tomb at Ephesus was a major pilgrimage site. The Church celebrates him on December 27 as the evangelist who proclaimed the Word made flesh and the apostle who remained with Mary and the Church until the end.',
			],
		},
		{
			heading: 'Lesson for disciples today',
			paragraphs: [
				'John teaches contemplation of Christ’s love and loyalty to Mary and the Church until the end.',
			],
		},
	],
};

export default disciple;
