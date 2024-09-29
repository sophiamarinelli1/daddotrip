import React from "react";
import { Post } from "../utils/interface";

interface Props {
	post: Post;
}

const ReadAllComponent = ({ post }: Props) => {
	return (
		<div className={cardStyle}>
			<p className="uppercase sm:text-3xl lg:text-4xl  font-customBlack">
				{new Date(post?.publishedAt).toDateString()}
			</p>
			<p className="sm:text-3xl lg:text-4xl text-justify font-customSerif">
				{post?.excerpt}
			</p>
		</div>
	);
};

export default ReadAllComponent;

const cardStyle = `
`;
