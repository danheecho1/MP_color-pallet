import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<>
			<nav className={styles.navContainer}>
				<span className={styles.logo}>COLOR PALLET</span>
				<ul className={styles.navMenu}>
					<li>
						<a href="#">ABOUT</a>
					</li>
					<li>
						<a href="#">SOURCE CODE</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
