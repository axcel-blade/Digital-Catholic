export type MiracleCategory = 'Nature' | 'Healing' | 'Exorcism' | 'Raising the dead' | 'Glory';

export interface MiracleSection {
	heading: string;
	paragraphs: string[];
}

export interface Miracle {
	slug: string;
	title: string;
	category: MiracleCategory;
	gospelReference: string;
	excerpt: string;
	sections: MiracleSection[];
}

export const miraclesIntro =
	'The miracles of Jesus Christ are extraordinary events recorded in the New Testament Gospels—Matthew, Mark, Luke, and John. They are not mere wonders for their own sake: each sign reveals who Jesus is, the coming of God’s Kingdom, and His compassion for those who suffer. The Church has always proclaimed them as true history and as invitations to faith.';

export const miracles: Miracle[] = [
	{
		slug: 'wedding-at-cana',
		title: 'The Wedding at Cana',
		category: 'Nature',
		gospelReference: 'John 2:1–11',
		excerpt:
			'At a wedding feast Jesus changes water into wine—the first sign that manifests His glory and calls His disciples to believe.',
		sections: [
			{
				heading: 'The sign',
				paragraphs: [
					'When the wine runs short at a wedding in Cana of Galilee, Mary tells Jesus, “They have no wine.” At her intercession He orders the servants to fill six stone jars with water. When they draw from them, the water has become fine wine.',
					'St. John calls this the “beginning of his signs” (John 2:11). It took place before public ministry in its full breadth and revealed Christ’s power over creation.',
				],
			},
			{
				heading: 'What it reveals',
				paragraphs: [
					'The miracle points to the joy of the Kingdom and to the Eucharistic banquet of the Church. Water for Jewish rites becomes the wine of celebration—an image of the old covenant giving way to the new in Christ.',
					'Mary’s words to the servants, “Do whatever he tells you,” remain a model of discipleship for every believer.',
				],
			},
		],
	},
	{
		slug: 'calming-the-storm',
		title: 'Calming the Storm',
		category: 'Nature',
		gospelReference: 'Mark 4:35–41 · Matthew 8:23–27 · Luke 8:22–25',
		excerpt:
			'Jesus rebukes the wind and sea; the disciples ask, “Who then is this, that even wind and sea obey him?”',
		sections: [
			{
				heading: 'The sign',
				paragraphs: [
					'Crossing the Sea of Galilee, Jesus sleeps while a violent storm threatens to swamp the boat. The disciples wake Him in fear. He rises, rebukes the wind, and says to the sea, “Peace! Be still!” Immediately there is a great calm.',
				],
			},
			{
				heading: 'What it reveals',
				paragraphs: [
					'The miracle shows Christ’s lordship over chaos and death—the same powers that haunted the deep in the Old Testament. Faith asks us to trust Him when we feel perishing despite His presence in the boat of the Church.',
					'His question, “Why are you afraid? Have you still no faith?” invites every disciple to deeper confidence in God’s care.',
				],
			},
		],
	},
	{
		slug: 'walking-on-water',
		title: 'Walking on the Water',
		category: 'Nature',
		gospelReference: 'Matthew 14:22–33 · Mark 6:45–52 · John 6:16–21',
		excerpt:
			'Jesus comes to the disciples across the sea; Peter walks toward Him on the waves until doubt overtakes him.',
		sections: [
			{
				heading: 'The sign',
				paragraphs: [
					'After feeding the multitude, Jesus sends the disciples ahead by boat while He prays alone. In the fourth watch of the night He approaches them walking on the sea. They cry out in terror, thinking Him a ghost, until He speaks: “Take heart; it is I. Do not be afraid.”',
					'Peter asks to come to Him on the water; he walks briefly, then sinks when he sees the wind. Jesus catches him and stills the storm when He enters the boat.',
				],
			},
			{
				heading: 'What it reveals',
				paragraphs: [
					'Christ shares divine dominion over the waters. The scene also teaches that faith fixes its eyes on Jesus rather than on the storm—and that He saves when human strength fails.',
				],
			},
		],
	},
	{
		slug: 'feeding-the-five-thousand',
		title: 'Feeding the Five Thousand',
		category: 'Nature',
		gospelReference: 'John 6:1–15 · Matthew 14:13–21 · Mark 6:30–44 · Luke 9:10–17',
		excerpt:
			'With five loaves and two fish Jesus feeds a vast crowd; twelve baskets of fragments remain.',
		sections: [
			{
				heading: 'The sign',
				paragraphs: [
					'A great multitude follows Jesus into a desolate place. He tests Philip, then takes the small offering of a boy—five barley loaves and two fish—gives thanks, distributes them, and all eat as much as they want. The fragments fill twelve wicker baskets.',
				],
			},
			{
				heading: 'What it reveals',
				paragraphs: [
					'The miracle echoes God feeding Israel with manna and Elisha multiplying loaves. It anticipates the Eucharist, where Christ feeds the Church with His own Body and Blood.',
					'John places this sign the day before His Bread of Life discourse (John 6), linking bodily hunger with the hunger for eternal life.',
				],
			},
		],
	},
	{
		slug: 'healing-the-paralytic',
		title: 'Healing the Paralytic',
		category: 'Healing',
		gospelReference: 'Mark 2:1–12 · Matthew 9:1–8 · Luke 5:17–26',
		excerpt:
			'“Your sins are forgiven”—then “Rise, pick up your mat and walk.” Faith and divine authority meet in one healing.',
		sections: [
			{
				heading: 'The sign',
				paragraphs: [
					'Friends lower a paralyzed man through the roof before Jesus in a crowded house. Seeing their faith, Jesus first forgives the man’s sins. Scribes charge Him with blasphemy, so He heals the body to show He has authority on earth to forgive sins: the paralytic rises and walks home glorifying God.',
				],
			},
			{
				heading: 'What it reveals',
				paragraphs: [
					'Physical healing and spiritual forgiveness belong together in Christ’s mission. The miracle confirms that the Son of Man has power to reconcile sinners with God—a foretaste of the sacrament of Penance.',
				],
			},
		],
	},
	{
		slug: 'healing-the-leper',
		title: 'Healing the Leper',
		category: 'Healing',
		gospelReference: 'Mark 1:40–45 · Matthew 8:1–4 · Luke 5:12–16',
		excerpt:
			'"If you will, you can make me clean." Jesus stretches out His hand: "I will; be clean."',
		sections: [
			{
				heading: 'The sign',
				paragraphs: [
					'A leper kneels before Jesus, confessing His power. Moved with pity, Jesus touches the untouchable man—an act of profound solidarity—and immediately the leprosy leaves him. Jesus charges him to show himself to the priest and offer the gift Moses commanded, as witness to the priests.',
				],
			},
			{
				heading: 'What it reveals',
				paragraphs: [
					'Christ restores the outcast to the community of worship. His willingness (“I will”) shows divine mercy, while sending the man to the Temple links the miracle to the worship of the true God.',
				],
			},
		],
	},
	{
		slug: 'healing-the-man-born-blind',
		title: 'Healing the Man Born Blind',
		category: 'Healing',
		gospelReference: 'John 9:1–41',
		excerpt:
			'Jesus gives sight to one blind from birth; the Pharisees question the sign while the man confesses, “Lord, I believe.”',
		sections: [
			{
				heading: 'The sign',
				paragraphs: [
					'Disciples ask whether the man or his parents sinned. Jesus answers that neither sinned for this purpose, but that God’s works might be revealed. He anoints the man’s eyes with clay and sends him to wash in Siloam; he returns seeing.',
					'Interrogated by authorities, the man bears witness more boldly at each hearing until he worships Jesus, who declares Himself the light of the world.',
				],
			},
			{
				heading: 'What it reveals',
				paragraphs: [
					'Spiritual blindness matters more than physical sight. The miracle is a parable of baptismal enlightenment: washed, the man sees; questioned, he professes faith.',
				],
			},
		],
	},
	{
		slug: 'casting-out-legion',
		title: 'Casting Out Legion',
		category: 'Exorcism',
		gospelReference: 'Mark 5:1–20 · Matthew 8:28–34 · Luke 8:26–39',
		excerpt:
			'Jesus drives a host of demons from a tormented man into a herd of swine—power over evil and freedom for the possessed.',
		sections: [
			{
				heading: 'The sign',
				paragraphs: [
					'In the region of the Gerasenes a man lives among tombs, uncontrollable and self-destructive. Demons name themselves “Legion.” Jesus permits them to enter swine that rush into the sea. The man, clothed and in his right mind, begs to follow Jesus but is sent to proclaim God’s mercy to his family.',
				],
			},
			{
				heading: 'What it reveals',
				paragraphs: [
					'Christ’s Kingdom breaks the grip of Satan. The Church continues this ministry through prayer, sacraments, and deliverance from sin—the greater and more common bondage.',
				],
			},
		],
	},
	{
		slug: 'raising-lazarus',
		title: 'Raising of Lazarus',
		category: 'Raising the dead',
		gospelReference: 'John 11:1–44',
		excerpt:
			'“I am the resurrection and the life.” Jesus calls Lazarus from the tomb after four days.',
		sections: [
			{
				heading: 'The sign',
				paragraphs: [
					'Jesus delays visiting Lazarus until he has died, telling Martha, “I am the resurrection and the life; whoever believes in me, though he die, shall live.” At the tomb He weeps with Mary and Martha, then commands, “Lazarus, come out.” The dead man emerges bound in burial cloths; Jesus orders, “Unbind him, and let him go.”',
				],
			},
			{
				heading: 'What it reveals',
				paragraphs: [
					'This greatest Johannine sign points directly to Christ’s own Resurrection and to the hope of every believer. Many who witnessed it believed; others plotted Jesus’ death—showing how signs demand a response of faith or rejection.',
				],
			},
		],
	},
	{
		slug: 'the-transfiguration',
		title: 'The Transfiguration',
		category: 'Glory',
		gospelReference: 'Matthew 17:1–9 · Mark 9:2–10 · Luke 9:28–36',
		excerpt:
			'On the mountain Jesus is transfigured in light; Moses and Elijah appear, and the Father says, “Listen to him.”',
		sections: [
			{
				heading: 'The sign',
				paragraphs: [
					'Peter, James, and John see Jesus’ face shine like the sun and His garments become white as light. Moses and Elijah converse with Him about His exodus in Jerusalem. Peter offers to build three tents until a bright cloud overshadows them and a voice declares, “This is my beloved Son… listen to him.” The disciples fall prostrate; Jesus touches them and tells them not to fear.',
				],
			},
			{
				heading: 'What it reveals',
				paragraphs: [
					'The Law and the Prophets bear witness to Christ. The glory of the Resurrection breaks through briefly to strengthen the apostles before the Passion. The Church celebrates this mystery on August 6 and in Lent as a lamp for the disciples’ journey.',
				],
			},
		],
	},
	{
		slug: 'the-resurrection',
		title: 'The Resurrection of Jesus',
		category: 'Glory',
		gospelReference: 'Matthew 28 · Mark 16 · Luke 24 · John 20–21',
		excerpt:
			'The central miracle of the faith: Christ rises bodily from the dead on the third day, the foundation of Christian hope.',
		sections: [
			{
				heading: 'The sign',
				paragraphs: [
					'After crucifixion and burial, the tomb is found empty. Angels announce that He has risen. The risen Lord appears to Mary Magdalene, to the disciples on the road to Emmaus, to the Twelve, and to more than five hundred witnesses. He eats with them, shows His wounds, and commissions them to baptize all nations.',
				],
			},
			{
				heading: 'What it reveals',
				paragraphs: [
					'St. Paul teaches that if Christ has not been raised, our faith is vain (1 Corinthians 15:17). The Resurrection is not a symbol but the victory of God over sin and death, the pledge of our own bodily resurrection, and the source of the Church’s joy every Sunday.',
					'Every Gospel miracle points toward this hour; every sacrament flows from it.',
				],
			},
		],
	},
];

export function getMiracle(slug: string): Miracle | undefined {
	return miracles.find((m) => m.slug === slug);
}
