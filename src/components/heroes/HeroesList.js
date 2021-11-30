import { HeroCard } from './HeroCard';

import { getHeroByPublisher } from './helpers/getHeroByPublisher';

import '../../styles/heroes.css';

export const HeroesList = ({ publisher }) => {
	const heroes = getHeroByPublisher(publisher);

	return (
		<div className='heroes-list'>
			{heroes.map((hero) => (
				<HeroCard key={hero.id} {...hero} />
			))}
		</div>
	);
};
