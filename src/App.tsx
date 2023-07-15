import './assets/style/main.scss'
import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import PageHome from './pages/PageHome'
import { Route, Routes } from 'react-router-dom'
import PageBue from './pages/PageProduct'
import PageBasket from './pages/PageBasket'
import PageCatalog from './pages/PageСatalog'
import PageCheckout from './pages/PageCheckout'
import PageBlog from './pages/PageBlog'
import DeliveryDispatch from './pages/PageDeliveryDispatch'
import PageFaq from './pages/PageFaq'
import PageContact from './pages/PageContact'
import PageFavorites from './pages/PageFavorite'
import PageNotFound from './pages/PageNotFound'
function App() {
	return (
		<>
			<Header />
			{
				<Routes>
					<Route path='/' element={<PageHome />} />
					<Route path='/product/:productId' element={<PageBue />} />
					<Route path='/basket' element={<PageBasket />} />
					<Route path='/catalog' element={<PageCatalog />} />
					<Route path='/checkout' element={<PageCheckout />} />
					<Route path='/blog' element={<PageBlog />} />
					<Route path='/delivery-dispatch' element={<DeliveryDispatch />} />
					<Route path='/faq' element={<PageFaq />} />
					<Route path='/contact' element={<PageContact />} />
					<Route path='/favorites' element={<PageFavorites />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			}
			<Footer />
		</>
	)
}

export default App
