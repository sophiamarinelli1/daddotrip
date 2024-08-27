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
			<Link href={`/posts/${post.slug.current}`}>
				<p className={`uppercase text-3xl text-center ${monoBold.className} `}>
					{new Date(post?.publishedAt).toDateString()}
				</p>
				<p className={`text-3xl text-center ${mono.className}`}>
					{post?.excerpt}
				</p>
			</Link>
		</div>
	);
};

export default PostComponent;

const cardStyle = `
mx-w-4xl
h-1/2
mb-8
p-16
border
`;
