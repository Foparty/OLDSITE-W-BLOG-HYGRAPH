import React from 'react';
import styles from './StackItem.module.css';

const StackItem = ({ name, img }) => {
	return (
		<div className={styles.card}>
			<img className={styles.img} src={img} alt={`${name} logo svg`} />
		</div>
	);
};

export default StackItem;
