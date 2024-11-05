// Import React and Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './BlockSlider.module.scss';
// Import Swiper styles
import 'swiper/css';

// Import any additional modules you need
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import the Swiper's CSS for the modules you're using
import 'swiper/css/navigation';
import Card from './Card/Card';
import SwiperNav from '../SwiperNav/SwiperNav';

const BlockSlider = () => {
  return (
    <div className={styles.blockSwiperContainer}>
      <Swiper
        speed={700}
        className={styles.swiper}
        modules={[Navigation, Pagination]}
        spaceBetween={'24px'}
        slidesPerView={'auto'}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className={styles.slider}>
          <Card />
        </SwiperSlide>
        <SwiperSlide className={styles.slider}>
          <Card />
        </SwiperSlide>
        <SwiperSlide className={styles.slider}>
          <Card />
        </SwiperSlide>
        <SwiperSlide className={styles.slider}>
          <Card />
        </SwiperSlide>
        <SwiperSlide className={styles.slider}>
          <Card />
        </SwiperSlide>
        <SwiperSlide className={styles.slider}>
          <Card />
        </SwiperSlide>
        <SwiperNav />
      </Swiper>
    </div>
  );
};

export default BlockSlider;
