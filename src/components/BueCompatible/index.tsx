import CartItems from '../Products/ProductCards'
import CartDB from '../../services/cartItemsDB.json'
const BueCompatible = () => {
	return (
		<section className='bue-compatible'>
			<CartItems title={'Картриджі'} />
			<CartItems title={'Рідини'} />
			<CartItems title={'Вас можуть зацікавити'} />
		</section>
	)
}

export default BueCompatible
