import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { logo } from '/public/';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	function handleMenuClick() {
		setToggle(false);
	}
	const menus = [
		{ name: 'home', url: '/' },
		{ name: 'about', url: '/about' },
		{ name: 'blog', url: '/blog' },
		{ name: 'login', url: '/login' },
		{ name: 'register', url: '/register' },
	];
	return (
		<header className={styles.header}>
			<button
				aria-controls='prim-nav'
				aria-expanded='false'
				className={styles.toggle}
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				<GiHamburgerMenu />
			</button>
			<nav className={styles.mainnav} id='prim-nav'>
				<Link to={'/'}>
					<img src={logo} className={styles.logo} alt='alfonso martin logo' />
				</Link>
				<div className={styles.navmenu} data-visible={toggle}>
					<ul className={styles.nav}>
						{menus.map((menu) => {
							return (
								<li key={menu.name}>
									<Link to={menu.url} onClick={handleMenuClick}>
										{menu.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		</header>
	);
};
export default Navbar;
