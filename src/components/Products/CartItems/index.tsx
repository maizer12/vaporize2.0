import { useState } from 'react'
import Cart from '../Cart'
import './cartItems.Module.scss'
import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import ICart from '../../../types/ICart'
import BtnLink from '../../UI/Buttons/BtnLink'
interface IProps {
	title?: string
	item: ICart[]
	rowActivity?: boolean
}
const CartItems = ({ title, item, rowActivity }: IProps) => {
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
						slidesPerView={4}
						spaceBetween={30}
						navigation
					>
						{item.map((e, i) => (
							<SwiperSlide key={i}>
								<div
									className='items-cart__wrapper'
									onClick={(): void => setOpen(i)}
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

export default CartItems
