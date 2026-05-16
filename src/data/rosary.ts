export interface RosaryMystery {
	number: number;
	title: string;
	fruit: string;
	meditation: string;
}

export interface MysterySet {
	slug: string;
	title: string;
	excerpt: string;
	days: string;
	intro: string;
	mysteries: RosaryMystery[];
}

export const rosaryIntro =
	'The Holy Rosary is a beloved prayer of the Catholic Church. On each bead we meditate on the life of Christ and His Mother while repeating the Our Father, Hail Mary, and Glory Be. The twenty mysteries are grouped into four sets, traditionally prayed on different days of the week.';

export interface RosaryHowToStep {
	number: number;
	title: string;
	description: string;
}

export interface RosaryPrayer {
	title: string;
	text: string;
}

export const rosaryHowToIntro =
	'The Rosary is prayed on a string of beads—a crucifix, one large bead, five sets of ten small beads (decades), and small beads between decades. You may use your fingers if you have no beads. Move slowly, speak the prayers, and pause to meditate on each mystery.';

export const rosaryHowToSteps: RosaryHowToStep[] = [
	{
		number: 1,
		title: 'Begin with the Sign of the Cross',
		description:
			'Hold the crucifix and pray: “In the name of the Father, and of the Son, and of the Holy Spirit. Amen.”',
	},
	{
		number: 2,
		title: 'Pray the Apostles’ Creed',
		description: 'Still on the crucifix, profess the faith of the Church in the Creed (see below).',
	},
	{
		number: 3,
		title: 'Our Father, three Hail Marys, Glory Be',
		description:
			'On the first large bead, pray one Our Father. On the next three small beads, pray a Hail Mary on each—for an increase of faith, hope, and charity. Then pray the Glory Be.',
	},
	{
		number: 4,
		title: 'Announce the first mystery',
		description:
			'Name the mystery you will meditate on (for example, “The First Joyful Mystery: The Annunciation”). Many Catholics also state the fruit of the mystery. Choose the set for the day (see below).',
	},
	{
		number: 5,
		title: 'Pray one decade',
		description:
			'On the large bead before the decade: one Our Father. On each of the ten small beads: one Hail Mary, meditating on the mystery. After the tenth Hail Mary: Glory Be, and optionally the Fatima Prayer (“O my Jesus…”).',
	},
	{
		number: 6,
		title: 'Continue through five decades',
		description:
			'Before each new decade, announce the next mystery, then repeat step 5. A full Rosary is five decades—one for each mystery in the set you are praying that day.',
	},
	{
		number: 7,
		title: 'Close with the Hail Holy Queen',
		description:
			'After the fifth decade, pray the Hail Holy Queen and the concluding prayer. You may end with the Sign of the Cross. Some add the Prayer to St. Michael or other customary prayers.',
	},
];

export const rosaryMysterySchedule =
	'Joyful Mysteries on Monday and Saturday; Sorrowful on Tuesday and Friday; Glorious on Wednesday and Sunday; Luminous on Thursday. Many Catholics also pray the Joyful Mysteries on Sundays during Advent and Christmas, and the Sorrowful during Lent.';

export const rosaryPrayers: RosaryPrayer[] = [
	{
		title: 'Sign of the Cross',
		text: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
	},
	{
		title: 'Apostles’ Creed',
		text: 'I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
	},
	{
		title: 'Our Father',
		text: 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
	},
	{
		title: 'Hail Mary',
		text: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
	},
	{
		title: 'Glory Be',
		text: 'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.',
	},
	{
		title: 'Fatima Prayer (after each decade)',
		text: 'O my Jesus, forgive us our sins, save us from the fires of hell; lead all souls to heaven, especially those in most need of thy mercy.',
	},
	{
		title: 'Hail Holy Queen',
		text: 'Hail, holy Queen, Mother of Mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ.',
	},
	{
		title: 'Concluding prayer',
		text: 'O God, whose only-begotten Son, by his life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech thee, that while meditating on these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.',
	},
];

