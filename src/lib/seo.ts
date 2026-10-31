export const SITE = {
	name: 'Digital Catholic',
	defaultTitle: 'Digital Catholic — Learn the Faith, Pray with the Church',
	defaultDescription:
		'Clear Catholic resources for Scripture, saints, sacraments, prayer, and the liturgical year—with apostle biographies, Gospel miracles and parables, Marian apparitions, Eucharistic miracles, and the Rosary.',
	tagline: 'Learn the faith. Pray with the Church. Live it daily.',
	locale: 'en_US',
	themeColor: '#1b1614',
	productionOrigin: 'https://axcel-blade.github.io',
	productionBase: '/Digital-Catholic/',
	repoUrl: 'https://github.com/axcel-blade/Digital-Catholic',
	contactEmail: 'srikanthfernando3@gmail.com',
	/** Branded 1200×630 social image in /public */
	ogImagePath: 'og-image.png',
	ogImageAlt: 'Digital Catholic — Learn the faith. Pray with the Church. Live it daily.',
} as const;

/** Meta descriptions for every non-article page — keep in sync with site content. */
export const PAGE_DESCRIPTIONS = {
	home: SITE.defaultDescription,
	about:
		'What Digital Catholic is, who it is for, how its three content areas are organised, and its approach to accuracy and devotion.',
	contact:
		'Contact Digital Catholic with questions, corrections, or suggestions—by email or by opening an issue in the project’s GitHub repository.',
	bible:
		'Summaries of all 73 books of the Catholic Bible—46 Old Testament and 27 New Testament, including the deuterocanonical books—with themes and context for reading.',
	pray:
		'Pray with the Church: the Our Father and Hail Mary, the Rosary, the Daily Gospel, devotions such as Lectio Divina and adoration, the Mass, and the liturgical year.',
	saints:
		'Mary and the saints in the Catholic Church—saint biographies with feast days, the Immaculate Conception, perpetual virginity, Assumption, Mother of God, the intercession and veneration of saints, relics and sacramentals, and angels.',
	sacraments:
		'The seven sacraments of the Catholic Church in the order of the Catechism—what each one is and why it matters—with in-depth guides to Baptism and Confirmation, the Real Presence, transubstantiation, Confession, marriage, Holy Orders, Anointing and Viaticum, and worthy reception of Holy Communion.',
	signsAndWonders:
		'Marian apparitions such as Guadalupe, Lourdes, Fátima, Knock, and Velankanni, and Eucharistic miracles such as Lanciano and Bolsena—what happened, what it means, and the Church status of each.',
	learn:
		'Learn the Catholic faith: the Bible, core beliefs, the Holy Trinity, the Ten Commandments, the seven sacraments, the life of Jesus, Mary, and the saints.',
	commandments:
		'The Ten Commandments—God’s moral law given to Moses—with the text of each commandment and its meaning for love of God and neighbour.',
	coreBeliefs:
		'Core Catholic beliefs—the Holy Trinity, the Incarnation, the Resurrection and Ascension, original sin and grace, the life to come, the Creeds, and the Four Last Things.',
	bibleAndTradition:
		'Sacred Scripture and Sacred Tradition, the Magisterium, the 73 books of the Catholic Bible, the Deuterocanonical books, how Catholics interpret Scripture, faith and reason, and the development of doctrine, together with the Catholic Church—her four marks, the Pope and bishops, apostolic succession, and her relationship with other Christians, and her history from the apostles to the present.',
	theChurch:
		'The Catholic Church’s identity, structure, and mission—the four marks, the Pope, bishops, priests, deacons and laity, apostolic succession, Eastern Catholic and Orthodox Churches, and ecumenism.',
	churchHistory:
		'Catholic Church history—the early Church and Church Fathers, the seven ecumenical councils, the Great Schism, the Reformation and Counter-Reformation, Trent, Vatican II, the papacy, and religious orders, with a timeline of milestones from Pentecost to the present.',
	study:
		'Study the Catholic faith in depth: Scripture and Tradition, the Church and her history, moral and social teaching, apologetics, a searchable FAQ, and a glossary.',
	moralTeaching:
		'Catholic moral teaching—the capital sins and virtues, the theological and cardinal virtues, the Commandments, the Beatitudes, mortal and venial sin, conscience, mercy, and the Works of Mercy, together with Catholic social teaching on human dignity, the common good, solidarity, work, family, and creation, and practical guides to living the faith—Confession, OCIA, vocations, marriage and family, and daily prayer, with guided study paths for beginners, those becoming Catholic, and practising Catholics.',
	socialTeaching:
		'Catholic social teaching—human dignity and the sanctity of life, the common good, solidarity and subsidiarity, the poor, workers’ rights, family, stewardship of creation, peace, and citizenship.',
	livingTheFaith:
		'A practical guide to living the Catholic faith—First Communion and Confirmation, how to go to Confession, becoming Catholic through OCIA, vocations, marriage and family, Mass for beginners, daily prayer, and faith at university and work.',
	glossary:
		'A Catholic glossary explaining key terms—transubstantiation, Magisterium, indulgence, sacramental, apostolic succession, and more—with Catechism references.',
	askACatholicQuestion:
		'A searchable FAQ answering common questions about Catholic doctrine, worship, morality, and Church history, with Scripture and Catechism references, with a glossary of Catholic terms in plain language.',
	studyPaths:
		'Guided Catholic learning plans for beginners, people preparing to become Catholic through OCIA, and practising Catholics who want to go deeper.',
	compareChristianTraditions:
		'A careful, sourced comparison of Catholic, Eastern Orthodox, Oriental Orthodox, Anglican, and Protestant beliefs on authority, Scripture, the sacraments, salvation, Mary, and more.',
	dailyGospel:
		'A daily Gospel passage with a short explanation and a reflection question, cycling through key scenes from the life of Jesus.',
	holyTrinity:
		'The Most Holy Trinity—one God in three divine Persons, the Father, the Son, and the Holy Spirit—with Scripture and the teaching of the Catechism.',
	churchHistoryTimeline:
		'An interactive timeline of Catholic Church history, from Pentecost and the apostles through the councils, the Great Schism, the Reformation, and Vatican II to the present.',
	disciples:
		'The Twelve Apostles of Jesus Christ—biographies from their call to their deaths, Gospel and Acts accounts, feast days, and lessons for following Christ.',
	eucharisticMiracles:
		'Eucharistic miracles in Catholic history—Lanciano, Bolsena, and more recent events—with a clear note on the Church status of each account.',
	marianApparitions:
		'Marian apparitions such as Guadalupe, Lourdes, Fátima, Knock, and Velankanni—what happened, what it means, and the Church status of each.',
	miracles:
		'Miracles of Jesus Christ in the Gospels of Matthew, Mark, Luke, and John—signs of the Kingdom with Scripture references and reflections for faith.',
	parables:
		'Parables of Jesus Christ in the Gospels—stories of God’s Kingdom with Scripture references and lessons for discipleship.',
	sacramentsInDepth:
		'In-depth guides to the sacraments—Baptism and Confirmation, the Real Presence, transubstantiation, Confession, marriage, Holy Orders, Anointing and Viaticum, and worthy reception of Holy Communion.',
	holySpirit:
		'The seven gifts of the Holy Spirit (Isaiah 11:2)—wisdom, understanding, counsel, fortitude, knowledge, piety, and fear of the Lord—and the twelve fruits of the Spirit (Galatians 5:22–23), with what each means for the Christian life.',
	trinityOldTestament:
		'How the Old Testament foreshadows the Holy Trinity—God’s Word, Spirit, and Wisdom at creation, the visitors at Mamre, the thrice-holy God, and the promised Spirit.',
	trinityNewTestament:
		'How the New Testament reveals the Holy Trinity—the Annunciation, the Baptism of the Lord, Christ’s promise of the Spirit, Pentecost, and the letters of the apostles.',
	mass:
		'The Holy Mass and Catholic liturgy—the order of Mass step by step, the items used at the altar, the meaning of each part, Sunday and holy days of obligation, the liturgical year and colours, sacred music, and Eastern liturgies.',
	massItems:
		'Items used at Mass in the Catholic Church—sacred vessels, altar linens, liturgical books, vestments, liturgical colours, and other objects used in the Eucharist.',
	orderOfMass:
		'The order of the Catholic Mass step by step—Introductory Rites, Liturgy of the Word, Liturgy of the Eucharist, and Concluding Rites—with the meaning of each part.',
	pathToSainthood:
		'The path to sainthood in the Catholic Church—Servant of God, Venerable, Blessed, and Saint—and what each stage of a cause for canonisation requires.',
	shroudOfTurin:
		'The Shroud of Turin—the linen cloth many believe wrapped the body of Jesus: its image, history, the 1898 photograph, carbon dating, and what the Church teaches.',
	veilOfVeronica:
		'The Veil of Veronica, the Holy Face, and the Sudarium of Oviedo—the tradition of Veronica, the Vera Icon in Rome, Manoppello, the face cloth of John 20:7, and devotion to the Holy Face.',
	bibleFormation:
		'How the Bible was formed—divine inspiration, oral tradition, the Septuagint, the writing of the New Testament, the canon of seventy-three books, St. Jerome, and the Council of Trent.',
	rosaryOrigin:
		'The origin of the Holy Rosary—from early monastic prayer through St. Dominic, the Battle of Lepanto, the Rosary popes, and the Luminous Mysteries.',
	rosary:
		'How to pray the Holy Rosary, its traditional prayers, and the twenty mysteries—Joyful, Sorrowful, Glorious, and Luminous—for meditation.',
	liturgicalCalendar:
		'The Catholic liturgical calendar—solemnities, feasts, and memorials of the General Roman Calendar, moveable celebrations from Easter, and the seasons of the Church year.',
	notFound: 'The page you were looking for could not be found on Digital Catholic.',
} as const;

