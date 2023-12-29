import { FC, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ICard } from '../../types/ICard';
import style from './Slider.module.scss';
import BtnLink from '../../components/UI/Buttons/BtnLink';
import newItems from '../../services/newItems.json';
import ProductCard from '../../components/ProductCard';

interface IProps {}

SwiperCore.use([Navigation, Pagination, A11y]);

const Slider: FC<IProps> = (): JSX.Element => {
	const items = newItems as ICard[];
	const [swiper, setSwiper] = useState<SwiperCore | null>(null);

	return (
		<>
			<div className={style.main}>
				<div className={style.header + ' container'}>
					<h3 className={style.title}>Новинки товарів</h3>
					<div className={style.header}>
						<BtnLink path='/'>Дивитися всі новинки</BtnLink>
						<div className={style.buttons}>
							<button onClick={() => swiper?.slidePrev()}>
								<svg viewBox='0 0 330 330'>
									<path d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z' />
								</svg>
							</button>
							<button onClick={() => swiper?.slideNext()}>
								<svg viewBox='0 0 330 330'>
									<path d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z' />
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className={style.test}>
					<Swiper
						spaceBetween={50}
						slidesPerView='auto'
						navigation
						pagination={{ clickable: true }}
						loop={true}
						centeredSlides={true}
						onSwiper={swiper => {
							setSwiper(swiper || null);
						}}
						onActiveIndexChange={swiper => {
							console.log('active index is', swiper.activeIndex);
						}}
					>
						{items.map((e, index) => (
							<SwiperSlide key={e.id} className={style.slide}>
								<ProductCard indx={index} cartElement={e} open={44} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default Slider;
