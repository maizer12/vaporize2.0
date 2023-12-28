interface Reviews {
	user: string;
	text: string;
	stars: number;
}

export interface ICard {
	id: number;
	count: number;
	image: string[];
	name: string;
	colors: string[];
	desc: string;
	price: number;
	type: string;
	star: number;
	reviews: Reviews[];
	sale: number;
}
