import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

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
				className={`leading-loose h-screen overflow-hidden bg-white text-slate-950`}>
				<div className="z-50">
					<Navbar />
				</div>
				<main className="mx-auto ">{children}</main>
			</body>
		</html>
	);
}
