import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 5,
	title: 'Mortal and venial sin',
	summary: 'Sin is distinguished by its gravity: mortal sin destroys charity in the heart, venial sin wounds it.',
	scripture: '1 John 5:16–17; Galatians 5:19–21',
	catechism: 'CCC 1854–1864',
	meaning: [
		'Mortal sin is a grave violation of God’s law that turns a person away from God. Three conditions must all be present: the matter is grave; the person has full knowledge of its sinfulness; and the person gives deliberate and complete consent. Mortal sin cuts us off from sanctifying grace and, if unrepented, from eternal life. It is ordinarily forgiven through the Sacrament of Penance.',
		'Venial sin occurs when the matter is less serious, or when a grave matter is chosen without full knowledge or complete consent. It weakens charity and disposes us to further sin but does not break our friendship with God. Venial sins are forgiven through sincere contrition, prayer, works of charity, and the Eucharist, and confessing them is strongly recommended.',
	],
	points: {
		title: 'The three conditions for mortal sin',
		items: [
			'Grave matter',
			'Full knowledge',
			'Deliberate and complete consent',
		],
	},
	links: [
		{ href: '/sacraments/penance', label: 'The Sacrament of Penance' },
	],
	image: { alt: 'Eve reaching for the forbidden fruit beside Adam, as a lizard-like serpent watches from the tree', caption: 'Hugo van der Goes, The Fall of Man (c. 1479), Kunsthistorisches Museum, Vienna. Public domain.' },
};

export default topic;
