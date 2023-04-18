import React from 'react';
import styles from './About.module.css';
import Timeline from '../Timeline/Timeline';
import { avatar5 } from '/public/';
import { IoMdMail } from 'react-icons/io';
import { BsWhatsapp } from 'react-icons/bs';
import Stack from '../Stack/Stack';

const About = () => {
	return (
		<>
			<img className={styles.img} src={avatar5} alt='eyes' />
			<article className={styles.data}>
				<h2 className={styles.pagetitle}>About me</h2>
				<div className={styles.divide}></div>
				<p className={styles.about}>Let me tell you a bit more about me... </p>
				<p>Born in Spain in 1984, from the very beginning of my life, I&apos;ve been connected and interested in how tech things work, and mostly, get a deep understanding of them to be able to control them and not the other way around.</p>
				<p>Basically I&apos;ve been fixing and solving tech related problems for my entire life. I will never stop until the problem is solved.</p>
				<p>As of early 2023, I&apos;m working as a Freelance frontend developer for small businesses while I keep studying to become a full stack developer by the end of the year.</p>
				<p>In order to face more real world challenges during my journey, and if you are looking to consider hiring me as part of your team, the only thing I could say is quoting one of my last managers:</p>
				<blockquote>&quot; Alfonso does the right thing even when no one is looking. &quot;</blockquote>
				<div className={styles.contact}>
					<span>Feel free to contact me:</span>
					<div className={styles.contactlinks}>
						<a href="mailto:alfonsomg.dev@gmail.com?subject=Got a Job for you&body=Hello Alfonso! I'd be interested to offer you a job:" target='_blank' rel='noreferrer' className={styles.sociallink}>
							<IoMdMail />
						</a>
						<a href='https://api.whatsapp.com/send?phone=+34690300025&text=Hello Alfonso! Got a job to talk to you about!' target='_blank' rel='noreferrer' className={styles.sociallink}>
							<BsWhatsapp />
						</a>
					</div>
				</div>

				<Timeline />
				<Stack />
			</article>
		</>
	);
};

export default About;
