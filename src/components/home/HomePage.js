import { Search } from './Search';

import '../../styles/home.css';

export const HomePage = () => {
	return (
		<div className='home-page'>
			<div className='home-page_content'>
				<h1>Welcome to HeroesApp</h1>

				<Search />
			</div>
		</div>
	);
};
