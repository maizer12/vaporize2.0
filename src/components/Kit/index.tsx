import React from 'react'
import KitItem from './KitItem'
import './kit.Module.scss'
import Buttons from '../UI/Buttons/BuyButton'
const Kit = () => {
	return (
		<section className='kit'>
			<h2 className='kit__title'>НАЗВА НАБОРУ</h2>
			<div className='kit__items'>
				<KitItem />
				<KitItem />
				<KitItem />
				<KitItem />
			</div>
			<div className='kit__item'>
				<p className='kit__sale'>799 ₴</p>
				<h4 className='kit__price'>599 ₴</h4>
				<Buttons width={141}>в кошик</Buttons>
			</div>
		</section>
	)
}

export default Kit
