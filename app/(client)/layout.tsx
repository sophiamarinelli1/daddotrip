import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";

const helvetica = localFont({
	src: "./HelveticaNeueLTStd-Md.woff2",
	weight: "600",
	variable: "--font-helvetica",
});

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
				className={`${helvetica.variable} h-full bg-slate-100 text-slate-950`}>
				<Navbar />
				<main className="mx-auto">{children}</main>
			</body>
		</html>
	);
}
