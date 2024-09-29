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
		<div className="">
			<div className="grid grid-cols-1 ml-auto sm:w-full lg:w-1/2 gap-8 p-8 sm:mt-[128px] lg:mt-[32px]">
				{posts?.length > 0 &&
					posts?.map((post) => (
						<ReadAllComponent key={post?._id} post={post} />
					))}
			</div>
		</div>
	);
}
