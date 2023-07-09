import {useState} from 'react'
import { Rating } from 'react-simple-star-rating'
interface IProps{
	name:string
}
const ReviewsItem = ({name}:IProps) => {
	const [rating, setRating] = useState(0)
	const handleRating = (rate: number) => {
		setRating(rate)
	}
	return (
		<div className='reviews-item'>
			<h5 className='reviews-item__name'>{name}</h5>
			<div className='reviews-item__text'>
				<div className='reviews-item__date-text'>
					<p className='reviews-item__date'>6 ноября 2021</p>
					<h6 className='reviews-item__desc'>
						Супер модель ідеально підходить для вейпінгу
					</h6>
				</div>
				<div className='reviews-item__rating'>
					<h5 className='reviews-item__num'>4/5</h5>
					<Rating
						onClick={handleRating}
						initialValue={4}
						ratingValue={rating}
						size={20}
					/>
				</div>
			</div>
		</div>
	)
}

export default ReviewsItem
