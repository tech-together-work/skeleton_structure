import { useState } from 'react';
import CurveSlider from '../../shared/common/CurveSlider/CurveSlider';
import SectionHeading from '../../shared/common/SectionHeading/SectionHeading';
import Flex from '../../shared/Flex/Flex';
import LinkButton from '../../shared/LinkButton/LinkButton';
import styles from './DestinationSlider.module.scss';
import { SwiperSlide } from 'swiper/react';
import Card from './Card/Card';

const DestinationSlider = () => {
  const arr = ['1', '2', '3', '4'];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.statesSlider}>
      <SectionHeading isBrown className={styles.heading}>
        Looking for your next tour destination
      </SectionHeading>
      <CurveSlider
        setActiveIndex={(index: number) => setActiveIndex(index)}
        data={arr}
      >
        {arr.map((_, index) => {
          return (
            <SwiperSlide key={index}>
              <Card isActive={index === activeIndex} />
            </SwiperSlide>
          );
        })}
      </CurveSlider>
      <Flex
        justifyContent="center"
        alignItems="center"
        className={styles.buttonWrap}
      >
        <LinkButton variant="outlined-white">View all Destinations</LinkButton>
      </Flex>
    </div>
  );
};

export default DestinationSlider;
