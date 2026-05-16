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
	{
		slug: 'st-anthony-of-padua',
		title: 'St. Anthony of Padua',
		feastDays: 'June 13',
		excerpt:
			'Franciscan preacher and Doctor of the Church—beloved for his zeal for the Gospel, care for the poor, and powerful intercession, especially for what is lost.',
		sections: [
			{
				heading: 'Who is St. Anthony of Padua?',
				paragraphs: [
					'Saint Anthony of Padua was a Portuguese Franciscan friar, priest, and preacher of the thirteenth century. Though he died at only thirty-six, he became one of the most loved saints in the Church and was declared a Doctor of the Church in 1946.',
					'Born Fernando Martins de Bulhões in Lisbon, he first joined the Augustinian canons before entering the Franciscans and taking the name Anthony. He is often called the “Evangelical Doctor” because his preaching drew souls to Christ through Scripture and simple, burning charity.',
				],
			},
			{
				heading: 'His life and mission',
				paragraphs: [
					'Anthony studied theology and Scripture in Coimbra and later under St. Francis of Assisi’s direction. He preached throughout Italy and southern France, calling sinners to repentance and defending the faith against false teaching.',
					'His sermons were said to move hearts so deeply that even those who came to mock would weep and convert. He served as provincial superior of the friars in northern Italy, yet remained humble, tireless in ministry, and devoted to the poor.',
					'In Padua, where he spent his final years, Anthony’s preaching bore great fruit. He died on June 13, 1231, and was canonized less than a year later—one of the fastest canonizations in Church history.',
				],
			},
			{
				heading: 'Patronage and devotion',
				paragraphs: [
					'St. Anthony is widely invoked as patron of lost things, the poor, travelers, and those seeking reconciliation. Countless faithful turn to him in prayer when something is lost, trusting his powerful intercession before God.',
					'His tomb in the Basilica of St. Anthony in Padua remains a major place of pilgrimage. Many Catholics honor him with bread for the poor on his feast day, remembering his care for those in need.',
				],
			},
			{
				heading: 'Lessons for us today',
				paragraphs: [
					'Anthony teaches us to love God’s Word, to speak the truth with charity, and to notice Christ in the poor. He shows that holiness is not measured by long years but by wholehearted love and faithful service.',
					'When you struggle to find direction—or literally lose something—St. Anthony stands ready to pray with you, pointing always to the God who never loses sight of His children.',
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
