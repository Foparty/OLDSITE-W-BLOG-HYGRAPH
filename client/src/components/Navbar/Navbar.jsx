import React, { useState, useEffect } from 'react';
// if i put context back dont forget to add it up here!
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { logo } from '/public/';
import { GiHamburgerMenu } from 'react-icons/gi';
// import { UserContext } from '../../Context/UserContext.jsx';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [username, setUsername] = useState(null);

	useEffect(() => {
		fetch('http://localhost:4000/profile', {
			credentials: 'include',
		}).then((response) => {
			response.json().then((userInfo) => {
				setUsername(userInfo.username);
			});
		});
	}, []);
	function handleMenuClick() {
		setToggle(false);
	}

	function logout() {
		fetch('http://localhost:4000/logout', {
			credentials: 'include',
			method: 'POST',
		});
		setUsername(null);
		handleMenuClick();
	}

	// const username = userInfo?.username;

	const menus = [
		{ name: 'home', url: '/' },
		{ name: 'about', url: '/about' },
		{ name: 'blog', url: '/blog' },
	];
	const loginbuttons = [
		{ name: 'login', url: '/login' },
		// { name: 'register', url: '/register' },
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
						{username && (
							<>
								<li>
									<Link to={'create'} onClick={handleMenuClick}>
										Create new post
									</Link>
								</li>
								<li>
									<Link to={'create'} onClick={logout}>
										Logout
									</Link>
								</li>
							</>
						)}
					</ul>
					<ul className={styles.loginbuttons}>
						{!username &&
							loginbuttons.map((menu) => {
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
