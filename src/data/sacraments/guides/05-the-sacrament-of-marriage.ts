import type { SacramentGuide } from '../types';

const guide: SacramentGuide = {
	slug: 'the-sacrament-of-marriage',
	title: 'The Sacrament of Marriage',
	excerpt: 'God’s plan for marriage as a lifelong, faithful, and fruitful covenant between a man and a woman, raised by Christ to a sacrament.',
	sacraments: ['matrimony'],
	lastReviewed: '2026-10-26',
	sources: [
		{ label: 'Catechism of the Catholic Church, §§1601–1666 (Matrimony)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'Matthew 19:3–9 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/matthew/19' },
		{ label: 'Ephesians 5:21–33 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/ephesians/5' },
	],
	sections: [
		{
			heading: 'Marriage in God’s plan',
			paragraphs: [
				'Scripture begins with the creation of man and woman in the image of God and ends with the wedding feast of the Lamb. God Himself is the author of marriage: “a man leaves his father and mother and clings to his wife, and the two of them become one body” (Genesis 2:24; CCC 1602–1605).',
				'Christ raised marriage between the baptized to the dignity of a sacrament. St. Paul calls it a great mystery that refers to Christ and the Church (Ephesians 5:32). Spouses are called to love one another as Christ loves His Church (CCC 1613–1617).',
			],
		},
		{
			heading: 'The marriage covenant',
			paragraphs: [
				'Marriage is a covenant by which a man and a woman establish a partnership of the whole of life, ordered to the good of the spouses and to the procreation and education of children (CCC 1601).',
				'The essential properties of marriage are unity and indissolubility. Jesus taught: “What God has joined together, no human being must separate” (Matthew 19:6). A valid, consummated sacramental marriage cannot be dissolved by any human power; it ends only with death (CCC 1640, 1644).',
			],
		},
		{
			heading: 'Consent and celebration',
			paragraphs: [
				'In the Latin Church, the spouses themselves are the ministers of the sacrament: they confer it on each other by expressing their consent before the Church (CCC 1623). That consent must be free—without coercion or grave fear—and given by persons not impeded by natural or Church law (CCC 1625–1628).',
				'Catholics ordinarily marry before a priest or deacon and two witnesses, usually within Mass, since the Eucharist is the memorial of the New Covenant in which Christ united Himself to the Church (CCC 1621, 1630–1631). Couples prepare through marriage preparation offered by their parish.',
			],
		},
		{
			heading: 'Faithful, fruitful love',
			paragraphs: [
				'Married love requires fidelity: the spouses give themselves totally and definitively to each other (CCC 1646–1648). It is also open to life. Children are the supreme gift of marriage, and parents are the first educators of their children in the faith (CCC 1652–1653).',
				'The Christian family is called the “domestic church,” where children first hear the Gospel and learn to pray, and where all members exercise the priesthood of the baptized through prayer, love, and sacrifice (CCC 1656–1657).',
			],
		},
		{
			heading: 'Grace for the journey',
			paragraphs: [
				'The sacrament gives spouses a special grace to perfect their love, strengthen their indissoluble unity, and help one another attain holiness (CCC 1641). Christ remains with them, giving the strength to take up their crosses, rise after falls, forgive one another, and bear one another’s burdens (CCC 1642).',
				'When a marriage faces difficulty or breakdown, the Church accompanies spouses with pastoral care. Where there are serious doubts that a valid marriage ever existed, a Church tribunal can examine the case and may declare the marriage null (CCC 1629).',
			],
		},
	],
};

export default guide;
