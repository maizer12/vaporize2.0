import React, { useState } from 'react'
import './bueBoxImage.Module.scss'
import ImageMin from './imageMin'
import { AppSelector } from '../../../hooks'
const BueBoxImage = () => {
	const imgBueCart = AppSelector(state => state.cartSlice.cartBue)
	const [openImage, setOpenImage] = useState(0)
	return (
		<div className='bue-image'>
			<div className='bue-image__content'>
				<div className='bue-image__type'></div>
				<img
					width={540}
					height={494}
					src={imgBueCart.image[openImage]}
					alt='bue-img'
				/>
			</div>
			<ImageMin
				openImage={openImage}
				setOpenImage={setOpenImage}
				items={imgBueCart.image}
			/>
		</div>
	)
}

export default BueBoxImage
