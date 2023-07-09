import React from 'react';
import './checkboxFilter.Module.scss'
type IProps = {
    checkbox: string[],
    numberCheckbox: string,
}
const CheckboxFilter = ({checkbox, numberCheckbox}:IProps) => {
	return (
		<div className='checkbox-filter'>
			{checkbox.map((e, i) => (
				<div key={i} className='checkbox-filter'>
					<input type='checkbox' id={`${i + numberCheckbox}`} />
					<label className='checkbox-filter__text' htmlFor={i + numberCheckbox}>
						{e}
					</label>
				</div>
			))}
		</div>
	)
};

export default CheckboxFilter;