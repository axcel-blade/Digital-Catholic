import type { Saint } from '../types';

const saint: Saint = {
	slug: 'pope-francis',
	title: 'Pope Francis',
	roleLabel: 'Pope',
	excerpt:
		'The first Jesuit pope and the first from the Americas—Jorge Mario Bergoglio led the Church from 2013 to 2025 with a call to mercy, care for the poor, and care for our common home.',
	lifeDates: '1936–2025',
	lastReviewed: '2026-11-18',
	sources: [
		{
			label: 'Vatican News: Pope Francis has died on Easter Monday aged 88',
			url: 'https://www.vaticannews.va/en/pope/news/2025-04/pope-francis-dies-on-easter-monday-aged-88.html',
		},
		{
			label: 'Wikipedia: Pope Francis',
			url: 'https://en.wikipedia.org/wiki/Pope_Francis',
		},
		{
			label: 'Wikipedia: Death and funeral of Pope Francis',
			url: 'https://en.wikipedia.org/wiki/Death_and_funeral_of_Pope_Francis',
		},
	],
	sections: [
		{
			heading: 'Who was Pope Francis?',
			paragraphs: [
				'Pope Francis, born Jorge Mario Bergoglio on December 17, 1936, in Buenos Aires, Argentina, was Bishop of Rome from March 13, 2013, until his death on April 21, 2025. He was the first pope from the Society of Jesus, the first from the Southern Hemisphere, and the first from the Americas.',
				'He chose the name Francis in honour of St. Francis of Assisi, signalling a papacy marked by simplicity, care for the poor, and love of creation. His motto, Miserando atque eligendo—“by having mercy and by choosing”—came from a homily of St. Bede on the call of St. Matthew.',
			],
		},
		{
			heading: 'His life before the papacy',
			paragraphs: [
				'The son of Italian immigrants, Bergoglio worked briefly as a chemical technician and as a nightclub bouncer before entering the Jesuits. He was ordained a priest on December 13, 1969, served as provincial of the Jesuits in Argentina, and later taught and did parish work.',
				'John Paul II named him auxiliary bishop of Buenos Aires in 1992, coadjutor archbishop in 1997, and archbishop in 1998; he was created a cardinal in 2001. Known for riding the bus, cooking his own meals, and visiting the villas miserias, he urged priests to be “shepherds living with the smell of the sheep.”',
			],
		},
		{
			heading: 'His pontificate',
			paragraphs: [
				'Elected after the resignation of Benedict XVI, Francis emphasised God’s mercy, synodality, and outreach to those on the peripheries. His major teaching documents include Evangelii Gaudium on the joy of the Gospel, Laudato Si’ on care for our common home, Amoris Laetitia on love in the family, and Fratelli Tutti on human fraternity.',
				'He travelled widely, met victims of abuse, reformed parts of the Roman Curia, and invited the whole Church into a synodal process of listening and discernment. He also canonised St. John XXIII and St. John Paul II together in 2014, and beatified Carlo Acutis in 2020.',
			],
		},
		{
			heading: 'Death and burial',
			paragraphs: [
				'After a serious respiratory illness in early 2025, Francis died at the Domus Sanctae Marthae on Easter Monday, April 21, 2025, at the age of eighty-eight. Cardinal Kevin Farrell, Camerlengo, announced his death to the world.',
				'His funeral Mass was celebrated on April 26, and he was buried at the Basilica of St. Mary Major in Rome, according to his wish. The conclave that followed elected Pope Leo XIV on May 8, 2025.',
			],
		},
		{
			heading: 'Lessons for us today',
			paragraphs: [
				'Francis repeatedly asked the Church to go out to the margins, to accompany the wounded, and to trust in God’s endless mercy. He taught that the Gospel is joy, not a burden, and that no one is beyond the reach of Christ’s love.',
				'His care for migrants, prisoners, the sick, and the earth challenges Catholics to practise the corporal and spiritual works of mercy in ordinary life—beginning with the person nearest to us who needs compassion.',
			],
		},
	],
};

export default saint;
