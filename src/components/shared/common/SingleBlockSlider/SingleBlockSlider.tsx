import { Swiper } from 'swiper/react';
import styles from './SingleBlockSlider.module.scss';
import 'swiper/css';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface Props {
  children?: React.ReactNode;
}

const SingleBlockSlider: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.singleBlockSwiperContainer}>
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
        {children}
      </Swiper>
    </div>
  );
};

export default SingleBlockSlider;
