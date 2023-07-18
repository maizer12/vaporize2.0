import { createSlice } from '@reduxjs/toolkit'
import ICart from '../../types/ICart'
import { fetchProducts } from '../../services/getProducts'

type IState = {
	productItems: ICart[]
	loading: boolean
}

//const { data: products, isLoading } = productApi.useFetchAllProductsQuery('')

const initialState: IState = {
	productItems: [],
	loading: true,
}

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, state => {
				state.loading = true
			})
			.addCase(fetchProducts.fulfilled, (state, actions) => {
				state.productItems = actions.payload
				state.loading = false
			})
	},
})

export default productSlice.reducer

export const {} = productSlice.actions
