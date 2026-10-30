export type FaqCategory = 'doctrine' | 'worship' | 'morality' | 'history';

export interface FaqEntry {
	question: string;
	category: FaqCategory;
	/** Answer, one paragraph per entry */
	answer: string[];
	catechism?: string;
	scripture?: string;
	link?: { href: string; label: string };
}

export const faqCategoryLabels: Record<FaqCategory, string> = {
	doctrine: 'Doctrine',
	worship: 'Worship',
	morality: 'Morality',
	history: 'Church history',
};

/** Anchor id for a question, e.g. "q-what-is-purgatory" */
export function faqId(question: string): string {
	return `q-${question.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
}

export const faqCategoryOrder: FaqCategory[] = ['doctrine', 'worship', 'morality', 'history'];

export const faqIntro =
	'Short, clear answers to questions people often ask about the Catholic faith, organised by doctrine, worship, morality, and Church history. Search for a word or choose a topic, and follow the links for a fuller explanation.';

export const faqEntries: FaqEntry[] = [
	// Doctrine
	{
		question: 'What is the Trinity?',
		category: 'doctrine',
		answer: [
			'Catholics believe in one God in three divine Persons: the Father, the Son, and the Holy Spirit. They are not three gods, nor three parts of God, but one God, each Person fully God and really distinct from the others.',
		],
		catechism: 'CCC 232–267',
		scripture: 'Matthew 28:19',
		link: { href: '/holy-trinity', label: 'The Holy Trinity' },
	},
	{
		question: 'Do Catholics believe the Bible?',
		category: 'doctrine',
		answer: [
			'Yes: Catholics believe the Bible is the inspired Word of God, without error in what God wished to teach for our salvation. The Church reads it together with Sacred Tradition, as interpreted by the Magisterium.',
		],
		catechism: 'CCC 101–108',
		scripture: '2 Timothy 3:16–17',
		link: { href: '/bible-and-tradition', label: 'The Bible and Catholic Tradition' },
	},
	{
		question: 'Why is the Catholic Bible longer than the Protestant Bible?',
		category: 'doctrine',
		answer: [
			'The Catholic Old Testament includes seven books—Tobit, Judith, 1 and 2 Maccabees, Wisdom, Sirach, and Baruch—plus parts of Esther and Daniel. These were read by the early Church and confirmed by councils, but most Protestant Bibles omitted them after the Reformation.',
		],
		catechism: 'CCC 120',
		link: { href: '/bible-and-tradition/the-deuterocanonical-books', label: 'The Deuterocanonical books' },
	},
	{
		question: 'Do Catholics believe they are saved by works?',
		category: 'doctrine',
		answer: [
			'No. Salvation is a free gift of God’s grace, received through faith and Baptism. Good works are the fruit of that grace, not a way of earning it—“faith working through love,” as St. Paul says.',
		],
		catechism: 'CCC 1987–2029',
		scripture: 'Ephesians 2:8–10; Galatians 5:6',
		link: { href: '/study/what-is-the-relationship-between-faith-grace-and-good-works', label: 'Faith, grace and good works' },
	},
	{
		question: 'What is purgatory?',
		category: 'doctrine',
		answer: [
			'Purgatory is the final purification of those who die in God’s friendship but are not yet completely purified. It is not a second chance but a stage on the way to heaven, which is why the Church prays for the dead.',
		],
		catechism: 'CCC 1030–1032',
		scripture: '2 Maccabees 12:43–46; 1 Corinthians 3:13–15',
	},
	{
		question: 'Can non-Catholics be saved?',
		category: 'doctrine',
		answer: [
			'The Church teaches that all salvation comes from Christ through His Church. Those who, through no fault of their own, do not know Christ or His Church, but who seek God with a sincere heart and try to do His will as they know it through conscience, may also be saved; baptised Christians of other traditions are already joined to the Church in a real, though imperfect, communion.',
		],
		catechism: 'CCC 838, 846–848',
		link: { href: '/compare-christian-traditions', label: 'Compare Christian traditions' },
	},
	{
		question: 'Is the Pope infallible in everything he says?',
		category: 'doctrine',
		answer: [
			'No. Infallibility applies only when the Pope, as supreme teacher, solemnly defines a doctrine of faith or morals for the whole Church. It does not cover his personal opinions, scientific views, or prudential decisions, and it does not mean he is sinless.',
		],
		catechism: 'CCC 889–891',
		link: { href: '/the-church/the-pope-and-the-papacy', label: 'The Pope and the papacy' },
	},
	// Worship
	{
		question: 'Why do Catholics go to Mass every Sunday?',
		category: 'worship',
		answer: [
			'Sunday is the day of Christ’s Resurrection, and the early Christians gathered every Sunday for the Eucharist. The Church therefore asks Catholics to attend Mass on Sundays and holy days of obligation, unless a serious reason prevents them.',
		],
		catechism: 'CCC 2174–2183',
		scripture: 'Acts 20:7; Hebrews 10:25',
		link: { href: '/mass/the-sunday-obligation-and-holy-days-of-obligation', label: 'The Sunday obligation' },
	},
	{
		question: 'Can non-Catholics receive Communion at Mass?',
		category: 'worship',
		answer: [
			'Receiving Communion expresses full unity of faith with the Catholic Church, so non-Catholics are ordinarily asked not to receive. They are warmly welcome at Mass and may come forward with arms crossed for a blessing (Orthodox Christians may receive in certain circumstances under Church law).',
		],
		catechism: 'CCC 1398–1401',
		link: { href: '/living-the-faith/sunday-mass-for-beginners', label: 'Sunday Mass for beginners' },
	},
	{
		question: 'Why do Catholics pray the Rosary?',
		category: 'worship',
		answer: [
			'The Rosary is a meditation on the life of Christ through the eyes of Mary. While praying the Our Father, Hail Marys, and Glory Be, Catholics reflect on twenty mysteries of Christ, from the Annunciation to the Resurrection and beyond.',
		],
		catechism: 'CCC 971, 2708',
		link: { href: '/rosary', label: 'How to pray the Rosary' },
	},
	{
		question: 'Why does the priest wear different colours?',
		category: 'worship',
		answer: [
			'The colour of the vestments follows the liturgical year: violet for Advent and Lent, white or gold for Christmas, Easter, and many feasts, red for Pentecost and martyrs, and green for Ordinary Time.',
		],
		link: { href: '/mass/the-liturgical-year-and-its-colours', label: 'The liturgical year and its colours' },
	},
	{
		question: 'Why do Catholics use holy water and make the Sign of the Cross?',
		category: 'worship',
		answer: [
			'Holy water recalls our Baptism, and the Sign of the Cross professes faith in the Trinity and in Christ crucified. Christians have made the Sign of the Cross since at least the second century.',
		],
		catechism: 'CCC 1668, 2157',
		link: { href: '/mass/incense-holy-water-vestments-and-sacred-vessels', label: 'Incense, holy water and vestments' },
	},
	{
		question: 'What is Eucharistic adoration?',
		category: 'worship',
		answer: [
			'Because Christ is truly present in the consecrated Host, Catholics worship Him there outside of Mass, often with the Host exposed in a monstrance. Many parishes offer times for silent prayer before the Blessed Sacrament.',
		],
		catechism: 'CCC 1378–1380',
		link: { href: '/pray/eucharistic-adoration-and-benediction', label: 'Eucharistic adoration and Benediction' },
	},
	// Morality
	{
		question: 'What makes a sin mortal?',
		category: 'morality',
		answer: [
			'Three conditions must all be present: the matter is grave, the person knows it is seriously wrong, and the person freely and deliberately chooses it. Mortal sin is forgiven through the Sacrament of Penance.',
		],
		catechism: 'CCC 1857–1861',
		scripture: '1 John 5:16–17',
		link: { href: '/moral-teaching/mortal-and-venial-sin', label: 'Mortal and venial sin' },
	},
	{
		question: 'Should Catholics always follow their conscience?',
		category: 'morality',
		answer: [
			'Yes—a person must always obey the certain judgement of their conscience. But conscience must be well formed through Scripture, prayer, Church teaching, and good counsel, because it can be mistaken.',
		],
		catechism: 'CCC 1776–1802',
		link: { href: '/moral-teaching/conscience-free-will-and-moral-responsibility', label: 'Conscience and free will' },
	},
	{
		question: 'Why does the Church teach about social and economic questions?',
		category: 'morality',
		answer: [
			'Because the Gospel concerns the whole person and the whole of life. Catholic social teaching applies the dignity of the human person to work, the economy, politics, family, and the environment.',
		],
		catechism: 'CCC 2419–2425',
		link: { href: '/social-teaching', label: 'Catholic Social Teaching' },
	},
	{
		question: 'What does the Church teach about the sanctity of life?',
		category: 'morality',
		answer: [
			'Every human life is sacred from conception to natural death. The Church teaches that the direct taking of innocent human life, including abortion and euthanasia, is always gravely wrong, and calls Christians to defend the dignity of the poor, the sick, migrants, and prisoners alike.',
		],
		catechism: 'CCC 2258–2283',
		link: { href: '/social-teaching/human-dignity-and-the-sanctity-of-human-life', label: 'Human dignity and the sanctity of human life' },
	},
	{
		question: 'Why do Catholics fast and abstain from meat?',
		category: 'morality',
		answer: [
			'Fasting and abstinence are forms of penance that unite us with Christ’s sacrifice and free our hearts for God and our neighbour. Catholics fast on Ash Wednesday and Good Friday and abstain from meat on Fridays of Lent.',
		],
		catechism: 'CCC 1434–1438, 2043',
		scripture: 'Matthew 6:16–18',
		link: { href: '/pray/fasting-abstinence-and-the-practice-of-penance', label: 'Fasting, abstinence and penance' },
	},
	{
		question: 'Can a sin be too big to be forgiven?',
		category: 'morality',
		answer: [
			'No sin is too great for God’s mercy if we repent; only refusing His forgiveness can keep us from it. The Sacrament of Penance is always open to anyone who sincerely confesses.',
		],
		catechism: 'CCC 982, 1864',
		scripture: 'Luke 15:11–32',
		link: { href: '/living-the-faith/how-to-go-to-confession', label: 'How to go to Confession' },
	},
	// History
	{
		question: 'Who founded the Catholic Church?',
		category: 'history',
		answer: [
			'Catholics believe Jesus Christ founded the Church on the apostles, with Peter as their head. The Church was born at Pentecost and has continued in unbroken succession from the apostles to today.',
		],
		catechism: 'CCC 763–766',
		scripture: 'Matthew 16:18; Acts 2:1–47',
		link: { href: '/church-history-timeline', label: 'Church History Timeline' },
	},
	{
		question: 'Why did the Catholic and Orthodox Churches split?',
		category: 'history',
		answer: [
			'Centuries of growing distance between East and West—over language, culture, politics, papal authority, and the Filioque in the Creed—led to mutual excommunications in 1054. Dialogue towards reunion continues today.',
		],
		link: { href: '/church-history/the-great-schism-of-1054', label: 'The Great Schism of 1054' },
	},
	{
		question: 'What happened at the Reformation?',
		category: 'history',
		answer: [
			'In the sixteenth century Martin Luther and other reformers protested against abuses and rejected key Catholic teachings and papal authority, dividing Western Christianity. The Catholic Church responded with the Council of Trent and a great renewal of holiness and mission.',
		],
		link: { href: '/church-history/the-protestant-reformation-and-the-catholic-counter-reformation', label: 'The Reformation and Counter-Reformation' },
	},
	{
		question: 'What was the Second Vatican Council?',
		category: 'history',
		answer: [
			'Vatican II (1962–1965) was the twenty-first ecumenical council. It renewed the liturgy, emphasised the universal call to holiness and the role of the laity, and opened dialogue with other Christians, other religions, and the modern world, without changing the Church’s doctrine.',
		],
		link: { href: '/church-history/the-council-of-trent-and-the-second-vatican-council', label: 'The Council of Trent and the Second Vatican Council' },
	},
	{
		question: 'Was the Church against science, as in the Galileo affair?',
		category: 'history',
		answer: [
			'The Galileo affair was a real mistake, which the Church has acknowledged, but it was not typical. The Church founded universities and supported scientists for centuries; a priest, Georges Lemaître, first proposed the Big Bang theory.',
		],
		catechism: 'CCC 159',
		link: { href: '/study/how-do-catholics-understand-science-and-faith', label: 'Science and faith' },
	},
];
