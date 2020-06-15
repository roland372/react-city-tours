import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';

function App() {
	return (
		<main>
			<Navbar />
			<TourList />
		</main>
	);
}

export default App;
