import { Link } from 'react-router-dom';

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
	const imagePath = `/assets/img/heroes/${id}.jpg`;

	return (
		<div className='hero-card'>
			<div className='hero-img'>
				<img src={imagePath} alt={superhero} />
			</div>
			<div className='hero-data'>
				<h3>{superhero}</h3>
				<p>{alter_ego}</p>
				<p>{first_appearance}</p>
				<Link to='/' className='more-information'>
					More information
				</Link>
			</div>
		</div>
	);
};
