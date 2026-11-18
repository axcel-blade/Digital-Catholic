import type { OldTestamentPerson } from '../types';

const person: OldTestamentPerson = {
	order: 1,
	slug: 'abraham',
	title: 'Abraham',
	alsoKnownAs: 'Abram; father of many nations',
	role: 'patriarch',
	excerpt:
		'Called by God to leave his country and kindred, father of Isaac and of faith—whose covenant promise the Church reads as fulfilled in Christ and shared with all who believe.',
	lifeDates: 'c. 2000–1800 BC (traditional biblical chronology)',
	scriptureReference: 'Genesis 12–25; Romans 4; Hebrews 11:8–19; James 2:21–23',
	feastDays: 'October 9 (Roman Martyrology, with Sarah)',
	lastReviewed: '2026-11-18',
	primaryReferences: [
		{ label: 'Genesis 12–22' },
		{ label: 'Catechism of the Catholic Church 59–61, 145–147, 2570–2572' },
	],
	keyMoments: [
		{
			title: 'The call to leave home',
			reference: 'Genesis 12:1–3',
			summary:
				'God calls Abram to leave country, kindred, and father’s house for a land He will show him, promising to make him a great nation and a blessing to all families of the earth.',
		},
		{
			title: 'Covenant and circumcision',
			reference: 'Genesis 15; 17',
			summary:
				'God cuts a covenant with Abram, renames him Abraham (“father of a multitude”), and gives circumcision as the sign of the covenant—fulfilled and transformed in Baptism (CCC 527, 1150).',
		},
		{
			title: 'The birth of Isaac',
			reference: 'Genesis 18; 21',
			summary:
				'Against hope, Sarah bears Isaac in old age. The child of promise carries the lineage through which blessing comes to the nations.',
		},
		{
			title: 'The binding of Isaac',
			reference: 'Genesis 22:1–18',
			summary:
				'Abraham offers Isaac on Mount Moriah; God provides a ram instead. The Church sees here a type of the Father who did not spare His own Son, and of Christ’s obedience (Romans 8:32; Hebrews 11:17–19).',
		},
	],
	sections: [
		{
			heading: 'Who was Abraham?',
			paragraphs: [
				'Abraham—first called Abram—was a man of Ur whom God chose to begin a people set apart. Scripture presents him as the friend of God and the father of all who believe, Jew and Gentile alike.',
				'With Sarah his wife he journeyed by faith, waited decades for the promised son, and trusted God even when asked to offer that son. The New Testament holds him up as the pattern of justifying faith (Romans 4; Galatians 3; Hebrews 11).',
			],
		},
		{
			heading: 'Full biography',
			paragraphs: [
				'God called Abram to leave Haran for Canaan and promised land, descendants, and universal blessing. Famine drove him to Egypt; fear led him to present Sarah as his sister—a pattern repeated later with Abimelech. He separated peaceably from Lot, rescued him from captivity, and received Melchizedek’s blessing with bread and wine—an episode the Church connects with the priesthood of Christ and the Eucharist (Hebrews 7; CCC 1544).',
				'When Sarah remained barren, Abraham fathered Ishmael by Hagar at Sarah’s urging. God nonetheless confirmed that the covenant heir would be Isaac, born of Sarah. Abraham bargained with God for Sodom, welcomed the three visitors at Mamre, and later, at God’s command, rose early to take Isaac to Moriah. Seeing his obedience, God swore by Himself to bless Abraham’s offspring.',
				'Sarah died at Hebron; Abraham bought the cave of Machpelah as a burial place—the first owned plot in the promised land. He married Keturah, provided for his other sons, and left everything to Isaac. He died at a good old age and was buried with Sarah.',
			],
		},
		{
			heading: 'Faith and the covenant',
			paragraphs: [
				'Abraham “believed the Lord, and he reckoned it to him as righteousness” (Genesis 15:6). Catholic teaching holds that this faith was living and obedient—not mere assent—culminating in the offering of Isaac (CCC 145–147, 2572).',
				'The promises to Abraham—land, people, and blessing for the nations—unfold through Israel’s history and are fulfilled in Jesus Christ, the true offspring in whom the Gentiles receive adoption (Galatians 3:16, 29). At every Mass the Church remembers “Abraham, our father in faith.”',
			],
		},
		{
			heading: 'Death and legacy',
			paragraphs: [
				'Abraham’s tomb at Machpelah (Hebron) remains a place of reverence for Jews, Christians, and Muslims. For Catholics he is the patriarch of the covenant and a model of prayer, hospitality, and trust under trial.',
				'Mary’s Magnificat and Zechariah’s Benedictus both recall God’s mercy promised to Abraham. To belong to Christ is to share Abraham’s blessing.',
			],
		},
		{
			heading: 'Lesson for today',
			paragraphs: [
				'Faith means going where God leads without seeing the whole map—and holding nothing back, even what we love most, when He asks. Blessing for others often begins with our obedience.',
			],
		},
	],
};

export default person;
