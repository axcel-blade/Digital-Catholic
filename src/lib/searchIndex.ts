import { commandments, commandmentsIntro } from '../data/commandments';
import {
	mysterySets,
	rosaryHowToIntro,
	rosaryHowToSteps,
	rosaryIntro,
	rosaryMysterySchedule,
	rosaryPrayers,
} from '../data/rosary';
import { sacraments } from '../data/sacraments';
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
			'Ten Commandments',
			withBase('/commandments'),
			'Commandments',
			commandmentsIntro,
			[commandmentsIntro, ...commandments.map((c) => joinParts(c.title, c.text, c.meaning))],
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
	];

	for (const saint of saints) {
		items.push(
			entry(
				saint.title,
				withBase(`/saints/${saint.slug}`),
				'Saint',
				saint.excerpt,
				[saint.feastDays ?? '', sectionsText(saint.sections)]
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
