// app/(client)/page.tsx

import React from "react";
import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import PostComponent from "../components/PostComponent";
import { Post } from "../utils/interface";

async function fetchPosts(): Promise<Post[]> {
	const query = `*[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    tags[]-> {
      _id,
      slug,
      name
    }
  }`;
	const posts = await client.fetch(query);
	return posts;
}

export const revalidate = 60; // Optional: For Incremental Static Regeneration

const Page = async () => {
	const posts = await fetchPosts();

	return (
		<div>
			<Header title="Posts" />
			<div>
				{posts.length > 0 &&
					posts.map((post) => <PostComponent key={post._id} post={post} />)}
			</div>
		</div>
	);
};

export default Page;
