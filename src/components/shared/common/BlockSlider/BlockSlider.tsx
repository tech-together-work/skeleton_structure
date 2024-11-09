import { Swiper } from 'swiper/react';
import styles from './BlockSlider.module.scss';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import SwiperNav from '../SwiperNav/SwiperNav';

interface Props {
  children?: React.ReactNode;
}

const BlockSlider: React.FC<Props> = ({ children }) => {
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
      >
        {children}
        <SwiperNav />
      </Swiper>
    </div>
  );
};

export default BlockSlider;
