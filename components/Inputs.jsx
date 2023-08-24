"use client";

import React, { useState } from "react";
import styles from "./Inputs.module.css"

const Inputs = () => {
	const [rgb, setRgb] = useState([0, 0, 0]);
	
	return (
		<div className={styles.colorInput}>
			<label for="baseColor">Red</label>
			<input type="number" min="0" max="255" value="0"/>
			<label for="baseColor">Green</label>
			<input type="number" min="0" max="255" value="0"/>
			<label for="baseColor">Blue</label>
			<input type="number" min="0" max="255" value="0"/>
		</div>
	);
};

export default Inputs;
