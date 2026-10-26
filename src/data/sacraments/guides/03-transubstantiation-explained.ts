import type { SacramentGuide } from '../types';

const guide: SacramentGuide = {
	slug: 'transubstantiation-explained',
	title: 'Transubstantiation Explained',
	excerpt: 'What the Church means when she says the bread and wine are changed in substance while their appearances remain.',
	sacraments: ['eucharist'],
	lastReviewed: '2026-10-26',
	sources: [
		{ label: 'Catechism of the Catholic Church, §§1373–1377', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'Council of Trent, Session XIII (1551), chapter 4 and canon 2' },
		{ label: 'Pope Paul VI, Mysterium Fidei (1965), §§46–55', url: 'https://www.vatican.va/content/paul-vi/en/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html' },
	],
	sections: [
		{
			heading: 'A word for a mystery',
			paragraphs: [
				'Transubstantiation is the word the Church uses for the change of the bread and wine into the Body and Blood of Christ. The Council of Trent declared that by the consecration “there takes place a change of the whole substance of the bread into the substance of the body of Christ our Lord and of the whole substance of the wine into the substance of his blood,” a change the Church has “fittingly and properly called transubstantiation” (CCC 1376).',
				'The word does not explain away the mystery—no human concept can fully grasp it. It names precisely what changes and what does not, guarding the faith against misunderstandings.',
			],
		},
		{
			heading: 'Substance and appearances',
			paragraphs: [
				'Every thing has what it is (its substance) and how it appears to the senses (its accidents or appearances): color, taste, weight, texture, shape. Normally the two go together. In the Eucharist, the substance of bread and wine ceases to be, and the substance of Christ’s Body and Blood takes its place, while the appearances of bread and wine remain.',
				'This is why a consecrated host still looks, tastes, and would test in a laboratory like bread. The senses are not deceived about what they perceive; they simply cannot perceive substance. What we know of the change, we know by faith in Christ’s word: “This is my body.”',
			],
		},
		{
			heading: 'What it is not',
			paragraphs: [
				'Transubstantiation is not a symbol or a reminder only: Christ is not merely represented. Nor is it “consubstantiation,” the idea that bread and Christ’s body exist together side by side; Trent rejected this, teaching that no substance of bread or wine remains (canon 2).',
				'It is also not a physical or chemical change in the ordinary sense. Christ does not leave heaven or become small; He becomes present sacramentally, in the manner of substance. Pope Paul VI warned against reinterpretations that reduce the change to a mere change of meaning or purpose (Mysterium Fidei 46).',
			],
		},
		{
			heading: 'When and how it happens',
			paragraphs: [
				'The change takes place at the consecration during the Eucharistic Prayer, when a validly ordained priest, acting in the person of Christ, speaks the words of institution over the bread and wine, and the Holy Spirit is invoked upon the gifts (CCC 1353, 1375).',
				'Only wheat bread and grape wine are valid matter for the sacrament. It is not the holiness of the priest that brings about the change, but the power of Christ’s word and the action of the Holy Spirit.',
			],
		},
		{
			heading: 'Why it matters',
			paragraphs: [
				'If the Eucharist is truly Christ, then Holy Communion is a real encounter with Him, the Mass truly makes present His sacrifice, and adoration of the Blessed Sacrament is worship of God Himself.',
				'St. Thomas Aquinas expressed this faith in his hymn Adoro Te Devote: sight, touch, and taste fail to grasp the mystery, but we trust the word of the Son of God, for nothing is truer than the Word of Truth.',
			],
		},
	],
};

export default guide;
