"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Post } from "../utils/interface";

interface Props {
	post: Post;
}

const getRandomValue = (min: number, max: number) =>
	Math.random() * (max - min) + min;

const PostComponent = ({ post }: Props) => {
	const [opacity, setOpacity] = useState(1);

	// Apply style based on the styleType field
	const getStyleClass = (styleType: string | undefined) => {
		switch (styleType) {
			case "blackWhite":
				return "bg-black text-white";
			case "grayWhite":
				return "bg-gray-500 text-white";
			case "whiteBlack":
			default:
				return "bg-white text-black";
		}
	};

	const transformStyle = useMemo(() => {
		const rotation = getRandomValue(-10, 10);
		return {
			transform: `rotate(${rotation}deg)`,
		};
	}, []);

	useEffect(() => {
		let opacityValue = 1;
		const fadeDuration = 30000;
		const intervalTime = 50;
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

	const styleClass = getStyleClass(post?.styleType);

	return (
		<div className={`${cardStyle} ${styleClass}`} style={{ opacity }}>
			<div
				style={{ ...transformStyle, opacity }}
				className="sm:w-[90vw] lg:w-1/2">
				<p className="uppercase sm:text-3xl lg:text-4xl font-customBold text-center p-2">
					{new Date(post?.publishedAt).toDateString()}
				</p>
				<p className="sm:text-3xl lg:text-4xl font-customSerif text-justify p-2">
					{post?.excerpt}
				</p>
			</div>
		</div>
	);
};

export default PostComponent;

const cardStyle = `
backdrop-blur-3xl
  fixed inset-0
  flex flex-col items-center justify-center
  pointer-events-none
  transition-opacity duration-1000 ease-out
  z-10
  p-6
`;
