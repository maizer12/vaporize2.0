import { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/UI/Breadcrumbs';
import BueCompatible from '../../components/BueCompatible';
import BueDelivery from '../../components/BueDelivery';
import BueDesc from '../../components/BueDesc';
import BueReviews from '../../components/BueReviews';
import BestReviews from '../../components/BueReviews/bestReviews';
import BuePagination from '../../components/UI/Pagination/BuePagination';
import { breadcrumbsProductPage } from './_config';

import './PageProduct.scss';
import OpenProduct from '../../components/OpenProduct';
import { clearScroll } from '../../helpers/clearScroll';
import { ProductDetails } from '../../modules/product';
const PageProduct = () => {
  const pagination: JSX.Element[] = [<BueDesc />, <BueCompatible />, <BueReviews />, <BestReviews />, <BueDelivery />];
  useEffect(() => {
    clearScroll();
  }, []);
  const [num, setNum] = useState<number>(0);
  return (
    <main className="bue">
      <Breadcrumbs breadcrumbs={breadcrumbsProductPage} />
      <ProductDetails />
      <OpenProduct />
      <BuePagination setNumber={setNum} />
      {pagination[num]}
    </main>
  );
};

export default PageProduct;
