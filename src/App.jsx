import React, { useEffect, useState } from 'react';
// import styles from './Index.module.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Post from './components/Post/Post';
import { request } from 'graphql-request';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const { posts } = await request(
				'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clgkwhsk53i2y01ujdim49nf8/master',
				`
				{
					posts {
						id
						slug
						title
						postImages {
							url
						}
						featuredImage {
							url
						}
						categories {
							id
							name
							slug
						}
						content {
							raw
						}
						createdAt
					}
				}
				`,
			);

			setPosts(posts);
		};
		fetchPosts();
	}, []);
	return (
		<>
			<Routes>
				<Route path={'/'} element={<Landing />} />
				<Route path={'/about'} element={<About />} />
				<Route path={'/blog'} element={<Blog posts={posts} />} />
				<Route path={'/post/:slug'} element={<Post posts={posts} />} />
				<Route path='*' element={<NoMatch />} />
			</Routes>
		</>
	);
}

export default App;
