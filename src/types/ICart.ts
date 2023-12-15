type IReviews = {
	user: string;
	text: string;
	stars: number;
};
export default interface ICart {
	count: number;
	image: string[];
	name: string;
	colors: string[];
	desc: string;
	price: number;
	type: string;
	star: number;
	reviews: IReviews[];
	id: number;
	cashback?: number;
	sale?: number;
}
