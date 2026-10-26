/**
 * Artwork shown at the top of each guide, stored as `public/guides/{key}.jpg`.
 * Sources and licences are recorded in `public/guides/CREDITS.md`.
 */
export const guideImages: Record<string, { alt: string; caption: string }> = {
	'bible-and-tradition': {
		alt: 'St. Jerome, an elderly bald man in a red cloak, leaning over a table and writing in a large book beside a skull',
		caption: 'Caravaggio, Saint Jerome Writing (c. 1605–1606). Public domain.',
	},
	'the-church': {
		alt: 'Christ handing the keys of the kingdom to the kneeling St. Peter, surrounded by the apostles in a wide piazza before a domed temple',
		caption: 'Pietro Perugino, The Delivery of the Keys to St. Peter (1481–1482), Sistine Chapel. Public domain.',
	},
	'church-history': {
		alt: 'The bishops of the Council of Trent seated in rows in a great hall, facing the papal legates',
		caption: 'The Council of Trent, unknown artist. Public domain.',
	},
	apologetics: {
		alt: 'Christ enthroned in heaven with Mary, John the Baptist, and the saints, above Church Fathers and theologians gathered around an altar with the Blessed Sacrament',
		caption: 'Raphael, Disputation of the Holy Sacrament (1509–1510), Vatican. Public domain.',
	},
	'moral-teaching': {
		alt: 'A circular painting showing scenes of the seven deadly sins around the eye of God, with four smaller circles of death, judgement, heaven, and hell in the corners',
		caption: 'Hieronymus Bosch or follower, The Seven Deadly Sins and the Four Last Things (c. 1500), Prado. Public domain.',
	},
	'social-teaching': {
		alt: 'Three peasant women bending to glean leftover stalks of wheat in a harvested field',
		caption: 'Jean-François Millet, The Gleaners (1857), Musée d’Orsay. Public domain.',
	},
	'living-the-faith': {
		alt: 'A procession of young girls in white veils walking to their First Communion through a village street',
		caption: 'Jules Breton, The First Communicants at Courrières (1884), Petit Palais. Public domain.',
	},
	'mary-and-the-saints': {
		alt: 'The Virgin Mary in white and blue robes rising on clouds, surrounded by cherubs, with her hands crossed on her breast',
		caption: 'Bartolomé Esteban Murillo, The Immaculate Conception of Los Venerables (1678), Prado. Public domain.',
	},
	'prayer-and-devotions': {
		alt: 'A farmer and his wife standing with heads bowed in prayer in a field at dusk, a church spire on the horizon',
		caption: 'Jean-François Millet, The Angelus (1857–1859), Musée d’Orsay. Public domain.',
	},
	'liturgy-and-worship': {
		alt: 'The open Ghent Altarpiece: God enthroned between Mary and John the Baptist above the Lamb of God on an altar adored by saints, angels, and pilgrims',
		caption: 'Jan and Hubert van Eyck, The Ghent Altarpiece (1432), St Bavo’s Cathedral, Ghent. Public domain.',
	},
};
