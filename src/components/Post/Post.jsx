import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Post.module.css';
import moment from 'moment';
import request from 'graphql-request';

const Post = () => {
	const [post, setPost] = useState([]);
	const { slug } = useParams();
	// const post = posts.find((post) => post.slug === slug);
	useEffect(() => {
		const fetchPosts = async () => {
			const { post } = await request(
				'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clgkwhsk53i2y01ujdim49nf8/master',
				`
				{
					post(where: {slug: "${slug}"}) {
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

			setPost(post);
		};
		fetchPosts();
	}, [slug]);

	return (
		<section className={styles.data}>
			<h1 className={styles.title}>{post.title}</h1>
			<small className={styles.date}>
				{moment(post.createdAt).format('DD MMM, YYYY')}
			</small>
			<div className={styles.divide}></div>
			{/* <div>{title}</div> */}
		</section>
	);
};

export default Post;
