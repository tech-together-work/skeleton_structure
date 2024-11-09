import { Swiper } from 'swiper/react';
import styles from './CurveSlider.module.scss';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import SwiperNav from '../SwiperNav/SwiperNav';
import { useEffect } from 'react';

interface Props {
  children?: React.ReactNode;
  setActiveIndex?: (index: number) => void;
  data: any;
}
const CurveSlider: React.FC<Props> = ({ children, setActiveIndex, data }) => {
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
        onSlideChange={(swiper) => {
          setActiveIndex
            ? setActiveIndex(Math.floor(swiper.realIndex % data.length))
            : '';
        }}
      >
        {children}
        <SwiperNav />
      </Swiper>
    </div>
  );
};

export default CurveSlider;
