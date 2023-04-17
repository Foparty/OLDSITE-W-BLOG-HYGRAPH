import React from 'react';
// import styles from './Index.module.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import About from './components/About/About';

function App() {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<Landing />} />
				<Route path={'/about'} element={<About />} />
			</Routes>
		</>
	);
}

export default App;
