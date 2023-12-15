import Breadcrumbs from '../../components/UI/Breadcrumbs';
import ReviewsButton from '../../components/UI/Buttons/ReviewsButton';
import Button from '../../components/UI/Buttons/BuyButton';
import BasketItems from '../../components/Basket/BasketItems/inde';
import { AppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import './basket.Module.scss';
import EmptyState from '../../components/UI/EmptyState';
import { emptyBasket } from './consts';
import { calcSum } from '../../helpers/calcSum';

const PageBasket = () => {
	const basketDB = AppSelector(state => state.basketSlice.basketItems);
	const breadcrumbs = ['Головна', 'Електронні сигарети', 'Стартові набори', 'Стартовий набор OVNS W01 POD KIT (ORIGINAL)'];

	return (
		<main className='basket'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<h2 className='basket__title'>Корзина</h2>
			{basketDB.length ? (
				<>
					<BasketItems BasketDB={basketDB} />
					<section className='basket-bue'>
						<div className='basket-bue__price-cashback'>
							<div className='basket-bue__cashback'>
								<p className='basket-bue__cashback-text'>Кешбек:</p>
								<h5 className='basket-bue__cashback-num'>{calcSum(basketDB, 'cashback')}</h5>
							</div>
							<div className='basket-bue__price'>
								<h6 className='basket-bue__price-text'>Всього: {calcSum(basketDB, 'price')}</h6>
								<h4 className='basket-bue__price-num'>$</h4>
							</div>
						</div>
						<div className='basket-bue__buttons'>
							<Link to={'/catalog'} className='basket-bue__button'>
								<ReviewsButton children={'ПРОДОВЖИТИ ПОКУПКИ'} />
							</Link>
							<div className='basket-bue__button'>
								<Button width={228} svg={false} children={'ОФОРМИТИ ЗАМОВЛЕННЯ'} />
							</div>
						</div>
					</section>
				</>
			) : (
				<EmptyState {...emptyBasket} />
			)}
		</main>
	);
};

export default PageBasket;
