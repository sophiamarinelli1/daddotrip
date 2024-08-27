import Link from "next/link";
import React from "react";
import { Post } from "../utils/interface";
import { BIZ_UDMincho, Archivo_Narrow } from "next/font/google";

const mono = BIZ_UDMincho({ weight: "400", subsets: ["latin"] });
const monoBold = BIZ_UDMincho({ weight: "700", subsets: ["latin"] });
const sans = Archivo_Narrow({ weight: "700", subsets: ["latin"] });

interface Props {
	post: Post;
}

const PostComponent = ({ post }: Props) => {
	return (
		<div className={cardStyle}>
			<div>
				<p className={`uppercase text-8xl ${monoBold.className} `}>
					{new Date(post?.publishedAt).toDateString()}
				</p>
				<p className={`text-8xl ${sans.className}`}>{post?.excerpt}</p>
			</div>
		</div>
	);
};

export default PostComponent;

const cardStyle = `
bg-purple-400
mx-8
border-b-2
border-gray-900
`;
