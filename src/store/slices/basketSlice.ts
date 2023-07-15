import { createSlice } from '@reduxjs/toolkit'
import BasketDb from '../../services/basket.json'
import ICart from '../../types/ICart'

type IState = {
	basketItems: ICart[]
}

const initialState: IState = {
	basketItems: BasketDb,
}

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		setBasketAdd(state, action) {
			const newID = state.basketItems.length + 1
			state.basketItems = [
				...state.basketItems,
				{ ...action.payload, id: newID },
			]
		},
		setBasketRemove(state, action) {
			state.basketItems = [
				...state.basketItems.filter(e => e.id !== action.payload),
			]
		},
		setBasketAmount(state, action) {
			state.basketItems = [
				...state.basketItems.map(e =>
					e.id === action.payload.id ? action.payload.elem : e
				),
			]
		},
	},
})

export const { setBasketAdd, setBasketRemove, setBasketAmount } =
	basketSlice.actions
export default basketSlice.reducer
