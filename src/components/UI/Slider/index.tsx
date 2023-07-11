import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/bundle'
import './sliderHome.Module.scss'

const SliderHome = () => {
	return (
		<section
			className='slider'
			style={{
				backgroundImage: `url("/img/bg.png")`,
			}}
		>
			<div className='container'>
				<Swiper
					modules={[Navigation, Pagination, A11y, Autoplay]}
					spaceBetween={50}
					slidesPerView={1}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					navigation
					pagination={{ clickable: true }}
				>
					<SwiperSlide>
						<div className='slider__item'>
							<div className='slider__content'>
								<div className='slider__text'>
									<h1 className='slider__title'>Vuse ePod Solo Device</h1>
									<p className='slider__desc'>
										В последнее время, такие устройства, как электронные
										сигареты, их ещё называют вейп, стремительно набирают
										популярность у курящих людей
									</p>
									<button className='slider__btn'>Детальныше</button>
								</div>
							</div>
							<div className='slider__product'>
								<div className='slider__numbers'>
									<h5 className='slider__price-sale'>752$</h5>
									<h5 className='slider__price'>652$</h5>
								</div>
								<img
									className='slider__images'
									width={350}
									height={512}
									src='/img/slider.png'
									alt='product'
								/>
								<div className='slider__percent'>-19%</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='slider__item'>
							<div className='slider__content'>
								<div className='slider__text'>
									<h1 className='slider__title'>Vuse ePod Solo Device</h1>
									<p className='slider__desc'>
										В последнее время, такие устройства, как электронные
										сигареты, их ещё называют вейп, стремительно набирают
										популярность у курящих людей
									</p>
									<button className='slider__btn'>Детальныше</button>
								</div>
							</div>
							<div className='slider__product'>
								<div className='slider__numbers'>
									<h5 className='slider__price-sale'>752$</h5>
									<h5 className='slider__price'>652$</h5>
								</div>
								<img
									className='slider__images'
									width={350}
									height={512}
									src='/img/slider.png'
									alt='product'
								/>
								<div className='slider__percent'>-19%</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}

export default SliderHome
