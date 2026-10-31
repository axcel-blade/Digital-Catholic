import { commandments, commandmentsIntro } from '../data/commandments';
import { coreBeliefs, coreBeliefsIntro } from '../data/coreBeliefs';
import { getGuide, guides } from '../data/guides';
import { getGuidePage } from '../data/guides/pages';
import { slugify } from './article';
import { glossary, glossaryIntro, termId } from '../data/glossary';
import { faqEntries, faqIntro, faqCategoryLabels, faqId } from '../data/faq';
import { studyPaths, studyPathsIntro } from '../data/study-paths';
import { timelineEvents, timelineIntro } from '../data/timeline';
import { compareIntro, comparisonRows } from '../data/compare-traditions';
import { dailyGospelIntro, gospelReflections } from '../data/daily-gospel';
import { getSection } from './sections';
import { trinityIntro, trinityPersons, trinityScripture, trinityScriptureIntro } from '../data/trinity';
import { fruitsIntro, giftsIntro, spiritFruits, spiritGifts } from '../data/holySpirit';
import { massIntro, massItemsIntro, massSections, orderOfMassIntro, orderOfMassSections } from '../data/mass';
import { disciples, disciplesIntro } from '../data/disciples';
import {
	mysterySets,
	rosaryHowToIntro,
	rosaryHowToSteps,
	rosaryIntro,
	rosaryMysterySchedule,
	rosaryOriginIntro,
	rosaryOriginSections,
	rosaryPrayers,
} from '../data/rosary';
import { eucharisticMiracles, eucharisticMiraclesIntro } from '../data/eucharisticMiracles';
import { marianApparitions, marianApparitionsIntro } from '../data/marianApparitions';
import {
	miracles,
	miraclesIntro,
	shroudOfTurinIntro,
	shroudOfTurinSections,
	veilOfVeronicaIntro,
	veilOfVeronicaSections,
} from '../data/miracles';
import { parables, parablesIntro } from '../data/parables';
import { sacraments, sacramentGuides } from '../data/sacraments';
import {
	buildLiturgicalYear,
	liturgicalCalendarIntro,
	liturgicalSeasonsIntro,
} from '../data/liturgical-calendar';
import {
	saints,
	getSaintStatus,
	pathToSainthoodIntro,
	pathToSainthoodSections,
} from '../data/saints';
import {
	bibleBooks,
	bibleFormationIntro,
	bibleFormationSections,
	bibleIntro,
	testamentLabels,
} from '../data/bible';
import { prayers } from '../data/prayers';
import { withBase } from './paths';

export interface SearchEntry {
	title: string;
	url: string;
	category: string;
	excerpt: string;
	/** Lowercased text used for matching */
	body: string;
}

function joinParts(...parts: (string | undefined)[]): string {
	return parts.filter(Boolean).join(' ');
}

function sectionsText(sections: { heading: string; paragraphs: string[] }[]): string {
	return sections.flatMap((s) => [s.heading, ...s.paragraphs]).join(' ');
}

function entry(
	title: string,
	url: string,
	category: string,
	excerpt: string,
	bodyParts: string[]
): SearchEntry {
	const body = joinParts(excerpt, ...bodyParts).toLowerCase();
	return { title, url, category, excerpt, body };
}

