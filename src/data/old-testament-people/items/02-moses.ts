import type { OldTestamentPerson } from '../types';

const person: OldTestamentPerson = {
	order: 2,
	slug: 'moses',
	title: 'Moses',
	alsoKnownAs: 'Moshe; the Lawgiver; servant of the Lord',
	role: 'leader',
	excerpt:
		'Drawn from the Nile, called at the burning bush, and sent to lead Israel out of Egypt—mediator of the Law at Sinai and the prophet whom God knew face to face.',
	lifeDates: 'c. 13th century BC (traditional dating of the Exodus)',
	scriptureReference: 'Exodus; Leviticus; Numbers; Deuteronomy; Acts 7:20–44; Hebrews 3; 11:23–29',
	feastDays: 'September 4 (Roman Martyrology)',
	lastReviewed: '2026-11-18',
	primaryReferences: [
		{ label: 'Exodus 1–34; Deuteronomy 34' },
		{ label: 'Catechism of the Catholic Church 62, 205–208, 2056–2063' },
	],
	keyMoments: [
		{
			title: 'The burning bush',
			reference: 'Exodus 3:1–15',
			summary:
				'God reveals His name—“I AM WHO I AM”—and sends Moses to Pharaoh. Holy ground, vocation, and the divine Name stand at the root of biblical faith (CCC 205–209).',
		},
		{
			title: 'The Passover and Exodus',
			reference: 'Exodus 12–14',
			summary:
				'The blood of the lamb, the night of deliverance, and the crossing of the sea prefigure Baptism and the Eucharist; Christ is our Passover (1 Corinthians 5:7; CCC 1094, 1340).',
		},
		{
			title: 'The Ten Commandments at Sinai',
			reference: 'Exodus 19–20; Deuteronomy 5',
			summary:
				'God gives the Decalogue as the covenant charter of a freed people. Jesus fulfils and deepens the Law without abolishing it (Matthew 5:17; CCC 2056–2074).',
		},
		{
			title: 'Water from the rock and manna',
			reference: 'Exodus 16–17; Numbers 20',
			summary:
				'God feeds Israel with manna and gives water from the rock—signs the New Testament reads of Christ, the living Bread and the spiritual Rock (John 6; 1 Corinthians 10:1–4).',
		},
	],
	sections: [
		{
			heading: 'Who was Moses?',
			paragraphs: [
				'Moses was born a Hebrew slave under Pharaoh’s decree of death, saved by his mother and sister, and raised in the Egyptian court. After killing an Egyptian who abused a Hebrew, he fled to Midian, married Zipporah, and kept sheep until God called him at Horeb.',
				'He became Israel’s liberator, lawgiver, intercessor, and prophet. Scripture says the Lord knew him “face to face,” yet Moses remained the meekest of men—and a sinner who struck the rock in anger and did not enter the land.',
			],
		},
		{
			heading: 'Full biography',
			paragraphs: [
				'At the burning bush Moses objected that he was slow of speech; God gave him Aaron as spokesman and signs to perform. Before Pharaoh he announced the plagues, instituted the Passover, and led the people through the sea. In the wilderness he faced hunger, thirst, complaint, and Amalekite attack.',
				'At Sinai he ascended the mountain, received the tablets of the Law, and interceded when Israel worshipped the golden calf—offering to be blotted out of God’s book for their sake. He erected the tent of meeting, oversaw the tabernacle, and guided the census and camp.',
				'When the spies brought a fearful report, Moses pleaded for the people again. He struck the rock twice at Meribah and was told he would only see the land from afar. On Mount Nebo the Lord showed him Canaan; Moses died there, and God buried him. Joshua succeeded him.',
			],
		},
		{
			heading: 'Mediator of the Law',
			paragraphs: [
				'Moses stands between God and Israel: he receives the Word, proclaims it, and prays when the people fall. The Transfiguration shows Jesus speaking with Moses and Elijah—Law and Prophets bearing witness to the Son (Luke 9:30–31).',
				'Catholic faith holds that the Old Law prepared for the Gospel; its moral core remains, while ceremonial precepts find fulfilment in Christ and the sacraments (CCC 1961–1964). Moses’ veil and glory become, in Paul, a contrast with the greater glory of the new covenant (2 Corinthians 3).',
			],
		},
		{
			heading: 'Death and legacy',
			paragraphs: [
				'Moses dies outside the land yet remains for Israel—and for the Church—the servant through whom God founded a people of the covenant. Jewish and Christian tradition honour his memory; the Roman Martyrology keeps his feast on 4 September.',
				'Every time Catholics hear the Ten Commandments, celebrate the Easter Vigil’s Exodus reading, or approach the Eucharist as Passover fulfilled, they walk in paths Moses first marked out.',
			],
		},
		{
			heading: 'Lesson for today',
			paragraphs: [
				'God can use a hesitant, imperfect person for a mighty deliverance. Leadership means interceding for those you lead—and letting God define success, even if you only see the promise from the mountain.',
			],
		},
	],
};

export default person;
