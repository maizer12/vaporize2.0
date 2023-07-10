import Buttons from '../UI/Buttons/BuyButton'
import CheckoutFormInput from '../UI/Inputs/CheckoutFormInput'
type IProps = {
	switchPopup: React.Dispatch<React.SetStateAction<Boolean>>
}
function RegistrationForm({ switchPopup }: IProps) {
	const openLogin = () => {
		switchPopup(true)
	}
	return (
		<div className='registration-login'>
			<div className='registration-login__header'>
				<h2 className='registration-login__title'>Реєстрація</h2>
				<button onClick={openLogin} className='registration-login__link'>
					Увійти
				</button>
			</div>
			<CheckoutFormInput
				placeholder='+380 00-0-000-000'
				name={'Номер телефону або e-mail'}
			/>
			<CheckoutFormInput placeholder='******' name='Пароль' />
			<CheckoutFormInput placeholder='******' name='Повторіть пароль' />
			<div className='registration-login__button'>
				<Buttons width={420}>Зареєструватися</Buttons>
			</div>
		</div>
	)
}

export default RegistrationForm
