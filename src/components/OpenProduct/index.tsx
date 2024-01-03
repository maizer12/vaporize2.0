import { useState } from 'react';
import BueBoxContent from './OpenProductContent';
import BueBoxImage from './bueBoxImage';
import PopupBue from '../../components/UI/Popups/popupBue';
import { useParams } from 'react-router-dom';
import { ICard } from '../../@types/ICard';
import './OpenProduct.scss';
import { AppSelector } from '../../hooks';
import newProduct from '../../services/newItems.json';

function OpenProduct() {
  const [popupSwitch, setPopupSwitch] = useState<boolean>(false);
  const ProductDb: ICard[] = newProduct as ICard[];
  const { productId } = useParams();
  const product: ICard = ProductDb[Number(productId) - 1];

  return (
    <div className="open-product">
      <h2 className="open-product__title">{product.name}</h2>
      <section className="bue-box">
        <BueBoxImage product={product} />
        <BueBoxContent item={product} setPopupSwitch={setPopupSwitch} />
      </section>
      {popupSwitch ? <PopupBue setPopupSwitch={setPopupSwitch} /> : ''}
    </div>
  );
}

export default OpenProduct;
