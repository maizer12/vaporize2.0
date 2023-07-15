import Breadcrumbs from '../../components/UI/Breadcrumbs'
import ReviewsButton from '../../components/UI/Buttons/ReviewsButton'
import Button from '../../components/UI/Buttons/BuyButton'
import BasketItems from '../../components/Basket/BasketItems/inde'
import { AppSelector } from '../../hooks'
import { Link } from 'react-router-dom'
import './basket.Module.scss'
import EmptyState from '../../components/UI/EmptyState'
import { emptyBasket } from './consts'
const PageBasket = () => {
	const BasketDB = AppSelector(state => state.basketSlice.basketItems)
	const breadcrumbs = [
		'Головна',
		'Електронні сигарети',
		'Стартові набори',
		'Стартовий набор OVNS W01 POD KIT (ORIGINAL)',
	]
	let sumPrices = 0
	let sumCashback = 0
	const calcSum = (price: number, casback: number) => {
		sumPrices += price
		sumCashback += casback
	}
	BasketDB.map(e => calcSum(e.price, e.cashback))
	return (
		<main className='basket'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<h2 className='basket__title'>Корзина</h2>
			{BasketDB.length ? (
				<>
					<BasketItems BasketDB={BasketDB} />
					<section className='basket-bue'>
						<div className='basket-bue__price-cashback'>
							<div className='basket-bue__cashback'>
								<p className='basket-bue__cashback-text'>Кешбек:</p>
								<h5 className='basket-bue__cashback-num'>{sumCashback}</h5>
							</div>
							<div className='basket-bue__price'>
								<h6 className='basket-bue__price-text'>Всього:</h6>
								<h4 className='basket-bue__price-num'>{sumPrices}$</h4>
							</div>
						</div>
						<div className='basket-bue__buttons'>
							<Link to={'/catalog'} className='basket-bue__button'>
								<ReviewsButton children={'ПРОДОВЖИТИ ПОКУПКИ'} />
							</Link>
							<div className='basket-bue__button'>
								<Button
									width={228}
									svg={false}
									children={'ОФОРМИТИ ЗАМОВЛЕННЯ'}
								/>
							</div>
						</div>
					</section>
				</>
			) : (
				<EmptyState {...emptyBasket} />
			)}
		</main>
	)
}

export default PageBasket
