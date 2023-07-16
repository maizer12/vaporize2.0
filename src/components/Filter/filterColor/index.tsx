import { useState } from 'react'
import './filterColor.scss'
const FilterColor = () => {
	const [num, setNum] = useState<number>(0)
	const [color, setColor] = useState<string[]>([
		'#D25A5A',
		'#2C0F0F',
		'#43DB92',
		'#3050C0',
		'#A04242',
	])
	return (
		<div className='filter-color'>
			<h5 className='filter-color__title'>Колір</h5>
			<ul className='filter-color__items'>
				{color.map((e, i) => (
					<li
						onClick={() => setNum(i)}
						key={e}
						style={{ backgroundColor: e }}
						className={`filter-color__item ${num === i ? 'item-active' : ''}`}
					></li>
				))}
			</ul>
		</div>
	)
}

export default FilterColor
