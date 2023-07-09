import React from 'react';
import './checkoutFormInput.Module.scss'

type Input ={
	name:string,
	placeholder:string,
    getValue?: React.Dispatch<React.SetStateAction<string>>,
}

const CheckoutFormInput = ({name, placeholder, getValue}: Input) => {

	return (
		<>
			<p className='checkout-form__desc'>{name}</p>
			<input onChange={(e)=> getValue? getValue(e.target.value):''} type='text' className='checkout-form-input' placeholder={placeholder} />
		</>
	)
};

export default CheckoutFormInput;