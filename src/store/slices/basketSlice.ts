import { createSlice } from '@reduxjs/toolkit'
import ICart from '../../types/ICart'
import newItems from '../../services/newItems.json'

type IState = {
	basketItems: ICart[]
}
const basketItemsLocalStorage = localStorage.getItem('Basket')
const initialState: IState = { basketItems: newItems }
//{
// 	basketItems: basketItemsLocalStorage
// 		? JSON.parse(basketItemsLocalStorage)
// 		: [],
// }

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		setBasketAdd(state, action) {
			const newID = state.basketItems.length + 1
			state.basketItems = [...state.basketItems, { ...action.payload, id: newID }]
		},
		setBasketRemove(state, action) {
			state.basketItems = [...state.basketItems.filter(e => e.id !== action.payload)]
		},
		setBasketAmount(state, action) {
			state.basketItems = [...state.basketItems.map(e => (e.id === action.payload.id ? action.payload.elem : e))]
		},
	},
})

export const { setBasketAdd, setBasketRemove, setBasketAmount } = basketSlice.actions
export default basketSlice.reducer
