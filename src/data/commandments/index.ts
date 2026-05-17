import { loadCollectionByNumber } from '../lib/loadCollection';
import type { Commandment } from './types';

export { commandmentsIntro } from './intro';
export type * from './types';

const modules = import.meta.glob('./items/*.ts', { eager: true });
export const commandments = loadCollectionByNumber<Commandment>(modules);
