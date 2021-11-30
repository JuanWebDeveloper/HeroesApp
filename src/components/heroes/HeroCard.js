import { Link } from 'react-router-dom';

export const HeroCard = () => {
	const imagePath = `/assets/img/heroes/dc-batman.jpg`;

	return (
		<div className='hero-card'>
			<div className='hero-img'>
				<img src={imagePath} alt='' />
			</div>
			<div className='hero-data'>
				<h3>Batman</h3>
				<p>alter ego</p>
				<p>first_appearance</p>
				<Link to='/' className='more-information'>
					More information
				</Link>
			</div>
		</div>
	);
};
