import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { logo } from '/public/';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<header className={styles.header}>
			<nav className={styles.mainnav}>
				<Link to={'/'}>
					<img src={logo} className={styles.logo} alt='alfonso martin logo' />
				</Link>
				<div className={toggle ? 'showmenu' : 'navmenu'}>
					<ul className={styles.nav}>
						<li>
							<Link to={'/'}>home</Link>
						</li>
						<li>
							<Link to={'/about'}>about</Link>
						</li>
						<li>
							<Link to={'/blog'}>blog</Link>
						</li>
					</ul>
				</div>
				<button
					className={styles.toggle}
					onClick={() => {
						setToggle(!toggle);
					}}
				>
					<GiHamburgerMenu />
				</button>
			</nav>
		</header>
	);
};
export default Navbar;
