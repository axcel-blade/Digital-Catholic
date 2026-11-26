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
	'rosary-concluding-prayer',
	'act-of-contrition',
	'morning-offering',
	'grace-before-meals',
	'grace-after-meals',
	'eternal-rest',
	'act-of-faith',
	'act-of-hope',
	'act-of-love',
	'come-holy-spirit',
	'anima-christi',
	'act-of-spiritual-communion',
	'divine-praises',
	'jesus-prayer',
	'prayer-before-a-crucifix',
	'prayer-of-st-francis',
	'suscipe',
	'st-patricks-breastplate',
	'prayer-to-st-joseph',
	'sub-tuum-praesidium',
	'magnificat',
	'ave-maris-stella',
	'nicene-creed',
	'te-deum',
	'veni-creator-spiritus',
	'tantum-ergo',
	'novena-to-the-holy-spirit',
	'divine-mercy-novena',
	'christmas-novena',
	'novena-to-the-immaculate-conception',
	'sacred-heart-novena',
	'novena-to-our-lady-of-perpetual-help',
	'miraculous-medal-novena',
	'novena-to-our-lady-of-guadalupe',
	'novena-to-st-joseph',
	'novena-to-st-jude',
	'novena-to-st-anthony',
	'rose-novena-to-st-therese',
	'novena-to-st-michael',
	'novena-to-the-infant-of-prague',
	'novena-for-the-holy-souls',
	'surrender-novena',
	'novena-to-our-lady-undoer-of-knots',
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
