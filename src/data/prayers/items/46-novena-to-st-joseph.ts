import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'novena-to-st-joseph',
	title: 'Novena to St. Joseph',
	alsoKnownAs: 'Memorare to St. Joseph',
	excerpt: 'Novena to the foster father of Jesus, prayed especially from 10 to 18 March before his solemnity on 19 March.',
	text: 'Remember, O most chaste spouse of the Virgin Mary, that never was it known that anyone who implored your help and sought your intercession was left unassisted. Inspired by this confidence, I fly unto you, O guardian of the Redeemer, and to you do I commend myself. Despise not my petitions, O foster father of the Redeemer, but in your mercy hear and answer me. Amen.',
	relatedSaint: 'st-joseph',
	relatedGuideTopic: { guide: 'saints', slug: 'the-st-joseph-medal' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Matthew 1:18–25 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/matthew/1' },
		{ label: 'Pope Francis, Apostolic Letter Patris corde (2020)', url: 'https://www.vatican.va/content/francesco/en/apost_letters/documents/papa-francesco-lettera-ap_20201208_patris-corde.html' },
	],
	sections: [
		{
			heading: 'What is the Novena to St. Joseph?',
			paragraphs: [
				'St. Joseph, the husband of Mary and the foster father of Jesus, is honoured as Patron of the Universal Church, of fathers, of workers and of a happy death. Countless Catholics turn to him in their needs, trusting the words of St. Teresa of Ávila, who wrote that she had never asked anything of him that he did not obtain.',
				'The prayer given here is the traditional Memorare to St. Joseph, modelled on the Memorare to the Virgin Mary. The Prayer to St. Joseph composed by Pope Leo XIII, “To thee, O blessed Joseph,” is also often prayed as part of the novena.',
			],
		},
		{
			heading: 'How to pray it',
			paragraphs: [
				'The novena is traditionally prayed from 10 to 18 March, before the Solemnity of St. Joseph on 19 March, or from 22 to 30 April, before the feast of St. Joseph the Worker on 1 May. It may also be prayed at any time of need, especially for one’s family, work, home or a holy death.',
				'Each day, pray the Memorare to St. Joseph with your intentions, followed by an Our Father, a Hail Mary and a Glory Be.',
			],
		},
	],
};

export default prayer;
