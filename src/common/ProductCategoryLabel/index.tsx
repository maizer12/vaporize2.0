import { FC } from 'react';
import style from './ProductCategoryLabel.module.scss';
import { CategoriesType } from '../../@types/ICard';

interface IProps {
  category: CategoriesType;
}

const ProductCategoryLabel: FC<IProps> = ({ category }) => {
  return (
    <div className={style.type}>
      <span className="product-card__type-span"></span>
      <h4 className="product-card__type-text">{category}</h4>
    </div>
  );
};

export default ProductCategoryLabel;
