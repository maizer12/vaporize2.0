import './assets/style/_main.scss';
import { useEffect } from 'react';
import { Header, Footer } from './layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { Route, Routes } from 'react-router-dom';
import PageBasket from './pages/PageBasket';
import PageCatalog from './pages/PageСatalog';
import PageCheckout from './pages/PageCheckout';
import PageBlog from './pages/PageBlog';
import DeliveryDispatch from './pages/PageDeliveryDispatch';
import PageFaq from './pages/PageFaq';
import PageContact from './pages/PageContact';
import PageFavorites from './pages/PageFavorite';
import PageNotFound from './pages/PageNotFound';
import { AppSelector } from './hooks';

function App() {
  const basketItems = AppSelector((state) => state.basketSlice.basketItems);
  const favoriteItems = AppSelector((state) => state.favoriteSlice.favoriteItems);
  useEffect(() => {
    localStorage.setItem('Basket', JSON.stringify(basketItems));
  }, [basketItems]);
  useEffect(() => {
    localStorage.setItem('Favorite', JSON.stringify(favoriteItems));
  }, [favoriteItems]);
  return (
    <>
      <Header />
      {
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/basket" element={<PageBasket />} />
          <Route path="/catalog/:catalogId" element={<PageCatalog />} />
          <Route path="/checkout" element={<PageCheckout />} />
          <Route path="/blog" element={<PageBlog />} />
          <Route path="/delivery-dispatch" element={<DeliveryDispatch />} />
          <Route path="/faq" element={<PageFaq />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="/favorites" element={<PageFavorites />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      }
      <Footer />
    </>
  );
}

export default App;
