import React from 'react';
import './checkoutFormSelect.Module.scss'
type IPlasholder = {
    option: string[]
}
const CheckoutFormSelect = ({option}:IPlasholder) => {
    return (
        <select className='checkout-form-select'>
            {option.map((e, i) => <option key={e} 
                value={i}
             className={`checkout-form-select__option ${i === 0? 'checkout-form-select__one':''}`}>
                {e}
				</option>)}
			</select>
    );
};

export default CheckoutFormSelect;