"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Lilita_One } from "next/font/google";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
	const [isClick, setisClick] = useState(false);
	const toggleNavbar = (): void => {
		setisClick(!isClick);
	};

	return (
		<nav className="">
			<div className="max-w-8xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<Link href="/" className="text-black">
								dad.rip
							</Link>
						</div>
					</div>
					<div className="flex items-center">
						<button
							className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							onClick={toggleNavbar}>
							{isClick ? (
								<svg
									width="48"
									height="13"
									viewBox="0 0 48 13"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M0 12.356V0.644043H48V12.356H0Z" fill="#383838" />
								</svg>
							) : (
								<svg
									width="49"
									height="49"
									viewBox="0 0 49 49"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M29.896 0.26001V19.364H49V29.636H29.896V48.74H19.624V29.636H0.52002V19.364H19.624V0.26001H29.896Z"
										fill="#383838"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>
			{isClick && (
				<div className="bg-black">
					<div className="max-w-8xl mx-auto px-4 pt-2 pb-3 space-y-1 sm:px-3 h-screen ">
						<div>
							<Link
								href="#"
								className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
								Read All Entries
							</Link>
							<Link
								href="#"
								className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
								About the Project
							</Link>
						</div>
						<Link
							className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
							href="https://sophiamarinelli.com">
							sophiamarinelli.com
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
