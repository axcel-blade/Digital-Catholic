import type { Disciple } from '../types';

const disciple: Disciple = {
	order: 1,
	slug: 'peter',
	title: 'Simon Peter',
	alsoKnownAs: 'Cephas, Kepha (“rock”)',
	excerpt:
		'Fisherman from Bethsaida, leader among the Twelve, who confessed Jesus as the Christ and received the keys of the Kingdom—yet denied Him before the cock crowed.',
	lifeDates: 'c. 1 BC–c. AD 64–68',
	gospelReference: 'Matthew 16:16–19; John 21:15–19',
	feastDays: 'June 29 (with St. Paul)',
	lastReviewed: '2026-10-25',
	sources: [
		{ label: 'Global News: Vatican unveils bone fragments said to be Peter’s', url: 'https://globalnews.ca/news/987315/vatican-unveils-bone-fragments-said-to-be-peters' },
		{ label: 'GBH News: Vatican puts St. Peter’s bones on display for the first time', url: 'https://wgbh.org/news/2013-11-24/vatican-puts-st-peters-bones-on-display-for-the-first-time' },
		{ label: 'Acts of the Apostles 3, 5, 9 and 12' },
	],
	sections: [
		{
			heading: 'Who was Peter?',
			paragraphs: [
				'Simon, son of Jonah, was a fisherman on the Sea of Galilee. Jesus called him and his brother Andrew, promising to make them fishers of men. Jesus gave him the name Peter—rock—and he became the spokesman of the apostles.',
				'Impulsive, loyal, and deeply human, Peter walked on water towards Christ, drew the sword in Gethsemane, and swore he would never deny his Lord—yet did so three times before dawn.',
			],
		},
		{
			heading: 'In the Gospels',
			paragraphs: [
				'At Caesarea Philippi Peter declared, “You are the Christ, the Son of the living God.” Jesus answered that on this rock He would build His Church and gave him the keys of the Kingdom.',
				'Peter witnessed the Transfiguration, the raising of Jairus’s daughter, and the agony in Gethsemane. After the Resurrection, the risen Lord restored him: “Feed my sheep,” commissioning him to shepherd the flock.',
			],
		},
		{
			heading: 'After Easter',
			paragraphs: [
				'Peter preached at Pentecost and received the first Gentile convert, Cornelius, into the Church. He led the apostles in Jerusalem, travelled widely, and according to tradition was martyred in Rome under Nero, crucified head downward.',
				'His two New Testament letters and the Gospel of Mark—traditionally linked to his preaching—continue to strengthen the faithful.',
			],
		},
		{
			heading: 'Full biography',
			paragraphs: [
				'Simon bar Jonah was born in Bethsaida on the Sea of Galilee and worked as a fisherman with his brother Andrew. After John the Baptist pointed him to Jesus, he followed the Lord and received the name Peter—rock. He became spokesman of the Twelve, witnessed miracles and the Transfiguration, and swore loyalty even in Gethsemane.',
				'Though he denied Christ three times, the risen Lord restored him at the Sea of Galilee and charged him three times to feed His sheep. At Pentecost Peter preached boldly; he healed the crippled man at the Temple gate, defended the faith before the Sanhedrin, and received the Gentile Cornelius into the Church after a vision at Joppa.',
				'He led the apostolic council in Jerusalem, wrote two epistles to the churches in Asia Minor, and according to early tradition came to Rome, where he strengthened Christians during persecution and appointed successors in the local church.',
			],
		},
		{
			heading: 'Miracles',
			image: { src: '/disciples/sections/peter-miracles.jpg', alt: 'St. Peter walking along a street as sick and crippled people are healed by his shadow', caption: 'St. Peter Healing the Sick with His Shadow, Masaccio (Brancacci Chapel, Florence).' },
			paragraphs: [
				'The Acts of the Apostles records many miracles worked through Peter. With John he healed a man lame from birth at the Temple’s Beautiful Gate (Acts 3:1–10). The sick were carried into the streets so that even his shadow might fall on them (Acts 5:15).',
				'At Lydda he healed Aeneas, who had been paralysed for eight years, and at Joppa he raised the disciple Tabitha (Dorcas) from the dead (Acts 9:32–42). When Herod imprisoned him, an angel led him out of his chains and through the prison gates (Acts 12:6–11).',
			],
		},
		{
			heading: 'Relics',
			image: { src: '/disciples/sections/peter-relics.jpg', alt: 'Excavated Roman brick tombs in the necropolis beneath St. Peter’s Basilica', caption: 'The Vatican Necropolis beneath St. Peter’s Basilica, where the excavations were made. Photo: Blue 439, CC BY-SA 3.0.' },
			paragraphs: [
				'Excavations beneath St. Peter’s Basilica begun in 1939 uncovered an ancient necropolis and a shrine over the traditional site of his grave. In 1942 bones of an elderly, strongly built man were found in a niche behind a wall covered with pilgrims’ graffiti.',
				'In 1968 Pope Paul VI announced that these fragments had been “identified in a way that we can consider convincing.” Some archaeologists still dispute the identification, and no pope has declared it definitively. In November 2013 Pope Francis displayed nine of the bone fragments publicly for the first time, at the Mass closing the Year of Faith.',
			],
		},
		{
			heading: 'Death and legacy',
			paragraphs: [
				'Under the Emperor Nero, after the fire of Rome in A.D. 64, Peter was arrested and condemned to crucifixion. Ancient tradition holds that he asked to be nailed to the cross upside down, deeming himself unworthy to die as his Lord had. He was martyred at the Vatican hill around A.D. 64–68.',
				'His tomb lies beneath St. Peter’s Basilica in Rome. The Church honours him as first among the apostles and the rock on which Christ built His Church; his feast with St. Paul on June 29 marks the foundation of the Roman Church.',
			],
		},
		{
			heading: 'Lesson for disciples today',
			paragraphs: [
				'Peter shows that Christ builds on weak faith made strong by grace. Failure is not the last word when we return to Jesus with repentance and love.',
			],
		},
	],
};

export default disciple;
