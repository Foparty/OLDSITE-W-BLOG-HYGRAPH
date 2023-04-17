import React from 'react';
import styles from './Blog.module.css';
import { Link } from 'react-router-dom';
import PostCard from '../PostCard/PostCard';

const Blog = ({ posts }) => {
	console.log(posts);

	return (
		<section className={styles.data}>
			<h1 className={styles.title}>Welcome to my blog</h1>
			<div className={styles.divide}></div>
			<div className={styles.posts}>
				{posts.map(({ id, title, slug, featuredImage, createdAt }) => {
					return (
						<Link to={`/post/${slug}`} key={id}>
							<PostCard
								title={title}
								slug={slug}
								id={id}
								image={featuredImage.url}
								date={createdAt}
							/>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default Blog;
