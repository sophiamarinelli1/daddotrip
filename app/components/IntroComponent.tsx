"use client";
import { Intro } from "../utils/interface";
import { useState, useEffect } from "react";
import { PortableText } from "next-sanity";

// Props interface for the component
interface Props {
	intro: Intro;
}

// Helper function to calculate days since a specific date
const calculateDaysSince = (startDate: string): number => {
	const now: Date = new Date();
	const start: Date = new Date(startDate);
	const diffTime: number = Math.abs(now.getTime() - start.getTime());
	const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return diffDays;
};

// Intro component
const IntroComponent = ({ intro }: Props) => {
	const [daysSince, setDaysSince] = useState<number>(0);

	useEffect(() => {
		const days = calculateDaysSince("2019-10-12");
		setDaysSince(days);
	}, []);

	return (
		<div className={`${cardStyle}`}>
			<h1 className="uppercase p-2 font-customBlack">{intro?.title}</h1>
			<div className="sm:w-[90vw] md:w-3/4 lg:w-1/2 p-2">
				<PortableText value={intro?.body} />
				<p className="font-customBlack pt-2">
					It has been {daysSince} days since he passed.{" "}
					<span className="font-customSerif">Click →</span>
				</p>
			</div>
		</div>
	);
};

export default IntroComponent;

const cardStyle = `
font-customSerif
sm:text-3xl
lg:text-4xl
fixed
top-0
w-full
h-screen
text-black
flex 
flex-col 
gap-4
justify-center
text-justify
items-center
rotate-2
`;
