import Link from "next/link";
import React from "react";
import { Post } from "../utils/interface";

interface Props {
	post: Post;
}

const PostComponent = ({ post }: Props) => {
	return (
		<div className={cardStyle}>
			<Link href={`/posts/${post.slug.current}`}>
				<h2 className="text-xl uppercase">{post?.title}</h2>
				<p className="uppercase text-sm text-gray-400">
					{new Date(post?.publishedAt).toDateString()}
				</p>
				<p className="text-sm">{post?.excerpt}</p>
			</Link>
			<div className="mt-4">
				{post?.tags?.map((tag) => (
					<Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
						<span className="text-xs mr-2 pr-4 pl-4 pt-2 pb-2 bg-slate-200 rounded-md hover:bg-slate-400 hover:text-slate-50">
							#{tag.name}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default PostComponent;

const cardStyle = `
mb-8
p-16
border
border-gray
shadow-md

shadow-slate-200
hover:shadow-md
`;
