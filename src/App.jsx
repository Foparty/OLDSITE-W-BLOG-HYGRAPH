import React from 'react';
// import styles from './Index.module.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Blog from './components/Blog/Blog';

function App() {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<Landing />} />
				<Route path={'/about'} element={<About />} />
				<Route path={'/blog'} element={<Blog />} />
			</Routes>
		</>
	);
}

export default App;
