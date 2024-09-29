export const intro = {
	name: "intro",
	title: "Intro",
	type: "document",

	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "body",
			title: "Body",
			type: "array",
			of: [{ type: "block" }],
		},
	],
};
