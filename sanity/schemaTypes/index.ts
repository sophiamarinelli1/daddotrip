import { type SchemaTypeDefinition } from "sanity";
import { post } from "../schemas/post";
import { about } from "../schemas/about";
import { intro } from "../schemas/intro";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [post, about, intro],
};
