import React, { useEffect, useState } from "react";
import { Post } from "../utils/interface";
import { BIZ_UDMincho, Archivo_Narrow } from "next/font/google";

const monoBold = BIZ_UDMincho({ weight: "700", subsets: ["latin"] });
const sans = Archivo_Narrow({ weight: "700", subsets: ["latin"] });

interface Props {
	post: Post;
}

const PostComponent = ({ post }: Props) => {
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		let opacityValue = 1;
		const fadeInterval = setInterval(() => {
			opacityValue -= 1 / 30;
			setOpacity(opacityValue);
			if (opacityValue <= 0) {
				clearInterval(fadeInterval);
			}
		}, 1000);

		return () => clearInterval(fadeInterval);
	}, []);

	return (
		<div className={`${cardStyle}`} style={{ opacity, position: "absolute" }}>
			<div>
				<p className={`uppercase text-8xl ${monoBold.className}`}>
					{new Date(post?.publishedAt).toDateString()}
				</p>
				<p className={`text-4xl ${sans.className}`}>{post?.excerpt}</p>
			</div>
		</div>
	);
};

export default PostComponent;

const cardStyle = `
	bg-white
  mx-8
  border-b-2
  border-gray-900
`;
