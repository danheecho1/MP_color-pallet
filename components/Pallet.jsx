import React from "react";
import styles from "./Pallet.module.css";

const Pallet = () => {
	return (
		<div className={styles.palletContainer}>
			<div className={styles.individualPallet} id={styles.srgb}>
				<span>in srgb</span>
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
				<span>in lab</span>
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
				<span>in oklab</span>
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
				<span>in xyz</span>
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
				<span>in hsl</span>
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
				<span>in hwb</span>
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
				<span>in lch</span>
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
				<span>in oklch</span>
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
