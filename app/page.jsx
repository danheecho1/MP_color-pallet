import { Inputs, Pallet } from "@/components";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<Inputs />
			<Pallet />
		</main>
	);
}
