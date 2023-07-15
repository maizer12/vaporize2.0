import { createSlice } from '@reduxjs/toolkit'
import FavoritesDB from '../../services/favorites.json'
import ICart from '../../types/ICart'

type IState = {
	favoriteItems: ICart[]
}

const initialState: IState = {
	favoriteItems: FavoritesDB,
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
