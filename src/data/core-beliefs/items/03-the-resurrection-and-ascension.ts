import type { CoreBelief } from '../types';

const belief: CoreBelief = {
	number: 3,
	title: 'The Resurrection and Ascension of Jesus',
	summary: 'Christ truly rose bodily from the dead on the third day and ascended into heaven.',
	scripture: 'Luke 24:1–53; Acts 1:6–11; 1 Corinthians 15:3–8, 14–20',
	catechism: 'CCC 638–667',
	meaning: [
		'The Resurrection of Jesus is the crowning truth of our faith. On the third day after His death on the Cross, Christ rose from the tomb in His own body—not as a ghost, nor merely restored to earthly life, but glorified and no longer subject to death. The empty tomb and His appearances to Mary Magdalene, Peter, the apostles, and more than five hundred others bear witness to it. As St. Paul writes, “if Christ has not been raised, your faith is futile” (1 Corinthians 15:17).',
		'Forty days later, Christ ascended into heaven, where He is seated at the right hand of the Father. His humanity has entered God’s glory, opening the way for us to follow; from there He intercedes for us, sends the Holy Spirit, and will come again in glory to judge the living and the dead.',
	],
	link: { href: '/rosary', label: 'Meditate on these events in the Glorious Mysteries of the Rosary' },
	image: { alt: 'The risen Christ stepping from his tomb holding a banner, while four Roman soldiers sleep below', caption: 'Piero della Francesca, The Resurrection (c. 1463), Museo Civico, Sansepolcro. Public domain.' },
};

export default belief;
