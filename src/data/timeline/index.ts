export type TimelineEra = 'apostolic' | 'fathers' | 'medieval' | 'reformation' | 'modern';

export interface TimelineEvent {
	/** Display date, e.g. "c. AD 33" or "1054" */
	date: string;
	/** Sortable year (negative for BC) */
	year: number;
	era: TimelineEra;
	title: string;
	description: string;
	link?: { href: string; label: string };
}

export const timelineEraLabels: Record<TimelineEra, string> = {
	apostolic: 'The apostolic age (to 100)',
	fathers: 'The Church Fathers (100–600)',
	medieval: 'The Middle Ages (600–1500)',
	reformation: 'Reformation and renewal (1500–1800)',
	modern: 'The modern Church (1800–today)',
};

export const timelineEraOrder: TimelineEra[] = ['apostolic', 'fathers', 'medieval', 'reformation', 'modern'];

export const timelineIntro =
	'Key milestones in the life of the Church, from the apostles to the present. Choose an era to narrow the list, and follow the links for the full story.';

export const timelineEvents: TimelineEvent[] = [
	{ date: 'c. AD 30–33', year: 30, era: 'apostolic', title: 'Death and Resurrection of Jesus', description: 'Jesus is crucified under Pontius Pilate in Jerusalem and rises from the dead on the third day.', link: { href: '/miracles/the-resurrection', label: 'The Resurrection' } },
	{ date: 'c. AD 33', year: 33, era: 'apostolic', title: 'Pentecost', description: 'The Holy Spirit descends on the apostles and Mary; Peter preaches and about three thousand are baptised. The Church is born.' },
	{ date: 'c. 49', year: 49, era: 'apostolic', title: 'Council of Jerusalem', description: 'The apostles and elders decide that Gentile converts need not be circumcised—the model for later councils (Acts 15).' },
	{ date: 'c. 64–67', year: 64, era: 'apostolic', title: 'Martyrdom of Peter and Paul in Rome', description: 'Under Nero, St. Peter is crucified and St. Paul beheaded. Rome becomes the see of Peter’s successors.', link: { href: '/disciples/peter', label: 'St. Peter' } },
	{ date: '70', year: 70, era: 'apostolic', title: 'Destruction of the Temple', description: 'Roman armies destroy Jerusalem and the Temple, as Jesus had foretold.' },
	{ date: 'c. 96', year: 96, era: 'apostolic', title: 'Letter of Clement of Rome', description: 'The Bishop of Rome writes to correct the Church in Corinth—an early witness to the authority of Rome and to apostolic succession.' },
	{ date: 'c. 107', year: 107, era: 'fathers', title: 'Letters of St. Ignatius of Antioch', description: 'On the way to martyrdom, Ignatius writes of bishops, the Eucharist, and “the Catholic Church.”', link: { href: '/church-history#topic-2', label: 'The Church Fathers' } },
	{ date: 'c. 155', year: 155, era: 'fathers', title: 'St. Justin Martyr describes the Mass', description: 'Justin’s First Apology gives the earliest detailed description of Sunday Eucharist, already in the shape of the Mass today.' },
	{ date: 'c. 180', year: 180, era: 'fathers', title: 'St. Irenaeus writes Against Heresies', description: 'Irenaeus defends the faith against Gnosticism by appeal to Scripture and the apostolic succession of bishops.' },
	{ date: '313', year: 313, era: 'fathers', title: 'Edict of Milan', description: 'Emperors Constantine and Licinius grant toleration to Christians, ending the great persecutions.' },
	{ date: '325', year: 325, era: 'fathers', title: 'First Council of Nicaea', description: 'The first ecumenical council affirms that the Son is consubstantial with the Father, against Arianism.', link: { href: '/church-history#topic-3', label: 'The seven ecumenical councils' } },
	{ date: '381', year: 381, era: 'fathers', title: 'First Council of Constantinople', description: 'Affirms the divinity of the Holy Spirit and completes the Nicene Creed.' },
	{ date: '382–397', year: 382, era: 'fathers', title: 'Councils confirm the canon of Scripture', description: 'Councils at Rome, Hippo, and Carthage list the 73 books of the Bible.', link: { href: '/bible/how-the-bible-was-formed', label: 'How the Bible was formed' } },
	{ date: '431', year: 431, era: 'fathers', title: 'Council of Ephesus', description: 'Proclaims Mary as Theotokos, Mother of God.', link: { href: '/mary-and-the-saints#topic-4', label: 'Mary as Mother of God' } },
	{ date: '451', year: 451, era: 'fathers', title: 'Council of Chalcedon', description: 'Defines that Christ is one Person in two natures, divine and human. Some Eastern Churches do not accept it and later become the Oriental Orthodox Churches.' },
	{ date: 'c. 530', year: 530, era: 'fathers', title: 'Rule of St. Benedict', description: 'Benedict of Nursia writes his Rule, which shapes Western monasticism for centuries.' },
	{ date: '590–604', year: 590, era: 'fathers', title: 'Pope St. Gregory the Great', description: 'Gregory reforms the liturgy, cares for the poor of Rome, and sends missionaries to England.' },
	{ date: '787', year: 787, era: 'medieval', title: 'Second Council of Nicaea', description: 'The seventh ecumenical council defends the veneration of holy images.' },
	{ date: '800', year: 800, era: 'medieval', title: 'Coronation of Charlemagne', description: 'Pope Leo III crowns Charlemagne emperor in Rome on Christmas Day.' },
	{ date: '1054', year: 1054, era: 'medieval', title: 'The Great Schism', description: 'Mutual excommunications between the papal legate and the Patriarch of Constantinople mark the division between Catholic and Orthodox Churches.', link: { href: '/church-history#topic-4', label: 'The Great Schism' } },
	{ date: '1209–1216', year: 1209, era: 'medieval', title: 'Franciscans and Dominicans founded', description: 'St. Francis of Assisi and St. Dominic found the mendicant orders of friars.' },
	{ date: '1215', year: 1215, era: 'medieval', title: 'Fourth Lateran Council', description: 'Uses the term transubstantiation and requires annual Confession and Easter Communion.' },
	{ date: '1274', year: 1274, era: 'medieval', title: 'Death of St. Thomas Aquinas', description: 'The great theologian dies, leaving his Summa Theologiae unfinished.' },
	{ date: '1309–1377', year: 1309, era: 'medieval', title: 'The Avignon papacy', description: 'Popes reside in Avignon, France, until St. Catherine of Siena helps persuade Gregory XI to return to Rome.' },
	{ date: '1378–1417', year: 1378, era: 'medieval', title: 'The Western Schism', description: 'Rival claimants to the papacy divide Western Christendom until the Council of Constance restores unity.' },
	{ date: '1517', year: 1517, era: 'reformation', title: 'Martin Luther’s Ninety-five Theses', description: 'Luther’s protest against the sale of indulgences sparks the Protestant Reformation.', link: { href: '/church-history#topic-5', label: 'The Reformation' } },
	{ date: '1531', year: 1531, era: 'reformation', title: 'Our Lady of Guadalupe', description: 'Mary appears to St. Juan Diego in Mexico; millions come to faith in the following years.', link: { href: '/marian-apparitions/guadalupe', label: 'Our Lady of Guadalupe' } },
	{ date: '1534', year: 1534, era: 'reformation', title: 'Henry VIII breaks with Rome', description: 'The Act of Supremacy makes the king head of the Church of England.' },
	{ date: '1540', year: 1540, era: 'reformation', title: 'The Jesuits approved', description: 'Pope Paul III approves the Society of Jesus founded by St. Ignatius of Loyola.' },
	{ date: '1545–1563', year: 1545, era: 'reformation', title: 'Council of Trent', description: 'Defines Catholic doctrine on Scripture, Tradition, justification, and the sacraments, and launches reform of the clergy.', link: { href: '/church-history#topic-6', label: 'The Council of Trent' } },
	{ date: '1570', year: 1570, era: 'reformation', title: 'Roman Missal of Pius V', description: 'A standardised Missal is issued for the Roman Rite, used for four centuries.' },
	{ date: '1854', year: 1854, era: 'modern', title: 'Immaculate Conception defined', description: 'Pope Pius IX defines the dogma of the Immaculate Conception. Four years later, Mary appears at Lourdes.', link: { href: '/mary-and-the-saints#topic-1', label: 'The Immaculate Conception' } },
	{ date: '1869–1870', year: 1869, era: 'modern', title: 'First Vatican Council', description: 'Defines papal primacy and infallibility.' },
	{ date: '1891', year: 1891, era: 'modern', title: 'Rerum Novarum', description: 'Pope Leo XIII’s encyclical on the condition of workers begins modern Catholic social teaching.', link: { href: '/social-teaching', label: 'Catholic Social Teaching' } },
	{ date: '1917', year: 1917, era: 'modern', title: 'Our Lady of Fátima', description: 'Mary appears to three shepherd children in Portugal, calling for prayer, penance, and the Rosary.', link: { href: '/marian-apparitions/fatima', label: 'Our Lady of Fátima' } },
	{ date: '1950', year: 1950, era: 'modern', title: 'Assumption defined', description: 'Pope Pius XII defines the dogma of the Assumption of Mary.' },
	{ date: '1962–1965', year: 1962, era: 'modern', title: 'Second Vatican Council', description: 'The twenty-first ecumenical council renews the liturgy and the Church’s engagement with the modern world.', link: { href: '/church-history#topic-6', label: 'The Second Vatican Council' } },
	{ date: '1965', year: 1965, era: 'modern', title: 'Excommunications of 1054 lifted', description: 'Pope St. Paul VI and Patriarch Athenagoras lift the mutual excommunications between Rome and Constantinople.' },
	{ date: '1978–2005', year: 1978, era: 'modern', title: 'Pontificate of St. John Paul II', description: 'The first Polish pope travels the world, contributes to the fall of communism, and promulgates the Catechism.' },
	{ date: '1992', year: 1992, era: 'modern', title: 'Catechism of the Catholic Church', description: 'A complete summary of Catholic teaching is published for the whole Church.' },
	{ date: '2005–2013', year: 2005, era: 'modern', title: 'Pontificate of Benedict XVI', description: 'The theologian pope writes on faith, hope, and love and becomes the first pope in six centuries to resign.' },
	{ date: '2013–2025', year: 2013, era: 'modern', title: 'Pontificate of Francis', description: 'The first pope from the Americas emphasises mercy, care for the poor, and care for creation.' },
	{ date: '2025', year: 2025, era: 'modern', title: 'Election of Leo XIV', description: 'Cardinal Robert Prevost, an Augustinian, is elected the first pope from the United States, taking the name Leo XIV.' },
];
