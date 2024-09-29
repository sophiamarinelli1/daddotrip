export interface Post {
	title: string;
	slug: { current: string };
	publishedAt: string;
	excerpt: string;
	body: any;
	_id: string;
	styleType: string;
}

export interface About {
	title: string;
	slug: { current: string };
	body: any;
	_id: string;
}

export interface Intro {
	title: string;
	body: any;
	_id: string;
}
