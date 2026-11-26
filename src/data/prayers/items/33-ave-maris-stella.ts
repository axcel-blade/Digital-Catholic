import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'ave-maris-stella',
	title: 'Ave Maris Stella',
	alsoKnownAs: 'Hail, Star of the Sea',
	excerpt: 'Ancient Latin hymn to the Virgin Mary, sung at Vespers on her feasts, honouring her as the Star of the Sea who guides us to Christ.',
	text: 'Hail, star of the sea, loving Mother of God, and ever Virgin, happy gate of heaven. Receiving that “Ave” from the mouth of Gabriel, establish us in peace, reversing the name of “Eva.” Loose the bonds of sinners, bring light to the blind, drive away our evils, ask for all good things. Show yourself to be a mother: through you may he receive our prayers who, born for us, chose to be your Son. O Virgin without equal, gentle above all others, make us, freed from our sins, gentle and pure. Grant us a pure life, prepare a safe way, so that, seeing Jesus, we may rejoice together for ever. Praise be to God the Father, glory to Christ most high, and to the Holy Spirit: one honour to the Three. Amen.',
	relatedSaint: 'blessed-virgin-mary',
	relatedGuideTopic: { guide: 'church-history', slug: 'the-marian-monogram-symbol' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Ave maris stella', url: 'https://en.wikipedia.org/wiki/Ave_maris_stella' },
		{ label: 'Luke 1:26–38 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/luke/1' },
	],
	sections: [
		{
			heading: 'What is the Ave Maris Stella?',
			paragraphs: [
				'The Ave Maris Stella (“Hail, Star of the Sea”) is a Latin hymn to the Virgin Mary that appears in manuscripts from at least the ninth century; its author is unknown. The title “Star of the Sea” pictures Mary as the star that guides sailors home through dark and stormy seas, leading us to Christ. The English given above is a close, literal translation of the Latin, made for this page.',
				'The hymn contains a famous play on words: Gabriel’s greeting “Ave” reverses the name of “Eva” (Eve). Where Eve’s disobedience brought sin, Mary’s “yes” opened the way to salvation, so that she becomes the “happy gate of heaven.”',
			],
		},
		{
			heading: 'The Latin text',
			paragraphs: [
				'Ave maris stella, Dei mater alma, atque semper virgo, felix caeli porta. Sumens illud Ave Gabrielis ore, funda nos in pace, mutans Evae nomen. Solve vincla reis, profer lumen caecis, mala nostra pelle, bona cuncta posce. Monstra te esse matrem, sumat per te preces, qui pro nobis natus tulit esse tuus. Virgo singularis, inter omnes mitis, nos culpis solutos mites fac et castos. Vitam praesta puram, iter para tutum, ut videntes Iesum semper collaetemur. Sit laus Deo Patri, summo Christo decus, Spiritui Sancto, tribus honor unus. Amen.',
				'It is sung at Vespers on feasts of Mary in the Liturgy of the Hours and has been set to music by composers such as Monteverdi, Dufay and Grieg.',
			],
		},
	],
};

export default prayer;
