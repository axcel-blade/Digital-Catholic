import { withBase } from './paths';
import { SITE } from './seo';

/** Display date for legal documents; keep in sync with content revisions. */
export const LEGAL_LAST_UPDATED = '12 November 2026';

/** ISO date for `<time datetime>` attributes. */
export const LEGAL_LAST_UPDATED_ISO = '2026-11-12';

export interface LegalPageMeta {
	slug: string;
	title: string;
	/** Shorter label for footer and in-section nav */
	navLabel: string;
	description: string;
	summary: string;
}

export const legalPages: readonly LegalPageMeta[] = [
	{
		slug: 'terms-of-use',
		title: 'Terms of Use',
		navLabel: 'Terms of Use',
		description:
			'Terms governing use of Digital Catholic, including permitted use, intellectual property, liability limits under Australian law, and how to contact the maintainer.',
		summary: 'Acceptance of terms, permitted use, responsibilities, and liability.',
	},
	{
		slug: 'privacy-policy',
		title: 'Privacy Policy',
		navLabel: 'Privacy Policy',
		description:
			'How Digital Catholic handles visitor information, hosting logs, contact emails, and the absence of analytics or tracking cookies on this static site.',
		summary: 'What information may be handled when you visit or contact us.',
	},
	{
		slug: 'disclaimer',
		title: 'Religious & Educational Disclaimer',
		navLabel: 'Religious Disclaimer',
		description:
			'Digital Catholic is an independent Catholic educational and devotional resource. It is not an official Church publication and does not replace Magisterial teaching or pastoral care.',
		summary: 'Independence, purpose, and limits of educational content.',
	},
	{
		slug: 'copyright',
		title: 'Copyright & Intellectual Property Policy',
		navLabel: 'Copyright Policy',
		description:
			'Copyright and attribution for Digital Catholic content, third-party images, Scripture translations, prayers, and how to report infringement or request correction.',
		summary: 'Ownership, attribution, licences, and infringement reports.',
	},
	{
		slug: 'external-links',
		title: 'External Links Disclaimer',
		navLabel: 'External Links',
		description:
			'How Digital Catholic treats links to official Church and other third-party websites, including independence, accuracy, and privacy considerations.',
		summary: 'Third-party links and what they do—and do not—mean.',
	},
	{
		slug: 'corrections',
		title: 'Content Corrections & Copyright Requests',
		navLabel: 'Content Corrections',
		description:
			'How to report factual, theological, or liturgical concerns, missing attributions, and copyright complaints for Digital Catholic.',
		summary: 'Procedures for corrections, review, and copyright requests.',
	},
] as const;

export function getLegalPage(slug: string): LegalPageMeta | undefined {
	return legalPages.find((page) => page.slug === slug);
}

export function legalHref(slug?: string): string {
	if (!slug) return withBase('/legal');
	return withBase(`/legal/${slug}`);
}

export function legalContactMailto(subject: string): string {
	const params = new URLSearchParams({
		view: 'cm',
		fs: '1',
		to: SITE.contactEmail,
		su: subject,
	});
	return `https://mail.google.com/mail/?${params.toString()}`;
}