export const mysterySets: MysterySet[] = [
	{
		slug: 'joyful',
		title: 'Joyful Mysteries',
		excerpt:
			'From the Annunciation to the Finding in the Temple—the joyful events of Christ’s early life and Mary’s yes to God.',
		days: 'Monday and Saturday',
		intro:
			'The Joyful Mysteries draw us into the beginnings of salvation: Mary’s fiat, the Visitation, the birth of the Lord, His presentation in the Temple, and His wisdom among the teachers in Jerusalem.',
		mysteries: [
			{
				number: 1,
				title: 'The Annunciation',
				fruit: 'Humility',
				meditation:
					'The Angel Gabriel greets Mary as full of grace. Though troubled, she trusts God’s word and says, “Behold, I am the handmaid of the Lord; let it be to me according to your word.” The Word becomes flesh in her womb.',
			},
			{
				number: 2,
				title: 'The Visitation',
				fruit: 'Charity',
				meditation:
					'Mary hastens to visit her cousin Elizabeth, who is with child in her old age. At Mary’s greeting, John leaps in Elizabeth’s womb, and Mary proclaims the Magnificat—God who casts down the proud and lifts up the lowly.',
			},
			{
				number: 3,
				title: 'The Nativity',
				fruit: 'Poverty of spirit',
				meditation:
					'In Bethlehem, Mary gives birth to Jesus and lays Him in a manger. Angels announce peace to shepherds, who come to adore. God enters our world in poverty so that we might share His riches.',
			},
			{
				number: 4,
				title: 'The Presentation in the Temple',
				fruit: 'Obedience',
				meditation:
					'Mary and Joseph present the Child according to the Law. Simeon takes Jesus in his arms and prophesies a sword of sorrow for Mary. The Holy Family fulfills God’s commands in faithful love.',
			},
			{
				number: 5,
				title: 'The Finding of Jesus in the Temple',
				fruit: 'Piety',
				meditation:
					'After three days of searching, Mary and Joseph find the twelve-year-old Jesus teaching in the Temple. He returns with them to Nazareth and grows in wisdom. We seek Him whenever we feel lost.',
			},
		],
	},
	{
		slug: 'sorrowful',
		title: 'Sorrowful Mysteries',
		excerpt:
			'From the Agony in the Garden to the Crucifixion—the Passion by which Christ saves us and teaches us to unite our sufferings to His.',
		days: 'Tuesday and Friday',
		intro:
			'The Sorrowful Mysteries lead us through Christ’s Passion: His prayer in Gethsemane, His scourging and crowning, the way of the Cross, and His death on Calvary for the forgiveness of sins.',
		mysteries: [
			{
				number: 1,
				title: 'The Agony in the Garden',
				fruit: 'Contrition',
				meditation:
					'In the Garden of Gethsemane, Jesus prays in anguish: “Father, if it be possible, let this cup pass from me; nevertheless, not as I will, but as you will.” His disciples sleep while He sweats blood for our sake.',
			},
			{
				number: 2,
				title: 'The Scourging at the Pillar',
				fruit: 'Purity',
				meditation:
					'Pilate has Jesus scourged, though He is innocent. The blows fall on the Lamb of God who takes away the sins of the world. We offer Him our hearts, asking grace to resist sin and love purity.',
			},
			{
				number: 3,
				title: 'The Crowning with Thorns',
				fruit: 'Moral courage',
				meditation:
					'Soldiers mock Jesus as King, clothing Him in a purple robe and pressing a crown of thorns into His brow. He bears ridicule and pain in silence, true King of a kingdom not of this world.',
			},
			{
				number: 4,
				title: 'The Carrying of the Cross',
				fruit: 'Patience',
				meditation:
					'Jesus carries the Cross through the streets of Jerusalem. He falls under its weight; Simon of Cyrene helps Him. Veronica wipes His face. We walk with Him in our daily crosses.',
			},
			{
				number: 5,
				title: 'The Crucifixion',
				fruit: 'Perseverance',
				meditation:
					'On Calvary Jesus is nailed to the Cross and dies between two criminals. He forgives those who crucify Him, entrusts Mary to John, and commends His spirit to the Father. By His wounds we are healed.',
			},
		],
	},
	{
		slug: 'glorious',
		title: 'Glorious Mysteries',
		excerpt:
			'From the Resurrection to the Coronation of Mary—the triumph of Christ and the glory of the Mother of God.',
		days: 'Wednesday and Sunday',
		intro:
			'The Glorious Mysteries proclaim Christ’s victory over death and the honor given to Mary: the Resurrection, Ascension, Pentecost, her Assumption, and her Coronation as Queen of Heaven and earth.',
		mysteries: [
			{
				number: 1,
				title: 'The Resurrection',
				fruit: 'Faith',
				meditation:
					'On the third day the tomb is empty. The Risen Lord appears to Mary Magdalene and the disciples. Death has no final power; we are called to live in the hope of sharing His risen life.',
			},
			{
				number: 2,
				title: 'The Ascension',
				fruit: 'Hope',
				meditation:
					'Forty days after Easter, Jesus ascends to the Father before the apostles’ eyes. He promises to be with us always and sends us to baptize all nations. Our true home is with Him in heaven.',
			},
			{
				number: 3,
				title: 'The Descent of the Holy Spirit',
				fruit: 'Love of God',
				meditation:
					'At Pentecost the Holy Spirit comes upon Mary and the apostles as tongues of fire. They preach boldly in many languages. The Church is born to carry Christ to the ends of the earth.',
			},
			{
				number: 4,
				title: 'The Assumption of Mary',
				fruit: 'Grace of a happy death',
				meditation:
					'At the end of her earthly life, Mary is taken body and soul into heavenly glory. She who carried the Savior is the first to share fully in His resurrection—a sign of hope for all the faithful.',
			},
			{
				number: 5,
				title: 'The Coronation of Mary',
				fruit: 'Trust in Mary’s intercession',
				meditation:
					'Mary is crowned Queen of Heaven and earth. As Mother of the King, she intercedes for the Church. We entrust our prayers and our lives to her maternal care.',
			},
		],
	},
	{
		slug: 'luminous',
		title: 'Luminous Mysteries',
		excerpt:
			'From Christ’s Baptism to the Institution of the Eucharist—moments of light in His public ministry, given to the Church by Pope St. John Paul II.',
		days: 'Thursday',
		intro:
			'The Luminous Mysteries (Mysteries of Light) meditate on key moments of Christ’s ministry: His Baptism, the wedding at Cana, the proclamation of the Kingdom, the Transfiguration, and the gift of the Eucharist.',
		mysteries: [
			{
				number: 1,
				title: 'The Baptism of Jesus in the Jordan',
				fruit: 'Openness to the Holy Spirit',
				meditation:
					'John baptizes Jesus in the Jordan. The heavens open, the Spirit descends like a dove, and the Father declares, “This is my beloved Son.” We recall our own Baptism and call on the Spirit.',
			},
			{
				number: 2,
				title: 'The Wedding at Cana',
				fruit: 'Faith in Mary’s intercession',
				meditation:
					'At a wedding feast the wine runs short. Mary tells the servants, “Do whatever he tells you.” Jesus changes water into wine—His first sign. Mary leads us to trust and obey her Son.',
			},
			{
				number: 3,
				title: 'The Proclamation of the Kingdom',
				fruit: 'Conversion',
				meditation:
					'Jesus preaches repentance and the coming of God’s Kingdom. He calls sinners to mercy and sends disciples to heal and proclaim the Gospel. We ask for hearts turned toward God.',
			},
			{
				number: 4,
				title: 'The Transfiguration',
				fruit: 'Desire for holiness',
				meditation:
					'On Mount Tabor Jesus is transfigured before Peter, James, and John; His face shines and Moses and Elijah appear. The Father says, “Listen to him.” We seek the glory of life with God.',
			},
			{
				number: 5,
				title: 'The Institution of the Eucharist',
				fruit: 'Love of the Eucharist',
				meditation:
					'At the Last Supper Jesus takes bread and wine, gives thanks, and gives Himself: “This is my body… this is my blood.” He commands us to do this in memory of Him—the heart of Catholic worship.',
			},
		],
	},
];

export function getMysterySet(slug: string): MysterySet | undefined {
	return mysterySets.find((set) => set.slug === slug);
}
