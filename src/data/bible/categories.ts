import type { BibleCategory, BibleTestament } from './types';

export const bibleCategoryLabels: Record<BibleCategory, string> = {
	pentateuch: 'Pentateuch',
	historical: 'Historical Books',
	wisdom: 'Wisdom Books',
	prophetic: 'Prophetic Books',
	gospels: 'Gospels',
	acts: 'Acts of the Apostles',
	pauline: 'Letters of St. Paul',
	'catholic-epistles': 'Catholic Epistles',
	apocalyptic: 'Apocalyptic',
};

export const oldTestamentCategoryOrder: BibleCategory[] = [
	'pentateuch',
	'historical',
	'wisdom',
	'prophetic',
];

export const newTestamentCategoryOrder: BibleCategory[] = [
	'gospels',
	'acts',
	'pauline',
	'catholic-epistles',
	'apocalyptic',
];

export const testamentLabels: Record<BibleTestament, string> = {
	old: 'Old Testament',
	new: 'New Testament',
};
