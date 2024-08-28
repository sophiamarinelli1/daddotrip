"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
	const [isClick, setIsClick] = useState(false);

	const toggleNavbar = () => {
		setIsClick(!isClick);
	};

	const handleLinkClick = () => {
		setIsClick(false);
	};

	useEffect(() => {
		if (isClick) {
			document.body.style.overflow = "hidden";
		} else {
		}
		return () => {
			document.body.style.overflow = "hidden";
		};
	}, [isClick]);

	return (
		<nav className="fixed top-0 left-0 w-full z-50">
			<div
				className={`relative max-w-full mx-auto p-8 flex flex-col  justify-between items-start gap-2 ${
					isClick ? "bg-black overflow-hidden" : ""
				}`}>
				<div className="sm:h-[64px] lg:h-[64px] flex items-center items-start gap-2">
					<Link
						className={`font-customSerif sm:text-6xl lg:text-6xl ${
							isClick ? "text-white" : "text-black"
						}`}
						href="/">
						dad.rip
					</Link>
					<button className="" onClick={toggleNavbar}>
						{isClick ? (
							<div className="text-white lg:text-xl font-customBlack">
								[Less]
							</div>
						) : (
							<div className="text-black lg:text-xl font-customBlack">
								[More]
							</div>
						)}
					</button>
				</div>
				{isClick && (
					<div className="w-full relative sm:h-[calc(100vh-128px)] lg:h-[calc(100vh-128px)] flex flex-col items-start justify-between sm:text-6xl lg:text-6xl">
						<div className="self-stretch flex flex-col items-start justify-start">
							<div
								className="self-stretch relative text-white font-customSerif cursor-pointer"
								onClick={handleLinkClick}>
								<Link href="/posts/click-testing-two" className="block">
									Read all
								</Link>
							</div>
							<div
								className="self-stretch relative text-white font-customSerif cursor-pointer"
								onClick={handleLinkClick}>
								<Link href="#" className="block">
									About the Project
								</Link>
							</div>
						</div>
						<div className="self-stretch flex flex-col items-start justify-start">
							<div
								className="self-stretch relative text-white cursor-pointer font-customBlack text-xl"
								onClick={handleLinkClick}>
								<Link
									href="https://sophiamarinelli.com"
									target="_blank"
									className="block">
									sophiamarinelli.com
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
