import { client } from "@/sanity/lib/client";
import { Post } from "@/app/utils/interface";
import ReadAllComponent from "@/app/components/ReadAllComponent";

async function getPosts() {
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

export const revalidate = 60;

export default async function Home() {
	const posts: Post[] = await getPosts();
	console.log(posts, "posts");
	return (
		<div>
			<div className="h-screen mt-[32px] p-8 flex-col ">
				{posts?.length > 0 &&
					posts?.map((post) => (
						<ReadAllComponent key={post?._id} post={post} />
					))}
			</div>
		</div>
	);
}
