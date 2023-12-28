import { FC } from 'react';
import newItems from '../../services/newItems.json';
import { ICard } from '../../types/ICard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import ProductCard from '../../components/Products/ProductCard';
import style from './slider.module.scss';

interface IProps {}

const Slider: FC<IProps> = ({}): JSX.Element => {
	const items: ICard[] = newItems;

	return (
		<>
			<div className={style.test}>
				<div className={style.hole}></div>
			</div>
			{/* <Swiper modules={[Navigation, Pagination, A11y]} spaceBetween={50} slidesPerView={5} navigation pagination={{ clickable: true }}>
				{items.map(e => (
					<SwiperSlide>
						<ProductCard cartElement={e} indx={1} open={2} />
					</SwiperSlide>
				))}
			</Swiper> */}
		</>
	);
};

export default Slider;
