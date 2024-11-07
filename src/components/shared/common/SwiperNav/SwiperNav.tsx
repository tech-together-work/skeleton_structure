import styles from './SwiperNav.module.scss';
import arrow from '../../../../assets/images/arrow-right.png';
import { useSwiper } from 'swiper/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const SwiperNav = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    // Initial check
    checkPosition();

    // Listen for slide change and update the position states
    swiper.on('slideChange', checkPosition);

    // Cleanup event listener when the component unmounts
    return () => {
      swiper.off('slideChange', checkPosition);
    };
  }, [swiper]);
  return (
    <>
      <button
        className={clsx(
          styles.arrow,
          styles.prev,
          isBeginning ? styles.hide : styles.show
        )}
        onClick={() => swiper.slidePrev()}
      >
        <img src={arrow} alt="Prev" />
      </button>
      <button
        className={clsx(
          styles.arrow,
          styles.next,
          isEnd ? styles.hide : styles.show
        )}
        onClick={() => swiper.slideNext()}
      >
        <img src={arrow} alt="Next" />
      </button>
    </>
  );
};

export default SwiperNav;
