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
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isClick]);

	return (
		<div
			className={`relative max-w-full mx-auto p-8 flex flex-col  justify-between ${
				isClick ? "bg-black overflow-hidden" : ""
			}`}>
			<div className="sm:h-[32px] lg:h-[64px] flex items-center justify-between">
				<Link
					className={`font-customBlack sm:text-3xl lg:text-6xl ${
						isClick ? "text-white" : "text-black"
					}`}
					href="/">
					dad.rip
				</Link>
				<button className="" onClick={toggleNavbar}>
					{isClick ? (
						<svg
							className="sm:w-[24px] sm:h-[6px] lg:w-[48px] lg:h-[13px]"
							viewBox="0 0 48 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M0 12.356V0.644043H48V12.356H0Z" fill="#ffffff" />
						</svg>
					) : (
						<svg
							className="sm:w-[24px] sm:h-[24px] lg:w-[48px] lg:h-[48px]"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M29.896 0.26001V19.364H49V29.636H29.896V48.74H19.624V29.636H0.52002V19.364H19.624V0.26001H29.896Z"
								fill="#000000"
							/>
						</svg>
					)}
				</button>
			</div>
			{isClick && (
				<div className="w-full relative sm:h-[calc(100vh-113px)] lg:h-[calc(100vh-128px)] flex flex-col items-start justify-between sm:text-3xl lg:text-6xl">
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
							className="self-stretch relative text-white cursor-pointer"
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
	);
};

export default Navbar;
