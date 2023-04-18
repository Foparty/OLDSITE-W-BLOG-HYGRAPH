import React from 'react';
// import styles from './Index.module.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Post from './components/Post/Post';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

// const Landing = lazy(() => import('./components/Landing/Landing'));
// const About = lazy(() => import('./components/About/About'));
// const Blog = lazy(() => import('./components/Blog/Blog'));
// const Post = lazy(() => import('./components/Post/Post'));
// const NoMatch = lazy(() => import('./components/NoMatch/NoMatch'));

function App() {
	return (
		<>
			{/* <Suspense fallback={<div className='loadingcontainer'>Loading...</div>}> */}
			<Routes>
				<Route path={'/'} element={<Landing />} />
				<Route path={'/about'} element={<About />} />
				<Route path={'/blog'} element={<Blog />} />
				<Route path={'/login'} element={<Login />} />
				<Route path={'/register'} element={<Register />} />
				<Route path={'/post/:slug'} element={<Post />} />
				<Route path='*' element={<NoMatch />} />
			</Routes>
			{/* </Suspense> */}
		</>
	);
}

export default App;
