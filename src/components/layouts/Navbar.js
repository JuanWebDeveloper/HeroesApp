import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='logo'>
				<span>HeroesApp</span>
			</div>

			<ul className='navigation'>
				<li>
					<Link to='/'>Inicio</Link>
				</li>
			</ul>
		</div>
	);
};
