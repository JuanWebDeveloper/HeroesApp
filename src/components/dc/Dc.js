import { HeroesList } from '../heroes/HeroesList';

import '../../styles/dc.css';

export const Dc = () => {
	return (
		<div className='dc'>
			<div className='dc-content'>
				<h2>Dc Comics</h2>

				<HeroesList publisher='DC Comics' />
			</div>
		</div>
	);
};
