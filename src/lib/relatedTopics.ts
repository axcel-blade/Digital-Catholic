/**
 * Shared topic map: each topic's main page and the phrases that show a page
 * is discussing it. `getRelatedTopics()` reads a page's text and returns the
 * topics it mentions often enough to deserve a link, so related pages stay
 * connected without hand-maintained link lists.
 *
 * Patterns run against lower-case text. Keep them specific: a phrase that is
 * common everywhere (such as "Scripture" or "bishop") would link every page.
 */
import { stripBase } from './paths';

export interface TopicLink {
	href: string;
	label: string;
}

interface Topic extends TopicLink {
	patterns: RegExp[];
}

const topics: Topic[] = [
	// Sacraments
	{ href: '/sacraments/baptism', label: 'Baptism', patterns: [/\bbaptism\b/g, /\bbaptis(?:e|ed|es|ing)\b/g] },
	{ href: '/sacraments/confirmation', label: 'Confirmation', patterns: [/\bconfirmation\b/g] },
	{ href: '/sacraments/eucharist', label: 'The Eucharist', patterns: [/\beucharist\b/g, /\bholy communion\b/g] },
	{ href: '/sacraments/penance', label: 'Penance and Confession', patterns: [/\bconfession\b/g, /\bsacrament of (?:penance|reconciliation)\b/g] },
	{ href: '/sacraments/anointing-of-the-sick', label: 'Anointing of the Sick', patterns: [/\banointing of the sick\b/g] },
	{ href: '/sacraments/holy-orders', label: 'Holy Orders', patterns: [/\bholy orders\b/g, /\bordination\b/g] },
	{ href: '/sacraments/matrimony', label: 'Matrimony', patterns: [/\bmatrimony\b/g, /\bmarriage\b/g] },
	{ href: '/sacraments/guides/the-real-presence', label: 'The Real Presence', patterns: [/\breal presence\b/g] },
	{ href: '/sacraments/guides/transubstantiation-explained', label: 'Transubstantiation', patterns: [/\btransubstantiation\b/g] },
	// Mass and the liturgical year
	{ href: '/mass/order-of-mass', label: 'The Order of Mass', patterns: [/\border of mass\b/g, /\bliturgy of the word\b/g, /\bliturgy of the eucharist\b/g, /\beucharistic prayer\b/g] },
	{ href: '/mass/items-used-at-mass', label: 'Items used at Mass', patterns: [/\bchalice\b/g, /\bciborium\b/g, /\bmonstrance\b/g, /\bchasuble\b/g, /\bthurible\b/g, /\bpaten\b/g] },
	{ href: '/liturgical-calendar', label: 'The Liturgical Calendar', patterns: [/\bliturgical (?:year|calendar|seasons?)\b/g, /\badvent\b/g, /\blent\b/g] },
	{ href: '/mass', label: 'Holy Mass and Liturgy', patterns: [/\bholy days? of obligation\b/g, /\bsunday obligation\b/g, /\bgregorian chant\b/g, /\bsacred music\b/g] },
	// Prayer
	{ href: '/rosary', label: 'The Rosary', patterns: [/\brosary\b/g] },
	{ href: '/prayers/our-father', label: 'The Our Father', patterns: [/\bour father\b/g, /\blord’s prayer\b/g] },
	{ href: '/prayers/hail-mary', label: 'The Hail Mary', patterns: [/\bhail mary\b/g, /\bhail marys\b/g] },
	{ href: '/pray', label: 'Prayers and Devotions', patterns: [/\bliturgy of the hours\b/g, /\blectio divina\b/g, /\bdivine mercy\b/g, /\bstations of the cross\b/g, /\bnovenas?\b/g, /\bangelus\b/g, /\beucharistic adoration\b/g, /\bfasting\b/g] },
	// Mary and the saints
	{ href: '/saints/blessed-virgin-mary', label: 'The Blessed Virgin Mary', patterns: [/\bvirgin mary\b/g, /\bblessed virgin\b/g, /\bmother of god\b/g, /\btheotokos\b/g] },
	{ href: '/saints#topic-1', label: 'Mary and the Communion of Saints', patterns: [/\bcommunion of saints\b/g, /\bintercession of (?:the )?saints\b/g, /\bimmaculate conception\b/g, /\bassumption of mary\b/g, /\bperpetual virginity\b/g] },
	{ href: '/saints#topic-7', label: 'Saints, relics and sacramentals', patterns: [/\brelics?\b/g, /\bsacramentals?\b/g] },
	{ href: '/saints#topic-5', label: 'Why Catholics ask saints to intercede', patterns: [/\b(?:his|her|their) intercession\b/g, /\bintercessor\b/g] },
	{ href: '/marian-apparitions', label: 'Marian Apparitions', patterns: [/\bapparitions?\b/g] },
	{ href: '/eucharistic-miracles', label: 'Eucharistic Miracles', patterns: [/\beucharistic miracles?\b/g] },
	{ href: '/saints/path-to-sainthood', label: 'The path to sainthood', patterns: [/\bcanonis(?:ed|ation)\b/g, /\bbeatifi(?:ed|cation)\b/g] },
	{ href: '/saints/st-joseph', label: 'St. Joseph', patterns: [/\bst\. joseph\b/g] },
	{ href: '/disciples/peter', label: 'St. Peter', patterns: [/\bst\. peter\b/g, /\bsimon peter\b/g] },
	// Doctrine and morality
	{ href: '/holy-trinity', label: 'The Holy Trinity', patterns: [/\btrinity\b/g] },
	{ href: '/core-beliefs', label: 'Core Catholic Beliefs', patterns: [/\bcreed\b/g, /\bpurgatory\b/g, /\bfour last things\b/g, /\bincarnation\b/g] },
	{ href: '/commandments', label: 'The Ten Commandments', patterns: [/\bten commandments\b/g, /\bcommandments?\b/g] },
	{ href: '/moral-teaching', label: 'Catholic Moral Teaching', patterns: [/\bmortal sins?\b/g, /\bvenial sins?\b/g, /\bvirtues?\b/g, /\bworks of mercy\b/g, /\bconscience\b/g] },
	{ href: '/social-teaching', label: 'Catholic Social Teaching', patterns: [/\bcommon good\b/g, /\bhuman dignity\b/g, /\bsolidarity\b/g, /\bdignity of work\b/g] },
	{ href: '/holy-spirit#gifts', label: 'Gifts of the Holy Spirit', patterns: [/\bgifts? of the (?:holy )?spirit\b/g, /\bseven gifts\b/g] },
	{ href: '/holy-spirit#fruits', label: 'Fruits of the Holy Spirit', patterns: [/\bfruits? of the (?:holy )?spirit\b/g] },
	// Scripture, Tradition, and the Church
	{ href: '/bible/how-the-bible-was-formed', label: 'How the Bible was formed', patterns: [/\bdeuterocanonical\b/g, /\bseptuagint\b/g, /\bvulgate\b/g, /\bcanon of scripture\b/g] },
	{ href: '/bible-and-tradition', label: 'The Bible and Catholic Tradition', patterns: [/\bsacred tradition\b/g, /\bmagisterium\b/g] },
	{ href: '/the-church', label: 'The Catholic Church', patterns: [/\bapostolic succession\b/g, /\bpapacy\b/g, /\bfour marks\b/g, /\becumenism\b/g] },
	{ href: '/church-history', label: 'Catholic Church History', patterns: [/\bcouncil of trent\b/g, /\bvatican ii\b/g, /\bsecond vatican council\b/g, /\bgreat schism\b/g, /\breformation\b/g, /\becumenical councils?\b/g] },
	{ href: '/compare-christian-traditions', label: 'Compare Christian Traditions', patterns: [/\borthodox\b/g, /\bprotestants?\b/g, /\banglicans?\b/g] },
	{ href: '/parables', label: 'Parables of Jesus', patterns: [/\bparables?\b/g] },
	{ href: '/living-the-faith', label: 'Living the Catholic Faith', patterns: [/\bocia\b/g, /\bfirst (?:holy )?communion\b/g, /\bvocations?\b/g] },
];

/** Mentions needed before a topic counts as discussed on a page */
const MIN_MENTIONS = 2;
const MAX_TOPICS = 6;

const normalise = (href: string) => stripBase(href.split('#')[0]).replace(/\/$/, '') || '/';

/**
 * Topics a page discusses, most-mentioned first. Leaves out the page itself,
 * its parent section, and any pages it already links to (`exclude`).
 */
export function getRelatedTopics(currentPath: string, text: string, exclude: string[] = []): TopicLink[] {
	const here = normalise(currentPath);
	const skip = new Set(exclude.map(normalise));
	const lower = text.toLowerCase();

	return topics
		.filter((t) => t.href !== here && !here.startsWith(`${t.href}/`) && !skip.has(t.href))
		.map((t) => ({ topic: t, count: t.patterns.reduce((n, p) => n + (lower.match(p)?.length ?? 0), 0) }))
		.filter((t) => t.count >= MIN_MENTIONS)
		.sort((a, b) => b.count - a.count)
		.slice(0, MAX_TOPICS)
		.map(({ topic }) => ({ href: topic.href, label: topic.label }));
}
