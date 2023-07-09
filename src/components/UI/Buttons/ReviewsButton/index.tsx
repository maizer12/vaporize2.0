import React, { ReactNode } from 'react';
import './reviewsButton.Module.scss'
interface IProps{
	children: ReactNode
}
const ReviewsButton = ({children}:IProps) => {
	return <button className='reviews-button'>{children}</button>
};

export default ReviewsButton;