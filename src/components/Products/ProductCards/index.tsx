import { useState, useEffect } from 'react'
import Cart from '../ProductCard'
import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import BtnLink from '../../UI/Buttons/BtnLink'
import './ProductCards.scss'
import { AppDispatch, AppSelector } from '../../../hooks'
import { fetchProducts } from '../../../store/slices/async/getProducts'
import ProductSkeleton from '../ProductCard/ProductSkeleton'
interface IProps {
	title?: string
	rowActivity?: boolean
}
const ProductCards = ({ title }: IProps) => {
	const dispatch = AppDispatch()
	const { productItems: products, loading } = AppSelector(
		state => state.productSlice
	)
	const [open, setOpen] = useState<number>(55)
	useEffect(() => {
		dispatch(fetchProducts())
	}, [])
	return (
		<section className='product-cards'>
			<div className='product-cards__header'>
				<h3 className='product-cards__title'>{title}</h3>
				<div className='product-cards__control'>
					<BtnLink path='/'>Дивитися всі новинки</BtnLink>
				</div>
			</div>
			<div className='product-cards__items'>
				<Swiper
					modules={[Navigation, A11y]}
					slidesPerView='auto'
					spaceBetween={0}
					navigation
				>
					{!loading
						? products.map((e, i) => (
								<SwiperSlide key={i}>
									<div
										className='product-cards__wrapper'
										onMouseEnter={(): void => setOpen(i)}
										onMouseLeave={(): void => setOpen(55)}
									>
										<Cart open={open} indx={i} cartElement={e} />
									</div>
								</SwiperSlide>
						  ))
						: [...Array(6)].map((e, i) => (
								<SwiperSlide key={i}>
									{' '}
									<ProductSkeleton />
								</SwiperSlide>
						  ))}
				</Swiper>
			</div>
		</section>
	)
}

export default ProductCards
