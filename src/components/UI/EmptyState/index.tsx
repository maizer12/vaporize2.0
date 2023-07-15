import React from 'react'
import BuyButton from '../Buttons/BuyButton'
import { Link } from 'react-router-dom'
import './EmptyState.scss'
type IProps = {
	title: string
	desc: string
}
function EmptyState({ title, desc }: IProps) {
	return (
		<section className='empty-state'>
			<img src='/img/basket.jpg' alt='smile' className='empty-state__img' />
			<h4 className='empty-state__title'>{title}</h4>
			<p className='empty-state__desc'>{desc}</p>
			<Link to='/'>
				<BuyButton width={149}>
					<svg
						width='17'
						height='14'
						viewBox='0 0 17 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M15.3555 7L1.64118 7'
							stroke='white'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M7.64062 13L1.64063 7L7.64063 1'
							stroke='white'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					повернутися
				</BuyButton>
			</Link>
		</section>
	)
}

export default EmptyState
