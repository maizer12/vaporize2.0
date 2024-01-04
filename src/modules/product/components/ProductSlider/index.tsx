import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { FC, useState } from 'react';
import { Thumbs } from 'swiper';

export const ProductSlider: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | undefined>(undefined);

  return (
    <main>
      {/* Main Swiper -> pass thumbs swiper instance */}
      <Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
        {/* Content for main swiper slides */}
        <SwiperSlide>{/* ... your content here ... */}</SwiperSlide>
      </Swiper>

      {/* Thumbs Swiper -> store swiper instance */}
      {/* It is also required to set watchSlidesProgress prop */}
      <Swiper modules={[Thumbs]} watchSlidesProgress onSwiper={(swiper) => setThumbsSwiper(swiper as Swiper)}>
        {/* Content for thumbs swiper slides */}
        <SwiperSlide>{/* ... your content here ... */}</SwiperSlide>
      </Swiper>
    </main>
  );
};
