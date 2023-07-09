import CheckoutFormInput from '../UI/Inputs/CheckoutFormInput'
import CheckoutFormSelect from '../UI/Selects/checkoutFormSelect'
import './checkoutForm.Module.scss'
const CheckoutForm = () => {
	const payWay = ['Оберіть спосіб оплати', 'Готівка', 'Карткою']
	const departmentAddress = ['Поштою', "Кур'єрська", 'У магазині']
	return (
		<section className='checkout-form'>
			<h4 className='checkout-form__name'>Спосіб оплати: *</h4>
			<CheckoutFormSelect option={payWay} />
			<h4 className='checkout-form__name'>Спосіб доставки: *</h4>
			<CheckoutFormSelect option={departmentAddress} />
			<CheckoutFormInput name="Впишіть ім'я *" placeholder='Іван' />
			<CheckoutFormInput name='Впишіть прізвище *' placeholder='Івнов' />
			<CheckoutFormInput name='Номер телефону *' placeholder='+38099999999' />
			<CheckoutFormInput name='Email' placeholder='sobaka@fjk.com' />
			<label className='checkout-form__label'>
				<input type='checkbox' className='checkout-form__checkbox' />
				<p className='checkout-form__desc checkout-form__desc_bottom'>
					Зареєструватися
				</p>
			</label>
			<p className='checkout-form__desc checkout-form__desc_top'>
				Уточнення до замовлення
			</p>
			<textarea
				className='checkout-form__textarea'
				placeholder='Оберіть способ оплати'
			></textarea>
		</section>
	)
}

export default CheckoutForm
