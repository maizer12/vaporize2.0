import { createSlice } from '@reduxjs/toolkit'
import BasketDb from '../../services/basket.json'
import ICart from '../../types/ICart'

type IState = {
	basket: ICart[]
}

const initialState: IState = {
	basket: BasketDb,
}

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		setBasketAdd(state, action) {
			const newID = state.basket.length + 1
			state.basket = [...state.basket, { ...action.payload, id: newID }]
		},
		setBasketRemove(state, action) {
			state.basket = [...state.basket.filter(e => e.id !== action.payload)]
		},
	},
})

export const { setBasketAdd, setBasketRemove } = basketSlice.actions
export default basketSlice.reducer
