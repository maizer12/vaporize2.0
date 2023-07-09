import CartItems from '../Products/CartItems'
import CartDB from '../../services/cartItemsDB.json'
const BueCompatible = () => {
	return (
		<section className='bue-compatible'>
			<CartItems item={CartDB} title={'Картриджі'} />
			<CartItems item={CartDB} title={'Рідини'} />
			<CartItems item={CartDB} title={'Вас можуть зацікавити'} />
		</section>
	)
}

export default BueCompatible
