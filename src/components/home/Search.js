import { Fragment, useState } from 'react';

export const Search = () => {
	const [searchValue, setSearchValue] = useState();

	const handleChange = ({ target }) => setSearchValue(target.value);

	return (
		<Fragment>
			<div className='search-hero'>
				<h2>Look for a hero</h2>

				<form>
					<input type='text' name='search' placeholder='Search...' autoComplete='off' className='search' value={searchValue} onChange={handleChange} />
				</form>
			</div>
			<div className='search-results'>
				<h2>Search Results</h2>
			</div>
		</Fragment>
	);
};
