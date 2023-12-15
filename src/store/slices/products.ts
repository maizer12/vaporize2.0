import { createSlice } from '@reduxjs/toolkit'
import ICart from '../../types/ICart'
import { fetchNewProducts, fetchProducts } from '../../services/getProducts'

type IState = {
	productItems: ICart[]
	newProducts: ICart[]
	promotionsProducts: ICart[]
	popularProducts: ICart[]
	loading: boolean
	loadingNewProducts: boolean
	loadingPromotionsProducts: boolean
	loadingPopularProducts: boolean
}

//const { data: products, isLoading } = productApi.useFetchAllProductsQuery('')

const initialState: IState = {
	productItems: [],
	loading: true,
	newProducts: [],
	loadingNewProducts: true,
	promotionsProducts: [],
	loadingPromotionsProducts: true,
	popularProducts: [],
	loadingPopularProducts: true,
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
