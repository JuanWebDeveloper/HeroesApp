import { heroes } from '../../../data/heroes';

export const getHeroByPublisher = (publisher) => {
	const validPublisher = ['DC Comics', 'Marvel Comics'];

	if (!validPublisher.includes(publisher)) {
		throw new Error(`${publisher} is not valid publisher`);
	}

	return heroes.filter((hero) => hero.publisher === publisher);
};
