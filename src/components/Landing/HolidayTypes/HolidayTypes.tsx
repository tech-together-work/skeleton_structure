import { SwiperSlide } from 'swiper/react';
import BlockSlider from '../../shared/common/BlockSlider/BlockSlider';
import SectionHeading from '../../shared/common/SectionHeading/SectionHeading';
import styles from './HolidayTypes.module.scss';
import Card from './Card/Card';
const HolidayTypes = () => {
  return (
    <div className={styles.holidayTypes}>
      <SectionHeading className={styles.heading}>
        Find your travel inspiration by style
      </SectionHeading>
      <BlockSlider>
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
      </BlockSlider>
    </div>
  );
};

export default HolidayTypes;
