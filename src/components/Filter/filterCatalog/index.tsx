import React from 'react'
import CheckboxFilter from '../../UI/Inputs/Checkbox/checkboxFilter'
import RangeInput from '../../UI/Inputs/RangeInput'
import './filterCatalog.Module.scss'
type IProps = {
	inputRange: string
	setInputRange: React.Dispatch<React.SetStateAction<string>>
}
const FilterCatalog = ({ inputRange, setInputRange }: IProps) => {
	const checkbox = ['Checkbox', 'Checkbox', 'Checkbox', 'Checkbox']
	return (
		<section className='filter-catalog'>
			<div className='filter-catalog__colum'>
				<h4 className='filter-catalog__title'>Ціна</h4>
				<RangeInput inputRange={inputRange} setInputRange={setInputRange} />
			</div>
			<div className='filter-catalog__colum'>
				<h4 className='filter-catalog__title'>Виробник</h4>
				<CheckboxFilter numberCheckbox='1' checkbox={checkbox} />
			</div>
			<div className='filter-catalog__colum'>
				<h4 className='filter-catalog__title'>Назва параметру</h4>
				<CheckboxFilter numberCheckbox='2' checkbox={checkbox} />
			</div>
		</section>
	)
}

export default FilterCatalog
