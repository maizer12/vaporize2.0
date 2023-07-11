import React from 'react'
import ICart from '../../types/ICart'
import BuyButton from '../UI/Buttons/BuyButton'
import './favoritesItem.Module.scss'
import { setFavoritesDB } from '../../store/slice/favoriteSlice'
import { AppDispatch, AppSelector } from '../../hooks'
import { setCartAdd } from '../../store/slice/cartSlice'
import { Link } from 'react-router-dom'
type IProps = {
	elementCart: ICart
	index: number
}
const FavoritesItem = ({ elementCart, index }: IProps) => {
	const dispatch = AppDispatch()
	const allFavorites = AppSelector(state => state.favoriteSlice.favoritesDB)
	const removeFavorite = (a: number) => {
		dispatch(setFavoritesDB(allFavorites.filter((e, i) => i !== a)))
	}
	const bueFavorite = (e: ICart, i: number) => {
		removeFavorite(i)
		dispatch(setCartAdd(e))
	}
	return (
		<li className='favorites-item'>
			<div className='favorites-item__icon'>
				<img
					src={elementCart.image[0]}
					alt='favorites'
					className='favorites-item__img'
				/>
			</div>
			<h5 className='favorites-item__name'>{elementCart.name}</h5>
			<h6 className='favorites-item__price'>Ціна: {elementCart.price}$</h6>
			<div className='favorites-item__buttons'>
				<button
					onClick={() => removeFavorite(index)}
					className='favorites-item__btn'
				>
					<img
						src='.././img/btn/1.svg'
						alt='remove'
						className='favorites-item__img-remove'
					/>
				</button>
				<Link to={'/bue'} onClick={() => bueFavorite(elementCart, index)}>
					<BuyButton width={220}>Купить</BuyButton>
				</Link>
			</div>
		</li>
	)
}

export default FavoritesItem
