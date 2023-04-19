import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Post.module.css';
import moment from 'moment';
// import request from 'graphql-request';

const Post = () => {
	const { id } = useParams();
	const [postInfo, setPostInfo] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:4000/post/${id}`).then((response) => {
			response.json().then((postInfo) => {
				setPostInfo(postInfo);
			});
		});
	}, []);

	if (!postInfo) return '';

	return (
		<article className={styles.data}>
			<img
				className={styles.featured}
				src={`http://localhost:4000/${postInfo.cover}`}
				alt={postInfo.title}
			/>
			<h1 className={styles.title}>{postInfo.title}</h1>
			<small className={styles.date}>
				{moment(postInfo.createdAt).format('DD MMM, YYYY')}
			</small>
			<div className={styles.divide}></div>
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: postInfo.content }}
			/>
		</article>
	);
};

export default Post;
