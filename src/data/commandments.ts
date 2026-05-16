export interface Commandment {
	number: number;
	title: string;
	text: string;
	meaning: string;
}

export const commandmentsIntro =
	'God gave the Ten Commandments to Moses on Mount Sinai. They sum up the moral law for God’s people and show us how to love God above all and our neighbor as ourselves. The Church teaches them as binding on every conscience.';

export const commandments: Commandment[] = [
	{
		number: 1,
		title: 'I am the LORD your God',
		text: 'You shall have no other gods before me.',
		meaning:
			'We owe God alone supreme worship, trust, and love. Idolatry, superstition, and putting anything—money, pleasure, or power—above God violate this commandment.',
	},
	{
		number: 2,
		title: 'Do not take the Lord’s name in vain',
		text: 'You shall not take the name of the LORD your God in vain.',
		meaning:
			'God’s name is holy. We must speak it with reverence, not use it carelessly, in anger, or to swear falsely. Oaths and blessings should honor God.',
	},
	{
		number: 3,
		title: 'Keep the Lord’s Day holy',
		text: 'Remember to keep holy the LORD’s Day.',
		meaning:
			'Sunday, the day of Christ’s Resurrection, is set apart for worship, rest, and family. Catholics are obliged to attend Mass and to avoid work that hinders the Lord’s Day.',
	},
	{
		number: 4,
		title: 'Honor your father and mother',
		text: 'Honor your father and your mother.',
		meaning:
			'We owe respect, obedience, and care to parents and lawful authority. This commandment also implies duties toward family, society, and the common good.',
	},
	{
		number: 5,
		title: 'You shall not kill',
		text: 'You shall not kill.',
		meaning:
			'Human life is sacred from conception to natural death. Murder, abortion, euthanasia, deliberate harm to body or soul, and hatred that wishes another’s death are forbidden.',
	},
	{
		number: 6,
		title: 'You shall not commit adultery',
		text: 'You shall not commit adultery.',
		meaning:
			'God wills sexual love only in the marriage covenant between man and woman. Adultery, fornication, pornography, and all use of sexuality outside marriage violate chastity.',
	},
	{
		number: 7,
		title: 'You shall not steal',
		text: 'You shall not steal.',
		meaning:
			'We must respect the property and rights of others. Theft, fraud, unjust damage, and failure to pay a just wage offend justice and charity.',
	},
	{
		number: 8,
		title: 'You shall not bear false witness',
		text: 'You shall not bear false witness against your neighbor.',
		meaning:
			'Truth is the foundation of community. Lying, perjury, slander, rash judgment, and gossip that injures reputation are sins against the eighth commandment.',
	},
	{
		number: 9,
		title: 'You shall not covet your neighbor’s wife',
		text: 'You shall not covet your neighbor’s wife.',
		meaning:
			'Interior desires matter to God. Deliberate lust and envy of another’s spouse offend purity of heart and the sacrament of marriage.',
	},
	{
		number: 10,
		title: 'You shall not covet your neighbor’s goods',
		text: 'You shall not covet your neighbor’s goods.',
		meaning:
			'We must battle greed and envy in the heart. Wanting to possess what belongs to another—against justice and charity—prepares the way for theft and discontent.',
	},
];
