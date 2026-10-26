import type { SacramentGuide } from '../types';

const guide: SacramentGuide = {
	slug: 'baptism-and-confirmation',
	title: 'Baptism and Confirmation',
	excerpt: 'How the first two sacraments of initiation make us children of God and seal us with the gift of the Holy Spirit.',
	sacraments: ['baptism', 'confirmation'],
	lastReviewed: '2026-10-26',
	sources: [
		{ label: 'Catechism of the Catholic Church, §§1213–1284 (Baptism)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'Catechism of the Catholic Church, §§1285–1321 (Confirmation)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'Matthew 28:19 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/matthew/28' },
		{ label: 'Acts 8:14–17 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/acts/8' },
	],
	sections: [
		{
			heading: 'Two sacraments, one initiation',
			paragraphs: [
				'Baptism, Confirmation, and the Eucharist together lay the foundations of every Christian life. The Catechism compares them to natural life: we are born anew in Baptism, strengthened in Confirmation, and nourished by the Eucharist (CCC 1212).',
				'Baptism and Confirmation are closely linked. In the early Church they were usually celebrated together, and the Eastern Churches still confer Baptism, Confirmation (Chrismation), and First Communion in a single celebration, even for infants. In the Latin Church, Confirmation is usually given later, so that the bishop—successor of the apostles—can complete what Baptism began (CCC 1290–1292).',
			],
		},
		{
			heading: 'What Baptism does',
			paragraphs: [
				'Baptism frees us from original sin and from all personal sin, together with all punishment due to sin. It makes us adopted children of God, members of Christ and of His Church, and sharers in His priesthood (CCC 1263–1268).',
				'Baptism also imprints an indelible spiritual mark, or character, on the soul, so it can never be repeated (CCC 1272). Christ taught that Baptism is necessary for salvation for those to whom the Gospel has been proclaimed (John 3:5; CCC 1257), while the Church also recognises the baptism of blood (martyrdom) and the baptism of desire (CCC 1258–1260).',
			],
		},
		{
			heading: 'How Baptism is celebrated',
			paragraphs: [
				'The essential rite is triple immersion in water, or pouring water on the head, while saying: “I baptise you in the name of the Father, and of the Son, and of the Holy Spirit” (CCC 1239–1240). The ordinary ministers are bishops, priests, and deacons, but in case of necessity anyone—even a non-baptized person—can baptise, with the right intention and using the Trinitarian formula (CCC 1256).',
				'The rite is rich with signs: the sign of the cross, the anointing with sacred chrism, the white garment showing that the person has “put on Christ,” and the candle lit from the Easter candle. Parents and godparents profess the faith on behalf of an infant and promise to raise the child in it (CCC 1241–1255).',
			],
		},
		{
			heading: 'What Confirmation does',
			paragraphs: [
				'Confirmation brings an increase and deepening of baptismal grace. It roots us more deeply as children of God, unites us more firmly to Christ, increases the gifts of the Holy Spirit in us, binds us more perfectly to the Church, and gives a special strength to spread and defend the faith by word and deed (CCC 1303).',
				'Like Baptism, Confirmation imprints an indelible character and is received only once (CCC 1304–1305). It is the personal Pentecost of each Christian: as the apostles laid hands on the newly baptised in Samaria so they might receive the Holy Spirit (Acts 8:14–17), so the Church continues to do.',
			],
		},
		{
			heading: 'How Confirmation is celebrated',
			paragraphs: [
				'The essential rite is the anointing with sacred chrism on the forehead, done with the laying on of the hand, and the words: “Be sealed with the Gift of the Holy Spirit” (CCC 1300). The ordinary minister in the Latin Church is the bishop; a priest may confirm with his permission, and always confirms adults he baptises and anyone in danger of death (CCC 1312–1314).',
				'Candidates prepare through prayer and instruction, choose a sponsor—ideally one of their baptismal godparents—and should be in the state of grace, normally making a good confession beforehand (CCC 1309–1311).',
			],
		},
	],
};

export default guide;
