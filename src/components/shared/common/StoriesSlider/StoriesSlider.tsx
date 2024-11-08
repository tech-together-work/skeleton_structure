import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './StoriesSlider.module.scss';
import 'swiper/css';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Card from './Card/Card';

const StoriesSlider = () => {
  return (
    <div className={styles.blockSwiperContainer}>
      <Swiper
        wrapperClass="singleWrapper"
        speed={2000}
        loop
        className={styles.singleBlockSwiper}
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StoriesSlider;
