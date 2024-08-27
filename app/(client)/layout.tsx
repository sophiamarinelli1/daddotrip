import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { BIZ_UDMincho, Archivo_Narrow } from "next/font/google";

const mono = BIZ_UDMincho({ weight: "700", subsets: ["latin"] });
const sans = Archivo_Narrow({ weight: "700", subsets: ["latin"] });

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
				className={`${mono.className} ${sans.className} h-full bg-slate-100 text-slate-950`}>
				<div className="fixed pointer-events-none w-screen h-screen animate-pulse backdrop-blur-lg z-50"></div>
				<Navbar />
				<main className="mx-auto">{children}</main>
			</body>
		</html>
	);
}
