import React from 'react';

const BestReviewsItem = () => {
	return (
		<div className='item-reviews'>
			<div className='item-reviews__head'>
				<h4 className='item-reviews__name'>Олег Петрович</h4>
				<p className='item-reviews__data'>06 января 2022</p>
			</div>
			<div className='item-reviews__desc'>
				В W01, як зарядний пристрій використовує класичний кабель micro-USB,
				позбавляючи від необхідності носити з собою зарядний пристрій.
			</div>
			<div className='reviews-answer'>
				<h5 className='reviews-answer__name'>Відповідь</h5>
				<p className='reviews-answer__text'>
					Зовнішній вигляд - строгі лінії, компактні габарити і максимально
					лаконічний дизайн без яскравих гравіювань.
				</p>
			</div>
		</div>
	)
};

export default BestReviewsItem;