import { useState } from 'react'
import BueBoxContent from './OpenProductContent'
import BueBoxImage from './bueBoxImage'
import PopupBue from '../../components/UI/Popups/popupBue'
import { useParams } from 'react-router-dom'
import ICart from '../../types/ICart'
import './OpenProduct.scss'
import { AppSelector } from '../../hooks'

function OpenProduct() {
	const [popupSwitch, setPopupSwitch] = useState<boolean>(false)
	const ProductDb = AppSelector(state => state.productSlice.productItems)
	const { productId } = useParams()
	const product: ICart = ProductDb[Number(productId)]
	return (
		<div className='open-product'>
			<h2 className='open-product__title'>{product.name}</h2>
			<section className='bue-box'>
				<BueBoxImage product={product} />
				<BueBoxContent item={product} setPopupSwitch={setPopupSwitch} />
			</section>
			{popupSwitch ? <PopupBue setPopupSwitch={setPopupSwitch} /> : ''}
		</div>
	)
}

export default OpenProduct
