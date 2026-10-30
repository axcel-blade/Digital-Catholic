export interface StudyStep {
	title: string;
	href: string;
	/** What to focus on in this step */
	note: string;
}

export interface StudyPath {
	slug: string;
	title: string;
	audience: string;
	summary: string;
	/** Suggested pace, e.g. "6 weeks" */
	pace: string;
	steps: StudyStep[];
}

export const studyPathsIntro =
	'Guided learning plans that walk through this library in a sensible order. Choose the path that fits where you are, take one step at a time, and bring your questions to prayer, to a parish priest, or to a trusted Catholic friend.';

export const studyPaths: StudyPath[] = [
	{
		slug: 'beginners',
		title: 'Exploring the Catholic faith',
		audience: 'For beginners and the curious',
		summary: 'A gentle introduction to who Jesus is, what Catholics believe, and how they pray and worship.',
		pace: 'About 6 weeks, one or two steps a week',
		steps: [
			{ title: 'Core Catholic Beliefs', href: '/core-beliefs', note: 'Start with the heart of the faith: the Trinity, Jesus Christ, salvation, and the life to come.' },
			{ title: 'The Holy Trinity', href: '/holy-trinity', note: 'Go deeper into the central mystery of the Christian faith.' },
			{ title: 'The Bible and Catholic Tradition', href: '/bible-and-tradition', note: 'Learn how Catholics read Scripture and why the Church matters for interpreting it.' },
			{ title: 'Parables of Jesus', href: '/parables', note: 'Read a few parables to hear Jesus’ own teaching.' },
			{ title: 'The Sacraments', href: '/sacraments', note: 'See how Christ meets us through seven sacred signs.' },
			{ title: 'Sunday Mass for beginners', href: '/living-the-faith#sunday-mass-for-beginners', note: 'Know what to expect before you attend Mass.' },
			{ title: 'Prayers and Devotions', href: '/pray', note: 'Learn the Our Father and Hail Mary and begin praying daily.' },
			{ title: 'Ask a Catholic question', href: '/ask-a-catholic-question', note: 'Find quick answers to the questions that come up along the way.' },
		],
	},
	{
		slug: 'becoming-catholic',
		title: 'Preparing to become Catholic',
		audience: 'For enquirers, catechumens, and candidates in OCIA',
		summary: 'Follows the shape of the Order of Christian Initiation of Adults, from first questions to the sacraments of initiation.',
		pace: 'Alongside your parish OCIA programme, usually over several months',
		steps: [
			{ title: 'How to become Catholic through OCIA', href: '/living-the-faith#how-to-become-catholic-through-ocia', note: 'Understand the stages of the journey and take the first step by contacting a parish.' },
			{ title: 'Core Catholic Beliefs', href: '/core-beliefs', note: 'The Creed you will profess: the Trinity, Christ, the Church, and eternal life.' },
			{ title: 'The Catholic Church', href: '/the-church', note: 'What the Church is, how she is structured, and why apostolic succession matters.' },
			{ title: 'Compare Christian traditions', href: '/compare-christian-traditions', note: 'Especially helpful if you are coming from another Christian tradition.' },
			{ title: 'Baptism and Confirmation', href: '/sacraments/baptism', note: 'The sacraments that begin the Christian life.' },
			{ title: 'The Eucharist', href: '/sacraments/eucharist', note: 'The source and summit of the Christian life, received for the first time at Easter.' },
			{ title: 'How to go to Confession', href: '/living-the-faith#how-to-go-to-confession', note: 'For baptised candidates, preparing for a first Confession.' },
			{ title: 'Catholic Moral Teaching', href: '/moral-teaching', note: 'How faith shapes daily choices: virtues, conscience, sin, and mercy.' },
			{ title: 'Mary and the Communion of Saints', href: '/saints#the-immaculate-conception', note: 'Why Catholics honour Mary and ask the saints to pray for them.' },
			{ title: 'The meaning of every part of the Mass', href: '/mass#the-meaning-of-every-part-of-the-mass', note: 'Understand every part of the Mass you will celebrate.' },
			{ title: 'Catholic glossary', href: '/glossary', note: 'Look up any unfamiliar terms as you go.' },
		],
	},
	{
		slug: 'practising-catholics',
		title: 'Deepening your faith',
		audience: 'For practising Catholics',
		summary: 'Goes beyond the basics into Church history, social teaching, apologetics, and a richer life of prayer.',
		pace: 'At your own pace; one topic a week works well',
		steps: [
			{ title: 'Daily Gospel and reflection', href: '/daily-gospel', note: 'Build a daily habit of praying with the Gospel.' },
			{ title: 'Liturgy of the Hours and Lectio Divina', href: '/pray#the-liturgy-of-the-hours', note: 'Try the Liturgy of the Hours, Lectio Divina, or adoration.' },
			{ title: 'Catholic Church History', href: '/church-history', note: 'Understand how the Church came to believe and worship as she does.' },
			{ title: 'Church History Timeline', href: '/church-history-timeline', note: 'See the key milestones from the apostles to the present at a glance.' },
			{ title: 'The Sacraments in depth', href: '/sacraments', note: 'Read the in-depth guides on the Real Presence, Confession, and more.' },
			{ title: 'Catholic Social Teaching', href: '/social-teaching', note: 'Apply the Gospel to work, politics, family, and creation.' },
			{ title: 'Catholic Apologetics and FAQ', href: '/study', note: 'Learn to explain your faith with gentleness and reverence.' },
			{ title: 'Living the Catholic Faith', href: '/living-the-faith', note: 'Vocation, family, prayer routines, and faith at work.' },
		],
	},
];
