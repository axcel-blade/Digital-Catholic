import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'rosary-concluding-prayer',
	title: 'Concluding Prayer of the Rosary',
	alsoKnownAs: 'O God, whose only-begotten Son',
	excerpt:
		'Closing collect of the Rosary, asking that by meditating on its mysteries we may imitate what they contain and obtain what they promise.',
	text: 'Let us pray. O God, whose only-begotten Son, by his life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech thee, that while meditating on these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.',
	relatedSaint: 'blessed-virgin-mary',
	lastReviewed: '2026-10-31',
	sources: [
		{ label: 'Wikipedia: Rosary', url: 'https://en.wikipedia.org/wiki/Rosary' },
		{ label: 'Pope John Paul II, Apostolic Letter Rosarium Virginis Mariae (2002)', url: 'https://www.vatican.va/content/john-paul-ii/en/apost_letters/2002/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae.html' },
	],
	sections: [
		{
			heading: 'What is the Concluding Prayer?',
			paragraphs: [
				'This prayer closes the Rosary. It follows the Hail Holy Queen and its verse, “Pray for us, O holy Mother of God,” and gathers up everything that has been prayed. It comes from the collect of the Mass of Our Lady of the Rosary, whose feast the Church keeps on October 7.',
				'The prayer looks back over the whole Rosary: Christ’s life, death, and resurrection, which have won for us eternal life. It then asks for two graces—that we may imitate what the mysteries contain, and obtain what they promise. The Rosary is not only remembered; it is meant to shape how we live.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'The Concluding Prayer is said at the end of the Rosary, after the Hail Holy Queen, and is often followed by the Sign of the Cross. Some add other customary prayers, such as the Prayer to St. Michael or prayers for the intentions of the Pope.',
				'Pope John Paul II wrote that the Rosary is “a compendium of the Gospel” and a way of contemplating the face of Christ with Mary. This closing prayer asks that this contemplation bear fruit in our lives.',
			],
		},
	],
};

export default prayer;
