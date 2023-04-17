import React from 'react';
import styles from './Timeline.module.css';
import { timeline } from '/public/';

const Timeline = () => {
	return (
		<div className={styles.timelinecontainer}>
			<div className={styles.timelineevents}>
				<div className={styles.event}>audio / video</div>
				<div className={styles.event}>designing</div>
				<div className={styles.event}>programming</div>
				<div className={styles.event}>managging</div>
				<div className={styles.event}>creating</div>
				<div className={styles.event}>
					<img className={styles.timelineemoji} src={timeline} alt='emoji' />
				</div>
			</div>
			<div className={styles.timelineticks}></div>
			<div className={styles.timeline}></div>
			<div className={styles.subtext}>
				<span>2001</span>
				<span>2023</span>
			</div>
		</div>
	);
};

export default Timeline;
