import React, { useState } from 'react';
import './bueBoxImage.Module.scss';
import ImageMin from './imageMin';
import ICart from '../../../@types/ICart';
import { ProductDetails } from '../../../modules/product';
type IProps = {
  product: ICart;
};
const BueBoxImage = ({ product }: IProps) => {
  const [openImage, setOpenImage] = useState(0);
  return (
    <div className="bue-image">
      <div className="bue-image__content">
        <img src={product.image[openImage]} alt="bue-img" />
      </div>
      <ImageMin openImage={openImage} setOpenImage={setOpenImage} items={product.image} />
    </div>
  );
};

export default BueBoxImage;
