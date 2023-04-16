import React from 'react';
import styles from './Index.module.css';
import { comicavatar, avatar } from '../public';
import { AiOutlineTwitter } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import { BsWhatsapp } from 'react-icons/bs';

function App() {
	return (
		<div className={styles.data}>
			<div className={styles.imgcontainer}>
				<img
					src={comicavatar}
					className={styles.comicavatar}
					alt={'emoji alfonso martin'}
				/>
				<img
					src={avatar}
					className={styles.avatar}
					alt={'alfonso martin avatar'}
				/>
			</div>
			<h2 className={styles.role}>Frontend Developer</h2>
			<h1 className={styles.title}>Alfonso Martín</h1>
			<div className={styles.social}>
				<div className={styles.socialgroup}>
					<AiOutlineTwitter />
					<a
						href='https://twitter.com/alfonsomgdev'
						target='_blank'
						rel='noreferrer'
						className={styles.sociallink}
					>
						twitter
					</a>
				</div>
				<div className={styles.socialgroup}>
					<IoMdMail />
					<a
						href="mailto:alfonsomg.dev@gmail.com?subject=Got a Job for you&body=Hello Alfonso! let's talk about my project!:"
						target='_blank'
						rel='noreferrer'
						className={styles.sociallink}
					>
						email
					</a>
				</div>
				<div className={styles.socialgroup}>
					<BsWhatsapp />
					<a
						href='https://api.whatsapp.com/send?phone=+34690300025&text=Hello Alfonso! Got a job to talk to you about!'
						target='_blank'
						rel='noreferrer'
						className={styles.sociallink}
					>
						whatsapp
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
