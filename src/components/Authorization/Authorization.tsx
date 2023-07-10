import './Authorization.scss'
import MainPopup from '../UI/Popups/MainPopup'
import LoginForm from './LoginForm'
import { useState } from 'react'
import RegistrationForm from './RegistrationForm'
type IProps = {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
function Authorization({ open, setOpen }: IProps) {
	const [openType, setOpenType] = useState<Boolean>(true)
	const closePopup = () => {
		setOpen(false)
	}
	return (
		<MainPopup open={open} setOpen={setOpen}>
			<button onClick={closePopup} className='registration-login-close'>
				<img src='./img/close.svg' alt='close' />
			</button>
			{openType ? (
				<LoginForm switchPopup={setOpenType} />
			) : (
				<RegistrationForm switchPopup={setOpenType} />
			)}
		</MainPopup>
	)
}

export default Authorization
