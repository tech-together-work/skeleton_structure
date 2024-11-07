import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './SingleBlockSlider.module.scss';
import 'swiper/css';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import Card from './Card/Card';

const SingleBlockSlider = () => {
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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
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

export default SingleBlockSlider;
