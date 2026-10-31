import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'apostles-creed',
	title: 'Apostles’ Creed',
	alsoKnownAs: 'Symbolum Apostolorum',
	excerpt:
		'Ancient baptismal profession of faith of the Church of Rome, summarising the faith of the apostles; prayed at the beginning of the Rosary.',
	text: [
		'I believe in God, the Father almighty, Creator of heaven and earth,',
		'and in Jesus Christ, his only Son, our Lord,',
		'who was conceived by the Holy Spirit, born of the Virgin Mary,',
		'suffered under Pontius Pilate, was crucified, died and was buried;',
		'he descended into hell; on the third day he rose again from the dead;',
		'he ascended into heaven, and is seated at the right hand of God the Father almighty;',
		'from there he will come to judge the living and the dead.',
		'I believe in the Holy Spirit, the holy catholic Church, the communion of saints,',
		'the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
	].join('\n'),
	relatedGuideTopic: { guide: 'core-beliefs', slug: 'the-apostles-creed-and-the-nicene-creed' },
	lastReviewed: '2026-10-31',
	sources: [
		{ label: 'Catechism of the Catholic Church, §§185–197 (The Credo)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'Wikipedia: Apostles’ Creed', url: 'https://en.wikipedia.org/wiki/Apostles%27_Creed' },
	],
	sections: [
		{
			heading: 'What is the Apostles’ Creed?',
			paragraphs: [
				'A creed (from the Latin credo, “I believe”) is a short summary of the faith. The Apostles’ Creed is the ancient baptismal creed of the Church of Rome. The Catechism calls it “the faithful summary of the apostles’ faith” and explains that it is so named because it summarises their teaching (CCC 194).',
				'An old tradition says that each of the Twelve Apostles contributed one article. Historically, the Creed developed from the questions put to people at Baptism in Rome in the second and third centuries, and reached its present form by about the eighth century. It follows the shape of the Trinity: faith in the Father who creates, the Son who redeems, and the Holy Spirit who sanctifies through the Church.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'The Apostles’ Creed opens the Rosary, prayed on the crucifix. It may also be professed at Mass in place of the Nicene Creed, especially during Lent and Easter, and it is the profession of faith at the heart of the baptismal promises.',
				'Praying the Creed is more than reciting facts. Each time we say “I believe,” we renew our trust in God and unite ourselves with the faith of the Church through the ages.',
			],
		},
	],
};

export default prayer;