export function buildSearchIndex(): SearchEntry[] {
	const items: SearchEntry[] = [
		entry(
			'Digital Catholic',
			withBase('/'),
			'Home',
			'Clear Catholic resources for Scripture, saints, sacraments, prayer, and the liturgical year.',
			['saints sacraments commandments rosary faith formation prayer bible scripture']
		),
		entry(
			'Contact',
			withBase('/contact'),
			'About',
			'Questions, corrections, or suggestions—by email or on GitHub.',
			['contact email feedback correction github issue contribute']
		),
		entry(
			'Holy Bible',
			withBase('/bible'),
			'Scripture',
			bibleIntro,
			['bible scripture old testament new testament books canon deuterocanonical'],
		),
		entry(
			'How the Bible Was Formed',
			withBase('/bible/how-the-bible-was-formed'),
			'Scripture',
			bibleFormationIntro,
			[
				'inspiration canon septuagint vulgate jerome trent councils history',
				...bibleFormationSections.flatMap((s) => [s.heading, ...s.paragraphs]),
			],
		),
		entry(
			'About Digital Catholic',
			withBase('/about'),
			'About',
			'What Digital Catholic is, who it is for, and how its content is organised.',
			[
				'learning site Catholic faith biography sacraments knowledge sharing',
			]
		),
		entry(
			'Sacraments',
			withBase('/sacraments'),
			'Sacraments',
			'The seven sacraments of the Catholic Church.',
			['baptism confirmation eucharist penance orders matrimony anointing'],
		),
		entry(
			'Disciples of Jesus',
			withBase('/disciples'),
			'Disciples',
			disciplesIntro,
			[
				disciplesIntro,
				...disciples.map((d) =>
					joinParts(d.title, d.alsoKnownAs, d.excerpt, d.gospelReference, d.feastDays ?? '')
				),
			],
		),
		entry(
			'Miracles of Jesus',
			withBase('/miracles'),
			'Miracles',
			miraclesIntro,
			[miraclesIntro, ...miracles.map((m) => joinParts(m.title, m.excerpt, m.gospelReference, m.category))],
		),
		entry(
			'The Shroud of Turin',
			withBase('/miracles/shroud-of-turin'),
			'Miracles',
			shroudOfTurinIntro,
			[
				'shroud turin relic burial cloth holy face carbon dating sturp secondo pia',
				...shroudOfTurinSections.flatMap((s) => [s.heading, ...s.paragraphs]),
			],
		),
		entry(
			'The Veil of Veronica and the Holy Face',
			withBase('/miracles/veil-of-veronica'),
			'Miracles',
			veilOfVeronicaIntro,
			[
				'veil veronica vera icon holy face sudarium oviedo manoppello mandylion relic face cloth sixth station',
				...veilOfVeronicaSections.flatMap((s) => [s.heading, ...s.paragraphs]),
			],
		),
		entry(
			'Eucharistic Miracles',
			withBase('/eucharistic-miracles'),
			'Eucharistic',
			eucharisticMiraclesIntro,
			[
				eucharisticMiraclesIntro,
				...eucharisticMiracles.map((m) =>
					joinParts(m.title, m.excerpt, m.location, m.date, m.category)
				),
			],
		),
		entry(
			'Marian Apparitions',
			withBase('/marian-apparitions'),
			'Marian',
			marianApparitionsIntro,
			[
				marianApparitionsIntro,
				...marianApparitions.map((a) =>
					joinParts(a.title, a.excerpt, a.location, a.date, a.category)
				),
			],
		),
		entry(
			'Parables of Jesus',
			withBase('/parables'),
			'Parables',
			parablesIntro,
			[parablesIntro, ...parables.map((p) => joinParts(p.title, p.excerpt, p.gospelReference, p.category))],
		),
		entry(
			'Ten Commandments',
			withBase('/commandments'),
			'Commandments',
			commandmentsIntro,
			[commandmentsIntro, ...commandments.map((c) => joinParts(c.title, c.text, c.meaning))],
		),
		entry(
			'Core Catholic Beliefs',
			withBase('/core-beliefs'),
			'Doctrine',
			coreBeliefsIntro,
			[
				coreBeliefsIntro,
				...coreBeliefs.map((b) => joinParts(b.title, b.summary, b.scripture, b.catechism, ...b.meaning)),
			],
		),
		entry(
			'Holy Trinity',
			withBase('/holy-trinity'),
			'Doctrine',
			trinityIntro,
			[
				trinityIntro,
				...trinityPersons.map((p) => joinParts(p.title, p.summary, p.meaning, p.scripture)),
				trinityScriptureIntro,
				...trinityScripture.flatMap((t) => t.passages.map((p) => joinParts(p.reference, p.title, p.meaning))),
			],
		),
		entry(
			'Gifts of the Holy Spirit',
			withBase('/holy-spirit#gifts'),
			'Holy Spirit',
			giftsIntro,
			[giftsIntro, ...spiritGifts.map((g) => joinParts(g.title, g.summary, g.meaning))],
		),
		entry(
			'Fruits of the Holy Spirit',
			withBase('/holy-spirit#fruits'),
			'Holy Spirit',
			fruitsIntro,
			[fruitsIntro, ...spiritFruits.map((f) => joinParts(f.title, f.meaning))],
		),
		entry(
			'Items Used at Mass',
			withBase('/mass/items-used-at-mass'),
			'Mass',
			massItemsIntro,
			[
				massItemsIntro,
				...massSections.flatMap((s) => [s.heading, ...s.items.map((i) => joinParts(i.name, i.description))]),
			],
		),
		entry(
			'The Order of Mass',
			withBase('/mass/order-of-mass'),
			'Mass',
			orderOfMassIntro,
			[
				'mass parts procedure liturgy consecration communion readings homily creed',
				...orderOfMassSections.flatMap((s) => [s.heading, ...s.paragraphs]),
			],
		),
		entry(
			'The Path to Sainthood',
			withBase('/saints/path-to-sainthood'),
			'Saints',
			pathToSainthoodIntro,
			[
				'canonisation beatification miracle heroic virtue cause',
				...pathToSainthoodSections.flatMap((s) => [s.heading, ...s.paragraphs]),
			],
		),
		entry(
			'Origin of the Rosary',
			withBase('/rosary/origin'),
			'Rosary',
			rosaryOriginIntro,
			[
				rosaryOriginIntro,
				...rosaryOriginSections.flatMap((s) => [s.heading, ...s.paragraphs]),
			],
		),
		entry(
			'Mysteries of the Rosary',
			withBase('/rosary'),
			'Rosary',
			rosaryIntro,
			[
				rosaryIntro,
				rosaryHowToIntro,
				rosaryMysterySchedule,
				...rosaryHowToSteps.map((s) => joinParts(s.title, s.description)),
				...rosaryPrayers.map((p) => joinParts(p.title, p.text)),
			],
		),
		entry(
			'Liturgical Calendar',
			withBase('/liturgical-calendar'),
			'Calendar',
			liturgicalCalendarIntro,
			[
				liturgicalCalendarIntro,
				liturgicalSeasonsIntro,
				...buildLiturgicalYear(new Date().getFullYear()).months.flatMap((m) =>
					m.days.map((d) => joinParts(d.title, d.rank, d.color, d.note ?? ''))
				),
			],
		),
	];

	// A disciple and a Bible book can share a name (Matthew); qualify both so search results are distinct.
	const bookTitles = new Set(bibleBooks.map((b) => b.title));
	const discipleTitles = new Set(disciples.map((d) => d.title));

	for (const disciple of disciples) {
		items.push(
			entry(
				bookTitles.has(disciple.title) ? `St. ${disciple.title} the Apostle` : disciple.title,
				withBase(`/disciples/${disciple.slug}`),
				'Disciple',
				disciple.excerpt,
				[
					disciple.alsoKnownAs ?? '',
					disciple.lifeDates ?? '',
					disciple.gospelReference,
					disciple.feastDays ?? '',
					sectionsText(disciple.sections),
				]
			)
		);
	}

	for (const saint of saints) {
		items.push(
			entry(
				saint.title,
				withBase(`/saints/${saint.slug}`),
				getSaintStatus(saint),
				saint.excerpt,
				[saint.lifeDates ?? '', saint.feastDays ?? '', sectionsText(saint.sections)]
			)
		);
	}

	for (const sacrament of sacraments) {
		items.push(
			entry(
				sacrament.title,
				withBase(`/sacraments/${sacrament.slug}`),
				'Sacrament',
				sacrament.excerpt,
				[sectionsText(sacrament.sections)]
			)
		);
	}

	items.push(
		entry(
			'The Sacraments in Depth',
			withBase('/sacraments/guides'),
			'Sacrament guides',
			'In-depth guides to the sacraments and how to live them.',
			sacramentGuides.map((g) => joinParts(g.title, g.excerpt))
		)
	);

	for (const guide of sacramentGuides) {
		items.push(
			entry(
				guide.title,
				withBase(`/sacraments/guides/${guide.slug}`),
				'Sacrament guide',
				guide.excerpt,
				[sectionsText(guide.sections)]
			)
		);
	}

	for (const miracle of miracles) {
		items.push(
			entry(
				miracle.title,
				withBase(`/miracles/${miracle.slug}`),
				'Miracle',
				miracle.excerpt,
				[miracle.gospelReference, miracle.category, sectionsText(miracle.sections)]
			)
		);
	}

	for (const miracle of eucharisticMiracles) {
		items.push(
			entry(
				miracle.title,
				withBase(`/eucharistic-miracles/${miracle.slug}`),
				'Eucharistic miracle',
				miracle.excerpt,
				[miracle.location, miracle.date, miracle.category, sectionsText(miracle.sections)]
			)
		);
	}

	for (const apparition of marianApparitions) {
		items.push(
			entry(
				apparition.title,
				withBase(`/marian-apparitions/${apparition.slug}`),
				'Marian apparition',
				apparition.excerpt,
				[apparition.location, apparition.date, apparition.category, sectionsText(apparition.sections)]
			)
		);
	}

	for (const parable of parables) {
		items.push(
			entry(
				parable.title,
				withBase(`/parables/${parable.slug}`),
				'Parable',
				parable.excerpt,
				[parable.gospelReference, parable.category, sectionsText(parable.sections)]
			)
		);
	}

	for (const commandment of commandments) {
		items.push(
			entry(
				`Commandment ${commandment.number}: ${commandment.title}`,
				withBase(`/commandments#commandment-${commandment.number}`),
				'Commandment',
				commandment.text,
				[commandment.title, commandment.text, commandment.meaning]
			)
		);
	}

	for (const person of trinityPersons) {
		items.push(
			entry(
				`Holy Trinity: ${person.title}`,
				withBase(`/holy-trinity#person-${person.number}`),
				'Doctrine',
				person.summary,
				[person.title, person.summary, person.meaning, person.scripture]
			)
		);
	}

	for (const belief of coreBeliefs) {
		items.push(
			entry(
				`Core Beliefs: ${belief.title}`,
				withBase(`/core-beliefs/${slugify(belief.title)}`),
				'Doctrine',
				belief.summary,
				[belief.title, belief.summary, belief.scripture, belief.catechism, ...belief.meaning, ...(belief.text?.lines ?? [])]
			)
		);
	}

	for (const testament of trinityScripture) {
		items.push(
			entry(
				`Holy Trinity: ${testament.title}`,
				withBase(`/holy-trinity/${testament.id}`),
				'Doctrine',
				testament.intro,
				[testament.title, testament.intro, ...testament.passages.map((p) => joinParts(p.reference, p.title, p.meaning))]
			)
		);
	}

	for (const gift of spiritGifts) {
		items.push(
			entry(
				`Gift of the Holy Spirit: ${gift.title}`,
				withBase(`/holy-spirit#gift-${gift.number}`),
				'Holy Spirit',
				gift.summary,
				[gift.title, gift.summary, gift.meaning]
			)
		);
	}

	for (const fruit of spiritFruits) {
		items.push(
			entry(
				`Fruit of the Holy Spirit: ${fruit.title}`,
				withBase(`/holy-spirit#fruit-${fruit.number}`),
				'Holy Spirit',
				fruit.meaning,
				[fruit.title, fruit.meaning]
			)
		);
	}

	for (const book of bibleBooks) {
		items.push(
			entry(
				discipleTitles.has(book.title)
					? `${book.category === 'gospels' ? 'Gospel' : 'Book'} of ${book.title}`
					: book.title,
				withBase(`/bible/${book.slug}`),
				`Bible · ${testamentLabels[book.testament]}`,
				book.excerpt,
				[book.abbreviation, book.deuterocanonical ? 'deuterocanonical' : '', sectionsText(book.sections)]
			)
		);
	}

	for (const prayer of prayers) {
		items.push(
			entry(
				prayer.title,
				withBase(`/prayers/${prayer.slug}`),
				'Prayer',
				prayer.excerpt,
				[prayer.alsoKnownAs ?? '', prayer.text, sectionsText(prayer.sections)]
			)
		);
	}

	for (const set of mysterySets) {
		items.push(
			entry(
				set.title,
				withBase(`/rosary/${set.slug}`),
				'Rosary',
				set.excerpt,
				[set.intro, set.days, ...set.mysteries.map((m) => joinParts(m.title, m.fruit, m.meditation))]
			)
		);

		for (const mystery of set.mysteries) {
			items.push(
				entry(
					`${set.title}: ${mystery.title}`,
					withBase(`/rosary/${set.slug}#mystery-${mystery.number}`),
					'Rosary mystery',
					mystery.meditation.slice(0, 120) + (mystery.meditation.length > 120 ? '…' : ''),
					[mystery.title, mystery.fruit, mystery.meditation, set.title]
				)
			);
		}
	}

	items.push(
		entry('Catholic Glossary', withBase('/glossary'), 'Reference', glossaryIntro, [
			glossaryIntro,
			...glossary.map((t) => t.term),
		]),
		entry('Ask a Catholic Question', withBase('/ask-a-catholic-question'), 'FAQ', faqIntro, [
			faqIntro,
			...faqEntries.map((f) => f.question),
		]),
		entry('Catholic Study Paths', withBase('/study-paths'), 'Learning plans', studyPathsIntro, [
			studyPathsIntro,
			...studyPaths.map((p) => joinParts(p.title, p.audience, p.summary)),
		]),
		entry('Church History Timeline', withBase('/church-history-timeline'), 'Timeline', timelineIntro, [
			timelineIntro,
			...timelineEvents.map((e) => joinParts(e.date, e.title, e.description)),
		]),
		entry('Compare Christian Traditions', withBase('/compare-christian-traditions'), 'Comparison', compareIntro, [
			compareIntro,
			...comparisonRows.map((r) => joinParts(r.topic, ...Object.values(r.values))),
		]),
		entry('Daily Gospel and Reflection', withBase('/daily-gospel'), 'Daily prayer', dailyGospelIntro, [
			dailyGospelIntro,
			...gospelReflections.map((r) => joinParts(r.reference, r.title)),
		])
	);

	for (const term of glossary) {
		items.push(
			entry(`Glossary: ${term.term}`, withBase(`/glossary#${termId(term.term)}`), 'Reference', term.definition, [
				term.term,
				term.definition,
				term.catechism ?? '',
			])
		);
	}

	for (const faq of faqEntries) {
		items.push(
			entry(faq.question, withBase(`/ask-a-catholic-question#${faqId(faq.question)}`), `FAQ · ${faqCategoryLabels[faq.category]}`, faq.answer[0], [
				faq.question,
				...faq.answer,
				faq.catechism ?? '',
				faq.scripture ?? '',
			])
		);
	}

	// Hub pages whose guide topics now live on their own /topics page
	const hubs = [
		{ title: 'Holy Mass and Liturgy', href: '/mass', label: 'Liturgy', excerpt: massIntro },
		{ title: 'Christian Living', href: '/moral-teaching', label: 'Morality', excerpt: getGuide('moral-teaching').intro },
		{ title: 'Scripture, Tradition, and the Church', href: '/bible-and-tradition', label: 'Scripture & Tradition', excerpt: getGuide('bible-and-tradition').intro },
	];
	for (const hub of hubs) items.push(entry(hub.title, withBase(hub.href), hub.label, hub.excerpt, [hub.excerpt]));

	// Guides shown as sub-pages of another section rather than as a section of their own
	const guidePages: Record<string, { title: string; href: string; label: string }> = {
		apologetics: { title: 'Common Questions', href: '/study/topics', label: 'Apologetics' },
		prayers: { title: 'Devotions and Practices', href: '/pray/topics', label: 'Devotion' },
		saints: { title: 'Mary and the Communion of Saints', href: '/saints/topics', label: 'Saints' },
		mass: { title: 'Understanding the Liturgy', href: '/mass/topics', label: 'Liturgy' },
		'moral-teaching': { title: 'Moral Teaching', href: '/moral-teaching/topics', label: 'Morality' },
		'living-the-faith': { title: 'Living the Catholic Faith', href: '/living-the-faith', label: 'Practice' },
		'bible-and-tradition': { title: 'The Bible and Catholic Tradition', href: '/bible-and-tradition/topics', label: 'Scripture & Tradition' },
		'church-history': { title: 'Catholic Church History', href: '/church-history', label: 'History' },
		'the-church': { title: 'The Catholic Church', href: '/the-church', label: 'Ecclesiology' },
		'social-teaching': { title: 'Catholic Social Teaching', href: '/social-teaching', label: 'Society' },
	};
	for (const guide of guides) {
		const section = guidePages[guide.key] ?? getSection(guide.key);
		items.push(
			entry(section.title, withBase(section.href), section.label, guide.intro, [
				guide.intro,
				...guide.topics.map((t) => joinParts(t.title, t.summary)),
			])
		);
		for (const topic of guide.topics) {
			items.push(
				entry(
					`${section.title}: ${topic.title}`,
					withBase(`${getGuidePage(guide.key).articleBase}/${slugify(topic.title)}`),
					section.label,
					topic.summary,
					[
						topic.title,
						topic.summary,
						topic.scripture,
						topic.catechism,
						...topic.meaning,
						...(topic.points?.items ?? []),
						...(topic.text?.lines ?? []),
					].filter((part): part is string => Boolean(part))
				)
			);
		}
	}

	return items;
}
