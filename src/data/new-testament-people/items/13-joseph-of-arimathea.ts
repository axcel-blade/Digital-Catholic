import type { NewTestamentPerson } from '../types';

const person: NewTestamentPerson = {
	order: 13,
	slug: "joseph-of-arimathea",
	lastReviewed: "2026-11-18",
	title: "St. Joseph of Arimathea",
	alsoKnownAs: "Joseph the councillor",
	role: "witness",
	excerpt: "Rich disciple and Sanhedrin member who requested Jesus’ body from Pilate and laid Him in his own new tomb—fulfilling Isaiah’s word of a grave with the rich.",
	lifeDates: "1st century AD",
	scriptureReference: "Matthew 27:57–60; Mark 15:42–46; Luke 23:50–53; John 19:38–42",
	feastDays: "March 17 (Roman Martyrology)",
	primaryReferences: [
		{
			label: "Matthew 27:57–60; Isaiah 53:9"
		}
	],
	keyMoments: [
		{
			title: "The new tomb",
			reference: "John 19:38–42",
			summary: "Joseph, formerly a secret disciple for fear, takes courage and buries Jesus with Nicodemus before the Sabbath."
		}
	],
	sections: [
		{
			heading: "Who was Joseph of Arimathea?",
			paragraphs: [
				"Joseph was a respected councillor who had not consented to the Council’s purpose. He waited for the Kingdom of God."
			]
		},
		{
			heading: "Full biography",
			paragraphs: [
				"He approaches Pilate boldly, wraps Jesus in linen, and places Him in a rock-hewn tomb where no one had lain. Legends later carry him to Britain with the Grail; the Gospels need only his courage at the hour of darkness."
			]
		},
		{
			heading: "Courage at evening",
			paragraphs: [
				"When apostles hide, Joseph acts. Wealth and status become tools for reverence of Christ’s body—an image of care for the dead and for the Eucharist’s Lord."
			]
		},
		{
			heading: "Death and legacy",
			paragraphs: [
				"He is patron of undertakers and of those who honour the burial of the dead."
			]
		},
		{
			heading: "Lesson for today",
			paragraphs: [
				"Use whatever influence you have to honour Christ when it is least convenient."
			]
		}
	]
};

export default person;
