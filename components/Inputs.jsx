"use client";

import React, { useState, useEffect } from "react";
import styles from "./Inputs.module.css";

const Inputs = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	const validateInput = (e) => {
		if(e.target.value > 255 || e.target.value < 0) {
			alert("Value must be between 0 and 255!");
			return false;
		}
		return true;
	}

	useEffect(() => {
		console.log(`My RGB is ${red}, ${green}, and ${blue}.`);
		document.documentElement.style.setProperty("--clr-base", `rgb(${red}, ${green}, ${blue})`);
	}, [red, green, blue]);

	return (
		<div className={styles.colorInput}>
			<div className={styles.red}>
				<label htmlFor="baseColor">Red</label>
				<input
					type="number"
					min="0"
					max="255"
					onChange={(e) => {
						if(validateInput(e)) {
							setRed(e.target.value);
						}
					}}
					value={red}
				/>
			</div>
			<div className={styles.green}>
				<label htmlFor="baseColor">Green</label>
				<input
					type="number"
					min="0"
					max="255"
					onChange={(e) => {
						if(validateInput(e)) {
							setGreen(e.target.value);
						}
					}}
					value={green}
				/>
			</div>
			<div className={styles.blue}>
				<label htmlFor="baseColor">Blue</label>
				<input
					type="number"
					min="0"
					max="255"
					onChange={(e) => {
						if(validateInput(e)) {
							setBlue(e.target.value);
						}
					}}
					value={blue}
				/>
			</div>
		</div>
	);
};

export default Inputs;
