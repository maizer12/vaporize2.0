import Breadcrumbs from '../../components/UI/Breadcrumbs'
import CheckoutForm from '../../components/CheckoutForm'
import YourOrder from '../../components/YourOrder'
import './checkout.Module.scss'
const PageCheckout = () => {
	const breadcrumbs = [
		'Головна',
		'Електронні сигарети',
		'Стартові набори',
		'Стартовий набор OVNS W01 POD KIT (ORIGINAL)',
	]
	return (
		<main className='checkout'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<h2 className='checkout__title'>Оформлення замовлення</h2>
			<div className='checkout__items'>
				<CheckoutForm />
				<YourOrder />
			</div>
		</main>
	)
}

export default PageCheckout
