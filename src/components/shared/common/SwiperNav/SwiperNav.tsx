import styles from './SwiperNav.module.scss';
import arrow from '../../../../assets/images/arrow-right.png';
import { useSwiper } from 'swiper/react';
import clsx from 'clsx';

const SwiperNav = () => {
  const swiper = useSwiper();
  return (
    <>
      <button
        className={clsx(styles.arrow, styles.prev)}
        onClick={() => swiper.slidePrev()}
      >
        <img src={arrow} alt="Prev" />
      </button>
      <button
        className={clsx(styles.arrow, styles.next)}
        onClick={() => swiper.slideNext()}
      >
        <img src={arrow} alt="Next" />
      </button>
    </>
  );
};

export default SwiperNav;
