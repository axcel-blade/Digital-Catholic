import type { TrinityTestament } from './types';

export const trinityScriptureIntro = "The Trinity is revealed gradually across the whole of Scripture. The Old Testament prepares for it with hints and figures; the New Testament reveals it openly in Christ. As St. Augustine taught, the New Testament lies hidden in the Old, and the Old is made manifest in the New (CCC 129).";

export const trinityScripture: TrinityTestament[] = [
	{
		id: 'old-testament',
		title: 'Foreshadowed in the Old Testament',
		intro: "Israel was taught above all that God is one (Deuteronomy 6:4). Within that faith, the Old Testament speaks of God’s Word, Spirit, and Wisdom in ways the Church, in the light of Christ, recognizes as anticipations of the three divine Persons.",
		passages: [
			{
				reference: 'Genesis 1:1–3',
				title: 'God, His Spirit, and His Word at creation',
				meaning: "God creates, the Spirit of God moves over the waters, and God speaks His Word and light comes to be. The Fathers saw here the Father creating through the Word in the Spirit (compare John 1:1–3; CCC 292)."
			},
			{
				reference: 'Genesis 1:26',
				title: '“Let us make man in our image”',
				meaning: "God speaks in the plural when creating humanity. The Church Fathers read this as a first glimpse of communion within the one God, in whose image man and woman are made."
			},
			{
				reference: 'Genesis 18:1–15',
				title: 'Three visitors at Mamre',
				meaning: "Abraham receives three men yet addresses them as one Lord. Christian tradition, and the famous icon of St. Andrei Rublev, sees in this visit a figure of the Holy Trinity."
			},
			{
				reference: 'Numbers 6:24–26',
				title: 'The threefold priestly blessing',
				meaning: "The Lord’s name is invoked three times over the people: to bless and keep, to shine upon, and to give peace. The Church has long heard in it an echo of the Father, Son, and Spirit."
			},
			{
				reference: 'Psalm 33:6',
				title: 'By the Word and the breath of the Lord',
				meaning: "The heavens were made by the Lord’s Word and all their host by the breath of His mouth: God, His Word, and His Spirit acting together in creation."
			},
			{
				reference: 'Psalm 2:7; Psalm 110:1',
				title: 'The Lord speaks to the Messiah, His Son',
				meaning: "The Lord declares the anointed king to be His Son and addresses one whom David calls “my Lord.” Jesus and the apostles use these psalms to reveal the divine Sonship of Christ (Matthew 22:41–45; Hebrews 1:5)."
			},
			{
				reference: 'Proverbs 8:22–31; Wisdom 7:25–26',
				title: 'Wisdom beside God from the beginning',
				meaning: "Wisdom is portrayed as present with God before creation, a reflection of His glory and image of His goodness. The New Testament applies this language to Christ, the Wisdom of God (1 Corinthians 1:24; Hebrews 1:3)."
			},
			{
				reference: 'Proverbs 30:3–4',
				title: '“What is his name, and what is the name of his son?”',
				meaning: "Agur confesses that he has not learned wisdom or the knowledge of the Holy One, then asks who has gone up to heaven and come down, who gathers the wind and binds the waters, and who has set the ends of the earth. He closes by asking the Creator’s name and “the name of his son” (Douay-Rheims). The Fathers heard in this question a hint of the eternal Son, answered in Christ, who alone has come down from heaven and ascended there (John 3:13)."
			},
			{
				reference: 'Isaiah 6:3',
				title: '“Holy, holy, holy”',
				meaning: "The seraphim cry “holy” three times before the Lord’s throne. The Church takes up this hymn in the Sanctus of every Mass in praise of the thrice-holy God."
			},
			{
				reference: 'Isaiah 48:16; 61:1',
				title: 'The Lord, His Spirit, and the One He sends',
				meaning: "The Lord God sends a servant anointed with His Spirit to bring good news to the poor. Jesus reads Isaiah 61 in Nazareth and declares it fulfilled in Himself (Luke 4:18–21)."
			},
			{
				reference: 'Ezekiel 36:26–27; Joel 2:28–29',
				title: 'The promise of God’s Spirit',
				meaning: "God promises a new heart and to pour out His own Spirit on all flesh, a promise fulfilled at Pentecost when the Spirit is sent upon the Church (Acts 2:16–18)."
			}
		]
	},
	{
		id: 'new-testament',
		title: 'Revealed in the New Testament',
		intro: "In the coming of Jesus Christ and the gift of the Holy Spirit, the mystery hidden in God is made known: the Father sends the Son, and the Father and the Son send the Spirit (CCC 237, 244).",
		passages: [
			{
				reference: 'Luke 1:30–35',
				title: 'The Annunciation',
				meaning: "The angel announces that the Holy Spirit will come upon Mary and the power of the Most High will overshadow her, so that her child will be called the Son of God. All three Persons act in the Incarnation."
			},
			{
				reference: 'Matthew 3:16–17; Mark 1:9–11',
				title: 'The Baptism of the Lord',
				meaning: "The Son is baptized, the Spirit descends like a dove, and the Father’s voice proclaims His beloved Son. The Church sees here a manifestation of the Trinity (CCC 535–536)."
			},
			{
				reference: 'Matthew 17:1–5',
				title: 'The Transfiguration',
				meaning: "The Father speaks from the bright cloud over His beloved Son. St. Thomas Aquinas notes that the whole Trinity appears: the Father in the voice, the Son in the man, the Spirit in the shining cloud (CCC 555)."
			},
			{
				reference: 'John 1:1–3, 14, 18',
				title: 'The Word who was God',
				meaning: "The Word was with God and was God, and became flesh. The only Son, who is close to the Father’s heart, has made Him known."
			},
			{
				reference: 'John 10:30; 14:9–11',
				title: '“The Father and I are one”',
				meaning: "Jesus reveals His perfect unity with the Father: whoever has seen Him has seen the Father, for the Father is in Him and He is in the Father."
			},
			{
				reference: 'John 14:16–17, 26; 15:26',
				title: 'Jesus promises the Advocate',
				meaning: "The Father will send another Advocate in the Son’s name: the Spirit of truth, who proceeds from the Father and whom the Son also sends. The Spirit is a distinct divine Person, not merely a power (CCC 243–244)."
			},
			{
				reference: 'Matthew 28:19',
				title: 'Baptism in the one Name',
				meaning: "The risen Christ commands baptism in the name, singular, of the Father and of the Son and of the Holy Spirit. One Name, three Persons: the clearest summary of Trinitarian faith (CCC 232–233)."
			},
			{
				reference: 'Acts 2:32–33',
				title: 'Pentecost',
				meaning: "St. Peter proclaims that Jesus, exalted at the right hand of the Father, has received the promised Holy Spirit from the Father and poured Him out on the Church."
			},
			{
				reference: 'Romans 8:14–17; Galatians 4:4–6',
				title: 'Children of the Father, in the Son, through the Spirit',
				meaning: "God sent His Son so that we might be adopted, and sent the Spirit of His Son into our hearts, crying “Abba, Father.” Christian life is a sharing in the life of the Trinity."
			},
			{
				reference: '1 Corinthians 12:4–6',
				title: 'One Spirit, one Lord, one God',
				meaning: "St. Paul traces the Church’s many gifts, services, and works to the same Spirit, the same Lord, and the same God who works all in all."
			},
			{
				reference: '2 Corinthians 13:13 (13:14)',
				title: 'The apostolic greeting',
				meaning: "Paul blesses the Church with the grace of the Lord Jesus Christ, the love of God, and the fellowship of the Holy Spirit. The priest still greets the people with these words at the beginning of Mass."
			},
			{
				reference: 'Ephesians 1:3–14; 2:18',
				title: 'The plan of salvation',
				meaning: "The Father chose and blessed us in Christ, in whom we are redeemed, and sealed us with the promised Holy Spirit. Through Christ we have access in one Spirit to the Father."
			},
			{
				reference: '1 Peter 1:2; Jude 20–21',
				title: 'Chosen, sanctified, and redeemed',
				meaning: "The apostles describe believers as chosen by God the Father, sanctified by the Spirit, and sprinkled with the blood of Jesus Christ, and urge them to pray in the Spirit and keep themselves in God’s love."
			},
			{
				reference: 'Revelation 1:4–5; 4:8',
				title: 'The worship of heaven',
				meaning: "John greets the churches from the One who is and was and is to come, from the Spirit before His throne, and from Jesus Christ. Heaven sings unceasingly, “Holy, holy, holy.”"
			}
		]
	}
];
