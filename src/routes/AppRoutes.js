import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/layouts/Navbar';
import { HomePage } from '../components/home/HomePage';
import { Marvel } from '../components/marvel/Marvel';
import { Dc } from '../components/dc/Dc';

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/marvel' element={<Marvel />} />
				<Route path='/dc' element={<Dc />} />
			</Routes>
		</BrowserRouter>
	);
};
