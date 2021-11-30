import { useParams, Navigate } from 'react-router-dom';

import { getHeroById } from './helpers/getHeroById';

export const HeroInformation = () => {
	const { id } = useParams();
	const hero = getHeroById(id);

	if (!hero) {
		return <Navigate to='/' />;
	}

	const imagePath = `/assets/img/heroes/${id}.jpg`;

	return (
		<div className='hero-information'>
			<div className='hero-information_content'>
				<div className='hero-image'>
					<img src={imagePath} alt={hero.superhero} />
				</div>

				<div className='hero-description'>
					<h2>{hero.superhero}</h2>

					<ul>
						<li>
							<b>Alter ego:</b> {hero.alter_ego}
						</li>
						<li>
							<b>Publisher:</b> {hero.publisher}
						</li>
						<li>
							<b>First Appearance:</b> {hero.first_appearance}
						</li>
					</ul>

					<h5>Characters</h5>
					<p>{hero.characters}</p>

					<button>Return</button>
				</div>
			</div>
		</div>
	);
};
