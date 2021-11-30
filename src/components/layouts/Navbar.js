import { Link } from 'react-router-dom';

import '../../styles/navbar.css';

export const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='logo'>
				<span>HeroesApp</span>
			</div>

			<ul className='navigation'>
				<li>
					<Link to='/' className='navigation-item'>
						Inicio
					</Link>
				</li>
			</ul>
		</div>
	);
};