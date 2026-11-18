import type { OldTestamentPerson } from '../types';

const person: OldTestamentPerson = {
	order: 10,
	slug: 'joseph',
	title: 'Joseph',
	alsoKnownAs: 'Joseph son of Jacob; Zaphenath-paneah',
	role: 'patriarch',
	excerpt:
		'Favourite son of Jacob, sold into Egypt by his brothers, raised from prison to rule under Pharaoh—and the one who saved his family, foreshadowing Christ’s rejection and exaltation.',
	lifeDates: 'c. 1700–1600 BC (traditional biblical chronology)',
	scriptureReference: 'Genesis 37–50; Psalm 105:16–22; Acts 7:9–16; Hebrews 11:22',
	feastDays: 'March 19 is St. Joseph of Nazareth; the patriarch is honoured in salvation history and typology',
	lastReviewed: '2026-11-18',
	primaryReferences: [
		{ label: 'Genesis 37–50' },
		{ label: 'Catechism of the Catholic Church 312 (God bringing good from evil)' },
	],
	keyMoments: [
		{
			title: 'Dreams and the pit',
			reference: 'Genesis 37',
			summary:
				'Joseph’s dreams of sheaves and stars provoke his brothers; they cast him into a pit and sell him to traders. What they meant for evil, God would turn to good.',
		},
		{
			title: 'Prison and Pharaoh’s dreams',
			reference: 'Genesis 39–41',
			summary:
				'Falsely accused by Potiphar’s wife, Joseph interprets cupbearer and baker dreams in prison, then Pharaoh’s dreams of famine—and is set over all Egypt.',
		},
		{
			title: 'Reconciliation with his brothers',
			reference: 'Genesis 42–45',
			summary:
				'Joseph tests his brothers, weeps, and reveals himself: “God sent me before you to preserve life.” Forgiveness restores the family of Israel.',
		},
		{
			title: 'Bones carried from Egypt',
			reference: 'Genesis 50:24–25; Exodus 13:19; Hebrews 11:22',
			summary:
				'By faith Joseph speaks of the Exodus and commands that his bones leave Egypt—hope that God’s promise outlasts the grave and foreign soil.',
		},
	],
	sections: [
		{
			heading: 'Who was Joseph?',
			paragraphs: [
				'Joseph was Rachel’s firstborn and Jacob’s beloved, marked by a long robe and prophetic dreams. Betrayed by his brothers, he became a slave and prisoner in Egypt, then vizier who administered grain in a worldwide famine.',
				'He is a model of chastity, administrative wisdom, and forgiveness. Christian tradition has long seen him as a type of Christ: beloved of the Father, sold for silver, condemned unjustly, raised up, and becoming the bread of life for the hungry.',
			],
		},
		{
			heading: 'Full biography',
			paragraphs: [
				'At seventeen Joseph reported his brothers’ misdeeds and told his dreams; jealousy peaked at Dothan. Judah suggested selling him; he was taken to Egypt and bought by Potiphar. The Lord made him prosper until false accusation landed him in prison, where he again rose to trust.',
				'After interpreting Pharaoh’s dreams of seven fat and seven lean years, Joseph stored grain in abundance. His brothers came to buy food; he recognised them, kept Simeon, demanded Benjamin, framed Benjamin with a cup, and finally disclosed himself when Judah offered his life for the boy.',
				'Jacob’s household settled in Goshen. Joseph managed Egypt through the famine, received his father’s blessing for Ephraim and Manasseh, mourned Jacob, reassured his fearful brothers after Jacob’s death, and lived to 110. He was embalmed in Egypt; Moses later carried his bones toward the promised land.',
			],
		},
		{
			heading: 'Providence and forgiveness',
			paragraphs: [
				'Joseph’s confession—“you meant evil against me, but God meant it for good” (Genesis 50:20)—is a cornerstone of Catholic teaching on providence: God can write straight with crooked lines without authoring the sin (CCC 312).',
				'His mercy toward those who wronged him prefigures the Gospel’s command to forgive. The bread he distributed in famine hints at Christ, who feeds the world with Himself.',
			],
		},
		{
			heading: 'Death and legacy',
			paragraphs: [
				'Joseph dies in Egypt yet belongs to the promise: his bones await the Exodus. Stephen’s speech in Acts retells his story as part of Israel’s path to Christ.',
				'He remains the patriarch of reconciliation—proof that a pit, a prison, and a foreign court cannot cancel God’s purpose for a family or a people.',
			],
		},
		{
			heading: 'Lesson for today',
			paragraphs: [
				'When betrayal and delay mark your path, keep integrity where you are. God may be positioning you to feed others—and to forgive the ones who put you there.',
			],
		},
	],
};

export default person;
