import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import './bueReviews.Modules.scss'
import ReviewsItem from './reviewsItem'
import CartItems from '../Products/ProductCards'
import ReviewsButton from '../UI/Buttons/ReviewsButton'
import CartDB from '../../services/cartItemsDB.json'
const BueReviews = () => {
	const [rating, setRating] = useState(0)
	const handleRating = (rate: number) => {
		setRating(rate)
	}
	return (
		<section className='reviews'>
			<div className='reviews-header'>
				<div className='reviews-header__left'>
					<Rating
						onClick={handleRating}
						initialValue={4}
						ratingValue={rating}
						size={28}
					/>
					<div className='reviews-header__num'>4/5</div>
					<div className='reviews-header__sum'>225 відгуків</div>
				</div>
				<button className='reviews-header__btn'>
					<ReviewsButton>Написати відгук</ReviewsButton>
				</button>
			</div>
			<div className='reviews-sort'>
				<h3 className='reviews-sort__title'>Відгуки</h3>
				<div className='reviews-sort__right'>
					<h6 className='reviews-sort__name'>Рейтнг:</h6>
					<select className='reviews-select'>
						<option className='reviews-select__option' value='html'>
							Спочатку нові
						</option>
					</select>
				</div>
			</div>
			<div className='reviews__items'>
				<ReviewsItem name={'Анатоли'} />
				<ReviewsItem name={'Максим'} />
				<ReviewsItem name={'Иван'} />
				<ReviewsItem name={'Илон'} />
			</div>
			<CartItems item={CartDB} title={'Вас можуть зацікавити'} />
		</section>
	)
}

export default BueReviews
