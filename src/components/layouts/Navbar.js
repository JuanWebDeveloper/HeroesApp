import { NavLink } from 'react-router-dom';

import '../../styles/navbar.css';

export const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='logo'>
				<span>HeroesApp</span>
			</div>

			<ul className='navigation'>
				<li>
					<NavLink to='/' className={({ isActive }) => `navigation-item ${isActive ? 'active' : ''}`}>
						Inicio
					</NavLink>
				</li>
				<li>
					<NavLink to='/marvel' className={({ isActive }) => `navigation-item ${isActive ? 'active' : ''}`}>
						Marvel
					</NavLink>
				</li>
				<li>
					<NavLink to='/dc' className={({ isActive }) => `navigation-item ${isActive ? 'active' : ''}`}>
						Dc
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
