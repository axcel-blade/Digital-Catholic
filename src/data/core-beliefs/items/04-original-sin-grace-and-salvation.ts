import type { CoreBelief } from '../types';

const belief: CoreBelief = {
	number: 4,
	title: 'Original Sin, Grace, and Salvation',
	summary: 'Wounded by the sin of our first parents, we are saved by the grace of Christ, received in faith and Baptism.',
	scripture: 'Genesis 3; Romans 5:12–21; Ephesians 2:4–10; John 3:5, 16',
	catechism: 'CCC 385–421, 1987–2029',
	meaning: [
		'God created our first parents in holiness and friendship with Him, but by freely disobeying God they lost that original holiness and justice, not only for themselves but for all their descendants. This deprived state, which we inherit rather than commit, is called original sin. Human nature is not totally corrupted, but it is wounded—subject to ignorance, suffering, death, and an inclination to sin called concupiscence.',
		'Grace is God’s free and undeserved gift: a share in His own divine life. Sanctifying grace, first given in Baptism, washes away original sin and makes us children of God; actual graces help us to turn to Him and do good throughout our lives. We cannot earn salvation, yet God invites our free cooperation, so that faith works through love.',
		'Salvation comes through Jesus Christ alone, who by His Death and Resurrection reconciled humanity to the Father. The Church is the ordinary means by which Christ gives this grace to the world, above all through the sacraments.',
	],
	link: { href: '/sacraments/baptism', label: 'Learn about the sacrament of Baptism' },
};

export default belief;
