import Link from "next/link";
import React from "react";
import { Post } from "../utils/interface";

interface Props {
	post: Post;
}

const ReadAllComponent = ({ post }: Props) => {
	return (
		<div className={cardStyle}>
			<p className="uppercase text-4xl font-customBlack">
				{new Date(post?.publishedAt).toDateString()}
			</p>
			<p className="text-4xl font-customSerif">{post?.excerpt}</p>
		</div>
	);
};

export default ReadAllComponent;

const cardStyle = `
ml-auto sm:w-100% lg:w-1/2
`;
