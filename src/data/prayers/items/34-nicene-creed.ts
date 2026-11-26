import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'nicene-creed',
	title: 'The Nicene Creed',
	alsoKnownAs: 'Niceno-Constantinopolitan Creed; Credo',
	excerpt: 'The great profession of faith of the Councils of Nicaea and Constantinople, recited at Sunday Mass by Catholics around the world.',
	text: 'I believe in one God, the Father Almighty, Maker of heaven and earth, and of all things visible and invisible. And in one Lord Jesus Christ, the only-begotten Son of God, born of the Father before all ages. God of God, Light of Light, true God of true God; begotten, not made; of one substance with the Father; by whom all things were made. Who for us men and for our salvation came down from heaven, and became incarnate by the Holy Spirit of the Virgin Mary, and was made man. He was crucified also for us, suffered under Pontius Pilate, and was buried. And on the third day He rose again according to the Scriptures; and ascended into heaven, and sits at the right hand of the Father. And He shall come again with glory to judge the living and the dead, and of His kingdom there shall be no end. And in the Holy Spirit, the Lord and Giver of life, who proceeds from the Father and the Son; who together with the Father and the Son is adored and glorified; who spoke by the Prophets. And in one, holy, catholic and apostolic Church. I confess one baptism for the forgiveness of sins. And I look for the resurrection of the dead, and the life of the world to come. Amen.',
	relatedGuideTopic: { guide: 'core-beliefs', slug: 'the-apostles-creed-and-the-nicene-creed' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Nicene Creed', url: 'https://en.wikipedia.org/wiki/Nicene_Creed' },
		{ label: 'Catechism of the Catholic Church, §§185–197 (The Creeds)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Nicene Creed?',
			paragraphs: [
				'The Nicene Creed is the profession of faith drawn up by the First Council of Nicaea in 325 and completed by the First Council of Constantinople in 381. Nicaea defended the full divinity of the Son against the teaching of Arius, declaring him “of one substance” (homoousios) with the Father; Constantinople added the fuller confession of faith in the Holy Spirit and the Church.',
				'The Catechism explains that this creed “draws its great authority from the fact that it stems from the first two ecumenical Councils” and that it remains common to all the great Churches of East and West to this day (CCC 195). The Latin Church later added the words “and the Son” (Filioque) to the line about the Holy Spirit.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'The Nicene Creed is recited or sung at Mass on Sundays and solemnities, after the homily. At the words “and by the Holy Spirit was incarnate of the Virgin Mary, and became man,” all bow, and on Christmas and the Annunciation they kneel. The Apostles’ Creed may be used instead, especially in Lent and Easter.',
				'The text above is a traditional, literal English rendering of the Latin creed. At Mass, Catholics in English-speaking countries use the official liturgical translation approved by their bishops, whose wording differs slightly.',
			],
		},
	],
};

export default prayer;
