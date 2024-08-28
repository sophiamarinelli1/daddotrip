"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Post } from "../utils/interface";
import { BIZ_UDMincho, Archivo_Narrow } from "next/font/google";

const monoBold = BIZ_UDMincho({ weight: "700", subsets: ["latin"] });
const sans = Archivo_Narrow({ weight: "700", subsets: ["latin"] });

interface Props {
	post: Post;
}

const getRandomValue = (min: number, max: number) =>
	Math.random() * (max - min) + min;

const PostComponent = ({ post }: Props) => {
	const [opacity, setOpacity] = useState(1);

	// Calculate rotation and position once, before rendering
	const transformStyle = useMemo(() => {
		const rotation = getRandomValue(-50, 50);
		const translateX = getRandomValue(-100, 100);
		const translateY = getRandomValue(-100, 100);
		return {
			transform: `rotate(${rotation}deg) translate(${translateX}px, ${translateY}px)`,
		};
	}, []); // Empty dependency array ensures this only runs once

	useEffect(() => {
		let opacityValue = 1;
		const fadeDuration = 30000; // 30 seconds
		const intervalTime = 50; // 50ms for smoother animation
		const steps = fadeDuration / intervalTime;
		const opacityDecrement = 1 / steps;

		const fadeInterval = setInterval(() => {
			opacityValue -= opacityDecrement;
			setOpacity(opacityValue);
			if (opacityValue <= 0) {
				clearInterval(fadeInterval);
			}
		}, intervalTime);

		return () => clearInterval(fadeInterval);
	}, []);

	return (
		<div
			className={`${cardStyle}`}
			style={{ ...transformStyle, opacity, position: "absolute" }}>
			<div>
				<p
					className={`uppercase sm:text-2xl lg:text-4xl font-customBold text-center`}>
					{new Date(post?.publishedAt).toDateString()}
				</p>
				<p className={`sm:text-2xl lg:text-4xl font-customSerif text-center`}>
					{post?.excerpt}
				</p>
			</div>
		</div>
	);
};

export default PostComponent;

const cardStyle = `
pointer-events-none

  bg-white
  p-8
  min-h-1/2
  max-w-1/2
  sm:w-5/6
  lg:w-1/2
`;
