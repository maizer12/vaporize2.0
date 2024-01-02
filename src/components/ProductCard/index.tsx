import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LikeSetting from '../UI/LikeSetting';
import style from './ProductCard.module.scss';
import ProductCategoryLabel from '../../common/ProductCategoryLabel';
import { ProductCardProps } from './ProductCard.props';
import { Button, HTag, LinkTag, PTag, Stars } from '../../common';

const ProductCard: FC<ProductCardProps> = ({ cartElement, indx, open }): JSX.Element => {
  const reviewsSum = cartElement.reviews.length;

  return (
    <Link to={`/product/${cartElement.id}`} className={`${style.card}`}>
      <div className={style['product-img']}>
        <ProductCategoryLabel category={cartElement.categories as 'tv'} />
        <div className={style.image}>
          <img src={cartElement.image[0]} alt={cartElement.name} />
        </div>
      </div>
      <HTag tag="h5">{cartElement.name.slice(0, 20) + '...'}</HTag>
      <div className={style.rating}>
        <Stars value={4} />
        <LinkTag path="/reviews/product:id" animation="outline">
          {reviewsSum} відгуків
        </LinkTag>
      </div>
      <div className={style.status}>
        <div className={style.price}>
          <HTag tag="h3">{cartElement.price} ₴</HTag>
          {cartElement.sale && <p className="product-card__sale">{cartElement.sale} ₴</p>}
        </div>
        <PTag size="md" variant="success">
          в наявності
        </PTag>
      </div>
      <div className={style['product-bottom']}>
        <Button variant="primary" icon="cart">
          в кошик
        </Button>
        <button className="product-card-bottom__icons">
          <LikeSetting active={false} />
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
