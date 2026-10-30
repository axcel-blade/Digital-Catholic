import type { SourceReference } from '../lib/trust';

export type TraditionKey = 'catholic' | 'easternOrthodox' | 'orientalOrthodox' | 'anglican' | 'protestant';

export interface Tradition {
	key: TraditionKey;
	name: string;
	summary: string;
	/** Representative statements of faith for this tradition */
	sources: SourceReference[];
}

export interface ComparisonRow {
	topic: string;
	values: Record<TraditionKey, string>;
	/** Catholic references for this topic */
	catechism?: string;
	/** The page on this site that explains the Catholic teaching */
	link?: string;
}

export const compareIntro =
	'A careful side-by-side look at what Catholic, Eastern Orthodox, Oriental Orthodox, Anglican, and Protestant Christians believe. All baptised Christians share faith in the Trinity and in Jesus Christ as Lord and Saviour; the differences below matter, but so does all that is held in common. Each tradition is described as it describes itself in its own statements of faith.';

export const compareCaveat =
	'These are summaries. Anglicanism holds a range of views from Anglo-Catholic to Evangelical, and “Protestant” covers many communities—Lutheran, Reformed, Baptist, Methodist, Pentecostal, and others—that differ among themselves. Where views vary, the most widely held position is given.';

export const traditions: Tradition[] = [
	{
		key: 'catholic',
		name: 'Catholic',
		summary: 'The Latin Church and twenty-three Eastern Catholic Churches in communion with the Bishop of Rome.',
		sources: [
			{ label: 'Catechism of the Catholic Church (1992)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
			{ label: 'Second Vatican Council, Unitatis Redintegratio (1964)', url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_unitatis-redintegratio_en.html' },
			{ label: 'Dominus Iesus (2000)', url: 'https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_20000806_dominus-iesus_en.html' },
		],
	},
	{
		key: 'easternOrthodox',
		name: 'Eastern Orthodox',
		summary: 'Self-governing Churches such as Constantinople, Antioch, Russia, Greece, Serbia, and Romania, in communion with one another.',
		sources: [
			{ label: 'The decrees of the seven ecumenical councils (325–787)' },
			{ label: 'Confession of Dositheus, Synod of Jerusalem (1672)' },
			{ label: 'Kallistos Ware, The Orthodox Church (1963, revised 2015)' },
		],
	},
	{
		key: 'orientalOrthodox',
		name: 'Oriental Orthodox',
		summary: 'The Coptic, Ethiopian, Eritrean, Syriac, Armenian, and Malankara Churches, which did not accept the Council of Chalcedon (451).',
		sources: [
			{ label: 'The decrees of the first three ecumenical councils (325–431)' },
			{ label: 'Common Declaration of Pope Paul VI and Pope Shenouda III (1973)' },
			{ label: 'Common Declaration of Pope John Paul II and Patriarch Ignatius Zakka I Iwas (1984)' },
		],
	},
	{
		key: 'anglican',
		name: 'Anglican',
		summary: 'The Church of England and the worldwide Anglican Communion, which separated from Rome in the sixteenth century.',
		sources: [
			{ label: 'The Thirty-Nine Articles of Religion (1571)' },
			{ label: 'The Book of Common Prayer (1662)' },
			{ label: 'The Chicago–Lambeth Quadrilateral (1886–1888)' },
		],
	},
	{
		key: 'protestant',
		name: 'Protestant',
		summary: 'Communities arising from the Reformation, including Lutheran, Reformed, Baptist, Methodist, and Pentecostal Christians.',
		sources: [
			{ label: 'The Augsburg Confession (Lutheran, 1530)' },
			{ label: 'The Westminster Confession of Faith (Reformed, 1646)' },
			{ label: 'The Second London Baptist Confession (1689)' },
		],
	},
];

export const comparisonRows: ComparisonRow[] = [
	{
		topic: 'Source of authority',
		link: '/bible-and-tradition/sacred-scripture-and-sacred-tradition',
		catechism: 'CCC 80–95',
		values: {
			catholic: 'Scripture and Sacred Tradition as one deposit of faith, authentically interpreted by the Magisterium (the Pope and bishops).',
			easternOrthodox: 'Holy Tradition, of which Scripture is the heart, guarded by the ecumenical councils, the Fathers, and the consensus of the bishops.',
			orientalOrthodox: 'Holy Tradition and Scripture, with the first three ecumenical councils and the Fathers of their Churches.',
			anglican: 'Scripture as containing all things necessary to salvation, read with the creeds, the early councils, and reason.',
			protestant: 'Scripture alone (sola scriptura) as the final authority, though most also value the ancient creeds.',
		},
	},
	{
		topic: 'The Bible',
		link: '/bible-and-tradition/the-73-books-of-the-catholic-bible',
		catechism: 'CCC 120',
		values: {
			catholic: '73 books, including the Deuterocanonical books.',
			easternOrthodox: 'The Catholic books plus some further texts, such as 1 Esdras, 3 Maccabees, and Psalm 151.',
			orientalOrthodox: 'Broadly similar to the Orthodox canon; the Ethiopian Church has the largest canon, including Enoch and Jubilees.',
			anglican: '66 books as canonical; the Apocrypha (Deuterocanonical books) read “for example of life” but not to establish doctrine.',
			protestant: '66 books; the Deuterocanonical books are omitted or set apart as Apocrypha.',
		},
	},
	{
		topic: 'Church leadership',
		link: '/the-church/apostolic-succession',
		catechism: 'CCC 861–862, 880–896',
		values: {
			catholic: 'Bishops in apostolic succession, in communion with the Pope as successor of Peter and visible head of the universal Church.',
			easternOrthodox: 'Bishops in apostolic succession; patriarchs lead self-governing Churches. The Patriarch of Constantinople has a primacy of honour, not of jurisdiction.',
			orientalOrthodox: 'Bishops in apostolic succession under their own patriarchs or catholicoi.',
			anglican: 'Bishops, priests, and deacons; the Archbishop of Canterbury is a focus of unity. The Catholic Church does not recognise Anglican orders as valid.',
			protestant: 'Varies: some have bishops (Lutheran, Methodist), others elders or congregational government. Apostolic succession is not usually held to be necessary.',
		},
	},
	{
		topic: 'The Pope',
		link: '/the-church/the-pope-and-the-papacy',
		catechism: 'CCC 880–882, 891',
		values: {
			catholic: 'The Bishop of Rome has full, supreme, and universal authority and, in solemn definitions, teaches infallibly.',
			easternOrthodox: 'Rome had a primacy of honour in the first millennium, but universal jurisdiction and papal infallibility are rejected.',
			orientalOrthodox: 'Papal jurisdiction and infallibility are not accepted.',
			anglican: 'The Pope has no jurisdiction in England (Article 37). Some Anglicans are open to a primacy of honour.',
			protestant: 'Papal authority is rejected.',
		},
	},
	{
		topic: 'Sacraments',
		link: '/sacraments',
		catechism: 'CCC 1113–1134',
		values: {
			catholic: 'Seven sacraments, instituted by Christ, which truly give the grace they signify.',
			easternOrthodox: 'Seven “holy mysteries” are generally recognised, though Orthodoxy does not fix their number as strictly.',
			orientalOrthodox: 'Seven sacraments or mysteries.',
			anglican: 'Two “sacraments of the Gospel” (Baptism and the Eucharist); the other five are “commonly called sacraments.”',
			protestant: 'Usually two sacraments or ordinances, Baptism and the Lord’s Supper; some regard them as symbols only.',
		},
	},
	{
		topic: 'The Eucharist',
		link: '/sacraments/guides/the-real-presence',
		catechism: 'CCC 1373–1381',
		values: {
			catholic: 'Christ is truly, really, and substantially present by transubstantiation; the Mass makes present the one sacrifice of Calvary.',
			easternOrthodox: 'Christ is truly present; the bread and wine become His Body and Blood. Orthodoxy prefers to call this a mystery rather than define how.',
			orientalOrthodox: 'Christ is truly present in the Holy Mysteries, offered as a sacrifice.',
			anglican: 'Views range from belief in the Real Presence to a spiritual presence received by faith; Article 28 rejects transubstantiation.',
			protestant: 'Lutherans hold Christ is truly present “in, with, and under” the bread and wine; Reformed Christians a spiritual presence; many others a memorial.',
		},
	},
	{
		topic: 'Salvation and justification',
		link: '/study/what-is-the-relationship-between-faith-grace-and-good-works',
		catechism: 'CCC 1987–2029',
		values: {
			catholic: 'By grace through faith, beginning in Baptism; justification makes us truly righteous and bears fruit in good works done in grace.',
			easternOrthodox: 'Salvation as theosis—becoming partakers of the divine nature—through grace, faith, the sacraments, and cooperation with God.',
			orientalOrthodox: 'Salvation by grace through faith and participation in the life of the Church and her mysteries.',
			anglican: 'Justification by faith only (Article 11), with good works as its necessary fruit.',
			protestant: 'Justification by faith alone (sola fide) through grace alone; righteousness is credited (imputed) to the believer. A 1999 Catholic–Lutheran declaration found basic agreement.',
		},
	},
	{
		topic: 'Mary',
		link: '/saints/topics/the-immaculate-conception',
		catechism: 'CCC 484–511, 963–975',
		values: {
			catholic: 'Mother of God, ever-virgin, immaculately conceived, and assumed body and soul into heaven; honoured above all saints.',
			easternOrthodox: 'Theotokos and ever-virgin, deeply venerated; the Dormition is celebrated. The Immaculate Conception is not accepted as defined.',
			orientalOrthodox: 'Theotokos and ever-virgin, greatly venerated, especially in Coptic and Ethiopian piety.',
			anglican: 'Mother of God (Theotokos) affirmed; Marian devotion varies widely. The later Marian dogmas are not binding.',
			protestant: 'Honoured as the mother of Jesus; most reject prayer to Mary and the Marian dogmas. Luther and Calvin affirmed her perpetual virginity.',
		},
	},
	{
		topic: 'Saints and prayer for the dead',
		link: '/saints/topics/why-catholics-ask-saints-to-intercede',
		catechism: 'CCC 956–958, 1030–1032',
		values: {
			catholic: 'The saints intercede for us; Catholics pray for the dead, who may be undergoing purification in purgatory.',
			easternOrthodox: 'The saints intercede, and icons are venerated; prayers for the dead are offered, though purgatory as defined in the West is not accepted.',
			orientalOrthodox: 'The saints intercede, and prayers for the departed are offered.',
			anglican: 'Saints are commemorated; invocation of saints and prayers for the dead vary. Article 22 rejects the “Romish doctrine” of purgatory.',
			protestant: 'Saints are honoured as examples, but asking their intercession and praying for the dead are generally rejected.',
		},
	},
	{
		topic: 'Christ’s two natures',
		link: '/church-history/the-seven-ecumenical-councils-of-the-first-millennium',
		catechism: 'CCC 464–469',
		values: {
			catholic: 'One Person in two natures, divine and human (Council of Chalcedon, 451).',
			easternOrthodox: 'One Person in two natures (Chalcedon).',
			orientalOrthodox: 'One united divine-human nature of the incarnate Word (miaphysite), without mixture or separation. Joint declarations with Rome have found the same faith expressed in different words.',
			anglican: 'One Person in two natures (Chalcedon).',
			protestant: 'One Person in two natures (Chalcedon).',
		},
	},
	{
		topic: 'The Creed and the Holy Spirit',
		link: '/core-beliefs',
		catechism: 'CCC 246–248',
		values: {
			catholic: 'The Holy Spirit proceeds from the Father and the Son (Filioque), added to the Latin Creed and understood as compatible with the Eastern “through the Son.”',
			easternOrthodox: 'The Spirit proceeds from the Father; the addition of the Filioque is rejected.',
			orientalOrthodox: 'The original Nicene Creed, without the Filioque.',
			anglican: 'The Nicene Creed with the Filioque, though some provinces have proposed removing it.',
			protestant: 'Most Western Protestants retain the Filioque in the Nicene Creed.',
		},
	},
	{
		topic: 'Married clergy',
		link: '/sacraments/holy-orders',
		catechism: 'CCC 1579–1580',
		values: {
			catholic: 'Latin Church priests are normally celibate; Eastern Catholic Churches ordain married men as priests. Bishops are celibate.',
			easternOrthodox: 'Married men may be ordained priests; bishops are chosen from celibate monks.',
			orientalOrthodox: 'Married men may be ordained priests; bishops are celibate.',
			anglican: 'Clergy may marry; most provinces ordain women, and some ordain women as bishops.',
			protestant: 'Ministers may marry; many communities ordain women.',
		},
	},
];
