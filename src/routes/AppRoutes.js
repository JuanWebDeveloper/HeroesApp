import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/layouts/Navbar';
import { HomePage } from '../components/home/HomePage';

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
};
