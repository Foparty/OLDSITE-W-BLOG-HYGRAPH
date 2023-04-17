import React, { useEffect, useState } from 'react';
import styles from './Blog.module.css';
import { Link } from 'react-router-dom';
import PostCard from '../PostCard/PostCard';
import request from 'graphql-request';

const Blog = () => {
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
