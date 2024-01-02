import { useState, MouseEventHandler } from 'react';
import { Rating } from 'react-simple-star-rating';
import LikeSetting from '../../UI/LikeSetting';
import { Link } from 'react-router-dom';
import { AppDispatch, AppSelector } from '../../../hooks';
import ICart from '../../../types/ICart';
import BuyButton from '../../UI/Buttons/BuyButton';
import './ProductCard.scss';
import { setBasketAdd } from '../../../store/slices/basketSlice';
import { setFavoriteAdd, setFavoriteRemove } from '../../../store/slices/favoriteSlice';
function tc(a: string) {
  if (a === 'NEW') {
    return 'radial-gradient(131.25% 131.25% at 50.68% 131.25%, #461E4D 0%, #92499E 100%),linear-gradient(0deg, #C4C4C4, #C4C4C4)';
  } else if (a === 'Discount') {
    return 'radial-gradient(131.25% 131.25% at 50.68% 131.25%, #DF3616 0%, #FF7D65 100%)';
  } else if (a === 'HOT') {
    return 'radial-gradient(131.25% 131.25% at 50.68% 131.25%, #A3260F 0%, #DF3616 100%)';
  }
}
type IProps = {
  cartElement: ICart;
  indx: number;
  open: number;
};
const ProductCard = ({ cartElement, indx, open }: IProps) => {
  const favorites = AppSelector((state) => state.favoriteSlice.favoriteItems);
  const checkFavorite = Boolean(favorites.find((e) => e.id === cartElement.id));
  const dispatch = AppDispatch();
  const reviewsSum = cartElement.reviews.length;
  const [rating, setRating] = useState(0);
  const handleRating = (rate: number) => {
    setRating(rate);
  };
  const addFavorite: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (checkFavorite) {
      dispatch(setFavoriteRemove(cartElement.id));
    } else {
      dispatch(setFavoriteAdd(cartElement));
    }
  };
  const addBasket: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(setBasketAdd(cartElement));
    e.preventDefault();
  };
  const openCheck: string = indx === open ? 'active-product-card' : '';
  return (
    <>
      <Link to={`/product/${cartElement.id}`} className={`product-card ${openCheck}`}>
        <div className="product-card__img">
          <img src={cartElement.image[0]} alt="cart" />
        </div>
        <h4 className="product-card__title">{cartElement.name}</h4>
        <div className="product-card__rating">
          <div className="product-card__star">
            <Rating onClick={handleRating} initialValue={cartElement.star} ratingValue={rating} size={20} />
          </div>
          <div className="product-card__reviews">
            {reviewsSum} {reviewsSum > 10 ? 'відгуків' : 'відгукa'}
          </div>
        </div>
        <div className="product-card__price-status">
          <div className="product-card__price">
            <h4 className="product-card__num">{cartElement.price} ₴</h4>
            {cartElement.sale && <p className="product-card__sale">{cartElement.sale} ₴</p>}
          </div>
          <p className="product-card__status">в наявності</p>
        </div>
        <div className={`product-card-bottom ${indx === open ? 'active' : ''}`}>
          <button onClick={addBasket}>
            <BuyButton svg={true} width={141}>
              в кошик
            </BuyButton>
          </button>
          <button onClick={addFavorite} className="product-card-bottom__icons">
            <LikeSetting active={checkFavorite} />
          </button>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
