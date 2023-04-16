import React from 'react';
// import styles from './Index.module.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';

function App() {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<Landing />} />
			</Routes>
		</>
	);
}

export default App;
