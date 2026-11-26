import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'come-holy-spirit',
	title: 'Come, Holy Spirit',
	alsoKnownAs: 'Veni, Sancte Spiritus (prayer)',
	excerpt: 'Short prayer asking the Holy Spirit to fill the hearts of the faithful with the fire of his love.',
	text: 'Come, Holy Spirit, fill the hearts of Thy faithful and kindle in them the fire of Thy love. V. Send forth Thy Spirit and they shall be created. R. And Thou shalt renew the face of the earth. Let us pray. O God, who by the light of the Holy Spirit didst instruct the hearts of the faithful, grant that by the same Holy Spirit we may be truly wise and ever enjoy His consolations. Through Christ our Lord. Amen.',
	relatedGuideTopic: { guide: 'church-history', slug: 'the-dove-symbol' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Psalm 104:30 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/psalms/104' },
		{ label: 'Catechism of the Catholic Church, §§2670–2672 (Come, Holy Spirit)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Come, Holy Spirit prayer?',
			paragraphs: [
				'This prayer begins with an ancient invocation of the Holy Spirit, used in the Church’s liturgy around Pentecost, followed by a verse from Psalm 104, “Send forth your spirit, and they are created; and you renew the face of the earth” (Psalm 104:30), and a collect from the old Mass of the Holy Spirit.',
				'The Catechism teaches that “every time we begin to pray to Jesus it is the Holy Spirit who draws us on the way of prayer,” and that the Church invites us to call upon the Spirit every day, especially at the beginning and end of any important action (CCC 2670).',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'It is commonly prayed before study, meetings, decisions, retreats, Bible reading and classes, and as preparation for Confirmation. Many schools and parish groups begin their work with it.',
				'Its image of fire recalls Pentecost, when the Spirit came upon the apostles as “tongues, as of fire” (Acts 2:3).',
			],
		},
	],
};

export default prayer;
