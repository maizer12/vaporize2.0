import { useState } from 'react'
import Cart from '../ProductCard'
import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ICart from '../../../types/ICart'
import BtnLink from '../../UI/Buttons/BtnLink'

import './ProductCards.scss'
interface IProps {
	title?: string
	item: ICart[]
	rowActivity?: boolean
}
const ProductCards = ({ title, item, rowActivity }: IProps) => {
	const [open, setOpen] = useState<number>(55)

	return (
		<section className='cart-items'>
			<div className='items-cart'>
				<div className='items-cart__header'>
					<h3 className='items-cart__title'>{title}</h3>
					<div className='items-cart__control'>
						<BtnLink path='/'>Дивитися всі новинки</BtnLink>
					</div>
				</div>
				<div className='items-cart__items'>
					<Swiper
						modules={[Navigation, A11y]}
						slidesPerView='auto'
						spaceBetween={0}
						navigation
					>
						{item.map((e, i) => (
							<SwiperSlide key={i}>
								<div
									className='items-cart__wrapper'
									onMouseEnter={(): void => setOpen(i)}
									onMouseLeave={(): void => setOpen(55)}
								>
									<Cart open={open} indx={i} cartElement={e} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default ProductCards
