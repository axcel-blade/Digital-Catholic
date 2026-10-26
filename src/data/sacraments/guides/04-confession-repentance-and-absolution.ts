import type { SacramentGuide } from '../types';

const guide: SacramentGuide = {
	slug: 'confession-repentance-and-absolution',
	title: 'Confession, Repentance and Absolution',
	excerpt: 'How Christ forgives sins through the Sacrament of Penance, and how to make a good confession.',
	sacraments: ['penance'],
	lastReviewed: '2026-10-26',
	sources: [
		{ label: 'Catechism of the Catholic Church, §§1422–1498 (Penance and Reconciliation)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
		{ label: 'John 20:21–23 (USCCB New American Bible)', url: 'https://bible.usccb.org/bible/john/20' },
		{ label: 'Code of Canon Law, canons 959–991', url: 'https://www.vatican.va/archive/cod-iuris-canonici/cic_index_en.html' },
	],
	sections: [
		{
			heading: 'Christ’s gift of mercy',
			paragraphs: [
				'On the evening of His Resurrection, Jesus breathed on the apostles and said: “Receive the holy Spirit. Whose sins you forgive are forgiven them, and whose sins you retain are retained” (John 20:22–23). Through this power, handed on to bishops and priests, Christ continues to forgive sins committed after Baptism (CCC 1441–1445).',
				'The sacrament has many names: Confession, Penance, Reconciliation, and the sacrament of conversion. Each highlights one aspect: we confess our sins, we do penance, and we are reconciled with God and with the Church (CCC 1423–1424).',
			],
		},
		{
			heading: 'Repentance: contrition',
			paragraphs: [
				'Contrition is sorrow of soul and detestation for the sin committed, together with the resolution not to sin again (CCC 1451). It is the first and most important act of the penitent.',
				'Perfect contrition arises from love of God above all else. Imperfect contrition (attrition) arises from other motives, such as the ugliness of sin or fear of punishment; it is a gift of God and is sufficient for forgiveness within the sacrament (CCC 1452–1453). Perfect contrition obtains forgiveness even of mortal sins if it includes the firm resolution to go to confession as soon as possible.',
			],
		},
		{
			heading: 'Confession of sins',
			paragraphs: [
				'The penitent must confess all mortal sins of which they are aware after a careful examination of conscience, including their kind and number (CCC 1456). Confession of venial sins is not strictly necessary but is strongly recommended: it helps form conscience, fight bad tendencies, and grow in the life of the Spirit (CCC 1458).',
				'Every Catholic who has reached the age of discretion must confess serious sins at least once a year (CCC 1457). The priest is bound by the seal of confession, which admits no exception: he may never reveal or use what he hears (CCC 1467).',
			],
		},
		{
			heading: 'Absolution and satisfaction',
			paragraphs: [
				'After the confession, the priest proposes a penance and speaks the words of absolution, ending: “I absolve you from your sins in the name of the Father, and of the Son, and of the Holy Spirit.” Through these words God grants pardon and peace (CCC 1449).',
				'Absolution takes away sin, but it does not remedy all the disorders sin has caused. The penance—prayer, an offering, works of mercy, self-denial—helps repair the harm and conforms us to Christ (CCC 1459–1460).',
			],
		},
		{
			heading: 'How to make a good confession',
			paragraphs: [
				'Begin with prayer and an examination of conscience, for example using the Ten Commandments. In the confessional, make the sign of the cross and say, “Bless me, Father, for I have sinned. It has been [time] since my last confession.” Then confess your sins simply and honestly.',
				'Listen to the priest’s counsel and accept the penance. Pray an Act of Contrition, such as: “My God, I am sorry for my sins with all my heart. In choosing to do wrong and failing to do good, I have sinned against you whom I should love above all things. I firmly intend, with your help, to do penance, to sin no more, and to avoid whatever leads me to sin.” Receive absolution, and complete your penance promptly.',
			],
		},
		{
			heading: 'The fruits of the sacrament',
			paragraphs: [
				'Penance reconciles us with God, restoring sanctifying grace if it was lost, and reconciles us with the Church. It remits the eternal punishment due to mortal sin and at least part of the temporal punishment, and it brings peace, serenity of conscience, and spiritual strength for the Christian battle (CCC 1496).',
			],
		},
	],
};

export default guide;
