export interface SacramentSection {
	heading: string;
	paragraphs: string[];
}

export interface Sacrament {
	slug: string;
	title: string;
	excerpt: string;
	sections: SacramentSection[];
}

export const sacraments: Sacrament[] = [
	{
		slug: 'baptism',
		title: 'Baptism',
		excerpt:
			'The gateway to life in Christ—by water and the Holy Spirit we are born anew as children of God.',
		sections: [
			{
				heading: 'What is Baptism?',
				paragraphs: [
					'Baptism is the first of the seven sacraments and the foundation of the whole Christian life. Through Baptism we are freed from sin and reborn as sons and daughters of God; we become members of Christ and are incorporated into the Church.',
					'The Church teaches that Baptism is necessary for salvation for those to whom the Gospel has been proclaimed. Christ Himself commanded His disciples to baptize all nations in the name of the Father, and of the Son, and of the Holy Spirit.',
				],
			},
			{
				heading: 'Signs and effects',
				paragraphs: [
					'The outward sign is the pouring of water or immersion, accompanied by the Trinitarian formula. The grace received forgives all sins, original and personal, and gives the gift of new life in the Holy Spirit.',
					'Baptism leaves an indelible spiritual mark on the soul—we are configured to Christ forever and receive the virtues of faith, hope, and charity.',
				],
			},
			{
				heading: 'Living your Baptism',
				paragraphs: [
					'Every baptized person is called to profess the faith, worship God, and serve others. Renewal of baptismal promises—especially at Easter—reminds us that we are meant to live as light in the world.',
				],
			},
		],
	},
	{
		slug: 'confirmation',
		title: 'Confirmation',
		excerpt:
			'Sealed with the gift of the Holy Spirit, we are strengthened to bear witness to Christ in word and deed.',
		sections: [
			{
				heading: 'What is Confirmation?',
				paragraphs: [
					'Confirmation completes the grace of Baptism. It is the sacrament in which the baptized are more perfectly bound to the Church and enriched with a special strength of the Holy Spirit.',
					'Like the apostles at Pentecost, those who are confirmed are sent to spread and defend the faith by word and action.',
				],
			},
			{
				heading: 'The rite',
				paragraphs: [
					'The bishop (or a priest delegated by him) lays hands on the candidate and anoints the forehead with sacred chrism, saying, “Be sealed with the Gift of the Holy Spirit.” Chrism signifies the gift of the Spirit and membership in Christ, the Anointed One.',
					'The sponsor, chosen from among the faithful, presents the candidate and witnesses to readiness for this step of Christian maturity.',
				],
			},
			{
				heading: 'Gifts for mission',
				paragraphs: [
					'Confirmation increases and deepens baptismal grace. It roots us more deeply in divine filiation, unites us more firmly to Christ, and gives special strength to spread and defend the faith.',
					'The confirmed are called to be active participants in the Church’s mission—courageous witnesses of Christ in family, parish, and society.',
				],
			},
		],
	},
	{
		slug: 'eucharist',
		title: 'Eucharist',
		excerpt:
			'The source and summit of Christian life—the true Body and Blood of Christ offered in thanksgiving at Mass.',
		sections: [
			{
				heading: 'What is the Eucharist?',
				paragraphs: [
					'The Holy Eucharist is the sacrament in which Jesus Christ gives His Body and Blood—soul, divinity, and humanity—for us under the appearances of bread and wine. It is called Holy Communion, the Lord’s Supper, and the Breaking of the Bread.',
					'At the Last Supper Christ instituted this sacrament and commanded the Church to celebrate it until He comes again. The Mass makes present the one sacrifice of Calvary in an unbloody manner.',
				],
			},
			{
				heading: 'Real Presence',
				paragraphs: [
					'By the power of the Holy Spirit and the words of the priest, the bread and wine become the Body and Blood of Christ. This change is called transubstantiation: the substance is wholly changed while the appearances remain.',
					'Adoration of the Blessed Sacrament, frequent Communion, and worthy reception deepen our union with Christ and with one another in the Church.',
				],
			},
			{
				heading: 'Source and summit',
				paragraphs: [
					'The Eucharist builds up the Church, forgives venial sins, strengthens charity, and pledges future glory. All other sacraments and works of the apostolate are bound up with the Eucharist and oriented toward it.',
					'To receive worthily, Catholics prepare through prayer, fasting when required, and sacramental confession if conscious of grave sin.',
				],
			},
		],
	},
	{
		slug: 'penance',
		title: 'Penance',
		excerpt:
			'Also called Reconciliation or Confession—God’s mercy restores the soul wounded by sin to friendship with Him.',
		sections: [
			{
				heading: 'What is Penance?',
				paragraphs: [
					'The sacrament of Penance (or Reconciliation, or Confession) is the means by which the baptized obtain forgiveness for sins committed after Baptism and are reconciled with God and the Church.',
					'Christ entrusted the ministry of reconciliation to the apostles: “Whose sins you forgive are forgiven them.” The priest acts in the person of Christ when he absolves in God’s name.',
				],
			},
			{
				heading: 'The celebration',
				paragraphs: [
					'The penitent examines conscience, expresses sorrow for sin, confesses sins to the priest, receives absolution, and performs the penance given. Contrition, confession, and satisfaction are the acts of the penitent; absolution is the sacramental sign of God’s mercy.',
					'The seal of confession binds the priest to absolute secrecy—what is confessed cannot be revealed under any circumstance.',
				],
			},
			{
				heading: 'Why go to Confession?',
				paragraphs: [
					'Regular confession heals the soul, restores grace lost by mortal sin, and offers counsel for spiritual growth. It is a school of humility and trust in God’s mercy, which is greater than any fault.',
					'The Church encourages frequent reception of this sacrament—even without mortal sin—to grow in holiness and self-knowledge.',
				],
			},
		],
	},
	{
		slug: 'anointing-of-the-sick',
		title: 'Anointing of the Sick',
		excerpt:
			'Christ’s healing presence for those who suffer illness or the frailty of age, uniting their crosses to His.',
		sections: [
			{
				heading: 'What is this sacrament?',
				paragraphs: [
					'Anointing of the Sick is given to those who are seriously ill, facing surgery, weakened by old age, or nearing death. It is not only “last rites” but a sacrament of healing, comfort, and strength for any grave illness.',
					'The Letter of James instructs the sick to call for the elders of the Church to pray over them and anoint them with oil in the name of the Lord.',
				],
			},
			{
				heading: 'Grace and effects',
				paragraphs: [
					'The sacrament unites the sick person to the passion of Christ, brings strength and peace to endure suffering, forgives sins if the person cannot confess, and prepares for the passage to eternal life if death is near.',
					'Viaticum—the Eucharist as food for the journey home—is often received together with Anointing when death is approaching.',
				],
			},
			{
				heading: 'When to receive it',
				paragraphs: [
					'Do not wait until the last moment. Catholics should request Anointing when illness is serious, before major surgery, or when strength is failing. Family and parish communities support the sick through prayer and presence.',
				],
			},
		],
	},
	{
		slug: 'holy-orders',
		title: 'Holy Orders',
		excerpt:
			'Through ordination, deacons, priests, and bishops receive the sacred power to serve God’s people in Christ’s name.',
		sections: [
			{
				heading: 'What is Holy Orders?',
				paragraphs: [
					'Holy Orders is the sacrament through which the mission entrusted by Christ to His apostles continues in the Church until the end of time. It includes three degrees: bishop, priest, and deacon.',
					'Only baptized men who possess the approval of the Church and meet the requirements of law may be ordained. The Church’s discipline reflects the example of Christ, who chose men as apostles.',
				],
			},
			{
				heading: 'The priesthood of Christ',
				paragraphs: [
					'Ordination configures the recipient to Christ the Head and Shepherd. Bishops receive the fullness of the sacrament; priests cooperate with bishops in teaching, sanctifying, and governing; deacons serve the Word, the altar, and charity.',
					'The laying on of hands and prayer of consecration are the visible signs. Ordination imprints an indelible character—the ordained are marked forever as servants of Christ and His Church.',
				],
			},
			{
				heading: 'A call to serve',
				paragraphs: [
					'Vocations to Holy Orders are a gift to the whole Church. Prayer for priests and bishops, encouragement of young men to discern, and support for seminarians help sustain the ministerial priesthood on which the Eucharist and sacraments depend.',
				],
			},
		],
	},
	{
		slug: 'matrimony',
		title: 'Matrimony',
		excerpt:
			'The covenant of married love between man and woman mirrors Christ’s faithful, fruitful love for the Church.',
		sections: [
			{
				heading: 'What is Matrimony?',
				paragraphs: [
					'The sacrament of Matrimony is the covenant by which a man and a woman establish a partnership of the whole of life, ordered toward the good of the spouses and the procreation and education of children.',
					'Christ raised marriage between the baptized to the dignity of a sacrament. Husband and wife confer the sacrament on each other before the Church and her minister.',
				],
			},
			{
				heading: 'Properties of marriage',
				paragraphs: [
					'Catholic marriage is characterized by unity (one man, one woman) and indissolubility (until death). It is also open to life—children are the supreme gift of marriage and a natural fruit of conjugal love.',
					'Preparation programs, the wedding liturgy, and ongoing formation help couples live their vows in faith, hope, and love.',
				],
			},
			{
				heading: 'Domestic church',
				paragraphs: [
					'The family is called the “domestic church,” where parents are the first teachers of faith and children learn to pray and serve. A holy marriage witnesses to the world that self-giving love is possible through grace.',
				],
			},
		],
	},
];

export function getSacrament(slug: string): Sacrament | undefined {
	return sacraments.find((s) => s.slug === slug);
}

export function getSacramentImageSrc(slug: string): string {
	return `${import.meta.env.BASE_URL}sacraments/${slug}.jpg`;
}

export function getSacramentImageAlt(title: string): string {
	return `Sacred art depicting the sacrament of ${title}`;
}
