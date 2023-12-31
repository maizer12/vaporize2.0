import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useState, MouseEventHandler } from 'react';
import { Rating } from 'react-simple-star-rating';
import LikeSetting from '../UI/LikeSetting';
import { AppDispatch, AppSelector } from '../../hooks';
import BuyButton from '../UI/Buttons/BuyButton';
import style from './ProductCard.module.scss';
import { setBasketAdd } from '../../store/slices/basketSlice';
import { setFavoriteAdd, setFavoriteRemove } from '../../store/slices/favoriteSlice';
import ProductCategoryLabel from '../../common/ProductCategoryLabel';
import { ProductCardProps } from './ProductCard.props';
import { HTag } from '../../common';

const ProductCard: FC<ProductCardProps> = ({ cartElement, indx, open }): JSX.Element => {
	const favorites = AppSelector(state => state.favoriteSlice.favoriteItems);
	const reviewsSum = cartElement.reviews.length;
	const [rating, setRating] = useState(0);
	const handleRating = (rate: number) => {
		setRating(rate);
	};

	return (
		<Link to={`/product/${cartElement.id}`} className={`${style.card}`}>
			<div className={style['product-img']}>
				<ProductCategoryLabel category={cartElement.categories as 'tv'} />
				<div className={style.image}>
					<img src={cartElement.image[0]} alt={cartElement.name} />
				</div>
			</div>
			<HTag tag='h4'>{cartElement.name.slice(0, 20) + '...'}</HTag>
			<div className='product-card__rating'>
				<div className='product-card__star'>
					<Rating onClick={handleRating} initialValue={cartElement.star} ratingValue={rating} size={20} />
				</div>
				<div className='product-card__reviews'>
					{reviewsSum} {reviewsSum > 10 ? 'відгуків' : 'відгукa'}
				</div>
			</div>
			<div className='product-card__price-status'>
				<div className='product-card__price'>
					<h4 className='product-card__num'>{cartElement.price} ₴</h4>
					{cartElement.sale && <p className='product-card__sale'>{cartElement.sale} ₴</p>}
				</div>
				<p className='product-card__status'>в наявності</p>
			</div>
			<div className={style['product-bottom']}>
				<button>
					<BuyButton svg={true} width={141}>
						в кошик
					</BuyButton>
				</button>
				<button className='product-card-bottom__icons'>
					<LikeSetting active={false} />
				</button>
			</div>
		</Link>
	);
};

export default ProductCard;
