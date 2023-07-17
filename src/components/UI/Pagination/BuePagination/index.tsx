import { useState } from 'react'
import './buePagination.scss'
interface IProm {
	setNumber?: any
}
const BuePagination = ({ setNumber }: IProm) => {
	const [num, setNum] = useState<number>(0)
	const [item, setItem] = useState<string[]>([
		'Опис товару',
		'Сумісні товари',
		'Відгуки',
		'Популярні запитання',
		'Інформація про доставку',
	])
	const clickPagination = (i: number) => {
		setNum(i)
		setNumber(i)
	}
	return (
		<ul className='bue-pagination'>
			{item.map((e, i) => (
				<li
					key={e}
					onClick={() => clickPagination(i)}
					className={`bue-pagination__item ${
						num === i ? 'bue-pagination__item-active' : ''
					}`}
				>
					{e}
				</li>
			))}
		</ul>
	)
}

export default BuePagination
