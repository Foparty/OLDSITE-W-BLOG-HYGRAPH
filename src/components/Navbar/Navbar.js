import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.mainnav}>
				<h2 className={styles.logo}>Logo aqui</h2>
				<ul className={styles.nav}>
					<li>
						<Link href={'/'}>Home</Link>
					</li>
					<li>
						<Link href={'/timeline'}>Timeline</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Navbar;
