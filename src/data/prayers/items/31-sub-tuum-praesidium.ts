import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'sub-tuum-praesidium',
	title: 'Sub Tuum Praesidium',
	alsoKnownAs: 'We fly to thy protection',
	excerpt: 'The oldest known prayer to the Virgin Mary, found on an ancient Egyptian papyrus, asking for her protection in danger.',
	text: 'We fly to thy protection, O holy Mother of God; despise not our petitions in our necessities, but deliver us always from all dangers, O glorious and blessed Virgin. Amen.',
	relatedSaint: 'blessed-virgin-mary',
	relatedGuideTopic: { guide: 'saints', slug: 'mary-as-mother-of-god' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Sub tuum praesidium', url: 'https://en.wikipedia.org/wiki/Sub_tuum_praesidium' },
		{ label: 'Catechism of the Catholic Church, §971 (Devotion to the Blessed Virgin)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Sub Tuum Praesidium?',
			paragraphs: [
				'The Sub tuum praesidium (“Under thy protection”) is the oldest known prayer addressed to the Virgin Mary. A Greek version survives on a papyrus fragment from Egypt, now in the John Rylands Library in Manchester, which scholars date to between the third and fifth centuries. It shows that early Christians were already turning to Mary for help in times of danger and persecution.',
				'Remarkably, the papyrus calls Mary Theotokos, “Mother of God,” the title solemnly confirmed by the Council of Ephesus in 431. The Catechism quotes this prayer when teaching that “from the most ancient times the Blessed Virgin has been honoured with the title of ‘Mother of God,’ to whose protection the faithful fly in all their dangers and needs” (CCC 971).',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'It is prayed by Catholics and Orthodox alike. In the Roman Rite it is one of the Marian antiphons that may end Night Prayer, and it is often added at the end of the Rosary. Pope Francis asked the faithful to pray it daily in October 2018 for the protection of the Church.',
				'Its brevity makes it an easy prayer to remember in moments of sudden fear or temptation.',
			],
		},
	],
};

export default prayer;
