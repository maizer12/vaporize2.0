import React, { useEffect, useMemo, useState } from 'react'

import './BasketItems.scss'
import ICart from '../../../types/ICart'
import { AppDispatch } from '../../../hooks'
import { setBasketDB } from '../../../store/slices/cartSlice'
import BasketItem from '../BasketItem'

type IProps = {
	BasketDB: ICart[]
}

function BasketItems({ BasketDB }: IProps) {
	const dispatch = AppDispatch()
	const [amountIndex, setAmountIndex] = useState({ sum: 1, index: 2, type: '' })
	function test(sum: number, b: number) {
		if (sum === 1) {
			return b * 2
		} else if (amountIndex.type === '') {
			return (b / sum) * (sum + 1)
		}
		return (b / sum) * (sum - 1)
	}
	// useEffect(() => {
	// 	function changeElement() {
	// 		const newOb = {
	// 			...BasketDB.filter((e, i) => i === amountIndex.index)[0],
	// 			amount: amountIndex.sum - 1,
	// 			price: test(amountIndex.sum, BasketDB[amountIndex.index].price),
	// 		}
	// 		dispatch(
	// 			setBasketDB(
	// 				BasketDB.map((e, i) => (i === amountIndex.index ? newOb : e))
	// 			)
	// 		)
	// 	}
	// 	changeElement()
	// }, [amountIndex])

	const deletElements = (index: number) => {
		dispatch(setBasketDB(BasketDB.filter((e, i) => i !== index)))
	}
	return (
		<ul className='basket-items'>
			{BasketDB.map((e, i) => (
				<BasketItem key={e.id} elem={e} />
			))}
		</ul>
	)
}

export default BasketItems
