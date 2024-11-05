// Import React and Swiper
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './CurveSlider.module.scss';
// Import Swiper styles
import 'swiper/css';

// Import any additional modules you need
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import the Swiper's CSS for the modules you're using
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
        modules={[Navigation, Pagination]}
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
        {arr.map((item, index) => {
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
