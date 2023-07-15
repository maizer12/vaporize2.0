import React from 'react'
import ICart from '../../../types/ICart'
import BuyButton from '../../UI/Buttons/BuyButton'
import { AppDispatch, AppSelector } from '../../../hooks'
import { setCartAdd } from '../../../store/slices/cartSlice'
import { Link } from 'react-router-dom'
import './FavoriteItem.scss'
import { setFavoriteRemove } from '../../../store/slices/favoriteSlice'
type IProps = {
	element: ICart
	index: number
}

function FavoriteItem({ element, index }: IProps) {
	const dispatch = AppDispatch()

	const removeFavorite = () => {
		dispatch(setFavoriteRemove(element.id))
	}
	return (
		<li className='favorite-item'>
			<div className='favorite-item__content'>
				<div className='favorite-item__icon'>
					<img
						src={element.image[0]}
						alt='favorites'
						className='favorite-item__img'
					/>
				</div>
				<div className='favorite-item__inner'>
					<h5 className='favorite-item__name'>{element.name}</h5>
					<div className='favorite-item__text'>
						<h6 className='favorite-item__price favorite-item__price-sale'>
							Ціна: <span>{element.sale}$ </span>
						</h6>
						<h6 className='favorite-item__price'>
							Ціна зі знижкою: {element.price}$
						</h6>
					</div>
				</div>
			</div>
			<div className='favorite-item__buttons'>
				<button onClick={removeFavorite} className='favorite-item__btn'>
					<img
						src='.././img/btn/1.svg'
						alt='remove'
						className='favorite-item__img-remove'
					/>
				</button>
				<Link to={'/bue'}>
					<BuyButton width={220}>Купить</BuyButton>
				</Link>
			</div>
		</li>
	)
}

export default FavoriteItem
