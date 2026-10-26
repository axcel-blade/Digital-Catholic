import type { CoreBelief } from '../types';

const belief: CoreBelief = {
	number: 6,
	title: 'The Apostles’ Creed and the Nicene Creed',
	summary: 'Brief, authoritative summaries of the faith professed by the Church since its earliest centuries.',
	scripture: 'Romans 10:9–10; 1 Corinthians 15:3–5; 1 Timothy 6:12',
	catechism: 'CCC 185–197',
	meaning: [
		'A creed (from the Latin credo, “I believe”) is a profession of faith that gathers the essential truths of Christianity into a few words. The Apostles’ Creed is the ancient baptismal creed of the Church of Rome; it is a faithful summary of the apostles’ faith and is prayed at the beginning of the Rosary.',
		'The Nicene Creed (more fully the Niceno-Constantinopolitan Creed) comes from the first two ecumenical councils, Nicaea (325) and Constantinople (381). Written to defend the full divinity of the Son and of the Holy Spirit against heresy, it is professed at Sunday Mass and is shared by Christians of East and West. Both creeds follow the same pattern: faith in the Father; in the Son and His work of redemption; and in the Holy Spirit, the Church, and eternal life.',
	],
	text: {
		title: 'The Apostles’ Creed',
		lines: [
			'I believe in God, the Father almighty, Creator of heaven and earth,',
			'and in Jesus Christ, his only Son, our Lord,',
			'who was conceived by the Holy Spirit, born of the Virgin Mary,',
			'suffered under Pontius Pilate, was crucified, died and was buried;',
			'he descended into hell; on the third day he rose again from the dead;',
			'he ascended into heaven, and is seated at the right hand of God the Father almighty;',
			'from there he will come to judge the living and the dead.',
			'I believe in the Holy Spirit, the holy catholic Church, the communion of saints,',
			'the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
		],
	},
	link: { href: '/mass/order-of-mass', label: 'See where the Creed is professed in the Order of Mass' },
};

export default belief;
