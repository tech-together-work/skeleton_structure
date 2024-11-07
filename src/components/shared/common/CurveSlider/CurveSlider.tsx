import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './CurveSlider.module.scss';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Card from './Card/Card';
import SwiperNav from '../SwiperNav/SwiperNav';
import { useEffect, useState } from 'react';

const CurveSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const arr = ['1', '2', '3', '4'];
  console.log(activeIndex);

  useEffect(() => {}, []);
  return (
    <div className={styles.curveSliderContainer}>
      <Swiper
        className={styles.swiper}
        modules={[Navigation]}
        spaceBetween={'24px'}
        breakpoints={{
          200: {
            slidesPerView: 2, // Mobile
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2, // Tablet
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // Desktop
            spaceBetween: 24,
          },
        }}
        speed={700}
        wrapperClass={'curveWrapper'}
        loop
        centeredSlides
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => {
          setActiveIndex(Math.floor(swiper.realIndex % arr.length));
        }}
      >
        {arr.map((_, index) => {
          return (
            <SwiperSlide key={index} className={styles.slider}>
              <Card isActive={index === activeIndex} />
            </SwiperSlide>
          );
        })}
        <SwiperNav />
      </Swiper>
    </div>
  );
};

export default CurveSlider;
