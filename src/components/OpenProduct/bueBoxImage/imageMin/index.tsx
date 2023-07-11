import { useState } from 'react'

interface IProps {
	items: string[]
	setOpenImage: React.Dispatch<React.SetStateAction<number>>
	openImage: number
}
const ImageMin = ({ items, openImage, setOpenImage }: IProps) => {
	return (
		<ul className='bue-image__items'>
			{items.map((e, i) => (
				<li
					key={i}
					onClick={() => setOpenImage(i)}
					className={`bue-image__item ${i === openImage ? 'min-active' : ''}`}
				>
					<img width={77} height={70} src={e} alt='bue-item' />
				</li>
			))}
		</ul>
	)
}

export default ImageMin
