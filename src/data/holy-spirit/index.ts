import { loadCollectionByNumber } from '../lib/loadCollection';
import type { SpiritFruit, SpiritGift } from './types';

export { fruitsIntro, giftsIntro } from './intro';
export type * from './types';

const giftModules = import.meta.glob('./gifts/*.ts', { eager: true });
const fruitModules = import.meta.glob('./fruits/*.ts', { eager: true });

export const spiritGifts = loadCollectionByNumber<SpiritGift>(giftModules);
export const spiritFruits = loadCollectionByNumber<SpiritFruit>(fruitModules);
