import { loadCollection } from '../lib/loadCollection';
import type { NewTestamentPerson, NewTestamentRole } from './types';

export { newTestamentPeopleIntro } from './intro';
export type * from './types';

const modules = import.meta.glob('./items/*.ts', { eager: true });
export const newTestamentPeople = loadCollection<NewTestamentPerson>(modules).sort(
	(a, b) => a.order - b.order
);

export function getNewTestamentPerson(slug: string) {
	return newTestamentPeople.find((p) => p.slug === slug);
}

export function getNewTestamentPersonImageAlt(title: string): string {
	return `Sacred art depicting ${title}`;
}

export const newTestamentRoleLabels: Record<NewTestamentRole, string> = {
	'holy-family': 'Holy Family & infancy',
	forerunner: 'Forerunner',
	'woman-disciple': 'Woman disciple',
	witness: 'Witness of the Gospel',
	apostle: 'Apostle',
	evangelist: 'Evangelist',
	martyr: 'Martyr',
	coworker: 'Coworker in the Gospel',
};

export const newTestamentIndexGroups: {
	id: string;
	title: string;
	roles: NewTestamentRole[];
}[] = [
	{ id: 'holy-family', title: 'Holy Family and infancy', roles: ['holy-family'] },
	{ id: 'forerunner', title: 'Forerunner of Christ', roles: ['forerunner'] },
	{ id: 'women', title: 'Women of the Gospel', roles: ['woman-disciple'] },
	{ id: 'witnesses', title: 'Witnesses and friends of Jesus', roles: ['witness'] },
	{ id: 'apostles-evangelists', title: 'Apostles and evangelists', roles: ['apostle', 'evangelist'] },
	{ id: 'early-church', title: 'Early Church', roles: ['martyr', 'coworker'] },
];
