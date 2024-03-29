import { Title } from "@/components/Title";
import "@/styles/base.css";
import "@/styles/reset.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { styles } from "./layout.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "tech blog by ta93abe",
	description: "tech blog by ta93abe",
};

type Props = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${styles.container}`}>
				<Title />
				{children}
			</body>
		</html>
	);
}
