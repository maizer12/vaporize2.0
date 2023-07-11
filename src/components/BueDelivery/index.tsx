import React from 'react'
import CartItems from '../Products/ProductCards'
import CartDB from '../../services/cartItemsDB.json'
const BueDelivery = () => {
	return (
		<section className='bue-delivery'>
			<p className='bue-delivery__text'>
				<span>
					В W01, як зарядний пристрій використовує класичний кабель micro-USB,
					позбавляючи від необхідності носити з собою зарядний пристрій.
				</span>
				Зовнішній вигляд - строгі лінії, компактні габарити і максимально
				лаконічний дизайн без яскравих гравіювань. Корпус батареї виготовлений з
				приємного на дотик пластика. По центру блоку розташований невеликий
				світлодіодний індикатор, який горить трьома різними кольорами в
				залежності від заряду акумулятора (зелений - повний заряд, синій -
				середній заряд і червоний - низький заряд). Картридж перезаправлятися,
				має обсяг 0.7 мл і опір 1.8 Ом.
			</p>
			<CartItems item={CartDB} title={'Вас можуть зацікавити'} />
		</section>
	)
}

export default BueDelivery