export interface BreadcrumbItem {
	label: string;
	/** Root-relative path with base already applied; omit for the current page */
	href?: string;
}

export function getSiteOrigin(): string {
	const site = import.meta.env.SITE;
	if (site) return site.replace(/\/$/, '');
	return SITE.productionOrigin;
}

/** Absolute URL for a path (with base) or full URL. */
export function getAbsoluteUrl(path: string): string {
	if (path.startsWith('http://') || path.startsWith('https://')) {
		return path;
	}
	const normalized = path.startsWith('/') ? path : `/${path}`;
	if (import.meta.env.SITE) {
		return new URL(normalized, import.meta.env.SITE).href;
	}
	const base = SITE.productionBase.replace(/\/$/, '');
	const origin = SITE.productionOrigin;
	if (normalized === '/') {
		return `${origin}${base}/`;
	}
	if (normalized.startsWith(base)) {
		return `${origin}${normalized}`;
	}
	return `${origin}${base}${normalized}`;
}

export function getCanonicalUrl(url: URL): string {
	if (import.meta.env.SITE) {
		return new URL(url.pathname, import.meta.env.SITE).href;
	}
	return getAbsoluteUrl(url.pathname);
}

export function formatPageTitle(title: string): string {
	return title === SITE.name ? SITE.defaultTitle : `${title} · ${SITE.name}`;
}

export function getDefaultOgImage(): string {
	return getAbsoluteUrl(`${import.meta.env.BASE_URL}${SITE.ogImagePath}`);
}

export function getOrganizationJsonLd() {
	return {
		'@type': 'Organization',
		'@id': `${getAbsoluteUrl(import.meta.env.BASE_URL)}#organization`,
		name: SITE.name,
		url: getAbsoluteUrl(import.meta.env.BASE_URL),
		logo: getAbsoluteUrl(`${import.meta.env.BASE_URL}favicon.svg`),
		description: SITE.defaultDescription,
		sameAs: [SITE.repoUrl],
	};
}

export function getWebSiteJsonLd() {
	return {
		'@type': 'WebSite',
		'@id': `${getAbsoluteUrl(import.meta.env.BASE_URL)}#website`,
		name: SITE.name,
		url: getAbsoluteUrl(import.meta.env.BASE_URL),
		description: SITE.defaultDescription,
		inLanguage: 'en',
		publisher: { '@id': `${getAbsoluteUrl(import.meta.env.BASE_URL)}#organization` },
	};
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[], currentUrl: string) {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.label,
			item: item.href ? getAbsoluteUrl(item.href) : currentUrl,
		})),
	};
}
