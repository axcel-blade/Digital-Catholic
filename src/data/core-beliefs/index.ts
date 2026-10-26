import { loadCollectionByNumber } from '../lib/loadCollection';
import type { CoreBelief } from './types';

export { coreBeliefsIntro } from './intro';
export type * from './types';

const modules = import.meta.glob('./items/*.ts', { eager: true });
export const coreBeliefs = loadCollectionByNumber<CoreBelief>(modules);
