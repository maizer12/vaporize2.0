export const getNewPrice = (amount: number, price: number): number => {
	const result = amount >= 2 ? price / amount : price
	return Math.floor(result)
}
