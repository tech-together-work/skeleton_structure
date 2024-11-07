import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './BlockSlider.module.scss';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Card from './Card/Card';
import SwiperNav from '../SwiperNav/SwiperNav';

const BlockSlider = () => {
  return (
    <div className={styles.blockSwiperContainer}>
      <Swiper
        speed={700}
        className={styles.swiper}
        modules={[Navigation]}
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
