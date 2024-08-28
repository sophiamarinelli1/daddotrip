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

	return (
		<div
			className={`${cardStyle}`}
			style={{ ...transformStyle, opacity, position: "absolute" }}>
			<div>
				<p
					className={`uppercase sm:text-2xl lg:text-4xl font-customBold text-center p-2`}>
					{new Date(post?.publishedAt).toDateString()}
				</p>
				<p
					className={`sm:text-2xl lg:text-4xl font-customSerif text-justify p-2`}>
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
  sm:p-4
  lg:p-8
  min-h-1/2
  max-w-1/2
  sm:w-5/6
  lg:w-3/4
`;
