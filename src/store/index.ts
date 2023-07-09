import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice/cartSlice'
import auntificationSlice from './slice/auntificationSlice'
import favoriteSlice from './slice/favoriteSlice'
export const store = configureStore({
	reducer: {
		cartSlice,
		auntificationSlice,
		favoriteSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
