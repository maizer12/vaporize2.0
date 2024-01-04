import { FC, useState } from 'react';
import SwiperCore, { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ICard } from '../../@types/ICard';
import style from './Slider.module.scss';
import newItems from '../../services/newItems.json';
import ProductCard from '../../components/ProductCard';
import { SliderProps } from './Slider.props';
import SliderHeader from './SliderHeader';
import SliderWrapper from './SliderWrapper';

SwiperCore.use([A11y]);

const Slider: FC<SliderProps> = (): JSX.Element => {
  const items = newItems as ICard[];
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  return (
    <section className={style.slider}>
      <SliderHeader swiper={swiper} />
      <SliderWrapper>
        <Swiper
          spaceBetween={50}
          slidesPerView="auto"
          loop={true}
          centeredSlides={true}
          onSwiper={(swiper) => {
            setSwiper(swiper || null);
          }}
        >
          {items.map((e, index) => (
            <SwiperSlide key={e.id} className={style.slide}>
              <ProductCard indx={index} cartElement={e} open={44} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
    </section>
  );
};

export default Slider;
