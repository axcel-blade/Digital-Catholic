import type { BibleBook } from '../types';

export const newTestamentBooks: BibleBook[] = [
	{
		order: 47,
		slug: 'matthew',
		title: 'Matthew',
		abbreviation: 'Mt',
		testament: 'new',
		category: 'gospels',
		excerpt:
			'The Gospel for the Church: Jesus the Messiah fulfills the Law and the prophets and founds His kingdom.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Matthew opens with Jesus’ genealogy from Abraham and David, then the virginal conception and birth in Bethlehem. The Magi and flight to Egypt show Gentiles and threats to the newborn King.',
					'The Sermon on the Mount presents the beatitudes and the new righteousness of the kingdom. Miracles, parables, and Peter’s confession lead to Jerusalem, Passion, death, and resurrection with the Great Commission to baptize all nations.',
					'Structured in five discourse blocks echoing the Pentateuch, Matthew presents Jesus as the new Moses and Emmanuel—God with us.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Fulfillment formulas (“This was to fulfill…”) tie Christ to the Old Testament. The Church, keys of the kingdom, and binding and loosing (Mt 16, 18) shape Catholic ecclesiology.',
					'Eucharistic language in Mt 26 and the presence of Christ “until the end of the age” ground liturgy and mission.',
				],
			},
		],
	},
	{
		order: 48,
		slug: 'mark',
		title: 'Mark',
		abbreviation: 'Mk',
		testament: 'new',
		category: 'gospels',
		excerpt:
			'The urgent Gospel of the suffering Servant and Son of God, whose messianic secret unfolds in deeds.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Mark moves quickly from John the Baptist to Jesus’ baptism, temptation, and Galilean ministry of healing and exorcism. Parables reveal the kingdom; the disciples misunderstand.',
					'Peter confesses Christ; transfiguration follows. Journey to Jerusalem brings three passion predictions. The Last Supper, Gethsemane, trial, crucifixion, and empty tomb end with the women told— and silence at first.',
					'The earliest Gospel in tradition, Mark emphasizes action and the cost of discipleship.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'The messianic secret and the suffering Son of Man correct worldly notions of power. “Take up your cross” defines following Christ.',
					'Mark’s brevity suits proclamation; the longer endings in manuscripts affirm resurrection appearances and mission.',
				],
			},
		],
	},
	{
		order: 49,
		slug: 'luke',
		title: 'Luke',
		abbreviation: 'Lk',
		testament: 'new',
		category: 'gospels',
		excerpt:
			'Good news for the poor: Jesus brings salvation to all, with special care for outcasts, women, and Gentiles.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Luke pairs with Acts as a two-volume work. Infancy narratives feature Mary, Zechariah, and Simeon. Genealogy reaches Adam, stressing universal scope.',
					'Parables unique to Luke—the Good Samaritan, prodigal son, rich man and Lazarus—stress mercy and reversal. Women disciples appear; the Spirit guides Jesus and the Church.',
					'Resurrection on the road to Emmaus and ascension from Bethany prepare for Acts. Meals and joy mark Lucan theology.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Mary’s fiat and Magnificat embody discipleship. Luke shapes Marian feasts and concern for the poor in Catholic social teaching.',
					'The Eucharist at Emmaus (Lk 24) is a model of liturgical recognition of Christ in word and sacrament.',
				],
			},
		],
	},
	{
		order: 50,
		slug: 'john',
		title: 'John',
		abbreviation: 'Jn',
		testament: 'new',
		category: 'gospels',
		excerpt:
			'The beloved disciple proclaims the Word made flesh so that you may believe and have life in His name.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'The prologue identifies Jesus as the eternal Word, light, and only Son. Signs—water to wine, healing, raising Lazarus—reveal His glory. Long discourses teach union with Christ as vine, bread of life, and way to the Father.',
					'The farewell discourse promises the Paraclete. Passion is told with sovereignty: “I lay down my life.” Mary at the cross and the beloved disciple receive new roles.',
					'Resurrection appearances include Thomas and Peter’s restoration. The book ends stating its purpose: faith in the Christ, the Son of God.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'John’s high Christology supports doctrine of the Incarnation and Trinity. “This is my body” in the Bread of Life discourse (Jn 6) is central to Eucharistic faith.',
					'The Church reads John especially in Lent, Easter, and major feasts; sacraments and eternal life are woven through the text.',
				],
			},
		],
	},
	{
		order: 51,
		slug: 'acts',
		title: 'Acts of the Apostles',
		abbreviation: 'Acts',
		testament: 'new',
		category: 'acts',
		excerpt:
			'The Spirit spreads the Gospel from Jerusalem to Rome, founding the Church through the apostles and Paul.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Acts begins with ascension and Pentecost: the Spirit fills the disciples. Peter preaches; three thousand are baptized. Deacons are appointed; Stephen martyred.',
					'Philip, Peter, and the conversion of Cornelius open the Church to Gentiles. Paul’s conversion, missionary journeys, council of Jerusalem, and trials before Jews and Romans dominate the narrative.',
					'The book ends with Paul preaching freely in Rome— the Gospel unhindered. Luke presents the Church as Spirit-led, apostolic, and catholic in reach.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Sacraments (baptism, confirmation, Eucharist, orders) and communal life (Acts 2, 4) model parish and diocese. Succession from Peter and the apostles grounds Catholic ministry.',
					'Acts is read in the Easter season; it shows that persecution and growth go together under Providence.',
				],
			},
		],
	},
	{
		order: 52,
		slug: 'romans',
		title: 'Romans',
		abbreviation: 'Rom',
		testament: 'new',
		category: 'pauline',
		excerpt:
			'Paul’s master letter on justification by faith, life in the Spirit, and God’s plan for Jew and Gentile.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'To the church in Rome, Paul sets forth the Gospel: all have sinned; righteousness is revealed through faith in Christ. Adam and Christ contrast death and life.',
					'Chapters 6–8 treat baptism, freedom from sin, and the Spirit’s witness as children of God. Chapters 9–11 wrestle with Israel’s role; 12–16 exhort to love, obedience to authorities, and unity.',
					'Romans is systematic yet pastoral, aiming to strengthen a mixed Jewish-Gentile community at the empire’s center.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Romans shaped Augustine, Luther, and Catholic reform; the Church reads it with James and tradition: faith works through love (Gal 5:6).',
					'Justification is gift and call to holiness; the Christian lives in the Spirit, not the flesh alone.',
				],
			},
		],
	},
	{
		order: 53,
		slug: '1-corinthians',
		title: '1 Corinthians',
		abbreviation: '1 Cor',
		testament: 'new',
		category: 'pauline',
		excerpt:
			'Paul addresses division, morality, worship, and resurrection in a gifted but troubled Corinthian church.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Reports of factions, immorality, and lawsuits prompt Paul to call for unity in the cross. Marriage, virginity, and food offered to idols are treated pastorally.',
					'Liturgical disorder at the Lord’s Supper is corrected; spiritual gifts serve the body, with love (chapter 13) as the greatest. Christ is the last Adam; the dead will rise.',
					'The collection for Jerusalem and travel plans close the letter. Paul’s authority and fatherly tone pervade.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'1 Cor 11 and 15 are foundational for Eucharist and bodily resurrection. Love never fails— a charter for parish life.',
					'The Church sees here the need for doctrine, discipline, and charity together in one body.',
				],
			},
		],
	},
	{
		order: 54,
		slug: '2-corinthians',
		title: '2 Corinthians',
		abbreviation: '2 Cor',
		testament: 'new',
		category: 'pauline',
		excerpt:
			'Paul defends his apostolic ministry of suffering and reconciliation in Christ’s new creation.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'After a painful visit and sharp letter, Paul writes to restore fellowship. Ministers are servants of the new covenant, glory surpassing Moses’s.',
					'Treasure in earthen vessels: apostles share Christ’s death and life. Collection for saints continues; Paul boasts in weaknesses where Christ’s power rests.',
					'Final warnings against false apostles and call to purity precede blessing and greeting.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Reconciliation ministry (2 Cor 5) shapes confession and peace. Apostolic suffering is not failure but participation in Christ.',
					'Bishops and priests read Paul’s heart for their flock: frank correction and tender mercy.',
				],
			},
		],
	},
	{
		order: 55,
		slug: 'galatians',
		title: 'Galatians',
		abbreviation: 'Gal',
		testament: 'new',
		category: 'pauline',
		excerpt:
			'Paul insists that Gentiles are justified by faith in Christ, not circumcision and works of the Law alone.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Galatians is passionate: “O foolish Galatians!” Paul’s gospel came by revelation; Peter’s inconsistency at Antioch is rebuked. Abraham believed— promise, not Law, justifies.',
					'Christ redeemed us from the curse of the Law; we are sons and heirs. Freedom is not license but love of neighbor; Spirit produces fruit, not flesh.',
					'Paul bears the marks of Jesus; blessing and curse close the letter.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Galatians defends grace and the inclusion of all nations in the Church. Catholic teaching holds faith and works united in charity, not merit apart from Christ.',
					'“Crucified to the world” (Gal 6:14) shapes Christian identity over cultural conformity.',
				],
			},
		],
	},
	{
		order: 56,
		slug: 'ephesians',
		title: 'Ephesians',
		abbreviation: 'Eph',
		testament: 'new',
		category: 'pauline',
		excerpt:
			'Christ unites Jew and Gentile in one Church, His body, and calls all to holiness in love.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Blessing in Christ recounts election, redemption, and the mystery revealed: Gentiles are co-heirs. Christ is head over all; apostles and prophets found the Church.',
					'Household codes address marriage as Christ and Church, children, slaves, and masters— read in their historical context and in light of mutual submission in the Lord.',
					'The armor of God concludes exhortation to stand against evil. Ephesians is lyrical and ecclesial.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Marriage theology in Eph 5 grounds the sacrament of Matrimony. One Lord, one faith, one baptism (Eph 4) express Catholic unity.',
					'The letter elevates the Church as Christ’s body and temple, prefiguring liturgical and mystical tradition.',
				],
			},
		],
	},
	{
		order: 57,
		slug: 'philippians',
		title: 'Philippians',
		abbreviation: 'Phil',
		testament: 'new',
		category: 'pauline',
		excerpt:
			'Joy in Christ from prison: humility, friendship, and citizenship in heaven.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Paul thanks the Philippians for support; his imprisonment advances the Gospel. Exhortation to unity and humility culminates in the Christ hymn: though divine, He emptied Himself to the cross and is exalted.',
					'Paul presses toward the goal; enemies of the cross are warned. Greetings include the household of Caesar.',
					'The tone is warm, thankful, and confident in the Lord.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Kenosis (self-emptying) shapes Christology and service. Rejoice in the Lord always— a watchword for Christian life.',
					'Philippians supports devotion to the suffering Christ and perseverance in vocation.',
				],
			},
		],
	},
	{
		order: 58,
		slug: 'colossians',
		title: 'Colossians',
		abbreviation: 'Col',
		testament: 'new',
		category: 'pauline',
		excerpt:
			'Christ is supreme over creation and error; believers are raised and hidden with Him in God.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Thanksgiving for faith in Colossae leads to a hymn: in Christ all fullness dwells; He is firstborn of creation and Church, reconciling all things by the cross.',
					'Paul warns against philosophy and asceticism that deny the body’s dignity. New life means putting on Christ in relationships.',
					'Personal notes on Onesimus, Tychicus, and fellow workers close the letter.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Colossians combats early heresies by asserting Christ’s full divinity and humanity— central to Catholic Christology.',
					'“Set your minds on things above” and baptismal imagery (Col 2–3) link liturgy and moral life.',
				],
			},
		],
	},
	{
		order: 59,
		slug: '1-thessalonians',
		title: '1 Thessalonians',
		abbreviation: '1 Thes',
		testament: 'new',
		category: 'pauline',
		excerpt:
			'Paul’s earliest letter encourages a young church in holiness and hope in Christ’s coming.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Paul recalls his gentle mission among the Thessalonians and their faith amid affliction. Holiness in sexuality and love, honest work, and respect for leaders are urged.',
					'Grief over the dead is answered: the Lord will descend; dead and living will meet Him. The day of the Lord comes like a thief; stay awake.',
					'Final exhortations and benediction seal Paul’s affection.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Eschatology here must be read with later tradition: the Church teaches one definitive coming and judgment, not repeated failed predictions.',
					'Hope in resurrection comforts the bereaved and sustains moral vigilance.',
				],
			},
		],
	},
	{
		order: 60,
		slug: '2-thessalonians',
		title: '2 Thessalonians',
		abbreviation: '2 Thes',
		testament: 'new',
		category: 'pauline',
		excerpt:
			'Correction about the parousia and encouragement amid persecution and idleness.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Thanksgiving for growing faith and endurance. The man of lawlessness must be revealed before the day of the Lord; believers are not to be alarmed by false spirits or letters.',
					'Stand firm in tradition received by word or letter. Idlers are admonished to work quietly and not grow weary in doing good.',
					'Paul prays that the Lord may comfort and establish hearts in every good work.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Tradition and magisterial authority (“hold to the traditions”) support Catholic apostolic succession. Apocalyptic imagery is interpreted soberly in the Church.',
					'Perseverance and orderly community life balance eager expectation of Christ.',
				],
			},
		],
	},
	{
		order: 61,
		slug: '1-timothy',
		title: '1 Timothy',
		abbreviation: '1 Tm',
		testament: 'new',
		category: 'pauline',
		excerpt:
			'Pastoral instruction on sound doctrine, worship, and leadership for Timothy in Ephesus.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Paul urges Timothy to remain and combat false teaching. Prayer for all, including rulers, is fitting. Women’s roles and modesty are addressed in context of the household of God.',
					'Qualifications for bishops and deacons emphasize virtue, family stability, and holding the mystery of faith. The good fight, godliness with contentment, and care of the poor close the letter.',
					'“The laborer deserves his wages” and warnings against love of money apply to ministry.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'1 Timothy structures orders of bishop, priest, and deacon in Catholic understanding. Public prayer and dignity of liturgy (1 Tm 2) shape worship.',
					'Sound doctrine and holy pastors protect the flock from error and scandal.',
				],
			},
		],
	},
	{
		order: 62,
		slug: '2-timothy',
		title: '2 Timothy',
		abbreviation: '2 Tm',
		testament: 'new',
		category: 'pauline',
		excerpt:
			'Paul’s farewell charges Timothy to preach the word and share in suffering for the Gospel.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'From prison near death, Paul recalls Timothy’s faith from his grandmother Lois and mother Eunice. Stir up the gift; God gave a spirit of power, love, and self-control.',
					'“All Scripture is inspired” and useful for teaching. Paul’s life is poured out; only Luke remains close. Alexander the coppersmith opposed; the Lord stood by Paul at trial.',
					'Final plea to come before winter; greetings to Prisca and Aquila. The Lord will rescue to His heavenly kingdom.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'2 Tm 3:16 undergirds Catholic reverence for Scripture and Tradition together. Ordination by imposition of hands (2 Tm 1:6) is sacramental.',
					'The letter inspires priests and catechists to fidelity when the world grows hostile to truth.',
				],
			},
		],
	},
	{
		order: 63,
		slug: 'titus',
		title: 'Titus',
		abbreviation: 'Ti',
		testament: 'new',
		category: 'pauline',
		excerpt:
			'Organizing the church in Crete: appoint elders and teach sound doctrine with good works.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Paul left Titus in Crete to appoint presbyters: blameless, hospitable, able to teach and refute opponents. Old and young, slaves, are instructed in godly living.',
					'God’s grace has appeared, training us to renounce impiety and live uprightly while awaiting the blessed hope, the appearing of our great God and Savior.',
					'Avoid foolish controversies; let Christians be ready for every good work.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Grace saves and demands moral transformation— a Catholic synthesis of faith and works. Pastoral letters together model episcopal ministry.',
					'Titus emphasizes that doctrine and ethics are inseparable in credible witness.',
				],
			},
		],
	},
	{
		order: 64,
		slug: 'philemon',
		title: 'Philemon',
		abbreviation: 'Phlm',
		testament: 'new',
		category: 'pauline',
		excerpt:
			'A personal appeal for the Christian reception of Onesimus, the runaway slave turned brother.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Paul writes from prison to Philemon, a Colossian patron, about Onesimus, once useless but now useful in Christ. Paul does not command but appeals to love.',
					'He offers to repay any debt and asks Philemon to receive Onesimus as he would receive Paul. Hospitality and refreshment are hoped for.',
					'The shortest Pauline letter, it is a masterpiece of tact and gospel social ethics.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Baptism makes brothers of unequal status—a seed of Christian liberation read in light of the Church’s teaching on human dignity.',
					'Reconciliation and intercession mirror Christ’s mediation; Paul is an ambassador in chains.',
				],
			},
		],
	},
	{
		order: 65,
		slug: 'hebrews',
		title: 'Hebrews',
		abbreviation: 'Heb',
		testament: 'new',
		category: 'pauline',
		excerpt:
			'Christ is the supreme high priest, offering one sacrifice and inaugurating the new covenant.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'The Son is superior to angels, Moses, and the Levitical priesthood. Melchizedek foreshadows Christ’s eternal priesthood. The old covenant is obsolete; the new is enacted by Christ’s blood.',
					'Faith chapter recounts heroes; we are surrounded by witnesses. Discipline is divine training. “Let us go to him outside the camp” and hold fast.',
					'Closing exhortations on hospitality, marriage, and leaders; the God of peace equips you with every good work.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Hebrews is the Eucharistic and priestly letter par excellence for Catholics: one sacrifice made present in the Mass (Heb 9–10).',
					'Mary and the communion of saints echo the “cloud of witnesses.” Perseverance warns against apostasy from Christ.',
				],
			},
		],
	},
	{
		order: 66,
		slug: 'james',
		title: 'James',
		abbreviation: 'Jas',
		testament: 'new',
		category: 'catholic-epistles',
		excerpt:
			'Faith without works is dead: practical wisdom for a community living the Gospel.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'James, leader of the Jerusalem church, addresses the twelve tribes in the dispersion. Trials produce endurance; ask God for wisdom. The rich are warned; the poor exalted.',
					'Do not be hearers only; control the tongue; true religion cares for orphans and widows. Faith is shown by works— Abraham, Rahab. Prayer heals; confess sins to one another.',
					'The letter is paraenesis— moral exhortation— rooted in Jewish wisdom and Christ’s teaching.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'James complements Paul: faith alive in charity. Catholic tradition honors James the Apostle and this letter in the canon.',
					'Social justice and sacramental undertones (anointing of the sick) connect James to parish life.',
				],
			},
		],
	},
	{
		order: 67,
		slug: '1-peter',
		title: '1 Peter',
		abbreviation: '1 Pt',
		testament: 'new',
		category: 'catholic-epistles',
		excerpt:
			'Hope in Christ for Christians suffering persecution as strangers in the world.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Peter writes to exiles of the dispersion: new birth to a living hope through Christ’s resurrection. Holiness befits God’s people; Christ suffered as example.',
					'Household slaves, wives, and husbands receive instruction. Unity, humility, and resistance to the devil are urged. Christ preached to spirits in prison— a difficult text read within tradition.',
					'Elders are to shepherd willingly; suffering according to God’s will commits the soul to a faithful Creator.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'1 Peter shapes theology of redemptive suffering and baptism (1 Pt 3:21). The Church in persecution finds comfort here.',
					'Peter’s authority links the letter to the papacy and apostolic succession.',
				],
			},
		],
	},
	{
		order: 68,
		slug: '2-peter',
		title: '2 Peter',
		abbreviation: '2 Pt',
		testament: 'new',
		category: 'catholic-epistles',
		excerpt:
			'Warning against false teachers and affirmation that the prophetic word is sure until Christ’s coming.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'God’s power has given all things pertaining to life and godliness; partake of the divine nature. False teachers deny the Lord who bought them; their judgment is sure.',
					'The author recalls the transfiguration as eyewitness; prophecy is more sure, inspired by the Spirit. Scoffers will come; the day of the Lord is like a thousand years.',
					'Grow in grace and knowledge of our Lord; to Him be glory forever.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'“Partakers of the divine nature” (2 Pt 1:4) supports deification theology in the East and West. Scripture and tradition guard against private interpretation.',
					'Patience of God means time for repentance; Christians await new heavens and earth.',
				],
			},
		],
	},
	{
		order: 69,
		slug: '1-john',
		title: '1 John',
		abbreviation: '1 Jn',
		testament: 'new',
		category: 'catholic-epistles',
		excerpt:
			'God is love: tests of true faith in Christ, obedience, and love of the brethren.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'The Word of life was seen and proclaimed. Walking in light means fellowship and confession of sins. Antichrists deny Jesus has come in the flesh.',
					'Children of God keep His commandments; love one another as He commanded. Perfect love casts out fear. The Spirit, water, and blood testify.',
					'The letter ends: keep yourselves from idols; we are in Him who is true.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'1 John is central for Eucharist (1 Jn 5), morality, and Christology against docetism. “God is love” (1 Jn 4:8) defines Christian ethics.',
					'The Church uses 1 John in Easter season and for examining conscience on love and truth.',
				],
			},
		],
	},
	{
		order: 70,
		slug: '2-john',
		title: '2 John',
		abbreviation: '2 Jn',
		testament: 'new',
		category: 'catholic-epistles',
		excerpt:
			'Walk in truth and love; do not receive deceivers who deny Christ come in the flesh.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'The elder writes to the elect lady and her children, whom he loves in truth. All who know the truth love one another because of the truth abiding in us.',
					'Commandment is to love one another as from the beginning. Many deceivers have gone out; do not receive them into house or greet them.',
					'Though brief, the letter guards communion and orthodox Christology in local churches.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Hospitality must not aid those who destroy the faith— a principle for discernment in mission and ecumenism.',
					'Truth and love are inseparable in Catholic life; neither tolerates denial of the Incarnation.',
				],
			},
		],
	},
	{
		order: 71,
		slug: '3-john',
		title: '3 John',
		abbreviation: '3 Jn',
		testament: 'new',
		category: 'catholic-epistles',
		excerpt:
			'Commendation of Gaius for supporting missionaries and rebuke of Diotrephes’ pride.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Gaius is praised for walking in truth and hosting brethren strangers to him, though they are known to God. Such support makes one coworker with the truth.',
					'Diotrephes loves preeminence, refuses the elder, and mistreats the brethren. Demetrius has good testimony from all.',
					'The elder hopes to visit soon. Personal notes reveal early church networks and authority.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Support for clergy and missionaries remains a Catholic duty. Pride in leadership destroys communion.',
					'The letter shows apostolic oversight and the value of hospitality in spreading the Gospel.',
				],
			},
		],
	},
	{
		order: 72,
		slug: 'jude',
		title: 'Jude',
		abbreviation: 'Jude',
		testament: 'new',
		category: 'catholic-epistles',
		excerpt:
			'Contend for the faith once delivered; false teachers face judgment like rebellions of old.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Jude, servant of Jesus and brother of James, intended to write on salvation but must warn against intruders who pervert grace into licentiousness and deny Christ.',
					'Examples from Israel, angels, Sodom, Cain, Balaam, and Korah illustrate judgment. Enoch prophecy and apostolic predictions are cited.',
					'Build yourselves in faith, pray in the Spirit, keep in God’s love, have mercy on doubters. To the only God be glory.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'“The faith once delivered to the saints” (Jude 3) is a motto for Catholic Tradition. Moral disorder and doctrinal denial go together.',
					'The short letter urges vigilance in teaching and prayer amid cultural pressure.',
				],
			},
		],
	},
	{
		order: 73,
		slug: 'revelation',
		title: 'Revelation',
		abbreviation: 'Rev',
		testament: 'new',
		category: 'apocalyptic',
		excerpt:
			'John’s vision on Patmos unveils the Lamb’s victory, the Church in trial, and the new Jerusalem.',
		sections: [
			{
				heading: 'Summary',
				paragraphs: [
					'Letters to seven churches in Asia blend praise, warning, and promise to overcomers. The heavenly throne room and the Lamb who was slain open the scroll of history.',
					'Seals, trumpets, and bowls depict tribulation and judgment. Beasts and Babylon oppose God; the Lamb and His army triumph. Satan is bound; the dead judged.',
					'A new heaven and earth appear; the holy city descends. “Behold, I make all things new.” No temple— the Lord God is its light.',
				],
			},
			{
				heading: 'Themes and key points',
				paragraphs: [
					'Revelation is read in the liturgy especially for All Saints and funerals; it sustains hope under persecution. Catholic interpretation avoids sensationalism, reading symbols in Tradition.',
					'The Eucharistic Lamb, Mary the woman clothed with the sun, and the wedding feast of the Lamb unite apocalypse with Mass and eternal life.',
				],
			},
		],
	},
];
