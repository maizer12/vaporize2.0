import { createAsyncThunk } from '@reduxjs/toolkit'
import ICart from '../../../types/ICart'

export const fetchProducts = createAsyncThunk<ICart[]>(
	'products/fetchProducts',
	async function (_, { rejectWithValue }) {
		const response = await fetch(
			'https://64a45f55c3b509573b5772f9.mockapi.io/products'
		)
		if (!response.ok) {
			return rejectWithValue('Server Error!')
		}
		const data = await response.json()
		return data
	}
)
