/**
 * Catechism paragraphs, Scripture citations, and official Church documents
 * shown in the "References" block of every article (see TrustPanel).
 *
 * Section defaults apply to every article in a section; per-article entries
 * add to them. Scripture citations already stored on an article (such as a
 * parable's Gospel reference) are picked up automatically.
 */
import { bibleBooks } from '../data/bible';
import { disciples } from '../data/disciples';
import { miracles } from '../data/miracles';
import { parables } from '../data/parables';
import { sacramentGuides } from '../data/sacraments';
import { stripBase } from './paths';

export interface ChurchDocument {
	label: string;
	url: string;
}

/** Official documents, linked to their text on vatican.va (verified links only). */
export const churchDocuments = {
	catechism: {
		label: 'Catechism of the Catholic Church',
		url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM',
	},
	canonLaw: {
		label: 'Code of Canon Law (1983)',
		url: 'https://www.vatican.va/archive/cod-iuris-canonici/cic_index_en.html',
	},
	deiVerbum: {
		label: 'Second Vatican Council, Dei Verbum (1965)',
		url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html',
	},
	lumenGentium: {
		label: 'Second Vatican Council, Lumen Gentium (1964)',
		url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html',
	},
	sacrosanctumConcilium: {
		label: 'Second Vatican Council, Sacrosanctum Concilium (1963)',
		url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_en.html',
	},
	gaudiumEtSpes: {
		label: 'Second Vatican Council, Gaudium et Spes (1965)',
		url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651207_gaudium-et-spes_en.html',
	},
	unitatisRedintegratio: {
		label: 'Second Vatican Council, Unitatis Redintegratio (1964)',
		url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_unitatis-redintegratio_en.html',
	},
	orientaliumEcclesiarum: {
		label: 'Second Vatican Council, Orientalium Ecclesiarum (1964)',
		url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_orientalium-ecclesiarum_en.html',
	},
	nostraAetate: {
		label: 'Second Vatican Council, Nostra Aetate (1965)',
		url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decl_19651028_nostra-aetate_en.html',
	},
	verbumDomini: {
		label: 'Benedict XVI, Verbum Domini (2010)',
		url: 'https://www.vatican.va/content/benedict-xvi/en/apost_exhortations/documents/hf_ben-xvi_exh_20100930_verbum-domini.html',
	},
	fidesEtRatio: {
		label: 'John Paul II, Fides et Ratio (1998)',
		url: 'https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_14091998_fides-et-ratio.html',
	},
	evangeliumVitae: {
		label: 'John Paul II, Evangelium Vitae (1995)',
		url: 'https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_25031995_evangelium-vitae.html',
	},
	laboremExercens: {
		label: 'John Paul II, Laborem Exercens (1981)',
		url: 'https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_14091981_laborem-exercens.html',
	},
	sollicitudoReiSocialis: {
		label: 'John Paul II, Sollicitudo Rei Socialis (1987)',
		url: 'https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_30121987_sollicitudo-rei-socialis.html',
	},
	utUnumSint: {
		label: 'John Paul II, Ut Unum Sint (1995)',
		url: 'https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_25051995_ut-unum-sint.html',
	},
	familiarisConsortio: {
		label: 'John Paul II, Familiaris Consortio (1981)',
		url: 'https://www.vatican.va/content/john-paul-ii/en/apost_exhortations/documents/hf_jp-ii_exh_19811122_familiaris-consortio.html',
	},
	ecclesiaDeEucharistia: {
		label: 'John Paul II, Ecclesia de Eucharistia (2003)',
		url: 'https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html',
	},
	rosariumVirginisMariae: {
		label: 'John Paul II, Rosarium Virginis Mariae (2002)',
		url: 'https://www.vatican.va/content/john-paul-ii/en/apost_letters/2002/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae.html',
	},
	mysteriumFidei: {
		label: 'Paul VI, Mysterium Fidei (1965)',
		url: 'https://www.vatican.va/content/paul-vi/en/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html',
	},
	rerumNovarum: {
		label: 'Leo XIII, Rerum Novarum (1891)',
		url: 'https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html',
	},
	quadragesimoAnno: {
		label: 'Pius XI, Quadragesimo Anno (1931)',
		url: 'https://www.vatican.va/content/pius-xi/en/encyclicals/documents/hf_p-xi_enc_19310515_quadragesimo-anno.html',
	},
	munificentissimusDeus: {
		label: 'Pius XII, Munificentissimus Deus (1950)',
		url: 'https://www.vatican.va/content/pius-xii/en/apost_constitutions/documents/hf_p-xii_apc_19501101_munificentissimus-deus.html',
	},
	ineffabilisDeus: {
		label: 'Pius IX, Ineffabilis Deus (1854)',
		url: 'https://www.papalencyclicals.net/pius09/p9ineff.htm',
	},
	laudatoSi: {
		label: 'Francis, Laudato Si’ (2015)',
		url: 'https://www.vatican.va/content/francesco/en/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html',
	},
	amorisLaetitia: {
		label: 'Francis, Amoris Laetitia (2016)',
		url: 'https://www.vatican.va/content/francesco/en/apost_exhortations/documents/papa-francesco_esortazione-ap_20160319_amoris-laetitia.html',
	},
	dominusIesus: {
		label: 'Congregation for the Doctrine of the Faith, Dominus Iesus (2000)',
		url: 'https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_20000806_dominus-iesus_en.html',
	},
	dignitasInfinita: {
		label: 'Dicastery for the Doctrine of the Faith, Dignitas Infinita (2024)',
		url: 'https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_ddf_doc_20240402_dignitas-infinita_en.html',
	},
	supernaturalPhenomena: {
		label: 'Dicastery for the Doctrine of the Faith, Norms for Discerning Alleged Supernatural Phenomena (2024)',
		url: 'https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_ddf_doc_20240517_norme-fenomeni-soprannaturali_en.html',
	},
	socialDoctrineCompendium: {
		label: 'Compendium of the Social Doctrine of the Church (2004)',
		url: 'https://www.vatican.va/roman_curia/pontifical_councils/justpeace/documents/rc_pc_justpeace_doc_20060526_compendio-dott-soc_en.html',
	},
} satisfies Record<string, ChurchDocument>;

