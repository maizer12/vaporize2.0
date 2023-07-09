import React, { useState } from 'react'
import './calkulatorBasket.Module.scss'
type amountIndex ={
    sum:number,
    index:number,
    type:string,
}
type IProps ={
    amountMassive:number,
    setAmountIndex: React.Dispatch<React.SetStateAction<amountIndex>>,
    index:number,
    type:string
}
const CalkulatorBasket = ({amountMassive, index, setAmountIndex, type}:IProps) => {
    const [amount, setAmount] = useState<number>(amountMassive)
    const newAmount = (i:number)=>{
        setAmount(amount + 1)
        setAmountIndex({sum: amount, index:i, type:''})
    }
    const decrementAmount = (i:number)=>{
        setAmount(amount - 1)
        setAmountIndex({sum: amount, index:i, type:'decrement'})
    }
	return (
		<div className='calculator-item'>
			<button
				onClick={() => newAmount(index)}
				className='calculator-item__btn'
			>
				+
			</button>
			<h6 className='calculator-item__input'>{amount? amount  : 0}</h6>
			<button
				onClick={() => amount >= 2? decrementAmount(index): 0}
				className='calculator-item__btn'
			>
				-
			</button>
		</div>
	)
}

export default CalkulatorBasket
