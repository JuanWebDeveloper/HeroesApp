import { Fragment } from 'react';

export const Search = () => {
	return (
		<Fragment>
			<div className='search-hero'>
				<h2>Look for a hero</h2>

				<form>
					<input type='text' name='search' placeholder='Search...' autoComplete='off' className='search' />
				</form>
			</div>
			<div className='search-results'>
				<h2>Search Results</h2>
			</div>
		</Fragment>
	);
};
