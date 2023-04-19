import React, { useEffect, useState } from 'react';
import styles from './Blog.module.css';
import { Link } from 'react-router-dom';
import PostCard from '../PostCard/PostCard';
// import request from 'graphql-request';

const Blog = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/post').then((response) => {
			response.json().then((posts) => {
				console.log(posts);
				setPosts(posts);
			});
		});
	}, []);

	return (
		<section className={styles.data}>
			<h1 className={styles.title}>Welcome to my blog</h1>
			<div className={styles.divide}></div>
			<div className={styles.posts}>
				{posts.map(({ _id, title, summary, cover, createdAt }) => {
					return (
						<Link to={`/post/${_id}`} key={_id}>
							<PostCard
								id={_id}
								title={title}
								slug={summary}
								cover={cover}
								date={createdAt}
							/>
						</Link>
					);
				})}
			</div>
			{/*<h2>working on it ⚠️</h2>*/}
		</section>
	);
};

export default Blog;
