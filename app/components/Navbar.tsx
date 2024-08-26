"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
	const [isClick, setIsClick] = useState(false);

	const toggleNavbar = (): void => {
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
			className={`relative max-w-full mx-auto p-8 flex flex-col justify-between ${
				isClick ? "bg-black overflow-hidden" : ""
			}`}>
			<div className="h-[32px] flex items-center justify-between">
				{/* Change the text color based on isClick state */}
				<Link
					className={`absolute left-1/2 transform -translate-x-1/2 ${
						isClick ? "text-white" : "text-black"
					}`}
					href="/">
					dad.rip
				</Link>
				<button className="absolute right-8 w-16 h-16" onClick={toggleNavbar}>
					{isClick ? (
						<svg
							width="48"
							height="13"
							viewBox="0 0 48 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M0 12.356V0.644043H48V12.356H0Z" fill="#ffffff" />
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
			{isClick && (
				<div className="w-full relative h-[calc(100vh-96px)] flex flex-col items-start justify-between">
					<div className="self-stretch flex flex-col items-start justify-start gap-2">
						{/* Wrap each Link in a div and handle click */}
						<div
							className="self-stretch relative text-white cursor-pointer"
							onClick={handleLinkClick}>
							<Link href="/posts/click-testing-two" className="block">
								Read all
							</Link>
						</div>
						<div
							className="self-stretch relative text-white cursor-pointer"
							onClick={handleLinkClick}>
							<Link href="#" className="block">
								About the Project
							</Link>
						</div>
					</div>
					<div className="self-stretch flex flex-col items-start justify-start">
						{/* Wrap each Link in a div and handle click */}
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
