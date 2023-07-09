import React, { useState } from 'react'
import './filterTeg.Module.scss'
interface IProps {
	items: string[]
	name: string
}
const FilterTeg = ({ items, name }: IProps) => {
	const [num, setNum] = useState<number>(0)
	return (
		<div className='filter-teg'>
			<h5 className='filter-teg__name'>{name}</h5>
			<ul className='filter-teg__items'>
				{items.map((e, i) => (
					<li key={e} onClick={()=> setNum(i)} className={`filter-teg__item ${num === i? 'teg-active':''}`}>{e}</li>
				))}
			</ul>
		</div>
	)
}

export default FilterTeg
