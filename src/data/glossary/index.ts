import type { GlossaryTerm } from './types';
import { glossaryTerms } from './terms';

export type * from './types';

export const glossaryIntro =
	'Catholic vocabulary can be unfamiliar, even to lifelong Catholics. This glossary explains key terms in plain language, with the Catechism paragraphs where each is taught and links to fuller explanations on this site.';

export const glossary: GlossaryTerm[] = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

/** Anchor id for a term, e.g. "term-apostolic-succession" */
export function termId(term: string): string {
	return `term-${term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
}
