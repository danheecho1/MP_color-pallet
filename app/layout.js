import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar, Attribution } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Color Pallet",
	description: "Color pallet using color-mix with different methods in CSS.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Attribution />
			</body>
		</html>
	);
}
