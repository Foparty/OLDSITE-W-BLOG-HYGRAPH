import React from 'react';
import styles from './PostCard.module.css';
import moment from 'moment';

const PostCard = ({ title, cover, date }) => {
	return (
		<div className={styles.card}>
			<div className={styles.imgcontainer}>
				<img
					className={styles.img}
					src={'http://localhost:4000/' + cover}
					alt={title}
				/>
				<time className={styles.date}>
					{moment(date).format('DD MMM, YYYY')}
				</time>
			</div>

			<h2 className={styles.title}>{title}</h2>
		</div>
	);
};

export default PostCard;
