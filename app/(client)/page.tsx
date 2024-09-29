"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { Intro, Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";
import IntroComponent from "../components/IntroComponent";

// Fetch posts from Sanity
async function getPosts(): Promise<Post[]> {
	const query = `*[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
    styleType,
    _id
  }`;
	const data = await client.fetch(query);
	return data;
}

// Fetch the single intro entry from Sanity
async function getIntro(): Promise<Intro> {
	const query = `*[_type == "intro"][0] {
    title,
    body,
    _id
  }`;
	const data = await client.fetch(query);
	return data;
}

export default function Home() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [currentPost, setCurrentPost] = useState<Post | null>(null); // Store a single post at a time
	const [intro, setIntro] = useState<Intro | null>(null); // Store the intro data

	// Fetch posts and intro when the component mounts
	useEffect(() => {
		async function fetchData() {
			const fetchedPosts = await getPosts();
			const fetchedIntro = await getIntro();
			setPosts(fetchedPosts);
			setIntro(fetchedIntro);
		}
		fetchData();
	}, []);

	// Handle click to display a random post
	const handleClick = () => {
		if (posts.length > 0) {
			const randomIndex = Math.floor(Math.random() * posts.length);
			const selectedPost = posts[randomIndex];
			setCurrentPost(selectedPost); // Set the post to be displayed
		}
	};

	return (
		<div className="h-screen w-screen relative">
			{intro && <IntroComponent key={intro._id} intro={intro} />}
			<div
				onClick={handleClick}
				className="cursor-pointer h-full w-full absolute top-0 left-0">
				{currentPost && (
					<PostComponent key={currentPost._id} post={currentPost} />
				)}
			</div>
		</div>
	);
}
