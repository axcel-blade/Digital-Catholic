import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'tantum-ergo',
	title: 'Tantum Ergo',
	alsoKnownAs: 'Down in adoration falling',
	excerpt: 'The last two verses of a Eucharistic hymn by St. Thomas Aquinas, sung at Benediction before the blessing with the Blessed Sacrament.',
	text: 'So great a Sacrament, therefore, let us venerate with bowed heads; and let the old law give way to the new rite; let faith supply what the senses cannot perceive. To the Father and the Son be praise and jubilation, salvation, honour, power and blessing; and to the One proceeding from them both be equal praise. Amen. V. You have given them bread from heaven. R. Containing in itself all delight. Let us pray. O God, who in this wonderful Sacrament left us a memorial of your Passion, grant us, we pray, so to venerate the sacred mysteries of your Body and Blood that we may always experience in ourselves the fruits of your redemption. Who live and reign for ever and ever. Amen.',
	relatedSaint: 'st-thomas-aquinas',
	relatedGuideTopic: { guide: 'church-history', slug: 'the-pelican-symbol' },
	lastReviewed: '2026-11-26',
	sources: [
		{ label: 'Wikipedia: Tantum ergo', url: 'https://en.wikipedia.org/wiki/Tantum_ergo' },
		{ label: 'Catechism of the Catholic Church, §§1378–1381 (Worship of the Eucharist)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
	],
	sections: [
		{
			heading: 'What is the Tantum Ergo?',
			paragraphs: [
				'The Tantum Ergo is formed by the last two verses of the hymn Pange Lingua (“Sing, my tongue”), written by St. Thomas Aquinas around 1264 for the new feast of Corpus Christi, at the request of Pope Urban IV. It calls the faithful to bow in adoration before the Eucharist and confesses that faith grasps what the senses cannot see: that Christ is truly present under the appearance of bread.',
				'The English above is a close, literal translation of the Latin, made for this page, followed by the traditional versicle and prayer from the Mass of Corpus Christi. A popular verse translation for singing begins “Down in adoration falling.”',
			],
		},
		{
			heading: 'The Latin text and its use',
			paragraphs: [
				'Tantum ergo Sacramentum veneremur cernui: et antiquum documentum novo cedat ritui: praestet fides supplementum sensuum defectui. Genitori, Genitoque laus et iubilatio, salus, honor, virtus quoque sit et benedictio: procedenti ab utroque compar sit laudatio. Amen.',
				'It is sung during Benediction of the Blessed Sacrament, just before the priest blesses the people with the Host in the monstrance, and at the end of Eucharistic processions and the Mass of the Lord’s Supper on Holy Thursday, when the Pange Lingua is sung in full.',
			],
		},
	],
};

export default prayer;
