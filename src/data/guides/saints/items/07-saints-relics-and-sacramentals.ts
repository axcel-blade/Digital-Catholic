import type { GuideTopic } from '../../types';

const topic: GuideTopic = {
	number: 7,
	title: 'Saints, relics and sacramentals',
	summary: 'Holy objects and the remains of saints remind us of God’s grace and dispose us to receive it.',
	scripture: '2 Kings 13:20–21; Acts 19:11–12; Mark 5:27–29',
	catechism: 'CCC 1667–1679',
	meaning: [
		'Relics are the physical remains of a saint (first-class), objects they used (second-class), or items touched to a first-class relic (third-class). Their veneration goes back to the earliest martyrs, whose tombs became places of prayer and the sites of altars. Scripture records healings through the bones of Elisha and cloths that had touched St. Paul.',
		'Sacramentals are sacred signs instituted by the Church—blessings, holy water, rosaries, medals, scapulars, crucifixes, and blessed candles. Unlike the sacraments, they do not confer grace by themselves; they prepare us to receive grace and help us sanctify everyday life. They are not charms: their value depends on faith and prayer.',
	],
	links: [
		{ href: '/saints/path-to-sainthood', label: 'The path to sainthood' },
	],
	image: { alt: 'A procession with the relic of the True Cross on a Venetian canal by the Rialto bridge, crowded with gondolas', caption: 'Vittore Carpaccio, The Miracle of the Relic of the True Cross at the Rialto (1496), Gallerie dell’Accademia, Venice. Public domain.' },
};

export default topic;
