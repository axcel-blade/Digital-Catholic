export type MarianApparitionCategory =
	| 'Pilgrimage shrine'
	| 'Healing spring'
	| 'Message and devotion'
	| 'Silent apparition';

export interface MarianApparitionSection {
	heading: string;
	paragraphs: string[];
}

export interface MarianApparition {
	slug: string;
	title: string;
	category: MarianApparitionCategory;
	location: string;
	date: string;
	excerpt: string;
	/** Alt text for the shrine or church photograph */
	imageAlt: string;
	sections: MarianApparitionSection[];
}

export const marianApparitionsIntro =
	'Marian apparitions are reported appearances of the Blessed Virgin Mary to one or more people in the real world—often calling the faithful to prayer, repentance, and trust in her Son. The Church does not require belief in any private revelation, but when an apparition is judged worthy of belief, bishops may approve public devotion and pilgrimages. These events have shaped shrines, feasts, and devotions—from Europe and the Americas to India and East Asia—that still draw millions to Christ through His Mother.';

export const marianApparitions: MarianApparition[] = [
	{
		slug: 'guadalupe',
		title: 'Our Lady of Guadalupe',
		category: 'Pilgrimage shrine',
		location: 'Tepeyac, Mexico (now Mexico City)',
		date: 'December 1531',
		excerpt:
			'Mary appeared to St. Juan Diego on Tepeyac Hill and left her image on his tilma—the most visited Marian shrine in the world.',
		imageAlt:
			'Basilica of Our Lady of Guadalupe on Tepeyac Hill in Mexico City, where the tilma is venerated',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'Between December 9 and 12, 1531, the Virgin Mary appeared to Juan Diego Cuauhtlatoatzin, an indigenous Catholic convert, on the hill of Tepeyac near Mexico City. She asked that a church be built there and spoke to him in his own Nahuatl language with words of tender care.',
					'When the bishop requested a sign, Mary told Juan Diego to gather roses in his tilma (cloak) though it was winter. Before the bishop, he opened the tilma and the roses fell; on the cloth appeared the image of the Lady as he had seen her—clothed with the sun, standing on the moon, with an angel at her feet.',
				],
			},
			{
				heading: 'Church approval and meaning',
				paragraphs: [
					'The image has been venerated for nearly five centuries; the tilma remains on display in the Basilica of Our Lady of Guadalupe. Popes have crowned and honored Our Lady of Guadalupe as Patroness of the Americas and Star of the New Evangelization.',
					'The apparition united indigenous and Spanish peoples under the Gospel and became a sign of Mary’s maternal love for all the peoples of the Americas. “Am I not here, who am your mother?” she asked Juan Diego—words that still comfort the poor and suffering.',
				],
			},
		],
	},
	{
		slug: 'miraculous-medal',
		title: 'Miraculous Medal',
		category: 'Message and devotion',
		location: 'Paris, France (Rue du Bac)',
		date: '1830',
		excerpt:
			'Mary appeared to St. Catherine Labouré and revealed the design of the medal that bears rays of grace from her hands.',
		imageAlt:
			'Chapel of Our Lady of the Miraculous Medal on Rue du Bac in Paris, where St. Catherine Labouré saw Mary',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'In July and November 1830, the Blessed Virgin appeared to Sister Catherine Labouré, a novice of the Daughters of Charity, in the convent chapel on Rue du Bac in Paris. Mary stood on a globe, rays of light streamed from rings on her fingers, and she was surrounded by the words: “O Mary, conceived without sin, pray for us who have recourse to thee.”',
					'On the reverse of the medal Mary showed an M surmounted by a cross, with the Hearts of Jesus and Mary. She asked that a medal be struck so that all who wear it with confidence would receive great graces.',
				],
			},
			{
				heading: 'Church approval and meaning',
				paragraphs: [
					'After careful investigation, Archbishop Hyacinthe-Louis de Quélen of Paris approved the devotion in 1836. The “Miraculous Medal” spread worldwide; countless conversions and healings have been attributed to it, though the Church evaluates each claim with prudence.',
					'The apparition deepened devotion to Mary’s Immaculate Conception, proclaimed dogmatically in 1854, and called the faithful to trust in her intercession and to meditate on the Sacred Hearts of Jesus and Mary.',
				],
			},
		],
	},
	{
		slug: 'la-salette',
		title: 'Our Lady of La Salette',
		category: 'Message and devotion',
		location: 'La Salette-Fallavaux, France',
		date: 'September 19, 1846',
		excerpt:
			'Mary appeared to two shepherd children on a mountain, weeping for those who neglect Sunday Mass and the name of her Son.',
		imageAlt: 'Basilica of Our Lady of La Salette in the French Alps, above the apparition site',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'On September 19, 1846, Maximin Giraud and Mélanie Calvat, ages eleven and fourteen, saw a beautiful lady seated on a stone, weeping, on the mountain of La Salette in southeastern France. She spoke of the Name of her Son being blasphemed, of the Lord’s Day profaned, and of the need for conversion.',
					'She entrusted each child with a secret message for the pope. The children’s simple account moved the local community; pilgrims soon climbed the mountain to pray where Mary had appeared.',
				],
			},
			{
				heading: 'Church approval and meaning',
				paragraphs: [
					'Bishop Philibert de Bruillard of Grenoble authorized public devotion and the building of a shrine in 1851. The message of La Salette calls Catholics to take Sunday seriously, to receive the Eucharist with reverence, and to repent before it is too late.',
					'La Salette reminds us that Mary’s tears are for sinners she wishes to lead back to her Son. The Missionaries of Our Lady of La Salette continue her call to reconciliation and hope.',
				],
			},
		],
	},
	{
		slug: 'lourdes',
		title: 'Our Lady of Lourdes',
		category: 'Healing spring',
		location: 'Lourdes, France',
		date: 'February–July 1858',
		excerpt:
			'Mary appeared eighteen times to St. Bernadette Soubirous in a grotto and directed her to dig a spring whose waters have brought physical and spiritual healing.',
		imageAlt: 'The grotto of Massabielle at the Sanctuary of Our Lady of Lourdes in France',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'From February 11 to July 16, 1858, the Virgin Mary appeared to Bernadette Soubirous, a poor fourteen-year-old girl, in the grotto of Massabielle near Lourdes. Mary asked for prayer and penance, told Bernadette to tell priests to build a chapel, and invited people to come in procession.',
					'On March 25, when Bernadette asked her name, the Lady replied, “I am the Immaculate Conception.” At Mary’s direction, Bernadette dug in the ground and uncovered a spring that still flows from the rock.',
				],
			},
			{
				heading: 'Church approval and meaning',
				paragraphs: [
					'Bishop Bertrand-Sévère Laurence of Tarbes declared in 1862 that the faithful are justified in believing the apparitions authentic. The Church has recognized many healings after careful medical review; Lourdes is one of the greatest centers of pilgrimage in the world.',
					'Our Lady of Lourdes teaches trust in God’s mercy, care for the sick, and the truth of Mary’s Immaculate Conception. “Penance, penance, penance,” she said—and also, through her presence, peace for those who suffer.',
				],
			},
		],
	},
	{
		slug: 'knock',
		title: 'Our Lady of Knock',
		category: 'Silent apparition',
		location: 'Knock, County Mayo, Ireland',
		date: 'August 21, 1879',
		excerpt:
			'Fifteen villagers saw Mary, St. Joseph, St. John the Evangelist, and a lamb on an altar at the parish church—without a spoken message.',
		imageAlt: 'Knock Shrine in County Mayo, Ireland, built at the site of the 1879 apparition',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'On a rainy evening in August 1879, several men, women, and children of the village of Knock saw figures of surpassing brightness against the south gable of the parish church. They recognized the Blessed Virgin Mary in prayer, St. Joseph to her right, and St. John the Evangelist preaching from a book.',
					'To the left they saw an altar with a cross and a lamb, as at Mass. The vision lasted about two hours; no words were spoken. Witnesses prayed the Rosary in the rain while the figures remained silent and motionless.',
				],
			},
			{
				heading: 'Church approval and meaning',
				paragraphs: [
					'Archbishop John MacHale of Tuam and later commissions found the testimony trustworthy. Knock became Ireland’s national Marian shrine, drawing pilgrims especially in times of famine, emigration, and hardship.',
					'The silent apparition points to the Eucharist—the Lamb on the altar—and to the Holy Family. Without a verbal message, Mary leads the faithful to adoration, the Scriptures, and the sacrifice of the Mass.',
				],
			},
		],
	},
	{
		slug: 'fatima',
		title: 'Our Lady of Fátima',
		category: 'Message and devotion',
		location: 'Fátima, Portugal',
		date: 'May–October 1917',
		excerpt:
			'Mary appeared six times to three shepherd children, asked for the Rosary and penance, and pointed the world toward conversion and peace.',
		imageAlt: 'Basilica of Our Lady of the Rosary at the Sanctuary of Fátima in Portugal',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'From May 13 to October 13, 1917, the Blessed Virgin appeared to Lucia dos Santos and her cousins Francisco and Jacinta Marto in the Cova da Iria near Fátima. She asked them to pray the Rosary daily for peace, to offer sacrifices for sinners, and to spread devotion to her Immaculate Heart.',
					'On October 13, before a vast crowd, many witnessed the “miracle of the sun” as the Lady had promised. The children were entrusted with secrets concerning the Church and the world; some were later revealed by Sister Lucia.',
				],
			},
			{
				heading: 'Church approval and meaning',
				paragraphs: [
					'Bishop José Alves Correia da Silva of Leiria declared the apparitions worthy of belief in 1930. Francisco and Jacinta were canonized in 2017; Lucia’s cause is underway. Popes have consecrated the world and Russia to the Immaculate Heart of Mary in response to Fátima.',
					'Fátima calls every generation to prayer, especially the Rosary, to reparation for sin, and to trust in Mary’s maternal care amid war and indifference to God. “My Immaculate Heart will triumph,” she promised, always leading souls to her Son.',
				],
			},
		],
	},
	{
		slug: 'akita',
		title: 'Our Lady of Akita',
		category: 'Message and devotion',
		location: 'Akita, Japan',
		date: '1973–1981',
		excerpt:
			'Mary appeared to Sister Agnes Sasagawa; a wooden statue in the chapel wept, perspired, and echoed her call to prayer and penance.',
		imageAlt:
			'Yuzawadai Catholic church in Akita, Japan, where the weeping statue of Our Lady of Akita is venerated',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'In 1973, Sister Agnes Katsuko Sasagawa, a deaf religious of the Handmaids of the Eucharist, received messages from an angel and from the Blessed Virgin in the chapel at Akita. Mary warned of chastisement if humanity does not repent and asked for prayer, penance, and courageous sacrifice.',
					'A carved wooden statue of Mary in the same chapel began to weep on January 4, 1975, and continued on many occasions through 1981. Analysis reported the moisture was human tears. Sister Agnes was healed of deafness in 1982 after prayer before the statue.',
				],
			},
			{
				heading: 'Church approval and meaning',
				paragraphs: [
					'After years of investigation, Bishop John Shojiro Ito of Niigata declared in 1984 that the events of Akita may be believed and promoted for the spiritual good of the faithful. The Holy See did not overturn his judgment.',
					'Akita echoes Fátima’s call to the Rosary and reparation and speaks especially to a secular age tempted to forget God. Mary’s tears are a sign of her love and a summons to conversion before it is too late.',
				],
			},
		],
	},
	{
		slug: 'velankanni',
		title: 'Our Lady of Velankanni',
		category: 'Pilgrimage shrine',
		location: 'Velankanni, Tamil Nadu, India',
		date: '16th century (tradition)',
		excerpt:
			'Mary appeared near the Bay of Bengal to a shepherd boy, a lame youth, and storm-tossed sailors—India’s “Lourdes of the East” and a basilica of Our Lady of Good Health.',
		imageAlt:
			'Basilica of Our Lady of Good Health at Velankanni on the coast of Tamil Nadu, India',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'According to longstanding tradition in Tamil Nadu, the Blessed Virgin Mary appeared at Velankanni (also spelled Vailankanni) on the Coromandel Coast in the 16th century on three occasions. A shepherd boy saw her with the infant Jesus and gave her milk from his bowl at her request. A lame boy selling buttermilk was told to visit the same spot; after bathing there, he could walk again.',
					'Portuguese merchants caught in a violent storm at sea vowed to build a chapel if they were saved. Mary appeared with a lighted lamp and calmed the waves. They landed safely, found the chapel already begun, and enriched the shrine. The “Lady with the Lamp” (Matha Kulandhai) became a beloved title among local Catholics.',
				],
			},
			{
				heading: 'Church approval and meaning',
				paragraphs: [
					'The Shrine of Our Lady of Good Health at Velankanni has been a center of Catholic life in South India for centuries. Pope John XXIII raised it to a minor basilica in 1962. Millions of pilgrims—Hindus, Muslims, and Christians among them—visit each year, especially during the September festival.',
					'Velankanni shows that Mary’s maternal care reaches every nation. She gathers the sick, the poor, and seafarers under her protection and leads them to her Son. The shrine is often called the “Lourdes of the East,” a sign of hope for all India and for the universal Church.',
				],
			},
		],
	},
];

export function getMarianApparition(slug: string): MarianApparition | undefined {
	return marianApparitions.find((a) => a.slug === slug);
}

export function getMarianApparitionImageSrc(slug: string): string {
	return `${import.meta.env.BASE_URL}marian-apparitions/${slug}.jpg`;
}
