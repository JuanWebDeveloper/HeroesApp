export const Search = () => {
	return (
		<div className='search-hero'>
			<h2>Look for a hero</h2>

			<form>
				<input type='text' name='search' placeholder='Search...' autoComplete='off' className='search' />
			</form>
		</div>
	);
};
