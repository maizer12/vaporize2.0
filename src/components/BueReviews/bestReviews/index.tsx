import React from 'react'
import BestReviewsItem from './bestReviewsItem'
import './bestReviews.Modules.scss'
import ReviewsButton from '../../UI/Buttons/ReviewsButton'
import CartItems from '../../Products/ProductCards'
import ICart from '../../../types/ICart'
const BestReviews = () => {
	return (
		<section className='best-reviews'>
			<div className='best-reviews__header'>
				<div className='reviews-colum'>
					<h3 className='reviews-colum__title'>Поставити питання</h3>
					<p className='reviews-colum__desc'>
						Напишіть нам в любому зручному для вас месенджері або відправте
						запит
					</p>
				</div>
				<div className='social-reviews'>
					<a href='#' className='social-reviews__link'>
						<img
							src='/img/social/1.svg'
							alt='social'
							className='socials__icon'
						/>
					</a>
					<a href='#' className='social-reviews__link'>
						<img
							src='/img/social/2.svg'
							alt='social'
							className='socials__icon'
						/>
					</a>
					<a href='#' className='social-reviews__link'>
						<img
							src='/img/social/3.svg'
							alt='social'
							className='socials__icon'
						/>
					</a>
				</div>
				<ReviewsButton>Поставити запитання</ReviewsButton>
			</div>
			<div className='best-reviews__items'>
				<BestReviewsItem />
				<BestReviewsItem />
				<BestReviewsItem />
				<BestReviewsItem />
				<BestReviewsItem />
			</div>
			<CartItems title={'Вас можуть зацікавити'} />
		</section>
	)
}

export default BestReviews
