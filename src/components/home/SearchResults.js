import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from './helpers/getHeroByName';

export const SearchResults = () => {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<div className='search-results'>
			<h2>Search Results</h2>
		</div>
	);
};
