import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 2,
	title: 'The Church Fathers',
	summary: 'Holy writers of the first centuries whose teaching shaped Christian doctrine—among them St. Ignatius of Antioch, St. Irenaeus, and St. Augustine.',
	catechism: 'CCC 8, 78, 688',
	meaning: [
		'St. Ignatius of Antioch (died about 107), on his way to martyrdom in Rome, wrote seven letters urging unity with the bishop and calling the Eucharist “the flesh of our Saviour Jesus Christ.” He is the first known writer to use the phrase “the Catholic Church.” St. Irenaeus of Lyons (about 130–202), a disciple of Polycarp, wrote Against Heresies to defend the faith against Gnosticism, appealing to the apostolic succession of bishops and the preeminence of the Church of Rome.',
		'St. Augustine of Hippo (354–430), converted through the prayers of his mother St. Monica and the preaching of St. Ambrose, became the most influential theologian of the Latin West. His Confessions and The City of God, and his teaching on grace, the Trinity, and the Church, have shaped Christian thought ever since. Other great Fathers include St. Athanasius, St. Basil the Great, St. Gregory of Nazianzus, St. John Chrysostom, St. Ambrose, and St. Jerome.',
	],
	links: [
		{ href: '/saints', label: 'Read the lives of the saints' },
	],
};

export default topic;
