export interface SaintSection {
	heading: string;
	paragraphs: string[];
}

export interface Saint {
	slug: string;
	title: string;
	excerpt: string;
	feastDays?: string;
	sections: SaintSection[];
}

export const saints: Saint[] = [
	{
		slug: 'st-joseph',
		title: 'St. Joseph',
		feastDays: 'March 19 · May 1 (St. Joseph the Worker)',
		excerpt:
			'Foster father of Jesus, spouse of the Blessed Virgin Mary, and patron of the Universal Church—silent, faithful, and strong in obedience to God.',
		sections: [
			{
				heading: 'Who is St. Joseph?',
				paragraphs: [
					'Saint Joseph was the husband of the Virgin Mary and the foster father of Jesus Christ. Though the Gospels record not a single word he spoke, his actions reveal a man of deep faith, courage, and love.',
					'The Church honors him as a patriarch, protector of the Holy Family, and model for husbands, fathers, workers, and all who seek to do God’s will quietly and faithfully.',
				],
			},
			{
				heading: 'His life in Scripture',
				paragraphs: [
					'Joseph was of the house of David. When he learned that Mary was with child, he planned to divorce her quietly until an angel appeared in a dream and told him to take Mary as his wife, for the child was conceived by the Holy Spirit. Joseph obeyed without hesitation.',
					'He protected the infant Jesus from Herod by fleeing to Egypt, then settled in Nazareth. Scripture calls him a “just man” (Matthew 1:19)—righteous before God and gentle toward others. He taught Jesus his trade as a carpenter and provided for the family through honest labor.',
				],
			},
			{
				heading: 'Patronage and devotion',
				paragraphs: [
					'The Church celebrates St. Joseph on March 19 and, since 1955, on May 1 as St. Joseph the Worker. Pope Pius IX declared him patron of the Universal Church in 1870; he is also patron of fathers, families, the dying, and a happy death.',
					'Pope Francis dedicated the year 2021 to St. Joseph, encouraging the faithful to pray the Holy Family and to entrust their work and homes to his care. Many Catholics pray the Memorare to St. Joseph or honor him in the month of March.',
				],
			},
			{
				heading: 'Lessons for us today',
				paragraphs: [
					'Joseph teaches us to trust God when life is unclear, to protect the vulnerable, and to serve without seeking praise. In a noisy world, his hidden life in Nazareth reminds us that holiness is often found in daily duty, patience, and love.',
					'Whether you are a parent, a worker, or someone facing uncertainty, St. Joseph stands as a father who will intercede for you before Christ, his Son.',
				],
			},
		],
	},
];

export function getSaint(slug: string): Saint | undefined {
	return saints.find((s) => s.slug === slug);
}

export function getSaintImageSrc(slug: string): string {
	return `${import.meta.env.BASE_URL}saints/${slug}.jpg`;
}

export function getSaintImageAlt(title: string): string {
	return `Sacred art depicting ${title}`;
}
