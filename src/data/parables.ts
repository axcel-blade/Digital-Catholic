export type ParableCategory =
	| 'Kingdom of God'
	| 'Mercy'
	| 'Prayer'
	| 'Discipleship'
	| 'Wealth & judgment';

export interface ParableSection {
	heading: string;
	paragraphs: string[];
}

export interface Parable {
	slug: string;
	title: string;
	category: ParableCategory;
	gospelReference: string;
	excerpt: string;
	sections: ParableSection[];
}

export const parablesIntro =
	'The parables of Jesus Christ are stories recorded in the New Testament Gospels—chiefly in Matthew, Mark, and Luke, and in related teachings in John. Jesus spoke in parables to reveal the mysteries of the Kingdom of God to those with open hearts, while inviting others to deeper reflection. Each parable is a window into divine wisdom and a call to conversion.';

export const parables: Parable[] = [
	{
		slug: 'the-sower',
		title: 'The Sower',
		category: 'Kingdom of God',
		gospelReference: 'Matthew 13:1–23 · Mark 4:1–20 · Luke 8:4–15',
		excerpt:
			'Seed falls on four kinds of soil—a lesson on how the Word of God is received in the human heart.',
		sections: [
			{
				heading: 'The parable',
				paragraphs: [
					'A sower scatters seed on the path, rocky ground, thorny soil, and good earth. Birds devour what falls on the path; shallow roots wither in the sun; thorns choke the rest; only good soil bears fruit thirty-, sixty-, or a hundredfold.',
					'Jesus explains privately to the disciples: the seed is the word of the Kingdom. Each soil represents hearers—those hardened, those without depth, those choked by cares and riches, and those who bear fruit in patience.',
				],
			},
			{
				heading: 'What it teaches',
				paragraphs: [
					'The parable asks us to examine our own hearts and to pray for receptivity. Preachers and teachers are sowers, but God gives the growth. Fruitfulness is measured not by momentary enthusiasm but by persevering faith.',
				],
			},
		],
	},
	{
		slug: 'the-mustard-seed',
		title: 'The Mustard Seed',
		category: 'Kingdom of God',
		gospelReference: 'Matthew 13:31–32 · Mark 4:30–32 · Luke 13:18–19',
		excerpt:
			'The Kingdom begins small like a mustard seed yet grows into a tree where many find shelter.',
		sections: [
			{
				heading: 'The story',
				paragraphs: [
					'Jesus compares the Kingdom of heaven to a mustard seed—the smallest of seeds—that becomes a large shrub or tree. Birds nest in its branches.',
				],
			},
			{
				heading: 'What it teaches',
				paragraphs: [
					'God’s reign may seem hidden or insignificant at first—one life, one parish, one act of charity—but it grows by divine power into something that shelters the world. The Church herself began with a few disciples and now embraces every nation.',
				],
			},
		],
	},
	{
		slug: 'the-pearl-of-great-price',
		title: 'The Pearl of Great Price',
		category: 'Kingdom of God',
		gospelReference: 'Matthew 13:45–46',
		excerpt:
			'A merchant sells all he has to buy one pearl of surpassing worth—the Kingdom demands our all.',
		sections: [
			{
				heading: 'The story',
				paragraphs: [
					'When a merchant finds a pearl of extraordinary value, he goes and sells everything he owns to purchase it.',
				],
			},
			{
				heading: 'What it teaches',
				paragraphs: [
					'Discipleship is not a hobby but a total commitment. Christ Himself is the treasure; every lesser good must be ordered to Him. The joy of the Kingdom outweighs every sacrifice.',
				],
			},
		],
	},
	{
		slug: 'the-good-samaritan',
		title: 'The Good Samaritan',
		category: 'Mercy',
		gospelReference: 'Luke 10:25–37',
		excerpt:
			'“Who is my neighbor?”—A wounded man is helped by the one society despised, not by religious officials who pass by.',
		sections: [
			{
				heading: 'The story',
				paragraphs: [
					'A lawyer tests Jesus on eternal life and loving one’s neighbor. Jesus tells of a man beaten on the road to Jericho. A priest and a Levite pass by, but a Samaritan tends his wounds, brings him to an inn, and pays for his care.',
					'Jesus asks who proved neighbor to the victim. The lawyer answers, “The one who showed mercy.” Jesus says, “Go and do likewise.”',
				],
			},
			{
				heading: 'What it teaches',
				paragraphs: [
					'Neighbor love crosses ethnic and religious boundaries. Mercy is measured in action, not status. Christ Himself is the true Good Samaritan who heals our wounds on the road of sin.',
				],
			},
		],
	},
	{
		slug: 'the-prodigal-son',
		title: 'The Prodigal Son',
		category: 'Mercy',
		gospelReference: 'Luke 15:11–32',
		excerpt:
			'A father welcomes home the son who squandered everything—the mercy of God and the challenge to the elder brother.',
		sections: [
			{
				heading: 'The story',
				paragraphs: [
					'A younger son demands his inheritance, wastes it in a distant land, and returns starving. The father runs to meet him, restores him with robe and ring, and celebrates with a feast. The elder son, angry at such mercy, refuses to enter; the father pleads with him to rejoice that his brother was dead and is alive.',
				],
			},
			{
				heading: 'What it teaches',
				paragraphs: [
					'God’s forgiveness is prodigal—lavish beyond measure. The parable speaks to sinners who fear to return and to the righteous who struggle with resentment. Both sons need the Father’s heart.',
				],
			},
		],
	},
	{
		slug: 'the-lost-sheep',
		title: 'The Lost Sheep',
		category: 'Mercy',
		gospelReference: 'Matthew 18:12–14 · Luke 15:1–7',
		excerpt:
			'The shepherd leaves ninety-nine sheep to seek the one that is lost—heaven rejoices over one repentant sinner.',
		sections: [
			{
				heading: 'The story',
				paragraphs: [
					'Jesus asks which man, having a hundred sheep and losing one, would not leave the ninety-nine in the wilderness and search until he finds it. On recovering the sheep he calls friends to rejoice with him.',
					'Jesus concludes: “There will be more joy in heaven over one sinner who repents than over ninety-nine righteous who need no repentance.”',
				],
			},
			{
				heading: 'What it teaches',
				paragraphs: [
					'No soul is expendable to God. The Church’s mission to seek the lost mirrors the Shepherd who lays down His life for the flock.',
				],
			},
		],
	},
	{
		slug: 'the-pharisee-and-tax-collector',
		title: 'The Pharisee and the Tax Collector',
		category: 'Prayer',
		gospelReference: 'Luke 18:9–14',
		excerpt:
			'Two men pray in the Temple; the humble tax collector goes home justified, not the self-righteous Pharisee.',
		sections: [
			{
				heading: 'The story',
				paragraphs: [
					'A Pharisee thanks God that he is not like other men and lists his fasting and tithes. A tax collector stands far off, beats his breast, and prays, “God, be merciful to me, a sinner.” Jesus declares the tax collector justified rather than the other.',
				],
			},
			{
				heading: 'What it teaches',
				paragraphs: [
					'Prayer must spring from humility, not comparison. Justification is God’s gift to those who know their need—a foundation of the Jesus Prayer and of every honest confession.',
				],
			},
		],
	},
	{
		slug: 'the-rich-fool',
		title: 'The Rich Fool',
		category: 'Wealth & judgment',
		gospelReference: 'Luke 12:13–21',
		excerpt:
			'“You fool! This night your soul is required of you.” Riches stored up for self cannot secure the soul.',
		sections: [
			{
				heading: 'The story',
				paragraphs: [
					'A man asks Jesus to divide an inheritance. Jesus warns against greed and tells of a rich man whose land produced abundantly. He plans bigger barns to store grain and relax, but God says his soul will be demanded that night. “So is the one who lays up treasure for himself and is not rich toward God.”',
				],
			},
			{
				heading: 'What it teaches',
				paragraphs: [
					'Earthly security is an illusion. True wealth is friendship with God through charity, especially toward the poor. The parable prepares hearts for detachment and trust in Providence.',
				],
			},
		],
	},
	{
		slug: 'the-rich-man-and-lazarus',
		title: 'The Rich Man and Lazarus',
		category: 'Wealth & judgment',
		gospelReference: 'Luke 16:19–31',
		excerpt:
			'A poor man at the gate dies in Abraham’s bosom; the rich man who ignored him suffers separation and pleads for his brothers.',
		sections: [
			{
				heading: 'The story',
				paragraphs: [
					'Lazarus, covered with sores, longs for scraps from a rich man’s table. Both die: angels carry Lazarus to Abraham; the rich man suffers torment. He begs relief and that Lazarus warn his brothers. Abraham replies that they have Moses and the prophets—and if they do not listen to Scripture, neither will they believe one risen from the dead.',
				],
			},
			{
				heading: 'What it teaches',
				paragraphs: [
					'Neglect of the poor has eternal consequences. Scripture is the sure witness God gives for conversion. The parable points forward to Christ’s Resurrection as the ultimate sign—and to the duty of charity here and now.',
				],
			},
		],
	},
	{
		slug: 'the-unmerciful-servant',
		title: 'The Unmerciful Servant',
		category: 'Mercy',
		gospelReference: 'Matthew 18:21–35',
		excerpt:
			'Forgiven an impossible debt, a servant refuses to forgive a small one—God will judge us by the mercy we show.',
		sections: [
			{
				heading: 'The story',
				paragraphs: [
					'Peter asks how often he must forgive. Jesus tells of a king who forgives a servant ten thousand talents, but that servant throttles a fellow servant owing a hundred denarii. When the king learns of it, he revokes his mercy and hands the wicked servant to jailers until all is paid.',
					'Jesus warns: “So also my heavenly Father will do to every one of you, if you do not forgive your brother from your heart.”',
				],
			},
			{
				heading: 'What it teaches',
				paragraphs: [
					'We who receive forgiveness in Christ must forgive without limit. The Our Father ties God’s forgiveness to our own: “as we forgive those who trespass against us.”',
				],
			},
		],
	},
	{
		slug: 'the-wedding-feast',
		title: 'The Wedding Feast',
		category: 'Kingdom of God',
		gospelReference: 'Matthew 22:1–14 · Luke 14:15–24',
		excerpt:
			'Invited guests refuse the king’s banquet; the poor fill the hall—many are called, but few are chosen.',
		sections: [
			{
				heading: 'The story',
				paragraphs: [
					'A king prepares a wedding feast for his son. Invited guests make excuses or mistreat his servants, so he sends others into the streets to gather all they find, good and bad. One man without a wedding garment is cast out. Jesus concludes: “Many are called, but few are chosen.”',
				],
			},
			{
				heading: 'What it teaches',
				paragraphs: [
					'The Kingdom is offered freely, yet requires a worthy response—grace and the “garment” of baptismal life. Indifference to God’s invitation is a grave refusal. The Eucharist is the foretaste of this feast.',
				],
			},
		],
	},
	{
		slug: 'the-good-shepherd',
		title: 'The Good Shepherd',
		category: 'Discipleship',
		gospelReference: 'John 10:1–18',
		excerpt:
			'“I am the good shepherd. The good shepherd lays down his life for the sheep.”',
		sections: [
			{
				heading: 'The teaching',
				paragraphs: [
					'In St. John’s Gospel Jesus speaks of Himself as the shepherd who enters by the door, calls His sheep by name, and leads them out. He contrasts the hireling who flees when the wolf comes with the Good Shepherd who lays down His life for the flock.',
					'He declares, “I know my own and my own know me,” and speaks of other sheep not of this fold who must be brought so there is one flock, one shepherd.',
				],
			},
			{
				heading: 'What it teaches',
				paragraphs: [
					'Though framed as a figure rather than a village story, this discourse belongs among Jesus’ great pastoral parables. Christ is the true Shepherd; bishops and priests share His care. The faithful hear His voice in the Church and follow Him to eternal life.',
				],
			},
		],
	},
];

export function getParable(slug: string): Parable | undefined {
	return parables.find((p) => p.slug === slug);
}
