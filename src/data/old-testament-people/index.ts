import { loadCollection } from '../lib/loadCollection';
import type { OldTestamentPerson, OldTestamentRole } from './types';

export { oldTestamentPeopleIntro } from './intro';
export type * from './types';

const modules = import.meta.glob('./items/*.ts', { eager: true });
export const oldTestamentPeople = loadCollection<OldTestamentPerson>(modules).sort(
	(a, b) => a.order - b.order
);

export function getOldTestamentPerson(slug: string) {
	return oldTestamentPeople.find((p) => p.slug === slug);
}

export function getOldTestamentPeopleByRole(role: OldTestamentRole) {
	return oldTestamentPeople.filter((p) => p.role === role);
}

export function getOldTestamentPersonImageAlt(title: string): string {
	return `Sacred art depicting ${title}`;
}

export const oldTestamentRoleLabels: Record<OldTestamentRole, string> = {
	patriarch: 'Patriarch',
	leader: 'Leader of Israel',
	judge: 'Judge',
	'woman-of-faith': 'Woman of faith',
	king: 'King of Israel',
	prophet: 'Prophet',
	'major-prophet': 'Major prophet',
	'minor-prophet': 'Minor prophet',
};

/** Index page groups — prophets share one heading. */
export const oldTestamentIndexGroups: {
	id: string;
	title: string;
	roles: OldTestamentRole[];
}[] = [
	{ id: 'patriarchs', title: 'Patriarchs', roles: ['patriarch'] },
	{ id: 'leaders', title: 'Leaders of Israel', roles: ['leader'] },
	{ id: 'judges', title: 'Judges', roles: ['judge'] },
	{ id: 'women', title: 'Women of the Bible', roles: ['woman-of-faith'] },
	{ id: 'kings', title: 'Kings of Israel', roles: ['king'] },
	{ id: 'prophets', title: 'Prophets', roles: ['prophet', 'major-prophet', 'minor-prophet'] },
];
