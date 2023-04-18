import React from 'react';
import styles from './Landing.module.css';
import { avatar, comicavatar } from '/public/';
import { AiOutlineTwitter } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Landing = () => {
	const links = [
		{
			text: 'twitter',
			url: 'https://twitter.com/alfonsomgdev',
			logo: AiOutlineTwitter,
		},
		{
			text: 'email',
			url: 'mailto:alfonsomg.dev@gmail.com?subject=Got a Job for you&body=Hello Alfonso! lets talk about my project!:',
			logo: IoMdMail,
		},
		{
			text: 'whatsapp',
			url: 'https://api.whatsapp.com/send?phone=+34690300025&text=Hello Alfonso! Got a job to talk to you about!',
			logo: BsWhatsapp,
		},
	];
	return (
		<section className={styles.data}>
			<div className={styles.imgcontainer}>
				<img src={comicavatar} className={styles.comicavatar} alt={'emoji alfonso martin'} />
				<img src={avatar} className={styles.avatar} alt={'alfonso martin avatar'} />
			</div>
			<h2 className={styles.role}>Frontend Developer</h2>
			<h1 className={styles.title}>
				<Link to={'/'}>Alfonso Martín</Link>
			</h1>
			<div className={styles.social}>
				{links.map((item) => {
					return (
						<div className={styles.socialgroup} key={item.text}>
							<item.logo />
							<a href={item.url} target='_blank' rel='noreferrer' className={styles.sociallink}>
								{item.text}
							</a>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Landing;
