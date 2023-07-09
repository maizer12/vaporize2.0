import React from 'react'
import Buttons from '../UI/Buttons/BuyButton'
import './yourOrder.Module.scss'
const YourOrder = () => {
	return (
		<section className='your-order'>
			<div className='your-order__header'>
				<h5 className='your-order__name'>Ваше замовлення</h5>
				<button className='your-order__link'>Змінити</button>
			</div>
			<ul className='your-order__items'>
				<li className='order-item order-item_space-between'>
					<img
						src='./img/cart/1.png'
						width={112}
						height={103}
						alt='product'
						className='order-item__img'
					/>
					<div className='order-item__text'>
						<h5 className='order-item__name'>
							Cтартовий набiр OVNS W01 POD KIT (original)
						</h5>
						<p className='order-item__desc'>
							Ціна: 800 грн Кількість: 1 Параметри продукту (смак, і т п)
						</p>
					</div>
				</li>
				<li className='order-item'>
					<h4 className='order-item__title'>Спосіб оплати:</h4>
					<p className='order-item__subtitle'>Visa/Mastercard</p>
				</li>
				<li className='order-item'>
					<h4 className='order-item__title'>Доставка:</h4>
					<p className='order-item__subtitle'>50 грн</p>
				</li>
				<li className='order-item'>
					<h4 className='order-item__title'>Нараховано кешбек</h4>
					<p className='order-item__subtitle'>20</p>
				</li>
				<li className='order-item'>
					<button className='your-order__link'>У мене є промокод</button>
				</li>
			</ul>
			<div className='your-order__price'>
				<h4 className='your-order__price-title'>Всього:</h4>
				<h4 className='your-order__price-number'>2396 ₴</h4>
			</div>
			<div className='your-order__btn'>
				<Buttons width={244}>ПІДТВЕРДИТИ ЗАМОВЛЕННЯ</Buttons>
			</div>
		</section>
	)
}

export default YourOrder
