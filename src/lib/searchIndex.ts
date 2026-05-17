import { bibleBooks, bibleIntro } from '../data/bible';
import { commandments, commandmentsIntro } from '../data/commandments';
import { disciples, disciplesIntro } from '../data/disciples';
import { prayers, prayersIntro } from '../data/prayers';
import {
	mysterySets,
	rosaryHowToIntro,
	rosaryHowToSteps,
	rosaryIntro,
	rosaryMysterySchedule,
	rosaryPrayers,
} from '../data/rosary';
import { eucharisticMiracles, eucharisticMiraclesIntro } from '../data/eucharisticMiracles';
import { marianApparitions, marianApparitionsIntro } from '../data/marianApparitions';
import { miracles, miraclesIntro } from '../data/miracles';
import { parables, parablesIntro } from '../data/parables';
import { sacraments } from '../data/sacraments';
import {
	buildLiturgicalYear,
	liturgicalCalendarIntro,
	liturgicalSeasonsIntro,
} from '../data/liturgical-calendar';
import { saints } from '../data/saints';
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
			'Catholic saints, sacraments, commandments, and the Rosary.',
			[
				'saints sacraments commandments rosary faith formation prayer',
			]
		),
		entry(
			'About Digital Catholic',
			withBase('/about'),
			'About',
			'What this site is about — saints, sacraments, and faith formation.',
			[
				'learning site Catholic faith biography sacraments knowledge sharing',
			]
		),
		entry(
			'Saints',
			withBase('/saints'),
			'Saints',
			'Biographies of holy men and women who witness to Christ.',
			['saint biography holy men women prayer'],
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
			'Holy Bible',
			withBase('/bible'),
			'Scripture',
			bibleIntro,
			[
				bibleIntro,
				'Catholic canon 73 books Old Testament New Testament deuterocanonical',
				...bibleBooks.map((b) =>
					joinParts(b.title, b.abbreviation, b.excerpt, sectionsText(b.sections))
				),
			],
		),
		entry(
			'Catholic Prayers',
			withBase('/prayers'),
			'Prayers',
			prayersIntro,
			[
				prayersIntro,
				...prayers.map((p) => joinParts(p.title, p.alsoKnownAs, p.excerpt, p.text, sectionsText(p.sections))),
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

	for (const disciple of disciples) {
		items.push(
			entry(
				disciple.title,
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
				'Saint',
				saint.excerpt,
				[saint.lifeDates ?? '', saint.feastDays ?? '', sectionsText(saint.sections)]
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

	for (const book of bibleBooks) {
		items.push(
			entry(
				book.title,
				withBase(`/bible/${book.slug}`),
				'Scripture',
				book.excerpt,
				[
					book.abbreviation,
					book.testament,
					book.category,
					book.deuterocanonical ? 'deuterocanonical' : '',
					sectionsText(book.sections),
				]
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

	return items;
}
