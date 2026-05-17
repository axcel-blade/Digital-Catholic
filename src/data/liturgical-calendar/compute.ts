import { fixedFeasts } from './fixed-feasts';
import type { LiturgicalDayEntry, LiturgicalMonth, LiturgicalYear } from './types';

const MONTH_LABELS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
] as const;

function pad(n: number): string {
	return String(n).padStart(2, '0');
}

function toIso(year: number, month: number, day: number): string {
	return `${year}-${pad(month)}-${pad(day)}`;
}

function isoFromDate(date: Date): string {
	const { year, month, day } = dateParts(date);
	return toIso(year, month, day);
}

function addDays(date: Date, days: number): Date {
	const next = new Date(date);
	next.setDate(next.getDate() + days);
	return next;
}

function dateParts(date: Date): { year: number; month: number; day: number } {
	return {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate(),
	};
}

/** Gregorian computus — Easter Sunday in the Western Church. */
export function getEasterSunday(year: number): Date {
	const a = year % 19;
	const b = Math.floor(year / 100);
	const c = year % 100;
	const d = Math.floor(b / 4);
	const e = b % 4;
	const f = Math.floor((b + 8) / 25);
	const g = Math.floor((b - f + 1) / 3);
	const h = (19 * a + b - d - g + 15) % 30;
	const i = Math.floor(c / 4);
	const k = c % 4;
	const l = (32 + 2 * e + 2 * i - h - k) % 7;
	const m = Math.floor((a + 11 * h + 22 * l) / 451);
	const month = Math.floor((h + l - 7 * m + 114) / 31);
	const day = ((h + l - 7 * m + 114) % 31) + 1;
	return new Date(year, month - 1, day);
}

function getFirstAdventSunday(year: number): Date {
	const dec24 = new Date(year, 11, 24);
	const daysToSunday = dec24.getDay();
	const fourthAdventSunday = new Date(year, 11, 24 - daysToSunday);
	return addDays(fourthAdventSunday, -21);
}

function getBaptismOfTheLord(year: number): Date {
	const epiphany = new Date(year, 0, 6);
	if (epiphany.getDay() === 0) {
		return new Date(year, 0, 13);
	}
	const daysUntilSunday = 7 - epiphany.getDay();
	return new Date(year, 0, 6 + daysUntilSunday);
}

function moveableFeasts(year: number, easter: Date): LiturgicalDayEntry[] {
	const advent1 = getFirstAdventSunday(year);
	const baptism = getBaptismOfTheLord(year);
	const christKing = addDays(advent1, -7);

	const entries: LiturgicalDayEntry[] = [
		{
			date: isoFromDate(baptism),
			title: 'The Baptism of the Lord',
			rank: 'feast',
			color: 'white',
			note: 'Closes the Christmas season; Ordinary Time begins afterward.',
		},
		{
			date: isoFromDate(addDays(easter, -46)),
			title: 'Ash Wednesday',
			rank: 'season',
			color: 'purple',
			note: 'Beginning of Lent.',
		},
		{
			date: isoFromDate(addDays(easter, -7)),
			title: 'Palm Sunday of the Passion of the Lord',
			rank: 'solemnity',
			color: 'red',
		},
		{
			date: isoFromDate(addDays(easter, -3)),
			title: 'Holy Thursday — Evening Mass of the Lord’s Supper',
			rank: 'solemnity',
			color: 'white',
			note: 'Opens the Easter Triduum.',
		},
		{
			date: isoFromDate(addDays(easter, -2)),
			title: 'Good Friday of the Passion of the Lord',
			rank: 'solemnity',
			color: 'red',
		},
		{
			date: isoFromDate(addDays(easter, -1)),
			title: 'Holy Saturday',
			rank: 'season',
			color: 'white',
			note: 'Easter Vigil after nightfall.',
		},
		{
			date: isoFromDate(easter),
			title: 'Easter Sunday of the Resurrection of the Lord',
			rank: 'solemnity',
			color: 'white',
		},
		{
			date: isoFromDate(addDays(easter, 39)),
			title: 'The Ascension of the Lord',
			rank: 'solemnity',
			color: 'white',
			note: 'Observed on the following Sunday in many dioceses.',
		},
		{
			date: isoFromDate(addDays(easter, 49)),
			title: 'Pentecost Sunday',
			rank: 'solemnity',
			color: 'red',
		},
		{
			date: isoFromDate(addDays(easter, 56)),
			title: 'The Most Holy Trinity',
			rank: 'solemnity',
			color: 'white',
		},
		{
			date: isoFromDate(addDays(easter, 60)),
			title: 'The Most Holy Body and Blood of Christ (Corpus Christi)',
			rank: 'solemnity',
			color: 'white',
			note: 'Often transferred to the following Sunday.',
		},
		{
			date: isoFromDate(addDays(easter, 61)),
			title: 'The Most Sacred Heart of Jesus',
			rank: 'solemnity',
			color: 'white',
		},
		{
			date: isoFromDate(christKing),
			title: 'Our Lord Jesus Christ, King of the Universe',
			rank: 'solemnity',
			color: 'white',
		},
		{
			date: isoFromDate(advent1),
			title: 'First Sunday of Advent',
			rank: 'season',
			color: 'purple',
			note: 'Beginning of a new liturgical year.',
		},
	];

	return entries;
}

