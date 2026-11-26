import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'divine-praises',
	title: 'The Divine Praises',
	alsoKnownAs: 'Blessed be God',
	excerpt: 'Litany of praise prayed at Benediction of the Blessed Sacrament, first composed in reparation for blasphemy.',
	text: 'Blessed be God. Blessed be His Holy Name. Blessed be Jesus Christ, true God and true Man. Blessed be the Name of Jesus. Blessed be His Most Sacred Heart. Blessed be His Most Precious Blood. Blessed be Jesus in the Most Holy Sacrament of the Altar. Blessed be the Holy Spirit, the Paraclete. Blessed be the great Mother of God, Mary most holy. Blessed be her holy and Immaculate Conception. Blessed be her glorious Assumption. Blessed be the name of Mary, Virgin and Mother. Blessed be St. Joseph, her most chaste spouse. Blessed be God in His Angels and in His Saints.',
	relatedGuideTopic: { guide: 'church-history', slug: 'the-ihs-symbol' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Divine Praises', url: 'https://en.wikipedia.org/wiki/Divine_Praises' },
		{ label: 'Catechism of the Catholic Church, §§2142–2149 (The name of the Lord is holy)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What are the Divine Praises?',
			paragraphs: [
				'The Divine Praises are a series of short acclamations, each beginning “Blessed be…”, honouring God, the holy name of Jesus, the Holy Spirit, the Virgin Mary, St. Joseph and the angels and saints. They were composed in 1797 by Fr. Luigi Felici, an Italian Jesuit, as an act of reparation for blasphemy and the misuse of God’s name.',
				'Several lines were added later as devotions grew: the Sacred Heart, the Precious Blood, the Immaculate Conception, the Assumption, St. Joseph and the Holy Spirit. The prayer as a whole is a joyful act of praise that answers profanity with blessing.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'The Divine Praises are traditionally recited at the end of Benediction of the Blessed Sacrament, after the priest has blessed the people with the Eucharist and before the Host is returned to the tabernacle. The priest says each line and the people repeat it.',
				'Many Catholics also pray them privately when they hear God’s name taken in vain, as a quiet act of reparation and love.',
			],
		},
	],
};

export default prayer;
