import { newTestamentBooks } from './books/new-testament';
import { oldTestamentBooks } from './books/old-testament';
import type { BibleBook, BibleCategory, BibleTestament } from './types';

export {
	bibleCategoryLabels,
	newTestamentCategoryOrder,
	oldTestamentCategoryOrder,
	testamentLabels,
} from './categories';
export { bibleIntro } from './intro';
export type * from './types';

export const bibleBooks: BibleBook[] = [...oldTestamentBooks, ...newTestamentBooks];

export function getBibleBook(slug: string): BibleBook | undefined {
	return bibleBooks.find((book) => book.slug === slug);
}

export function getBibleBooksByTestament(testament: BibleTestament): BibleBook[] {
	return bibleBooks.filter((book) => book.testament === testament);
}

export function getBibleBooksByCategory(
	testament: BibleTestament,
	category: BibleCategory
): BibleBook[] {
	return bibleBooks.filter((book) => book.testament === testament && book.category === category);
}
