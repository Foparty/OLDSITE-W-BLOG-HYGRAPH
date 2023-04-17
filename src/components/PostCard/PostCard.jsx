import React from 'react';
import styles from './PostCard.module.css';
import moment from 'moment';

const PostCard = ({ title, image, date }) => {
	return (
		<div className={styles.card}>
			<div className={styles.imgcontainer}>
				<img className={styles.img} src={image} alt={title} />
				<small className={styles.date}>
					{moment(date).format('DD MMM, YYYY')}
				</small>
			</div>

			<h2 className={styles.title}>{title}</h2>
		</div>
	);
};

export default PostCard;
