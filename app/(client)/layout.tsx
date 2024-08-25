import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

// const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "dad.rip",
	description: "dad.rip",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${firaCode.className} h-full bg-slate-100 text-slate-950`}>
				<Navbar />
				<main className="mx-auto max-w-5xl px-6">{children}</main>
			</body>
		</html>
	);
}
