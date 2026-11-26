import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'act-of-faith',
	title: 'Act of Faith',
	alsoKnownAs: 'O my God, I firmly believe',
	excerpt: 'Traditional prayer expressing belief in the Holy Trinity, in Christ’s saving death and in all that God has revealed.',
	text: 'O my God, I firmly believe that Thou art one God in three Divine Persons, Father, Son, and Holy Spirit; I believe that Thy Divine Son became man and died for our sins, and that He will come to judge the living and the dead. I believe these and all the truths which the holy Catholic Church teaches, because Thou hast revealed them, who canst neither deceive nor be deceived. Amen.',
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Theological virtues', url: 'https://en.wikipedia.org/wiki/Theological_virtues' },
		{ label: 'Catechism of the Catholic Church, §§1814–1816 (Faith)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Act of Faith?',
			paragraphs: [
				'Faith is the theological virtue “by which we believe in God and believe all that he has said and revealed to us” (CCC 1814). The Act of Faith is one of three traditional prayers, with the Acts of Hope and Love, that express the three theological virtues given at baptism.',
				'The prayer summarises the heart of the Creed: the Trinity, the Incarnation, Christ’s death for our sins and his return as judge. It gives the reason for faith: God himself has revealed these truths, and he “can neither deceive nor be deceived.”',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'The Acts of Faith, Hope and Love are often prayed together in the morning or evening, and many Catholics learn them for First Communion or Confirmation. They are especially fitting in times of doubt or temptation.',
				'Praying the Act of Faith is not only reciting beliefs; it is a personal act of trust in God who speaks, just as Abraham “believed the Lord” (Genesis 15:6).',
			],
		},
	],
};

export default prayer;
