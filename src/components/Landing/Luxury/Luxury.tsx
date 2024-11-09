import SectionHeading from '../../shared/common/SectionHeading/SectionHeading';
import SingleBlockSlider from '../../shared/common/SingleBlockSlider/SingleBlockSlider';
import Flex from '../../shared/Flex/Flex';
import styles from './Luxury.module.scss';
import dummyImage from '../../../assets/images/banner.png';
import { H2, H6 } from '../../shared/Text/Text';
import LinkButton from '../../shared/LinkButton/LinkButton';
import Section from '../../shared/Section/Section';
import disc from '../../../assets/images/disc2.svg';
import { SwiperSlide } from 'swiper/react';
import Card from './Card/Card';

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <SectionHeading isBrown className={styles.heading}>
        Experience Unmatched Luxury Hospitality
      </SectionHeading>
      <Section>
        <SingleBlockSlider>
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
        </SingleBlockSlider>

        <Flex className={styles.whySwagatam} gap="76px">
          <div className={styles.imageWrap}>
            <img alt="image" src={dummyImage} />
          </div>
          <div className={styles.content}>
            <H2 fontWeight="medium">Opulent Experiences Awaiting You</H2>
            <H6 fontWeight="medium">
              Indulge in world-class hospitality at our handpicked selection of
              premium hotels, designed to make your stay unforgettable.
            </H6>
            <LinkButton className={styles.button} variant="outlined-white">
              Why Swagatam
            </LinkButton>
          </div>
          <img src={disc} alt="image" className={styles.disc} />
        </Flex>
      </Section>
    </div>
  );
};

export default Luxury;
