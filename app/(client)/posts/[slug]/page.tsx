import Header from "@/app/components/Header";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Params {
	params: {
		slug: string;
	};
}

async function getPost(slug: string) {
	const query = `*[_type == "post" && slug.current == "${slug}"][0] {
  title,
  slug,
  publishedAt,
  excerpt,
  _id,
  body,
  tags[]-> {
    _id,
    slug,
    name
  }
}
	`;
	const post = await client.fetch(query);
	return post;
}

const page = async ({ params }: Params) => {
	console.log(params, "params");
	const post: Post = await getPost(params?.slug);
	console.log(post, "hello post");
	return (
		<div>
			<Header title={post?.title} />
			<div className="text-center">
				<span>{new Date(post?.publishedAt).toDateString()}</span>
				<div className="mt-4">
					{post?.tags?.map((tag) => (
						<Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
							<span className="text-xs mr-2 pr-4 pl-4 pt-2 pb-2 bg-slate-200 rounded-md hover:bg-slate-400 hover:text-slate-50">
								#{tag.name}
							</span>
						</Link>
					))}
				</div>
				<div className={richTextStyles}>
					<PortableText
						value={post.body}
						components={myPortableTextComponents}
					/>
				</div>
			</div>
		</div>
	);
};

export default page;

const myPortableTextComponents = {
	types: {
		image: ({ value }: any) => (
			<Image src={urlFor(value).url()} alt="Post" width={700} height={700} />
		),
	},
};

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-headings:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
