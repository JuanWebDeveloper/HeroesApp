import { Fragment, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { HeroCard } from '../heroes/HeroCard';

import { getHeroByName } from './helpers/getHeroByName';

export const Search = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { search } = location;
	const { hero = '' } = queryString.parse(search);

	const [searchValue, setSearchValue] = useState(hero);

	const heroFilter = getHeroByName(hero);

	const handleChange = ({ target }) => {
		setSearchValue(target.value);
	};

	useEffect(() => {
		navigate(`?hero=${searchValue}`);
	}, [navigate, searchValue]);

	return (
		<Fragment>
			<div className='search-hero'>
				<h1>Welcome to HeroesApp</h1>

				<div className='search-hero_content'>
					<h3>Look for a hero</h3>

					<form>
						<input type='text' name='search' placeholder='Hero name...' autoComplete='off' className='search' value={searchValue} onChange={handleChange} />
					</form>
				</div>
			</div>
			<div className='search-results'>
				{hero === '' ? (
					''
				) : heroFilter.length === 0 ? (
					<h3 className='results-found'>
						No search results found: <span>{hero}</span>
					</h3>
				) : (
					<>
						<h2>Search Results</h2>
						<div className='search-results_content'>
							{heroFilter.map((hero) => (
								<HeroCard key={hero.id} {...hero} />
							))}
						</div>
					</>
				)}
			</div>
		</Fragment>
	);
};
