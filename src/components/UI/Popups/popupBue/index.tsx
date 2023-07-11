import React from 'react'
import { Link } from 'react-router-dom'
import BuyButton from '../../Buttons/BuyButton'
import './popupBue.Module.scss'
type IProps = {
	setPopupSwitch: React.Dispatch<React.SetStateAction<boolean>>
}
const PopupBue = ({ setPopupSwitch }: IProps) => {
	return (
		<section className='popup-bue'>
			<h3 className='popup-bue__title'>Товар успішно доданий до кошика</h3>
			<img
				src='/img/smile.png'
				width={180}
				alt='smile'
				className='popup-bue__img'
			/>
			<Link to='/basket' onClick={() => setPopupSwitch(false)}>
				<BuyButton width={220}>перейти в корзинку</BuyButton>
			</Link>
		</section>
	)
}

export default PopupBue
