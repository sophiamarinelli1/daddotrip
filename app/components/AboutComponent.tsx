import React from "react";
import { About } from "../utils/interface";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
	about: About;
}

const AboutComponent = ({ about }: Props) => {
	return (
		<div className="h-screen sm:mt-[128px] lg:mt-[32px] p-8 sm:text-2xl lg:text-4xl font-customSerif text-justify flex flex-col">
			<div className="ml-auto sm:w-100% lg:w-1/2 flex-col gap-12">
				<div className="sm:text-4xl lg:text-6xl font-customBlack">
					{about.title}
				</div>
				<PortableText
					value={about.body}
					components={myPortableTextComponents}
				/>
			</div>
		</div>
	);
};

export default AboutComponent;

const myPortableTextComponents = {
	types: {
		image: ({ value }: any) => (
			<Image src={urlFor(value).url()} alt="Post" width={700} height={700} />
		),
	},
};
