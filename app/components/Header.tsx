import React from "react";

interface Props {
	title: string;
}

const Header = ({ title = "" }: Props) => {
	return (
		<header className="py-14 px-4 mb-12 text-center text-6xl font-customSerif">
			<h2 className="mx-auto max-w-2xl font-bold">{title}</h2>
		</header>
	);
};

export default Header;
