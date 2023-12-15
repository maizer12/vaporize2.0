import { createAsyncThunk } from '@reduxjs/toolkit'
import ICart from '../types/ICart'

export const fetchProducts = createAsyncThunk<ICart[], string>(
	'products/fetchProducts',
	async function (categoryType, { rejectWithValue }) {
		const response = await fetch(
			`https://64a45f55c3b509573b5772f9.mockapi.io/products?limit=15&page=1`
		)
		if (!response.ok) {
			return rejectWithValue('Server Error!')
		}
		const data = await response.json()
		return data
	}
)
export const fetchNewProducts = createAsyncThunk<ICart[], string>(
	'products/fetchProducts',
	async function (categoryType, { rejectWithValue }) {
		const response = await fetch(
			`https://64a45f55c3b509573b5772f9.mockapi.io/products?limit=15&page=1&type=new`
		)
		if (!response.ok) {
			return rejectWithValue('Server Error!')
		}
		const data = await response.json()
		return data
	}
)
export const fetchDiscountProducts = createAsyncThunk<ICart[], string>(
	'products/fetchProducts',
	async function (categoryType, { rejectWithValue }) {
		const response = await fetch(
			`https://64a45f55c3b509573b5772f9.mockapi.io/products?limit=15&page=1&type=discount`
		)
		if (!response.ok) {
			return rejectWithValue('Server Error!')
		}
		const data = await response.json()
		return data
	}
)
export const fetchHotProducts = createAsyncThunk<ICart[], string>(
	'products/fetchProducts',
	async function (categoryType, { rejectWithValue }) {
		const response = await fetch(
			`https://64a45f55c3b509573b5772f9.mockapi.io/products?limit=15&page=1&type=${categoryType}`
		)
		if (!response.ok) {
			return rejectWithValue('Server Error!')
		}
		const data = await response.json()
		return data
	}
)
