import React from "react";
import styles from "./Pallet.module.css";

const Pallet = () => {
	return (
		<div className={styles.palletContainer}>
			<div className={styles.individualPallet} id={styles.srgb}>
				<h2>in srgb</h2>
				<div className={styles.colorsDiv}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className={styles.individualPallet} id={styles.lab}>
				<h2>in lab</h2>
				<div className={styles.colorsDiv}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className={styles.individualPallet} id={styles.oklab}>
				<h2>in oklab</h2>
				<div className={styles.colorsDiv}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className={styles.individualPallet} id={styles.xyz}>
				<h2>in xyz</h2>
				<div className={styles.colorsDiv}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className={styles.individualPallet} id={styles.hsl}>
				<h2>in hsl</h2>
				<div className={styles.colorsDiv}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className={styles.individualPallet} id={styles.hwb}>
				<h2>in hwb</h2>
				<div className={styles.colorsDiv}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className={styles.individualPallet} id={styles.lch}>
				<h2>in lch</h2>
				<div className={styles.colorsDiv}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className={styles.individualPallet} id={styles.oklch}>
				<h2>in oklch</h2>
				<div className={styles.colorsDiv}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Pallet;

// oklab, oklch, srgb, linear-srgb, hwb, xyz
