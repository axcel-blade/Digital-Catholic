import type { TrustInfo } from '../lib/trust';

export const shroudOfTurinIntro =
	'The Shroud of Turin is a linen cloth bearing the faint image of a man who appears to have been scourged, crowned with thorns, and crucified. Many believe it is the burial cloth in which Jesus was wrapped. The Church has never officially declared it authentic, but venerates it as a powerful icon of Christ’s Passion.';

export const shroudOfTurinSections = [
	{
		heading: 'What the Shroud is',
		paragraphs: [
			'The Shroud is a single piece of linen, about 4.4 metres long and 1.1 metres wide, woven in a three-to-one herringbone twill. Folded lengthwise over a body, it shows the front and back of a bearded man lying in death, head to head along the middle of the cloth.',
			'The image is straw-yellow and extremely faint up close, becoming clearer from a distance. It is kept in the Chapel of the Holy Shroud at the Cathedral of St. John the Baptist in Turin, Italy, sealed in a climate-controlled case.',
		],
	},
	{
		heading: 'The Gospel burial',
		paragraphs: [
			'The Gospels tell us that after Jesus died, Joseph of Arimathea bought a linen cloth, took down the body, wrapped it, and laid it in a tomb hewn from rock (Mark 15:46; Matthew 27:59). Nicodemus brought spices, and they bound the body in linen cloths according to Jewish burial custom (John 19:39–40).',
			'On Easter morning, Peter and the beloved disciple entered the empty tomb and saw the linen cloths lying there, and the cloth that had covered His head rolled up in a place by itself (John 20:5–7). The disciple “saw and believed.”',
		],
	},
	{
		heading: 'What the image shows',
		paragraphs: [
			'The man of the Shroud bears wounds that match the Gospel accounts of the Passion in striking detail: many small dumbbell-shaped marks from a Roman flagrum across the back and legs, puncture wounds around the scalp as from a cap of thorns, abrasions on the shoulders as from carrying a heavy beam, and swelling of the face.',
			'There are wounds at the wrists and feet consistent with crucifixion nails, and a large wound in the side from which blood and a clearer fluid appear to have flowed, recalling John 19:34. Unlike most medieval art, the nail wounds are in the wrists rather than the palms, where modern study suggests nails would hold a body’s weight.',
		],
	},
	{
		heading: 'A photographic negative',
		paragraphs: [
			'In 1898 the Italian lawyer and amateur photographer Secondo Pia took the first photograph of the Shroud. When he developed the glass plate, he was astonished: the negative showed a clear, lifelike positive image of a man’s face and body. The image on the cloth itself behaves like a photographic negative.',
			'Later study found that the image also encodes three-dimensional information: its intensity corresponds to the distance between cloth and body. The coloration lies only on the outermost fibres of the linen, with no pigment or brushstrokes found, and how it was formed remains unexplained.',
		],
	},
	{
		heading: 'A history of the cloth',
		paragraphs: [
			'The Shroud’s documented history begins in the 1350s in Lirey, France, where the knight Geoffroi de Charny placed it in a church he founded. Some historians link it to earlier accounts, such as the Image of Edessa (the Mandylion) and a burial cloth described in Constantinople before the city was sacked in 1204, but these connections are debated.',
			'In 1453 the cloth passed to the House of Savoy. In 1532 it was damaged by fire in the Sainte-Chapelle at Chambéry, and Poor Clare nuns patched the burn holes in 1534. It was moved to Turin in 1578. In 1983 Umberto II, the last King of Italy, bequeathed it to the Pope; it now belongs to the Holy See, with the Archbishop of Turin as its custodian.',
			'In 1997 fire broke out in the chapel, and a firefighter smashed through the protective glass to carry the Shroud to safety. In 2002 the old patches and backing cloth were removed, and the Shroud was restored and is now stored flat.',
		],
	},
	{
		heading: 'Science and the carbon dating',
		paragraphs: [
			'In 1978 the Shroud of Turin Research Project (STURP), a team of American scientists, examined the cloth for five days. They concluded that the image is not a painting, that the bloodstains are real blood, and that the blood was on the cloth before the image formed, but they could not explain how the image was made.',
			'In 1988 samples from one corner were radiocarbon dated by laboratories in Oxford, Zurich, and Tucson, which reported a date between AD 1260 and 1390. Many took this as proof of a medieval origin. Others question whether the sampled corner, near repaired and much-handled areas, represents the whole cloth, and later statistical and chemical studies have been offered on both sides.',
			'Research continues, including studies of pollen, weaving, and the linen fibres themselves. The age of the Shroud and the cause of its image remain open to honest scientific inquiry.',
		],
	},
	{
		heading: 'What the Church says',
		paragraphs: [
			'The Catholic Church has made no official pronouncement on the Shroud’s authenticity and leaves that question to science. Faith in the Resurrection does not depend on the Shroud; it rests on the testimony of the Apostles handed on in the Church.',
			'At the same time, popes have shown it deep reverence. St. John Paul II, visiting in 1998, called it a “mirror of the Gospel” and invited scientists to study it freely. Benedict XVI, venerating it in 2010, called it an icon of Holy Saturday, and Pope Francis has spoken of it as an icon of a man scourged and crucified that leads us to the face of Christ.',
		],
	},
	{
		heading: 'Expositions and devotion',
		paragraphs: [
			'The Shroud is shown publicly only rarely, at times chosen by the Pope and the Archbishop of Turin. Recent expositions took place in 1978, 1998, 2000, 2010, and 2015, each drawing millions of pilgrims; during the pandemic in 2020 it was shown in a televised prayer on Holy Saturday.',
			'Devotion to the Holy Face of Jesus, promoted by Venerable Leo Dupont and St. Thérèse of the Child Jesus and the Holy Face, drew new strength from Secondo Pia’s photograph. Whatever its origin, the Shroud invites the faithful to contemplate how much Christ suffered out of love for us.',
		],
	},
];

export const shroudOfTurinTrust: TrustInfo = {
	lastReviewed: '2026-10-25',
	sources: [
		{ label: 'Official website of the Shroud of Turin (Archdiocese of Turin)', url: 'https://www.sindone.it/en/' },
		{ label: 'Wikipedia: Shroud of Turin', url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' },
		{ label: 'John 20:1–10 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/john/20' },
	],
};
