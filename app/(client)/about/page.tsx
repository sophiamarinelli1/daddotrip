import PostComponent from "@/app/components/PostComponent";
import { About } from "@/app/utils/interface";
import React from "react";
import { client } from "@/sanity/lib/client";
import AboutComponent from "@/app/components/AboutComponent";

async function getAbout(): Promise<About[]> {
	const query = `*[_type == "about"] {
    title,
    slug,
    body,
    _id
  }`;
	const data = await client.fetch(query);
	return data;
}

export const revalidate = 60;

export default async function Home() {
	const about: About[] = await getAbout();
	console.log(about, "about");
	return (
		<div>
			<div>
				{about?.length > 0 &&
					about?.map((about) => (
						<AboutComponent key={about?._id} about={about} />
					))}
			</div>
		</div>
	);
}
