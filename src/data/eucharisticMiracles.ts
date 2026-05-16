export type EucharisticMiracleCategory =
	| 'Host transformed'
	| 'Bleeding host'
	| 'Pilgrimage shrine'
	| 'Modern investigation';

export interface EucharisticMiracleSection {
	heading: string;
	paragraphs: string[];
}

export interface EucharisticMiracle {
	slug: string;
	title: string;
	category: EucharisticMiracleCategory;
	location: string;
	date: string;
	excerpt: string;
	sections: EucharisticMiracleSection[];
}

export const eucharisticMiraclesIntro =
	'Eucharistic miracles are extraordinary events in which the consecrated Host—or, in some cases, the Precious Blood—has been preserved with visible signs that strengthen faith in the Real Presence of Christ in the Eucharist. The Church does not require belief in any private revelation, but many of these events are linked to approved shrines, devotions, and the liturgical life of the faithful. They call us to reverence at Mass and to adoration of the Blessed Sacrament.';

export const eucharisticMiracles: EucharisticMiracle[] = [
	{
		slug: 'lanciano',
		title: 'Lanciano',
		category: 'Host transformed',
		location: 'Lanciano, Italy',
		date: 'c. 8th century (tradition: 731)',
		excerpt:
			'A doubting priest saw the Host become visible flesh and the wine become blood—the oldest recorded Eucharistic miracle, still venerated today.',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'According to longstanding tradition, a Basilian monk who celebrated Mass in the church of St. Legontian doubted whether the bread and wine truly became the Body and Blood of Christ. During the consecration the Host changed into flesh and the wine into blood before his eyes.',
					'The relics have been preserved for centuries in the Basilica of St. Francis in Lanciano. They have been examined many times; reports describe human cardiac tissue and blood type AB.',
				],
			},
			{
				heading: 'What it means for us',
				paragraphs: [
					'Lanciano is often called the first and greatest Eucharistic miracle. It speaks directly to Christ’s words at the Last Supper: “This is my body… This is my blood.” Pilgrims come to adore the mystery of faith made visible in a small Italian town.',
				],
			},
		],
	},
	{
		slug: 'bolsena-orvieto',
		title: 'Bolsena & Orvieto',
		category: 'Bleeding host',
		location: 'Bolsena & Orvieto, Italy',
		date: '1263',
		excerpt:
			'During Mass at Bolsena the Host bled onto the corporal; the miracle led Pope Urban IV to extend the feast of Corpus Christi to the whole Church.',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'The priest Peter of Prague, troubled by doubts about the Real Presence, was celebrating Mass at Bolsena when the consecrated Host began to bleed onto the corporal. Blood stained the linen in a way witnesses could not explain away as accident.',
					'Pope Urban IV, then staying at Orvieto, investigated the event. The corporal was enshrined in the Cathedral of Orvieto, where it is still honored. Moved by the sign, the Pope asked St. Thomas Aquinas to compose texts for a new feast.',
				],
			},
			{
				heading: 'What it means for us',
				paragraphs: [
					'The miracle of Bolsena is inseparable from the solemnity of Corpus Christi—the Church’s annual celebration of the gift of the Eucharist in procession and adoration. It reminds us that doubt can yield to worship when Christ makes His presence known.',
				],
			},
		],
	},
	{
		slug: 'santarem',
		title: 'Santarém',
		category: 'Pilgrimage shrine',
		location: 'Santarém, Portugal',
		date: '1225',
		excerpt:
			'A Host taken from church was returned after striking a stone with blood; the Church of St. Stephen became a center of Eucharistic devotion.',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'According to tradition, a woman troubled in conscience took a consecrated Host from Mass and brought it home. The Host left her hand, rose into the air, and struck a stone in her house, leaving blood on the stone and on the cloth beneath it.',
					'The parish priest and faithful carried the Host in procession back to the church. The blood-stained stone and the Host have been venerated for centuries at the Church of the Holy Miracle (Igreja do Santíssimo Milagre) in Santarém.',
				],
			},
			{
				heading: 'What it means for us',
				paragraphs: [
					'Santarém calls sinners to repentance and reverence for the Eucharist. The Lord does not abandon those who have offended Him; He invites return to the sacraments and to faith in His merciful presence in the tabernacle.',
				],
			},
		],
	},
	{
		slug: 'blanot',
		title: 'Blanot',
		category: 'Bleeding host',
		location: 'Blanot, France',
		date: '1331',
		excerpt:
			'A Host that fell into the chalice during Mass left blood on the corporal—preserved and venerated in the parish for centuries.',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'During Mass in the village of Blanot, a Host slipped from the priest’s fingers into the chalice. When the corporal was unfolded afterward, parishioners saw blood spread in a pattern that could not be explained as spilled wine alone.',
					'The stained corporal was preserved and authenticated by local bishops. It remains a testimony to faith in the Real Presence in medieval France.',
				],
			},
			{
				heading: 'What it means for us',
				paragraphs: [
					'Even small parishes can become places where Christ shows the holiness of the Eucharist. Blanot encourages careful celebration of Mass and gratitude for ordinary priests who hold the Body of Christ in their hands each day.',
				],
			},
		],
	},
	{
		slug: 'buenos-aires',
		title: 'Buenos Aires',
		category: 'Modern investigation',
		location: 'Buenos Aires, Argentina',
		date: '1996',
		excerpt:
			'Hosts reserved in the tabernacle appeared as bloody flesh; scientific analysis reported human heart tissue.',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'In August 1996, at the parish of Santa María y Caballito Álvaro, a parishioner noticed a Host on the floor after Communion. The priest placed it in water to dissolve it according to Church law; days later it showed a reddish stain. The bishop ordered it kept in the tabernacle.',
					'In 1998 a similar event occurred with several hosts in the tabernacle. Samples were sent for analysis without revealing their origin. Dr. Ricardo Castañón Gómez and other researchers reported findings consistent with human tissue, including muscle from an inflamed heart.',
				],
			},
			{
				heading: 'What it means for us',
				paragraphs: [
					'Modern science cannot replace faith, but this event has strengthened many in belief that the Eucharist is not mere symbol. The Church evaluates such reports with care; the faithful are invited above all to adore Christ present under the appearances of bread and wine.',
				],
			},
		],
	},
	{
		slug: 'sokolka',
		title: 'Sokółka',
		category: 'Modern investigation',
		location: 'Sokółka, Poland',
		date: '2008',
		excerpt:
			'A Host that fell during Communion was preserved and later found to bear tissue resembling heart muscle, in the shape of a cross.',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'In October 2008, during Mass at the church of St. Anthony in Sokółka, a consecrated Host fell from a priest’s hands. Following rubrics, it was placed in water; when it did not dissolve as expected, it was dried and secured in the tabernacle.',
					'Examination by medical professors in 2009 reported that part of the Host had become tissue with characteristics of human heart muscle, arranged in a form suggesting a cross. The Archbishop of Białystok authorized devotion while leaving final judgment to the faith of the faithful.',
				],
			},
			{
				heading: 'What it means for us',
				paragraphs: [
					'Sokółka joined a number of Polish Eucharistic miracles that have renewed adoration in parishes across the country. The sign points to Christ’s suffering love on the Cross, present in every Mass.',
				],
			},
		],
	},
	{
		slug: 'legnica',
		title: 'Legnica',
		category: 'Modern investigation',
		location: 'Legnica, Poland',
		date: '2013',
		excerpt:
			'A Host that fell onto a corporal during Communion was studied and found to contain tissue identified as human heart muscle.',
		sections: [
			{
				heading: 'What happened',
				paragraphs: [
					'On Christmas Day 2013, at St. Hyacinth church in Legnica, a Host fell to the corporal during distribution of Communion. It was placed in water and later showed a red stain spreading through the center.',
					'The parish followed Church procedures for investigation. In 2014, forensic medicine specialists reported that fragments contained tissue consistent with human heart muscle, with signs of distress. The bishop permitted public veneration in the parish.',
				],
			},
			{
				heading: 'What it means for us',
				paragraphs: [
					'Legnica reminds the faithful that Christ gives Himself fully in the Eucharist—Body, Blood, soul, and divinity. The miracle calls for genuflection, silence, and frequent reception of Holy Communion in a state of grace.',
				],
			},
		],
	},
];

export function getEucharisticMiracle(slug: string): EucharisticMiracle | undefined {
	return eucharisticMiracles.find((m) => m.slug === slug);
}
