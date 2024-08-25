import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";

export default async function Home() {
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

	const posts: Post[] = await client.fetch(query);

	console.log(posts, "posts");

	return (
		<div>
			<Header title="dad.rip" />
			<div>
				{posts?.length > 0 &&
					posts.map((post) => <PostComponent key={post?._id} post={post} />)}
			</div>
		</div>
	);
}
