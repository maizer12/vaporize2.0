import Buttons from '../UI/Buttons/BuyButton'
import CheckoutFormInput from '../UI/Inputs/CheckoutFormInput'
type IProps = {
	switchPopup: React.Dispatch<React.SetStateAction<Boolean>>
}
function LoginForm({ switchPopup }: IProps) {
	const openRegistration = () => {
		switchPopup(false)
	}
	return (
		<div className='registration-login'>
			<div className='registration-login__header'>
				<h2 className='registration-login__title'>Вхід</h2>
				<button onClick={openRegistration} className='registration-login__link'>
					Зареєструватися
				</button>
			</div>
			<CheckoutFormInput
				placeholder='+380 00-0-000-000'
				name={'Номер телефону або e-mail'}
			/>
			<CheckoutFormInput placeholder='******' name='Пароль' />

			<div className='registration-login__button'>
				<Buttons width={420}>Увійти</Buttons>
			</div>
		</div>
	)
}

export default LoginForm
