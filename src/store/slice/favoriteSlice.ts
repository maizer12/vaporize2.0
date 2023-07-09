import { createSlice } from '@reduxjs/toolkit'
import FavoritesDB from '../../services/favorites.json'

const initialState = {
	favoritesDB: FavoritesDB,
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setFavoritesDB: (state, action) => {
			state.favoritesDB = action.payload
		},
	},
})
export const { setFavoritesDB } = favoritesSlice.actions
export default favoritesSlice.reducer
