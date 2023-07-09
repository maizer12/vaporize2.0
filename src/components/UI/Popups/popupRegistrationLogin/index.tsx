import React, { useState } from 'react'
import { AppDispatch, AppSelector } from '../../../../hooks'
import Buttons from '../../Buttons/BuyButton'
import ReviewsButton from '../../Buttons/ReviewsButton'
import CheckoutFormInput from '../../Inputs/CheckoutFormInput'
import { setUserLogin } from '../../../../store/slice/auntificationSlice'
import './popupRegistrationLogin.Modele.scss'
type IProps = {
	setRegistrationOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const PopupRegistrationLogin = ({ setRegistrationOpen }: IProps) => {
	const userDB = AppSelector(state => state.auntificationSlice.registrationDB)
	const dispatch = AppDispatch()
	const [auntification, setAuntification] = useState(true)
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [passwordRepeat, setPasswordRepeat] = useState<string>('')
	const registration = () => {
		console.log('sfsfsd')
	}
	const login = () => {
		const login = userDB.filter(e => e.login === email)
		if (login.length >= 1) {
			if (login[0].password === password) {
				dispatch(setUserLogin(login[0].login))
				setRegistrationOpen(false)
				return
			}
			alert('Дані невірні!')
		}
	}
	return (
		<section className='registration-login'>
			<div className='registration-login__inner'>
				<button
					className='registration-login__btn'
					onClick={() => setRegistrationOpen(false)}
				>
					<svg
						width='13'
						height='14'
						viewBox='0 0 13 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M11.7141 11.2899C11.9024 11.4782 12.0082 11.7336 12.0082 11.9999C12.0082 12.2662 11.9024 12.5216 11.7141 12.7099C11.5258 12.8982 11.2704 13.004 11.0041 13.004C10.7378 13.004 10.4824 12.8982 10.2941 12.7099L6.00409 8.40994L1.71409 12.7099C1.52579 12.8982 1.27039 13.004 1.00409 13.004C0.73779 13.004 0.482395 12.8982 0.294092 12.7099C0.105788 12.5216 0 12.2662 0 11.9999C0 11.7336 0.105788 11.4782 0.294092 11.2899L4.59409 6.99994L0.294092 2.70994C0.105788 2.52164 -1.9841e-09 2.26624 0 1.99994C1.9841e-09 1.73364 0.105788 1.47825 0.294092 1.28994C0.482395 1.10164 0.73779 0.99585 1.00409 0.99585C1.27039 0.99585 1.52579 1.10164 1.71409 1.28994L6.00409 5.58994L10.2941 1.28994C10.4824 1.10164 10.7378 0.99585 11.0041 0.99585C11.2704 0.99585 11.5258 1.10164 11.7141 1.28994C11.9024 1.47825 12.0082 1.73364 12.0082 1.99994C12.0082 2.26624 11.9024 2.52164 11.7141 2.70994L7.41409 6.99994L11.7141 11.2899Z'
							fill='#222221'
						/>
					</svg>
				</button>
				<div className='registration-login__header'>
					<h2 className='registration-login__title'>
						{auntification ? 'Вхід' : 'Реєстрація'}
					</h2>
					<div
						onClick={() => setAuntification(!auntification)}
						className='registration-login__button'
					>
						<ReviewsButton>
							{auntification ? 'Реєстрація' : 'Вхід'}
						</ReviewsButton>
					</div>
				</div>
				<CheckoutFormInput
					getValue={setEmail}
					placeholder='+380 00-0-000-000'
					name={'Номер телефону або e-mail'}
				/>
				<CheckoutFormInput
					getValue={setPassword}
					placeholder='******'
					name='Пароль'
				/>
				{auntification ? (
					''
				) : (
					<CheckoutFormInput
						getValue={setPasswordRepeat}
						placeholder='******'
						name='Повторіть пароль'
					/>
				)}
				<div
					onClick={() => (auntification ? login() : registration())}
					className='registration-login__button'
				>
					<Buttons width={420}>{auntification ? 'Вхід' : 'Реєстрація'}</Buttons>
				</div>
			</div>
		</section>
	)
}

export default PopupRegistrationLogin
