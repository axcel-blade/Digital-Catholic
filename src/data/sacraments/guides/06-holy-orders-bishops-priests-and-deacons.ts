import type { SacramentGuide } from '../types';

const guide: SacramentGuide = {
	slug: 'holy-orders-bishops-priests-and-deacons',
	title: 'Holy Orders: Bishops, Priests and Deacons',
	excerpt: 'The three degrees of the ordained ministry through which the mission Christ gave His apostles continues in the Church.',
	sacraments: ['holy-orders'],
	lastReviewed: '2026-10-26',
	sources: [
		{ label: 'Catechism of the Catholic Church, §§1536–1600 (Holy Orders)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'Second Vatican Council, Lumen Gentium §§18–29', url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html' },
		{ label: '1 Timothy 3:1–13 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/1timothy/3' },
	],
	sections: [
		{
			heading: 'The sacrament of apostolic ministry',
			paragraphs: [
				'Holy Orders is the sacrament through which the mission Christ entrusted to His apostles continues to be exercised in the Church until the end of time (CCC 1536). All the baptized share in the common priesthood of the faithful; the ministerial priesthood is at its service, differing in essence and not only in degree (CCC 1547).',
				'The sacrament has three degrees: the episcopate (bishops), the presbyterate (priests), and the diaconate (deacons) (CCC 1554). Each is conferred by the laying on of hands by a bishop and a specific prayer of consecration, and each imprints an indelible character, so it cannot be repeated (CCC 1573, 1582).',
			],
		},
		{
			heading: 'Bishops',
			paragraphs: [
				'Bishops receive the fullness of the sacrament of Holy Orders. As successors of the apostles, they are entrusted with teaching, sanctifying, and governing the people of God (CCC 1555–1558).',
				'Each bishop has care of a particular Church, usually a diocese, while together with the Pope, the Bishop of Rome, the college of bishops shares concern for the whole Church (CCC 1560). A bishop is ordained by other bishops, and the Pope’s approval is required for a legitimate episcopal ordination (CCC 1559).',
			],
		},
		{
			heading: 'Priests',
			paragraphs: [
				'Priests are co-workers of the bishops. United with their bishop, they preach the Gospel, shepherd the faithful, and celebrate divine worship—above all the Eucharist, where they act in the person of Christ the Head (CCC 1562–1566).',
				'Priests also forgive sins in the Sacrament of Penance, anoint the sick, baptize, and witness marriages. They form one presbyterate with their bishop and promise him respect and obedience (CCC 1567).',
			],
		},
		{
			heading: 'Deacons',
			paragraphs: [
				'Deacons are ordained not for the priesthood but for service (diakonia), following the seven men chosen in Acts 6 to serve the community (CCC 1569). They assist the bishop and priests at the liturgy, proclaim the Gospel, preach, baptize, witness marriages, preside at funerals, and dedicate themselves to works of charity (CCC 1570).',
				'Since the Second Vatican Council, the Latin Church has restored the permanent diaconate, which may be conferred on married men. Men preparing for the priesthood are first ordained as transitional deacons (CCC 1571).',
			],
		},
		{
			heading: 'Who can be ordained',
			paragraphs: [
				'Only a baptized man validly receives sacred ordination. The Lord Jesus chose men to form the college of the twelve apostles, and the apostles did the same when they chose collaborators; the Church recognizes herself bound by this choice made by the Lord (CCC 1577).',
				'No one has a right to receive Holy Orders; one is called by God, and the Church discerns the call (CCC 1578). In the Latin Church, priests are normally chosen from among men who embrace celibacy for the sake of the Kingdom; Eastern Churches may ordain married men as priests, while bishops are chosen from among celibates (CCC 1579–1580).',
			],
		},
	],
};

export default guide;
