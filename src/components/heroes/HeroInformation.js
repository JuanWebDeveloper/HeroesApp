import { useParams } from 'react-router-dom';

import { getHeroById } from './helpers/getHeroById';

export const HeroInformation = () => {
	const { id } = useParams();
	const hero = getHeroById(id);

	return (
		<div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			{hero.superhero}
		</div>
	);
};
