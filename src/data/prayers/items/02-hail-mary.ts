import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'hail-mary',
	title: 'Hail Mary',
	alsoKnownAs: 'Ave Maria',
	excerpt:
		'Greeting to the Blessed Virgin drawn from the Angel Gabriel and St. Elizabeth, completed by the Church’s petition for her intercession at our death.',
	text: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
	sections: [
		{
			heading: 'What is the Hail Mary?',
			paragraphs: [
				'The first part of the Hail Mary comes from Scripture: the angel Gabriel’s greeting at the Annunciation (“Hail, full of grace…”) and Elizabeth’s words at the Visitation (“Blessed art thou among women…”). The name Jesus and the title “Holy Mary, Mother of God” were added as the Church reflected on Christ’s divinity and Mary’s role.',
				'The final petition—“pray for us sinners, now and at the hour of our death”—was widely used by the fifteenth century and completes the prayer as we know it. We do not worship Mary; we ask the Mother of Christ to pray for us, as we might ask a friend to bring our needs before God.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'The Hail Mary is prayed fifty-three times in a full Rosary—ten Hail Marys per decade, plus three at the opening. It is also the prayer of the Angelus (traditionally at 6 a.m., noon, and 6 p.m.), many Marian processions, and personal devotion throughout the day.',
				'Because it centers on Christ in Mary’s womb and asks her intercession at death, the Hail Mary has comforted the dying and strengthened the living for centuries.',
			],
		},
	],
};

export default prayer;
