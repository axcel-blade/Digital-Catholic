import type { Pope } from '../types';

const pope: Pope = {
	slug: 'francis',
	title: 'Pope Francis',
	birthName: 'Jorge Mario Bergoglio',
	papalNumber: 266,
	pontificate: '2013–2025',
	reignStart: 2013,
	lifeDates: '1936–2025',
	excerpt:
		'The first pope from the Americas and the first Jesuit pope—pastor of mercy who called the Church to go to the peripheries, care for creation, and accompany the poor.',
	lastReviewed: '2026-11-18',
	sources: [
		{
			label: 'Vatican: Francis — Encyclicals and documents',
			url: 'https://www.vatican.va/content/francesco/en.html',
		},
		{
			label: 'Vatican: Laudato Si’ (2015)',
			url: 'https://www.vatican.va/content/francesco/en/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html',
		},
	],
	sections: [
		{
			heading: 'Who was Pope Francis?',
			paragraphs: [
				'Pope Francis, born Jorge Mario Bergoglio on December 17, 1936, in Buenos Aires, Argentina, was Bishop of Rome from March 13, 2013, until his death on April 21, 2025. He was the first pope from the Southern Hemisphere, the first from the Americas, and the first Jesuit elected to the See of Peter.',
				'Choosing the name Francis after the saint of Assisi, he made mercy, missionary discipleship, and care for the poor and for creation the hallmarks of his pontificate.',
			],
		},
		{
			heading: 'His life before the papacy',
			paragraphs: [
				'The son of Italian immigrants, Bergoglio entered the Society of Jesus, was ordained in 1969, and later served as provincial of the Jesuits in Argentina during years of political violence. He taught literature and psychology, lived simply, and became known as a pastor close to ordinary people.',
				'Named Archbishop of Buenos Aires in 1998 and a cardinal in 2001, he took public transport, cooked his own meals, and urged priests to smell like their sheep. In the 2013 conclave that followed Benedict XVI’s resignation, he was elected on the fifth ballot.',
			],
		},
		{
			heading: 'His pontificate',
			paragraphs: [
				'From his first appearance on the loggia—“Buona sera”—Francis struck a pastoral tone. His exhortation Evangelii Gaudium called the whole Church to a missionary conversion. Laudato Si’ (2015) linked care for our common home with care for the poor; Amoris Laetitia addressed family life; Fratelli Tutti urged fraternity beyond political and economic borders.',
				'He travelled widely, met victims of abuse, reformed parts of the Roman Curia, and convened synods that emphasised listening. Admirers praised his closeness to the margins; critics questioned aspects of his teaching style and governance. Through both, he insisted that the Church’s credibility rests on mercy and nearness to Christ in the least of His brothers and sisters.',
			],
		},
		{
			heading: 'Death and legacy',
			paragraphs: [
				'Francis died at the Domus Sanctae Marthae in Vatican City on April 21, 2025, at the age of eighty-eight, and was buried at the Basilica of St. Mary Major in Rome. His pontificate had shifted the Church’s public accent toward the peripheries, synodality, and integral ecology. He asked to be remembered as a pastor more than as a prince.',
				'His legacy continues wherever Catholics serve migrants, defend the unborn and the elderly, care for creation, and seek a Church that walks with people rather than waiting for them to arrive already perfect. Cardinal Robert Prevost was elected his successor as Pope Leo XIV on May 8, 2025.',
			],
		},
		{
			heading: 'Lessons for us today',
			paragraphs: [
				'Francis teaches that holiness is not flight from the world but love that goes out: visit the sick, welcome the stranger, and protect the earth that God entrusted to us.',
				'His watchword—mercy—does not cancel the commandments; it opens the door for sinners to meet the Father who runs to embrace the prodigal son.',
			],
		},
	],
};

export default pope;