function fixedFeastsForYear(year: number): LiturgicalDayEntry[] {
	return fixedFeasts.map((feast) => ({
		date: toIso(year, feast.month, feast.day),
		title: feast.title,
		rank: feast.rank,
		color: feast.color,
		note: feast.note,
		saintSlug: feast.saintSlug,
	}));
}

function mergeDays(entries: LiturgicalDayEntry[]): LiturgicalDayEntry[] {
	const byDate = new Map<string, LiturgicalDayEntry[]>();
	for (const entry of entries) {
		const list = byDate.get(entry.date) ?? [];
		list.push(entry);
		byDate.set(entry.date, list);
	}

	const rankOrder = {
		solemnity: 0,
		feast: 1,
		'season': 2,
		memorial: 3,
		'optional-memorial': 4,
	};

	const merged: LiturgicalDayEntry[] = [];
	for (const date of [...byDate.keys()].sort()) {
		const list = byDate.get(date)!;
		list.sort((a, b) => rankOrder[a.rank] - rankOrder[b.rank]);
		const primary = list[0];
		if (list.length === 1) {
			merged.push(primary);
		} else {
			merged.push({
				...primary,
				note: [primary.note, ...list.slice(1).map((d) => d.title)]
					.filter(Boolean)
					.join(' · '),
			});
		}
	}
	return merged;
}

function groupByMonth(days: LiturgicalDayEntry[]): LiturgicalMonth[] {
	const months: LiturgicalMonth[] = MONTH_LABELS.map((label, index) => ({
		month: index + 1,
		label,
		days: [],
	}));

	for (const day of days) {
		const month = Number(day.date.slice(5, 7));
		months[month - 1].days.push(day);
	}

	return months;
}

function buildSeasons(year: number, easter: Date): LiturgicalYear['seasons'] {
	const advent1 = getFirstAdventSunday(year);
	const baptism = getBaptismOfTheLord(year);
	const ashWednesday = addDays(easter, -46);
	const pentecost = addDays(easter, 49);

	return [
		{
			name: 'Advent',
			start: isoFromDate(advent1),
			end: toIso(year, 12, 24),
		},
		{
			name: 'Christmas',
			start: toIso(year, 12, 25),
			end: isoFromDate(baptism),
		},
		{
			name: 'Ordinary Time (early)',
			start: isoFromDate(addDays(baptism, 1)),
			end: isoFromDate(addDays(ashWednesday, -1)),
		},
		{
			name: 'Lent',
			start: isoFromDate(ashWednesday),
			end: isoFromDate(addDays(easter, -4)),
		},
		{
			name: 'Easter Triduum',
			start: isoFromDate(addDays(easter, -3)),
			end: isoFromDate(addDays(easter, -1)),
		},
		{
			name: 'Easter',
			start: isoFromDate(easter),
			end: isoFromDate(pentecost),
		},
		{
			name: 'Ordinary Time (late)',
			start: isoFromDate(addDays(pentecost, 1)),
			end: isoFromDate(addDays(advent1, -1)),
		},
	];
}

export function buildLiturgicalYear(year: number): LiturgicalYear {
	const easter = getEasterSunday(year);
	const days = mergeDays([...fixedFeastsForYear(year), ...moveableFeasts(year, easter)]);

	return {
		year,
		easter: isoFromDate(easter),
		seasons: buildSeasons(year, easter),
		months: groupByMonth(days),
	};
}

export function getLiturgicalYearsRange(
	centerYear: number,
	pastSpread = 1,
	futureSpread = 2
): number[] {
	const years: number[] = [];
	for (let y = centerYear - pastSpread; y <= centerYear + futureSpread; y++) {
		years.push(y);
	}
	return years;
}

export function formatCalendarDate(iso: string): string {
	const [year, month, day] = iso.split('-').map(Number);
	const date = new Date(year, month - 1, day);
	return date.toLocaleDateString('en-US', {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
	});
}

export function getCurrentSeason(
	yearData: LiturgicalYear,
	onDate: Date
): { name: string; start: string; end: string } | undefined {
	const iso = toIso(
		onDate.getFullYear(),
		onDate.getMonth() + 1,
		onDate.getDate()
	);
	return yearData.seasons.find((season) => iso >= season.start && iso <= season.end);
}

export function getCelebrationsOnDate(
	yearData: LiturgicalYear,
	iso: string
): LiturgicalDayEntry[] {
	const all = yearData.months.flatMap((m) => m.days);
	return all.filter((d) => d.date === iso);
}
