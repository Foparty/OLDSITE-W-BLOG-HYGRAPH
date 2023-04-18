import React from 'react';
import styles from './Layout.module.css';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
	return (
		<main className={styles.main}>
			<section className={styles.contentcontainer}>
				<Navbar />
				<div className={styles.content}>{children}</div>
			</section>
		</main>
	);
};
export default Layout;
