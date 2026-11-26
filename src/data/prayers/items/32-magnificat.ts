import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'magnificat',
	title: 'The Magnificat',
	alsoKnownAs: 'Canticle of Mary; My soul doth magnify the Lord',
	excerpt: 'Mary’s song of praise from the Gospel of Luke, prayed every evening by the Church at Vespers.',
	text: 'My soul doth magnify the Lord. And my spirit hath rejoiced in God my Saviour. Because he hath regarded the humility of his handmaid: for behold from henceforth all generations shall call me blessed. Because he that is mighty hath done great things to me; and holy is his name. And his mercy is from generation unto generations, to them that fear him. He hath shewed might in his arm: he hath scattered the proud in the conceit of their heart. He hath put down the mighty from their seat, and hath exalted the humble. He hath filled the hungry with good things; and the rich he hath sent empty away. He hath received Israel his servant, being mindful of his mercy: As he spoke to our fathers, to Abraham and to his seed for ever. Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.',
	relatedSaint: 'blessed-virgin-mary',
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Luke 1:46–55 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/luke/1' },
		{ label: 'Wikipedia: Magnificat', url: 'https://en.wikipedia.org/wiki/Magnificat' },
		{ label: 'Catechism of the Catholic Church, §2619 (The Canticle of Mary)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Magnificat?',
			paragraphs: [
				'The Magnificat is the song Mary sang when she visited her cousin Elizabeth, after Elizabeth greeted her as “the mother of my Lord” (Luke 1:43, 46–55). Its name comes from its first word in Latin, “Magnificat,” meaning “magnifies.” The text given here is from the public-domain Douay-Rheims translation of the Bible.',
				'The song echoes the Old Testament, especially the song of Hannah (1 Samuel 2:1–10). Mary praises God for looking on her lowliness, and for turning the world’s values upside down: lifting up the humble and filling the hungry, while scattering the proud. The Catechism calls it the song both of the Mother of God and of the Church (CCC 2619).',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'The Church sings or recites the Magnificat every evening at Vespers (Evening Prayer) in the Liturgy of the Hours, and it has been set to music by many composers. It is also prayed privately, especially on Marian feasts and the feast of the Visitation, 31 May.',
				'Praying it joins us to Mary’s joy and gratitude, and to her trust that God keeps his promises.',
			],
		},
	],
};

export default prayer;
