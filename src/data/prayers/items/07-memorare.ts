import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'memorare',
	title: 'The Memorare',
	alsoKnownAs: 'Remember, O most gracious Virgin Mary',
	excerpt:
		'Confident prayer to the Blessed Virgin Mary, recalling that no one who has sought her help has ever been left unaided.',
	text: 'Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thine intercession was left unaided. Inspired by this confidence, I fly unto thee, O Virgin of virgins, my Mother; to thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.',
	relatedSaint: 'blessed-virgin-mary',
	lastReviewed: '2026-10-31',
	sources: [
		{ label: 'Wikipedia: Memorare', url: 'https://en.wikipedia.org/wiki/Memorare' },
		{ label: 'Catechism of the Catholic Church, §§2673–2679 (In communion with the holy Mother of God)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Memorare?',
			paragraphs: [
				'The Memorare takes its name from its first word in Latin, “Memorare,” meaning “Remember.” It asks the Blessed Virgin Mary to remember that no one who has turned to her has ever been left without help, and on that confidence brings our needs before her.',
				'The prayer is often attributed to St. Bernard of Clairvaux, but in its present form it comes from a longer fifteenth-century prayer. It was spread widely in the seventeenth century by Fr. Claude Bernard, a French priest who taught it to prisoners and the sick, which is likely the source of the connection with “Bernard.”',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'Catholics pray the Memorare in times of need, worry, or temptation, and many pray it daily. Some pray it several times in a row as a quick “flying novena” when they need help urgently. St. Teresa of Calcutta was known for praying it this way.',
				'The prayer does not ask Mary to act in place of God. Like a child going to its mother, we ask the Mother of Christ to pray for us and lead us to her Son.',
			],
		},
	],
};

export default prayer;
