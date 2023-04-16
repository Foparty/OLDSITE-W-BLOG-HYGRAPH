import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.mainnav}>
				<h2 className={styles.logo}>Logo aqui</h2>
				<ul className={styles.nav}>
					<li>
						<a href={'/'}>Home</a>
					</li>
					<li>
						<a href={'/timeline'}>Timeline</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Navbar;
