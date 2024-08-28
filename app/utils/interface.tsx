export interface Post {
	title: string;
	slug: { current: string };
	publishedAt: string;
	excerpt: string;
	body: any;
	_id: string;
}
