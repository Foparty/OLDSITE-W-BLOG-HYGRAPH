import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Post.module.css';
import moment from 'moment';

const Post = ({ posts }) => {
	const { slug } = useParams();
	const post = posts.find((post) => post.slug === slug);
	console.log(post);
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
