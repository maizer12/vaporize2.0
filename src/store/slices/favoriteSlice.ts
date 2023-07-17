import { createSlice } from '@reduxjs/toolkit'
import ICart from '../../types/ICart'

type IState = {
	favoriteItems: ICart[]
}
const favoriteLocalStorage = localStorage.getItem('Favorite')

const initialState: IState = {
	favoriteItems: favoriteLocalStorage ? JSON.parse(favoriteLocalStorage) : [],
}
const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setFavoriteAdd: (state, action) => {
			state.favoriteItems = [...state.favoriteItems, action.payload]
		},
		setFavoriteRemove: (state, action) => {
			state.favoriteItems = [
				...state.favoriteItems.filter(e => e.id !== action.payload),
			]
		},
	},
})
export const { setFavoriteAdd, setFavoriteRemove } = favoritesSlice.actions
export default favoritesSlice.reducer
