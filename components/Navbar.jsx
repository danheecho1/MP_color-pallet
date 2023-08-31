import React from "react";
import Link from "next/link"
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<>
			<nav className={styles.navContainer}>
				<Link href="/" className={styles.logo}>COLOR PALLET</Link>
				<ul className={styles.navMenu}>
					<li>
						<Link href="/about">ABOUT</Link>
					</li>
					<li>
						<Link href="https://github.com/danheecho1/MP_color-pallet" target="_blank">SOURCE CODE</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
