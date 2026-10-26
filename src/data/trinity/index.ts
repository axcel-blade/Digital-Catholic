import { loadCollectionByNumber } from '../lib/loadCollection';
import type { TrinityPerson } from './types';

export { trinityIntro } from './intro';
export { trinityScripture, trinityScriptureIntro } from './scripture';
export type * from './types';

const personModules = import.meta.glob('./persons/*.ts', { eager: true });

export const trinityPersons = loadCollectionByNumber<TrinityPerson>(personModules);
