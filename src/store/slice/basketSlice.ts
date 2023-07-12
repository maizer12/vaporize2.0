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
	reducers: {},
})

export const {} = basketSlice.actions
export default basketSlice.reducer
