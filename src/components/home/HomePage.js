import { Search } from './Search';

export const HomePage = () => {
	return (
		<div className='home-page'>
			<div className='home-page_content'>
				<h1>Welcome to HeroesApp</h1>
				<hr />

				<Search />
			</div>
		</div>
	);
};
