"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";

// Function to fetch posts from Sanity
async function getPosts(): Promise<Post[]> {
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
	const data = await client.fetch(query);
	return data;
}

export default function Home() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [currentPost, setCurrentPost] = useState<Post | null>(null);

	// Fetch the posts when the component mounts
	useEffect(() => {
		async function fetchPosts() {
			const fetchedPosts = await getPosts();
			setPosts(fetchedPosts);
		}
		fetchPosts();
	}, []);

	// Handle click event to display a random post
	const handleClick = () => {
		if (posts.length > 0) {
			const randomIndex = Math.floor(Math.random() * posts.length);
			setCurrentPost(posts[randomIndex]);
		}
	};

	return (
		<div
			onClick={handleClick}
			className="h-[calc(100vh-128px)] flex justify-center items-center">
			{/* Display the PostComponent if a post has been selected */}
			{currentPost && <PostComponent post={currentPost} />}
		</div>
	);
}
