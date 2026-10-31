import { loadCollection } from '../lib/loadCollection';
import type { Prayer } from './types';

export { prayersIntro } from './intro';
export type * from './types';

const modules = import.meta.glob('./items/*.ts', { eager: true });
const prayerOrder = [
	'sign-of-the-cross',
	'our-father',
	'hail-mary',
	'glory-be',
	'apostles-creed',
	'fatima-prayer',
	'prayer-to-st-michael',
	'memorare',
	'guardian-angel-prayer',
	'angelus',
	'regina-caeli',
	'hail-holy-queen',
] as const;

export const prayers = loadCollection<Prayer>(modules).sort(
	(a, b) =>
		prayerOrder.indexOf(a.slug as (typeof prayerOrder)[number]) -
		prayerOrder.indexOf(b.slug as (typeof prayerOrder)[number])
);

export function getPrayer(slug: string): Prayer | undefined {
	return prayers.find((prayer) => prayer.slug === slug);
}

/** Prayer text by title (for Rosary and other pages). */
export function getPrayerText(title: 'Our Father' | 'Hail Mary'): string | undefined {
	return prayers.find((p) => p.title === title)?.text;
}
