import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import auntificationSlice from './slices/auntificationSlice'
import favoriteSlice from './slices/favoriteSlice'
import basketSlice from './slices/basketSlice'
export const store = configureStore({
	reducer: {
		cartSlice,
		auntificationSlice,
		favoriteSlice,
		basketSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
