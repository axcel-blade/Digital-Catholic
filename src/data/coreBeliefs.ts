import type { GuideTopic } from './guides/types';
import type { GuidePageConfig } from './guides/pages';
import { coreBeliefs } from './core-beliefs/index';

export * from './core-beliefs/index';

/** Core beliefs in the shape of guide topics, so each can be its own article */
export const coreBeliefTopics: GuideTopic[] = coreBeliefs.map(({ link, ...belief }) => ({
	...belief,
	links: link ? [link] : undefined,
}));

export const coreBeliefsPage: GuidePageConfig = {
	href: '/core-beliefs',
	articleBase: '/core-beliefs',
	sectionKey: 'learn',
	crumbs: [{ label: 'Core Beliefs', href: '/core-beliefs' }],
	label: 'Core belief',
};
