import Header from "@/app/components/Header";
import { Tag } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";

async function getAllTags() {
	const query = `
	*[_type == "tag"] {
  name,
  slug,
  _id,
}
  `;
	const tags = client.fetch(query);
	return tags;
}

export const revalidate = 60;

const page = async () => {
	const tags: Tag[] = await getAllTags();
	console.log(tags, "tags");
	return (
		<div>
			<Header title="Tags" />
			<div className="">
				{tags?.length > 0 &&
					tags?.map((tag) => (
						<Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
							<div className="text-xs mr-2 pr-4 pl-4 pt-2 pb-2 bg-slate-200 rounded-md hover:bg-slate-400 hover:text-slate-50">
								#{tag.name}
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default page;
