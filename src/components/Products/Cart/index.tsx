import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import LikeSetting from '../../UI/LikeSetting'
import './cart.Module.scss'
import { setCartAdd } from '../../../store/slice/cartSlice'
import { Link } from 'react-router-dom'
import { AppDispatch, AppSelector } from '../../../hooks'
import { setFavoritesDB } from '../../../store/slice/favoriteSlice'
import ICart from '../../../types/ICart'
import BuyButton from '../../UI/Buttons/BuyButton'

function tc(a: string) {
	if (a === 'NEW') {
		return 'radial-gradient(131.25% 131.25% at 50.68% 131.25%, #461E4D 0%, #92499E 100%),linear-gradient(0deg, #C4C4C4, #C4C4C4)'
	} else if (a === 'Скидка') {
		return 'radial-gradient(131.25% 131.25% at 50.68% 131.25%, #DF3616 0%, #FF7D65 100%)'
	} else if (a === 'HOT') {
		return 'radial-gradient(131.25% 131.25% at 50.68% 131.25%, #A3260F 0%, #DF3616 100%)'
	}
}
type IProps = {
	cartElement: ICart
	indx: number
	open: number
}
const Cart = ({ cartElement, indx, open }: IProps) => {
	const [filterActive, setFilterActive] = useState<number[]>([0])
	const massiveFavorite = AppSelector(state => state.favoriteSlice.favoritesDB)
	const reviewsSum = cartElement.reviews.length
	const dispatch = AppDispatch()
	const [rating, setRating] = useState(0)
	const handleRating = (rate: number) => {
		setRating(rate)
	}
	const bueCart = () => {
		window.scrollTo(0, 0)
		dispatch(
			setCartAdd({
				image: cartElement.image,
				name: cartElement.name,
				price: cartElement.price,
				amount: 1,
				cashback: 40,
				reviews: cartElement.reviews,
				sale: cartElement.sale,
			})
		)
	}
	const addFavorite = (element: ICart) => {
		setFilterActive([...filterActive].concat([indx]))
		dispatch(setFavoritesDB(massiveFavorite.concat([element])))
	}
	return (
		<>
			<div className={`cart ${indx === open ? 'active-cart' : ''}`}>
				<div className='cart__img'>
					<div className='cart__type'>
						<span
							className='cart__type-span'
							style={{ background: tc(cartElement.type) }}
						></span>
						<h4 className='cart__type-text'>{cartElement.type}</h4>
					</div>
					<img src={cartElement.image[0]} alt='cart' />
				</div>
				<h4 className='cart__title'>{cartElement.name}</h4>
				<div className='cart__rating'>
					<div className='cart__star'>
						<Rating
							onClick={handleRating}
							initialValue={cartElement.star}
							ratingValue={rating}
							size={20}
						/>
					</div>
					<div className='cart__reviews'>
						{reviewsSum} {reviewsSum > 10 ? 'відгуків' : 'відгукa'}
					</div>
				</div>
				<div className='cart__price-status'>
					<div className='cart__price'>
						<h4 className='cart__num'>{cartElement.price} ₴</h4>
						<p className='cart__sale'>{cartElement.sale} ₴</p>
					</div>
					<p className='cart__status'>в наявності</p>
				</div>
				<div className={`cart-bottom ${indx === open ? 'active' : ''}`}>
					<Link to='/bue' onClick={() => bueCart()}>
						<BuyButton svg={true} width={141}>
							в кошик
						</BuyButton>
					</Link>
					<div
						onClick={() => addFavorite(cartElement)}
						className='cart-bottom__icons'
					>
						<LikeSetting
							active={filterActive.filter(e => e === indx).length === 1}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Cart
