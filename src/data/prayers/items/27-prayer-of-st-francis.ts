import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'prayer-of-st-francis',
	title: 'Prayer of St. Francis',
	alsoKnownAs: 'Peace Prayer; Lord, make me an instrument of your peace',
	excerpt: 'Beloved prayer for peace asking to bring love, pardon, faith, hope, light and joy to others, in the spirit of St. Francis of Assisi.',
	text: 'Lord, make me an instrument of your peace: where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; where there is sadness, joy. O divine Master, grant that I may not so much seek to be consoled as to console, to be understood as to understand, to be loved as to love. For it is in giving that we receive, it is in pardoning that we are pardoned, and it is in dying that we are born to eternal life. Amen.',
	relatedSaint: 'st-francis-of-assisi',
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Prayer of Saint Francis', url: 'https://en.wikipedia.org/wiki/Prayer_of_Saint_Francis' },
		{ label: 'Matthew 5:9 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/matthew/5' },
	],
	sections: [
		{
			heading: 'What is the Prayer of St. Francis?',
			paragraphs: [
				'This prayer asks God to make the one praying a bearer of peace, answering each evil with its opposite good, and to seek to give rather than to receive. It reflects the Beatitude “Blessed are the peacemakers” (Matthew 5:9) and the spirit of St. Francis of Assisi, who greeted everyone with the words “May the Lord give you peace.”',
				'Although it is called the Prayer of St. Francis, it was not written by him. Its earliest known appearance is in 1912, in a small French Catholic magazine called La Clochette, without an author’s name. It was later printed on the back of a holy card of St. Francis, which led to its association with him, and it spread widely during and after the two World Wars.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'It is prayed in times of conflict, at gatherings for peace, at weddings and funerals, and as a daily prayer for growth in love and humility. Pope St. John Paul II and many other leaders have prayed it publicly.',
				'Its closing lines sum up the Gospel paradox: that we find life by giving ourselves away, as Christ did.',
			],
		},
	],
};

export default prayer;
