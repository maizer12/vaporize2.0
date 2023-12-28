import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import './sliderHome.Module.scss';

const SliderHome = () => {
	return (
		<section
			className='slider'
			style={{
				backgroundImage: `url("/img/bg.jpg")`,
			}}
		>
			<div className='container'>
				<Swiper modules={[Navigation, Pagination, A11y, Autoplay]} spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
					<SwiperSlide>
						<div className='slider__item'>
							<div className='slider__content'>
								<div className='slider__text'>
									<TypeAnimation sequence={['Lenovo IdeaPad Gaming 3-15', 1000, 'Lenovo IdeaPad Gaming AMD Ryzen™', 1000]} wrapper='h1' speed={50} repeat={Infinity} className='slider__title' />
									<p className='slider__desc'>Lenovo IdeaPad Gaming 3 15ACH6 - новинка в лінійці ігрових ноутбуків компанії, що поєднують у собі практичність та високу продуктивність. Він отримав приємний строгий дизайн, а фактичним єдиним дизайнерським елементом, що видає його геймерську</p>
									<button className='slider__btn'>Детально</button>
								</div>
							</div>
							<div className='slider__product'>
								<div className='slider__numbers'>
									<h5 className='slider__price-sale'>752$</h5>
									<h5 className='slider__price'>652$</h5>
								</div>
								<div className='slider__images'>
									<img src='/img/slider.png' alt='product' />
								</div>
								<div className='slider__percent'>-19%</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='slider__item'>
							<div className='slider__content'>
								<div className='slider__text'>
									<h1 className='slider__title'>Vuse ePod Solo Device</h1>
									<p className='slider__desc'>В последнее время, такие устройства, как электронные сигареты, их ещё называют вейп, стремительно набирают популярность у курящих людей</p>
									<button className='slider__btn'>Детально</button>
								</div>
							</div>
							<div className='slider__product'>
								<div className='slider__numbers'>
									<h5 className='slider__price-sale'>752$</h5>
									<h5 className='slider__price'>652$</h5>
								</div>
								<div className='slider__images'>
									<img src='/img/slider.png' alt='product' />
								</div>

								<div className='slider__percent'>-19%</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default SliderHome;
