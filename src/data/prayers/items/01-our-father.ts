import type { Prayer } from '../types';

const prayer: Prayer = {
	slug: 'our-father',
	title: 'Our Father',
	alsoKnownAs: 'The Lord’s Prayer',
	excerpt:
		'The prayer Christ taught His disciples—the pattern for all Christian prayer and the words spoken on every bead before each decade of the Rosary.',
	text: 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
	sections: [
		{
			heading: 'What is the Our Father?',
			paragraphs: [
				'When the disciples asked Jesus to teach them to pray, He gave them the Our Father (Matthew 6:9–13; Luke 11:2–4). It is the only prayer the Gospels record word for word from Christ’s own lips, and the Church has prayed it at every Mass and in every generation since.',
				'We address God as Father—not distant, but as children who trust in His care. The seven petitions praise His holiness, ask for His Kingdom, daily bread, forgiveness, and deliverance from evil.',
			],
		},
		{
			heading: 'When Catholics pray it',
			paragraphs: [
				'The Our Father opens the celebration of the Mass after the priest’s invitation, “Pray, brethren…” It is prayed at the beginning of the Rosary on the large bead before each decade, and in the Divine Office, the Liturgy of the Hours, and many other devotions.',
				'Jesus linked forgiveness to this prayer: we ask God to forgive us as we forgive others. Praying the Our Father slowly helps us examine whether we live what we say.',
			],
		},
	],
};

export default prayer;
