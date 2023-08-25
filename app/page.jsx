import { Inputs, Pallet } from "@/components";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main>
			<h1 className={styles.heading}>Color Pallet</h1>
				<Inputs />
				<Pallet />
		</main>
	);
}
