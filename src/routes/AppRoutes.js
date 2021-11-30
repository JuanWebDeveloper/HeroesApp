import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/layouts/Navbar';
import { HomePage } from '../components/home/HomePage';
import { Marvel } from '../components/marvel/Marvel';
import { Dc } from '../components/dc/Dc';
import { HeroInformation } from '../components/heroes/HeroInformation';

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/marvel' element={<Marvel />} />
				<Route path='/dc' element={<Dc />} />
				<Route path='/hero/:id' element={<HeroInformation />} />
				<Route path='/' element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
};
