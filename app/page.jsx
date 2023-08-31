import { Inputs, Pallet, Navbar, Attribution } from "@/components";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<Navbar />
			<Inputs />
			<Pallet />
			<Attribution />
		</main>
	);
}
