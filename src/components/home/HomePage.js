import { Search } from './Search';

import '../../styles/home.css';

export const HomePage = () => {
	return (
		<div className='home-page'>
			<div className='home-page_content'>
				<Search />
			</div>
		</div>
	);
};
