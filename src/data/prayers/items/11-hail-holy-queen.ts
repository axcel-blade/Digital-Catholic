import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'hail-holy-queen',
	title: 'Hail Holy Queen',
	alsoKnownAs: 'Salve Regina',
	excerpt:
		'Ancient Marian antiphon greeting the Blessed Virgin as Mother of Mercy and asking her to show us Jesus after this exile; prayed at the end of the Rosary.',
	text: [
		'Hail, holy Queen, Mother of Mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy towards us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.',
		'',
		'V. Pray for us, O holy Mother of God,',
		'R. That we may be made worthy of the promises of Christ.',
	].join('\n'),
	relatedSaint: 'blessed-virgin-mary',
	lastReviewed: '2026-10-31',
	sources: [
		{ label: 'Wikipedia: Salve Regina', url: 'https://en.wikipedia.org/wiki/Salve_Regina' },
		{ label: 'Catechism of the Catholic Church, §§2673–2679 (In communion with the holy Mother of God)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Hail Holy Queen?',
			paragraphs: [
				'The Hail Holy Queen, known in Latin as the Salve Regina, is one of the four great Marian antiphons of the Church. It greets Mary as Queen and Mother of Mercy, and speaks honestly of our life on earth as an “exile” in a “valley of tears,” asking her to turn her eyes of mercy toward us and, at the end, to show us her Son, Jesus.',
				'The prayer dates from the eleventh century and is often attributed to Hermann of Reichenau, a Benedictine monk, though its authorship is uncertain. Tradition says St. Bernard of Clairvaux added the closing words, “O clement, O loving, O sweet Virgin Mary.”',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'The Hail Holy Queen is best known as the closing prayer of the Rosary. It is also sung at Night Prayer (Compline), especially in the weeks of Ordinary Time, and for centuries monks and friars have ended their day by singing it before an image of Mary.',
				'Calling Mary our “advocate” does not place her above Christ. Like a mother speaking for her children, she brings our needs to her Son, the one Mediator between God and humanity.',
			],
		},
	],
};

export default prayer;
