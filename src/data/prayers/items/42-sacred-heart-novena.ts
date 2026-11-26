import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'sacred-heart-novena',
	title: 'Novena to the Sacred Heart',
	alsoKnownAs: 'Efficacious Novena to the Sacred Heart of Jesus',
	excerpt: 'Novena of confident petition built on three promises of Jesus, traditionally linked with St. Margaret Mary and prayed daily by St. Padre Pio.',
	text: 'O my Jesus, You have said: “Truly I say to you, ask and it will be given you, seek and you will find, knock and it will be opened to you.” Behold, I knock, I seek and ask for the grace of (here name your request). Our Father… Hail Mary… Glory Be… Sacred Heart of Jesus, I place all my trust in You. O my Jesus, You have said: “Truly I say to you, if you ask anything of the Father in my name, he will give it to you.” Behold, in Your name, I ask the Father for the grace of (here name your request). Our Father… Hail Mary… Glory Be… Sacred Heart of Jesus, I place all my trust in You. O my Jesus, You have said: “Truly I say to you, heaven and earth will pass away, but my words will not pass away.” Encouraged by Your infallible words, I now ask for the grace of (here name your request). Our Father… Hail Mary… Glory Be… Sacred Heart of Jesus, I place all my trust in You. O Sacred Heart of Jesus, for whom it is impossible not to have compassion on the afflicted, have pity on us miserable sinners and grant us the grace which we ask of You, through the Sorrowful and Immaculate Heart of Mary, Your tender Mother and ours. Hail, Holy Queen… St. Joseph, foster father of Jesus, pray for us. Amen.',
	relatedSaint: 'st-padre-pio',
	relatedGuideTopic: { guide: 'church-history', slug: 'the-sacred-heart-symbol' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Matthew 7:7; John 16:23; Matthew 24:35 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/matthew/7' },
		{ label: 'Catechism of the Catholic Church, §§478, 2669 (The Heart of Jesus)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Novena to the Sacred Heart?',
			paragraphs: [
				'This novena, often called the “Efficacious Novena,” builds three petitions on three promises of Jesus in the Gospels: “Ask, and it will be given you” (Matthew 7:7); “if you ask anything of the Father in my name, he will give it to you” (John 16:23); and “heaven and earth will pass away, but my words will not pass away” (Matthew 24:35). It is traditionally associated with St. Margaret Mary Alacoque, who spread devotion to the Sacred Heart.',
				'St. Padre Pio of Pietrelcina (1887–1968) prayed this novena every day for all those who asked for his prayers, which made it known around the world.',
			],
		},
		{
			heading: 'How to pray it',
			paragraphs: [
				'Pray the prayer above on nine consecutive days, naming your request in each of the three petitions. It may be prayed at any time, and especially in the nine days before the Solemnity of the Sacred Heart, the Friday after the second Sunday after Pentecost.',
				'Like every novena, it is not a formula that forces God’s hand, but an expression of persevering trust in the love of Christ, who knows what is truly good for us.',
			],
		},
	],
};

export default prayer;
