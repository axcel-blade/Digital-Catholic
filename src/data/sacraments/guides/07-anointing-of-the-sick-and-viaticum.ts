import type { SacramentGuide } from '../types';

const guide: SacramentGuide = {
	slug: 'anointing-of-the-sick-and-viaticum',
	title: 'Anointing of the Sick and the Viaticum',
	excerpt: 'How the Church strengthens the seriously ill and accompanies the dying with Anointing, Confession, and Holy Communion as food for the journey.',
	sacraments: ['anointing-of-the-sick', 'eucharist'],
	lastReviewed: '2026-10-26',
	sources: [
		{ label: 'Catechism of the Catholic Church, §§1499–1532 (Anointing of the Sick)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'James 5:14–15 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/james/5' },
		{ label: 'Code of Canon Law, canons 921–922, 998–1007', url: 'https://www.vatican.va/archive/cod-iuris-canonici/cic_index_en.html' },
	],
	sections: [
		{
			heading: 'Christ the physician',
			paragraphs: [
				'Christ’s compassion for the sick and His many healings were a sign that God had visited His people. He sent the apostles to heal, and they “anointed with oil many who were sick and cured them” (Mark 6:13; CCC 1503–1506).',
				'St. James describes the sacrament the Church continues to celebrate: “Is anyone among you sick? He should summon the presbyters of the church, and they should pray over him and anoint him with oil in the name of the Lord, and the prayer of faith will save the sick person” (James 5:14–15; CCC 1510).',
			],
		},
		{
			heading: 'Who may be anointed',
			paragraphs: [
				'Anointing of the Sick is not only for those at the point of death. It is appropriate as soon as any of the faithful begins to be in danger of death from sickness or old age (CCC 1514). It may be received before serious surgery, by the elderly whose frailty becomes more pronounced, and again if the illness worsens or a new serious illness arises (CCC 1515).',
				'Only bishops and priests are ministers of this sacrament (CCC 1516). Families should call a priest early, while the sick person can still take part consciously.',
			],
		},
		{
			heading: 'The celebration and its effects',
			paragraphs: [
				'The priest lays hands on the sick person in silence, prays over them in the faith of the Church, and anoints their forehead and hands with oil blessed by the bishop, saying: “Through this holy anointing may the Lord in his love and mercy help you with the grace of the Holy Spirit. May the Lord who frees you from sin save you and raise you up” (CCC 1513, 1519).',
				'The sacrament gives strength, peace, and courage to endure suffering; unites the sick person to the Passion of Christ; forgives sins if the person could not obtain forgiveness through Penance; restores health if that is conducive to salvation; and prepares for passing over to eternal life (CCC 1520–1523, 1532).',
			],
		},
		{
			heading: 'Viaticum: food for the journey',
			paragraphs: [
				'Viaticum, from the Latin for “provision for a journey,” is Holy Communion given to those who are about to leave this life. The Eucharist received at this moment is the seed of eternal life and the power of resurrection, according to the Lord’s words: “Whoever eats my flesh and drinks my blood has eternal life, and I will raise him on the last day” (John 6:54; CCC 1524).',
				'The faithful in danger of death are to be nourished by Holy Communion as Viaticum (canon 921). It may be brought by a priest, a deacon, or, when needed, an extraordinary minister of Holy Communion.',
			],
		},
		{
			heading: 'The last sacraments',
			paragraphs: [
				'Just as Baptism, Confirmation, and the Eucharist begin the Christian life, so Penance, Anointing, and the Eucharist as Viaticum are the sacraments that complete the earthly pilgrimage and prepare for our heavenly homeland (CCC 1525).',
				'When possible, the dying person first makes a confession, then receives the Anointing, and finally Viaticum. The priest may also impart the apostolic pardon, a plenary indulgence for the hour of death.',
			],
		},
	],
};

export default guide;
