import CartItems from '../../components/Products/ProductCards';
import News from '../../components/News';
import SliderHome from '../../components/UI/Slider';
import './homePage.scss';
import Slider from '../../modules/slider';

const HomePage = (): JSX.Element => {
  return (
    <main>
      <SliderHome />
      <Slider />
      <Slider />
      <div className="banner">
        <img width={1110} height={304} src="/img/home/banner.png" alt="banner" />
      </div>
      <Slider />
      <div className="home-text">
        <div className="home-text__img">
          <img width={13} height={19} src="/img/bord.svg" alt="border-icon" />
        </div>
        <h3 className="home-text__title">Магазин товарів для куріння</h3>
        <p className="home-text__desc">
          Электронные сигареты изобретенные вначале 2003 года помогли уже миллионам людей отказаться от аналогового
          курения. Сейчас вейпинг не просто отказ от курения, а целая культура, имеющая в своем арсенале десятки
          миллионов поклонников во всем мире. Людей с электронками можно встретить везде как рядом с метро так и в
          дорогом загородном клубе.
          {'\n'}
          {'\n'}
          Главное преимущество электронного парения - менее вредный пар, как для людей, которые используют вейп так и
          для окружающих. Также, он привлекает своим изобилием вкусов и удобством перед кальяном.
          {'\n'}
          {'\n'}
          Если Вы курите сигареты, и хотите избавиться от этой привычки, обязательно советуем Вам посетить наш вейп шоп
          в Киеве.{'\n'}
          {'\n'} Ведь процесс парения не только более здоровый, но и очень приятный. Заботясь о здоровье своих граждан,
          большая часть Евросоюза выступили в поддержку перехода с аналоговых сигарет на электронные. Также, эта
          привычка экономит Ваш бюджет. Один раз скупиться в вейп-шопе выходит намного выгоднее чем ежедневные покупки в
          ларьках с сигаретами. В нашем вейп шопе вы сможете ознакомится с любой интересной для Вас продукцией,
          потрогать ее. Наши консультанты максимально эффективно подберут устройство под Ваш запрос, и Вы точно
          останетесь довольными. {'\n'} {'\n'} Клиентская база нашего вейпшопа в Киеве насчитывает уже тысячи клиентов,
          к нам приезжают со всей области. Вейп шоп ЮВЕЙП славится своим гостеприимством и постоянными подарками для
          своих посетителей. Если не знаете, что подарить своему другу, у нас сможете подобрать максимально эффективный
          и вкусный подарок. Например под систему. {'\n'} {'\n'} Магазин электронных сигарет UVAPE – сотрудничает с
          самыми передовыми производителями как : JUUL Pax Lab, Logic, Eleaf, Smok, Smoant, GeekVape, Zenith, Bad Drip,
          HMBL, Voopoo, Lost Vape, Aspire и много других. Если не желаете выходить с дома, то у нас работает очень
          удобный интернет-магазин вейпов.
        </p>
      </div>
      <div className="banner">
        <img width={1110} height={304} src="/img/home/banner.png" alt="banner" />
      </div>
      <News />
    </main>
  );
};

export default HomePage;
