import { HeroesList } from '../heroes/HeroesList';

import '../../styles/marvel.css';

export const Marvel = () => {
	return (
		<div className='marvel'>
			<div className='marvel-content'>
				<h2>Marvel Comics</h2>

				<HeroesList publisher='Marvel Comics' />
			</div>
		</div>
	);
};
