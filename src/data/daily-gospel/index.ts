export interface GospelReflection {
	/** Scripture citation, linked to the full text */
	reference: string;
	title: string;
	/** The passage in brief, in our own words */
	passage: string;
	/** A short explanation of its meaning */
	explanation: string;
	/** A question to carry into prayer */
	question: string;
}

export const dailyGospelIntro =
	'Each day this page offers a Gospel passage, a short explanation, and a question for reflection. The passages rotate through a cycle of key Gospel scenes; they are not the readings set for Mass today, which you can find in the daily lectionary.';

/** One reflection per day, cycling by day of the year. */
export const gospelReflections: GospelReflection[] = [
	{
		reference: 'Luke 1:26–38',
		title: 'The Annunciation',
		passage: 'The angel Gabriel announces to Mary that she will conceive the Son of God by the power of the Holy Spirit. Mary answers, “Let it be done to me according to your word.”',
		explanation: 'Mary’s “yes” opens the door to the Incarnation. Her faith is not passive; she asks a real question, then entrusts herself completely to God’s plan.',
		question: 'Where is God asking for my “yes” today, even before I understand everything?',
	},
	{
		reference: 'Luke 2:1–20',
		title: 'The birth of Jesus',
		passage: 'Jesus is born in Bethlehem and laid in a manger. Angels announce the good news to shepherds, who hurry to find the Child and return glorifying God.',
		explanation: 'God enters the world in poverty and is first recognised by the humble. Mary “kept all these things, pondering them in her heart.”',
		question: 'What would it look like for me to make room for Christ in the ordinary places of my life?',
	},
	{
		reference: 'Matthew 3:13–17',
		title: 'The Baptism of the Lord',
		passage: 'Jesus is baptised by John in the Jordan. The heavens open, the Spirit descends like a dove, and the Father declares, “This is my beloved Son.”',
		explanation: 'At His baptism the Trinity is revealed, and Jesus stands in solidarity with sinners. At our Baptism the Father speaks the same words of love over us.',
		question: 'Do I live as a beloved child of the Father, or as someone still trying to earn His love?',
	},
	{
		reference: 'Matthew 4:1–11',
		title: 'The temptation in the desert',
		passage: 'After forty days of fasting, Jesus is tempted by the devil to turn stones into bread, to test God, and to worship Satan for worldly power. He answers each temptation with the Word of God.',
		explanation: 'Jesus overcomes the temptations that Israel—and every human heart—faces: comfort, control, and power. Scripture is His weapon.',
		question: 'Which temptation do I face most often, and what word of Scripture could help me resist it?',
	},
	{
		reference: 'John 2:1–11',
		title: 'The wedding at Cana',
		passage: 'At a wedding feast the wine runs out. Mary tells the servants, “Do whatever he tells you,” and Jesus turns water into abundant, excellent wine.',
		explanation: 'Jesus’ first sign reveals His glory and points to the new wine of the Kingdom and the Eucharist. Mary’s words are the best advice for every disciple.',
		question: 'What is Jesus telling me to do that I have been putting off?',
	},
	{
		reference: 'Matthew 5:1–12',
		title: 'The Beatitudes',
		passage: 'On the mountain Jesus proclaims who is truly blessed: the poor in spirit, those who mourn, the meek, the merciful, the pure in heart, the peacemakers, and the persecuted.',
		explanation: 'The Beatitudes turn worldly values upside down and describe the face of Christ Himself. They show the path to real happiness.',
		question: 'Which Beatitude challenges me most right now, and why?',
	},
	{
		reference: 'Matthew 6:5–15',
		title: 'The Lord’s Prayer',
		passage: 'Jesus teaches His disciples to pray in secret, without empty words, and gives them the Our Father.',
		explanation: 'The Our Father is the summary of the whole Gospel. It teaches us to call God “Father,” to seek His will first, and to forgive as we are forgiven.',
		question: 'When I pray “forgive us as we forgive,” is there someone I am still refusing to forgive?',
	},
	{
		reference: 'Matthew 6:25–34',
		title: 'Do not worry',
		passage: 'Jesus points to the birds of the air and the lilies of the field and tells His disciples not to be anxious about food or clothing, but to seek first the Kingdom of God.',
		explanation: 'Trust in the Father’s providence frees us from anxiety. This is not carelessness but a reordering of priorities.',
		question: 'What worry could I hand over to the Father today?',
	},
	{
		reference: 'Luke 10:25–37',
		title: 'The Good Samaritan',
		passage: 'Asked “Who is my neighbour?”, Jesus tells of a Samaritan who stops to care for a wounded stranger whom a priest and a Levite had passed by.',
		explanation: 'Love of neighbour knows no boundaries of race, religion, or convenience. Christ Himself is the Good Samaritan who binds our wounds.',
		question: 'Who is the person on the roadside in my life that I am tempted to pass by?',
	},
	{
		reference: 'Luke 10:38–42',
		title: 'Martha and Mary',
		passage: 'Martha is busy with serving while her sister Mary sits at Jesus’ feet listening. Jesus says Mary has chosen the better part.',
		explanation: 'Service matters, but it must flow from listening to the Lord. Activity without prayer leaves us anxious and distracted.',
		question: 'Have I given time today simply to sit and listen to Jesus?',
	},
	{
		reference: 'Luke 15:1–10',
		title: 'The lost sheep and the lost coin',
		passage: 'Jesus tells of a shepherd who leaves ninety-nine sheep to find the one that is lost, and a woman who searches her house for a lost coin. Heaven rejoices over one sinner who repents.',
		explanation: 'God does not wait passively for us; He seeks us out. Every person matters infinitely to Him.',
		question: 'Do I believe that God is searching for me personally, even when I feel lost?',
	},
	{
		reference: 'Luke 15:11–32',
		title: 'The prodigal son',
		passage: 'A younger son squanders his inheritance and returns home in shame. His father runs to embrace him and throws a feast, while the elder brother refuses to celebrate.',
		explanation: 'The Father’s mercy is greater than our sin. The parable also warns against the resentment of those who think they have earned God’s love.',
		question: 'Am I more like the younger son or the elder brother today?',
	},
	{
		reference: 'Mark 4:35–41',
		title: 'Calming the storm',
		passage: 'In a storm on the Sea of Galilee the frightened disciples wake Jesus, who rebukes the wind and says, “Why are you afraid? Have you no faith?”',
		explanation: 'Jesus is Lord even over the chaos of nature. He is present in our storms, even when He seems to be asleep.',
		question: 'What storm in my life do I need to bring to Jesus in trust?',
	},
	{
		reference: 'Mark 5:21–43',
		title: 'Jairus’ daughter and the woman who touched His cloak',
		passage: 'On the way to heal a synagogue leader’s dying daughter, Jesus is touched by a woman suffering for twelve years and heals her. He then raises the girl from death.',
		explanation: 'Faith reaches out to Jesus and is never turned away. He has time for each person and power even over death.',
		question: 'Where do I need to reach out and touch Jesus in faith?',
	},
	{
		reference: 'John 6:1–15',
		title: 'The feeding of the five thousand',
		passage: 'With five barley loaves and two fish offered by a boy, Jesus feeds a vast crowd, and twelve baskets of fragments are gathered.',
		explanation: 'Jesus multiplies what is given to Him. The miracle foreshadows the Eucharist, the bread that will feed the whole world.',
		question: 'What small thing can I offer to Jesus today for Him to multiply?',
	},
	{
		reference: 'John 6:51–69',
		title: 'The Bread of Life',
		passage: 'Jesus declares that His flesh is true food and His blood true drink. Many disciples leave, but Peter says, “Lord, to whom shall we go? You have the words of eternal life.”',
		explanation: 'This teaching is the foundation of the Church’s faith in the Real Presence. Peter’s answer models faith that trusts even when it does not fully understand.',
		question: 'How do I prepare to receive Jesus in the Eucharist?',
	},
	{
		reference: 'Matthew 14:22–33',
		title: 'Walking on the water',
		passage: 'Jesus comes to the disciples walking on the sea. Peter steps out towards Him but begins to sink when he looks at the wind, and Jesus catches him.',
		explanation: 'Faith keeps its eyes on Christ. When we sink, His hand is immediately there to save us.',
		question: 'Where am I looking at the waves instead of at Jesus?',
	},
	{
		reference: 'Matthew 16:13–20',
		title: 'Peter’s confession',
		passage: 'Jesus asks, “Who do you say that I am?” Peter answers, “You are the Christ, the Son of the living God,” and Jesus makes him the rock on which He will build His Church.',
		explanation: 'Each disciple must answer Jesus’ question personally. The Church is built on Peter’s faith and the office Christ entrusted to him.',
		question: 'If Jesus asked me today, “Who do you say that I am?”, how would I answer?',
	},
	{
		reference: 'Matthew 17:1–8',
		title: 'The Transfiguration',
		passage: 'On a high mountain Jesus is transfigured before Peter, James, and John, with Moses and Elijah. The Father says, “This is my beloved Son; listen to him.”',
		explanation: 'The glory of the Resurrection is glimpsed before the Cross, to strengthen the disciples. The Father’s command is simple: listen to Jesus.',
		question: 'How can I make more space to listen to Jesus this week?',
	},
	{
		reference: 'Luke 18:9–14',
		title: 'The Pharisee and the tax collector',
		passage: 'A Pharisee prays proudly, listing his good deeds; a tax collector stands at a distance and prays, “God, be merciful to me a sinner.” Only the second goes home justified.',
		explanation: 'Humility opens the heart to God’s mercy; pride closes it. Prayer begins with honesty about who we are.',
		question: 'Do I compare myself with others when I pray?',
	},
	{
		reference: 'Luke 19:1–10',
		title: 'Zacchaeus',
		passage: 'Zacchaeus, a rich tax collector, climbs a tree to see Jesus. Jesus calls him by name and stays at his house, and Zacchaeus gives half his goods to the poor.',
		explanation: 'An encounter with Jesus changes everything. Conversion bears fruit in justice and generosity.',
		question: 'What would change in my use of money and possessions if Jesus came to stay at my house?',
	},
	{
		reference: 'John 4:5–42',
		title: 'The Samaritan woman at the well',
		passage: 'At Jacob’s well Jesus asks a Samaritan woman for a drink and offers her living water. She recognises Him as the Messiah and runs to tell her town.',
		explanation: 'Jesus meets us in our thirst and our past, without condemnation, and turns us into witnesses.',
		question: 'What am I really thirsting for, and have I brought that thirst to Jesus?',
	},
	{
		reference: 'John 8:1–11',
		title: 'The woman caught in adultery',
		passage: 'The scribes bring a woman to be stoned. Jesus says, “Let the one among you who is without sin cast the first stone,” and then tells her, “Go, and from now on do not sin any more.”',
		explanation: 'Jesus unites mercy and truth: He refuses to condemn, but He also calls to conversion.',
		question: 'Do I receive God’s mercy as a call to begin again?',
	},
	{
		reference: 'John 11:1–44',
		title: 'The raising of Lazarus',
		passage: 'Jesus weeps at the tomb of His friend Lazarus, then calls him out of the grave. He tells Martha, “I am the resurrection and the life.”',
		explanation: 'Jesus shares our grief and has power over death. The miracle anticipates His own Resurrection.',
		question: 'Where do I need to hear Jesus say “Come out” in my life?',
	},
	{
		reference: 'John 13:1–15',
		title: 'The washing of the feet',
		passage: 'At the Last Supper Jesus washes His disciples’ feet and tells them, “As I have done for you, you should also do.”',
		explanation: 'The Master becomes a servant. Christian authority and love are expressed in humble service.',
		question: 'Whose feet am I being asked to wash this week?',
	},
	{
		reference: 'John 15:1–11',
		title: 'The vine and the branches',
		passage: 'Jesus says, “I am the vine, you are the branches. Whoever remains in me and I in him will bear much fruit, because without me you can do nothing.”',
		explanation: 'Fruitfulness comes from union with Christ, nourished through prayer and the sacraments. The Father prunes us so that we bear more fruit.',
		question: 'What helps me remain in Christ, and what pulls me away?',
	},
	{
		reference: 'Luke 22:39–46',
		title: 'The agony in the garden',
		passage: 'In Gethsemane Jesus prays in anguish, “Father, if you are willing, take this cup away from me; still, not my will but yours be done.”',
		explanation: 'Jesus fully accepts the Father’s will in human weakness. He teaches us to pray honestly and to surrender.',
		question: 'Is there a “cup” in my life I need to bring to the Father in honest prayer?',
	},
	{
		reference: 'Luke 23:33–43',
		title: 'The Crucifixion and the good thief',
		passage: 'Crucified between two criminals, Jesus prays for those who crucify Him. To the repentant thief He promises, “Today you will be with me in Paradise.”',
		explanation: 'The Cross is the supreme revelation of God’s love and mercy. It is never too late to turn to Christ.',
		question: 'What do I want to say to Jesus as I look at the Cross?',
	},
	{
		reference: 'John 20:1–18',
		title: 'The empty tomb',
		passage: 'Mary Magdalene finds the tomb empty and weeps. The risen Jesus calls her by name, and she becomes the first witness of the Resurrection.',
		explanation: 'The Resurrection changes everything: death is not the end. Jesus knows each of us by name.',
		question: 'How does the Resurrection change the way I face loss and fear?',
	},
	{
		reference: 'Luke 24:13–35',
		title: 'The road to Emmaus',
		passage: 'Two discouraged disciples walk with the risen Jesus without recognising Him. He explains the Scriptures, and they recognise Him in the breaking of the bread.',
		explanation: 'This is the shape of the Mass: Christ speaks in the Scriptures and gives Himself in the Eucharist. Their hearts burn within them.',
		question: 'Has my heart burned within me as I heard the Word of God recently?',
	},
	{
		reference: 'John 21:15–19',
		title: '“Do you love me?”',
		passage: 'Three times the risen Jesus asks Peter, “Do you love me?”, and three times entrusts him with His flock: “Feed my sheep.”',
		explanation: 'Jesus heals Peter’s threefold denial with a threefold profession of love and gives him a mission. Our failures are not the end of our vocation.',
		question: 'How would I answer if Jesus asked me, “Do you love me?”',
	},
	{
		reference: 'Matthew 28:16–20',
		title: 'The Great Commission',
		passage: 'The risen Jesus sends the apostles to make disciples of all nations, baptising and teaching them, and promises, “I am with you always, until the end of the age.”',
		explanation: 'Every Christian shares in this mission. We go not alone but with the promise of Christ’s presence.',
		question: 'Who is one person with whom I could share my faith this week?',
	},
];

/** Index of today's reflection, cycling through the list by day of the year. */
export function reflectionIndexFor(date: Date): number {
	const start = Date.UTC(date.getFullYear(), 0, 0);
	const day = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - start) / 86_400_000);
	return day % gospelReflections.length;
}
