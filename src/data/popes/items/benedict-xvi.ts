import type { Pope } from '../types';

const pope: Pope = {
	slug: 'benedict-xvi',
	title: 'Pope Benedict XVI',
	birthName: 'Joseph Aloisius Ratzinger',
	papalNumber: 265,
	pontificate: '2005–2013',
	reignStart: 2005,
	lifeDates: '1927–2022',
	excerpt:
		'Theologian-pope who taught with clarity on faith, reason, and the liturgy, and who resigned the papacy in 2013—an act of humility without modern precedent.',
	lastReviewed: '2026-11-18',
	sources: [
		{
			label: 'Vatican: Benedict XVI — Encyclicals and documents',
			url: 'https://www.vatican.va/content/benedict-xvi/en.html',
		},
		{
			label: 'Vatican: Declaratio of resignation (11 February 2013)',
			url: 'https://www.vatican.va/content/benedict-xvi/en/speeches/2013/february/documents/hf_ben-xvi_spe_20130211_declaratio.html',
		},
	],
	sections: [
		{
			heading: 'Who was Pope Benedict XVI?',
			paragraphs: [
				'Pope Benedict XVI, born Joseph Ratzinger on April 16, 1927, in Marktl am Inn, Bavaria, was Bishop of Rome from April 19, 2005, until his resignation on February 28, 2013. A renowned theologian and long-time prefect of the Congregation for the Doctrine of the Faith, he was the first German pope in centuries.',
				'His brief pontificate emphasised the harmony of faith and reason, the beauty of the liturgy, and a “hermeneutic of continuity” with the Church’s tradition after the Second Vatican Council.',
			],
		},
		{
			heading: 'His life before the papacy',
			paragraphs: [
				'Raised in a devout Bavarian family under the shadow of National Socialism, Ratzinger was drafted as a teenager, deserted near the war’s end, and later entered seminary. Ordained in 1951, he became a professor of theology and a peritus (expert) at Vatican II.',
				'Named Archbishop of Munich and Freising in 1977 and a cardinal the same year, he was called to Rome by John Paul II in 1981 to lead the Congregation for the Doctrine of the Faith. For nearly a quarter-century he was the Church’s chief doctrinal guardian and a close collaborator of the Polish pope.',
			],
		},
		{
			heading: 'His pontificate',
			paragraphs: [
				'Elected in 2005, he took the name Benedict in honour of the patron of Europe and of Benedict XV, a pope of peace. His encyclicals Deus Caritas Est, Spe Salvi, and Caritas in Veritate explored love, hope, and social charity rooted in truth.',
				'He wrote the Jesus of Nazareth books as a personal theological meditation, promoted the Extraordinary Form of the Roman Rite alongside the Ordinary Form, and sought dialogue with other Christians, Jews, and Muslims—while also confronting the sexual-abuse crisis with new norms and public apologies.',
				'On February 11, 2013, citing declining strength, he announced his resignation—the first pope in nearly six hundred years to do so freely. He lived afterward as pope emeritus in the Vatican Gardens, devoted to prayer and study.',
			],
		},
		{
			heading: 'Death and legacy',
			paragraphs: [
				'Benedict XVI died on December 31, 2022, and was buried in the Vatican Grottoes. Catholics remember him as a teacher who believed that truth is not a burden but a gift that liberates.',
				'His resignation clarified that the papacy is an office of service, not a personal possession—and that even a pope may step aside when he judges he can no longer fulfil it well.',
			],
		},
		{
			heading: 'Lessons for us today',
			paragraphs: [
				'Benedict invites believers to think with the Church: to read Scripture in Tradition, to love the liturgy as an encounter with Christ, and to refuse the false choice between faith and reason.',
				'His humility in resigning also teaches that leadership in the Church is measured by fidelity and service, not by clinging to power.',
			],
		},
	],
};

export default pope;
