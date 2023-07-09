import React, { useState } from 'react'
import './paginationCards.Module.scss'

interface IProps {
	sumCart: number
	sumElementNow: number
	setSumPagination: React.Dispatch<React.SetStateAction<number>>
}

const PaginationCards = ({ sumCart, sumElementNow }: IProps) => {
	const numElem: number[] = []
	const [paginationActive, setPaginationActive] = useState<number>(0)
	for (let i = 1; i <= Math.ceil(sumCart / sumElementNow); i++) {
		numElem.push(i)
	}
	return (
		<div className='cards-pagination'>
			{numElem.map((e, i) => (
				<div
					key={i}
					onClick={() => setPaginationActive(i)}
					className={`cards-pagination__item ${
						paginationActive === i ? 'active-pag' : ''
					}`}
				>
					{e}
				</div>
			))}
		</div>
	)
}

export default PaginationCards
