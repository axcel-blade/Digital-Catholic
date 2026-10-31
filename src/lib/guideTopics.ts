/**
 * Resolve a `{ guide, slug }` reference to the article it points at, for both
 * guides in src/data/guides and the Core Beliefs collection (which shares the
 * guide topic shape but lives outside src/data/guides).
 */
import { getGuide } from '../data/guides';
import { getGuidePage } from '../data/guides/pages';
import { coreBeliefTopics, coreBeliefsPage } from '../data/coreBeliefs';
import { slugify } from './article';

export interface GuideTopicRef {
	guide: string;
	slug: string;
}

export interface ResolvedGuideTopic {
	/** Article path without the site base */
	path: string;
	title: string;
	summary: string;
	label: string;
}

export function resolveGuideTopic(ref: GuideTopicRef): ResolvedGuideTopic | undefined {
	const [topics, page] =
		ref.guide === 'core-beliefs'
			? [coreBeliefTopics, coreBeliefsPage]
			: [getGuide(ref.guide).topics, getGuidePage(ref.guide)];
	const topic = topics.find((t) => slugify(t.title) === ref.slug);
	if (!topic) return undefined;
	return { path: `${page.articleBase}/${ref.slug}`, title: topic.title, summary: topic.summary, label: page.label };
}
