import Link from "next/link";
import React from "react";
import { Lilita_One } from "next/font/google";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
	return (
		<div className="mx-auto max-w-5xl px-6">
			<div className="flex justify-between items-center h-16 w-full">
				<Link href="/">
					<div className={`${font.className} text-3xl`}>
						Text<span className="text-purple-500">Block</span>
					</div>
				</Link>
				<div>theme</div>
			</div>
		</div>
	);
};

export default Navbar;
