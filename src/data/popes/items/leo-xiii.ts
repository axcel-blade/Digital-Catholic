import type { Pope } from '../types';

const pope: Pope = {
	slug: 'leo-xiii',
	title: 'Pope Leo XIII',
	birthName: 'Vincenzo Gioacchino Pecci',
	papalNumber: 256,
	pontificate: '1878–1903',
	reignStart: 1878,
	lifeDates: '1810–1903',
	excerpt:
		'The “Rosary Pope” whose long pontificate opened Catholic social teaching with Rerum Novarum and urged the faithful to pray the Rosary as a remedy for the age.',
	lastReviewed: '2026-11-18',
	sources: [
		{
			label: 'Vatican: Leo XIII — Encyclicals',
			url: 'https://www.vatican.va/content/leo-xiii/en.html',
		},
		{
			label: 'Vatican: Rerum Novarum (1891)',
			url: 'https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html',
		},
	],
	sections: [
		{
			heading: 'Who was Pope Leo XIII?',
			paragraphs: [
				'Pope Leo XIII, born Vincenzo Gioacchino Pecci on March 2, 1810, in Carpineto Romano, was Bishop of Rome from February 20, 1878, until his death on July 20, 1903. Elected after the loss of the Papal States, he led a Church that no longer ruled territory but sought a clearer voice in the modern world.',
				'His twenty-five-year pontificate produced a remarkable body of teaching: on the Rosary, Thomistic philosophy, the relationship of Church and state, and—most famously—the rights and duties of capital and labour.',
			],
		},
		{
			heading: 'His life before the papacy',
			paragraphs: [
				'Pecci studied in Rome, was ordained a priest, and served as papal diplomat in Belgium before becoming Bishop of Perugia in 1846. Created a cardinal in 1853, he spent decades as a pastor and administrator while the Risorgimento remade Italy and stripped the papacy of its temporal power.',
				'When Pius IX died in 1878, the conclave chose Pecci as a man of learning and pastoral experience who could engage the new industrial age without abandoning Tradition.',
			],
		},
		{
			heading: 'His pontificate',
			paragraphs: [
				'Leo XIII issued twelve encyclicals on the Rosary and earned the title “the Rosary Pope,” calling the prayer “the psalter of the Virgin Mary” and urging its daily recitation. He also restored the study of St. Thomas Aquinas in Catholic schools and seminaries.',
				'In 1891 he published Rerum Novarum, the foundational text of modern Catholic social teaching. It defended the dignity of workers, the right to a living wage and to form associations, private property ordered to the common good, and the duty of the state to protect the poor—rejecting both atheistic socialism and unbridled capitalism.',
				'He opened the Vatican Archives to scholars, encouraged biblical study, and sought better relations with nations that had long been estranged from Rome, while insisting that the Church’s spiritual mission did not depend on recovering lost territories.',
			],
		},
		{
			heading: 'Death and legacy',
			paragraphs: [
				'Leo XIII died in Rome on July 20, 1903, at the age of ninety-three—then the oldest pope in history. He was buried in St. John Lateran.',
				'His social encyclical shaped Catholic labour movements and later teaching from Pius XI to John Paul II and Francis. His devotion to the Rosary still marks October as the month of the Holy Rosary in Catholic practice.',
			],
		},
		{
			heading: 'Lessons for us today',
			paragraphs: [
				'Leo XIII shows that the Church can speak to new social questions without abandoning her faith. He invites Catholics to pray the Rosary with confidence and to seek justice for workers and the poor as an expression of the Gospel.',
				'His recovery of Aquinas also reminds learners that faith and reason belong together: clear thinking serves holiness and the common good.',
			],
		},
	],
};

export default pope;