export type DocumentKey = keyof typeof churchDocuments;

export interface ReferenceSet {
	/** Catechism paragraphs, e.g. "CCC 1322–1419" */
	catechism?: string;
	/** Scripture citations, one per entry */
	scripture?: string[];
	documents?: DocumentKey[];
}

export interface ResolvedReferences {
	catechism?: string;
	scripture: { label: string; url: string }[];
	documents: ChurchDocument[];
}

/** Link a Scripture citation to the RSV Catholic Edition on Bible Gateway. */
export function scriptureUrl(citation: string): string {
	const query = citation.replace(/[–—]/g, '-').trim();
	return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(query)}&version=RSVCE`;
}

/** Split "Matthew 5:3–10; Luke 6:20" into separate citations, carrying the book forward. */
export function splitCitations(text: string): string[] {
	let book = '';
	return text
		.split(';')
		.map((part) => part.trim())
		.filter(Boolean)
		.map((part) => {
			const match = part.match(/^((?:[1-3]\s)?[A-Z][A-Za-z.’' ]*?)\s+\d/);
			if (match) {
				book = match[1];
				return part;
			}
			return /^\d/.test(part) && book ? `${book} ${part}` : part;
		});
}

const sectionDefaults: Record<string, ReferenceSet> = {
	bible: { catechism: 'CCC 101–141', documents: ['deiVerbum', 'verbumDomini'] },
	saints: { catechism: 'CCC 828, 946–962, 2683–2684', scripture: ['Hebrews 12:1'], documents: ['lumenGentium'] },
	disciples: { catechism: 'CCC 551–553, 857–862', documents: ['lumenGentium'] },
	sacraments: { catechism: 'CCC 1113–1134', documents: ['sacrosanctumConcilium', 'canonLaw'] },
	parables: { catechism: 'CCC 546', documents: ['deiVerbum'] },
	miracles: { catechism: 'CCC 547–550', documents: ['deiVerbum'] },
	'eucharistic-miracles': {
		catechism: 'CCC 67, 1373–1381',
		scripture: ['John 6:51–58', '1 Corinthians 11:23–29'],
		documents: ['mysteriumFidei', 'ecclesiaDeEucharistia', 'supernaturalPhenomena'],
	},
	'marian-apparitions': {
		catechism: 'CCC 66–67, 971',
		documents: ['supernaturalPhenomena', 'lumenGentium'],
	},
	prayers: { catechism: 'CCC 2558–2565' },
	rosary: { catechism: 'CCC 971, 2678, 2708', scripture: ['Luke 1:26–38', 'Luke 2:19'], documents: ['rosariumVirginisMariae'] },
	mass: { catechism: 'CCC 1345–1355', scripture: ['Luke 24:13–35', '1 Corinthians 11:23–26'], documents: ['sacrosanctumConcilium'] },
	'holy-trinity': { catechism: 'CCC 232–267', scripture: ['Matthew 28:19', '2 Corinthians 13:14'] },
};

const sacramentRefs: Record<string, ReferenceSet> = {
	baptism: { catechism: 'CCC 1213–1284', scripture: ['Matthew 28:19', 'John 3:5', 'Romans 6:3–4'] },
	confirmation: { catechism: 'CCC 1285–1321', scripture: ['Acts 8:14–17', 'Acts 2:1–4'] },
	eucharist: {
		catechism: 'CCC 1322–1419',
		scripture: ['John 6:51–58', 'Luke 22:19–20', '1 Corinthians 11:23–29'],
		documents: ['ecclesiaDeEucharistia'],
	},
	penance: { catechism: 'CCC 1422–1498', scripture: ['John 20:21–23', 'Luke 15:11–32'] },
	'anointing-of-the-sick': { catechism: 'CCC 1499–1532', scripture: ['James 5:14–15', 'Mark 6:13'] },
	'holy-orders': { catechism: 'CCC 1536–1600', scripture: ['Luke 22:19', '1 Timothy 4:14', '2 Timothy 1:6'], documents: ['lumenGentium'] },
	matrimony: {
		catechism: 'CCC 1601–1666',
		scripture: ['Matthew 19:4–6', 'Ephesians 5:31–32'],
		documents: ['familiarisConsortio', 'amorisLaetitia'],
	},
};

/** Articles with references of their own, keyed by "section/slug". */
const articleRefs: Record<string, ReferenceSet> = {
	'bible/how-the-bible-was-formed': { catechism: 'CCC 120, 138', scripture: ['2 Timothy 3:16', '2 Peter 1:20–21'] },
	'saints/blessed-virgin-mary': {
		catechism: 'CCC 484–511, 963–975',
		scripture: ['Luke 1:26–56', 'John 19:25–27'],
		documents: ['munificentissimusDeus', 'ineffabilisDeus'],
	},
	'saints/st-joseph': { scripture: ['Matthew 1:18–25', 'Matthew 2:13–23', 'Luke 2:41–52'] },
	'saints/path-to-sainthood': { catechism: 'CCC 828, 956–957, 2030' },
	'prayers/our-father': { catechism: 'CCC 2759–2865', scripture: ['Matthew 6:9–13', 'Luke 11:2–4'] },
	'prayers/hail-mary': { catechism: 'CCC 2676–2678', scripture: ['Luke 1:28', 'Luke 1:42'] },
	'rosary/origin': { catechism: 'CCC 971, 2708' },
	'mass/order-of-mass': { catechism: 'CCC 1345–1390' },
	'miracles/shroud-of-turin': { catechism: 'CCC 1674–1676', scripture: ['Mark 15:46', 'John 20:5–7'] },
	'miracles/veil-of-veronica': { catechism: 'CCC 1674–1676', scripture: ['Luke 23:27–31'] },
	'holy-trinity/old-testament': { catechism: 'CCC 199–231', scripture: ['Genesis 1:26', 'Genesis 18:1–15', 'Isaiah 6:3'] },
	'holy-trinity/new-testament': { catechism: 'CCC 238–248', scripture: ['Matthew 3:16–17', 'John 14:16–17'] },
};

/** Scripture citations stored on the article data itself. */
function itemScripture(sectionKey: string, slug: string): string[] {
	const find = <T extends { slug: string }>(items: T[]) => items.find((item) => item.slug === slug);
	switch (sectionKey) {
		case 'parables':
			return splitCitations(find(parables)?.gospelReference ?? '');
		case 'miracles':
			return splitCitations(find(miracles)?.gospelReference ?? '');
		case 'disciples':
			return splitCitations(find(disciples)?.gospelReference ?? '');
		case 'bible': {
			const book = find(bibleBooks);
			return book ? [book.title] : [];
		}
		default:
			return [];
	}
}

function merge(...sets: (ReferenceSet | undefined)[]): ReferenceSet {
	const result: ReferenceSet = { scripture: [], documents: [] };
	const catechism: string[] = [];
	for (const set of sets) {
		if (!set) continue;
		if (set.catechism) catechism.push(set.catechism.replace(/^CCC\s*/, ''));
		result.scripture!.push(...(set.scripture ?? []));
		result.documents!.push(...(set.documents ?? []));
	}
	// A specific article's paragraphs replace the section default.
	if (catechism.length) result.catechism = `CCC ${catechism[catechism.length - 1]}`;
	return result;
}

/** Resolve the references for an article from its section and URL. */
export function getArticleReferences(sectionKey: string, currentPath: string): ResolvedReferences {
	const parts = stripBase(currentPath).split('/').filter(Boolean);
	const slug = parts[parts.length - 1] ?? '';
	const isGuide = sectionKey === 'sacraments' && parts.includes('guides');

	let set: ReferenceSet;
	if (sectionKey === 'sacraments') {
		const related = isGuide
			? (sacramentGuides.find((g) => g.slug === slug)?.sacraments ?? [])
			: [slug];
		set = merge(sectionDefaults.sacraments, ...related.map((s) => sacramentRefs[s]));
		if (related.length > 1) {
			set.catechism = `CCC ${related.map((s) => sacramentRefs[s]?.catechism?.replace(/^CCC\s*/, '')).filter(Boolean).join(', ')}`;
		}
	} else {
		const article = articleRefs[`${sectionKey}/${slug}`];
		set = merge(sectionDefaults[sectionKey], article);
		// An article's own citations come first and replace the section's general ones.
		const own = [...itemScripture(sectionKey, slug), ...(article?.scripture ?? [])];
		set.scripture = own.length ? own : (sectionDefaults[sectionKey]?.scripture ?? []);
	}

	const scripture = [...new Set(set.scripture ?? [])];
	const documents = [...new Set(['catechism' as DocumentKey, ...(set.documents ?? [])])];
	return {
		catechism: set.catechism,
		scripture: scripture.map((c) => ({ label: c, url: scriptureUrl(c) })),
		documents: documents.map((key) => churchDocuments[key]),
	};
}

/** Link the documents named in a free-text reference line such as "CCC 74–83; Dei Verbum 7–10". */
export function documentsMentionedIn(text: string): ChurchDocument[] {
	const names: [RegExp, DocumentKey][] = [
		[/Dei Verbum/, 'deiVerbum'],
		[/Lumen Gentium/, 'lumenGentium'],
		[/Sacrosanctum Concilium/, 'sacrosanctumConcilium'],
		[/Gaudium et Spes/, 'gaudiumEtSpes'],
		[/Unitatis Redintegratio/, 'unitatisRedintegratio'],
		[/Orientalium Ecclesiarum/, 'orientaliumEcclesiarum'],
		[/Fides et Ratio/, 'fidesEtRatio'],
		[/Evangelium Vitae/, 'evangeliumVitae'],
		[/Laborem Exercens/, 'laboremExercens'],
		[/Sollicitudo Rei Socialis/, 'sollicitudoReiSocialis'],
		[/Ut Unum Sint/, 'utUnumSint'],
		[/Familiaris Consortio/, 'familiarisConsortio'],
		[/Rerum Novarum/, 'rerumNovarum'],
		[/Quadragesimo Anno/, 'quadragesimoAnno'],
		[/Munificentissimus Deus/, 'munificentissimusDeus'],
		[/Ineffabilis Deus/, 'ineffabilisDeus'],
		[/Laudato Si/, 'laudatoSi'],
		[/Amoris Laetitia/, 'amorisLaetitia'],
		[/Dominus Iesus/, 'dominusIesus'],
		[/Dignitas Infinita/, 'dignitasInfinita'],
		[/Code of Canon Law|Canon Law/, 'canonLaw'],
	];
	const found = names.filter(([rx]) => rx.test(text)).map(([, key]) => churchDocuments[key]);
	if (/CCC/.test(text)) found.unshift(churchDocuments.catechism);
	return [...new Set(found)];
}
