import styles from './Visionaries.module.scss';
import Section from '../../shared/Section/Section';
import SectionHeading from '../../shared/common/SectionHeading/SectionHeading';
import Flex from '../../shared/Flex/Flex';
import one from '../../../assets/images/visionaries/1.png';
import two from '../../../assets/images/visionaries/2.png';
import three from '../../../assets/images/visionaries/3.png';
import four from '../../../assets/images/visionaries/4.png';
import dummyImage from '../../../assets/images/banner.png';

import { H2, H5, H6 } from '../../shared/Text/Text';
import { ColorsEnum } from '../../../enums/ColorsEnum';
import { Link } from 'react-router-dom';
import TrendDown from '../../../assets/icons/TrendDown';
import clsx from 'clsx';

const Visionaries = () => {
  return (
    <div className={styles.visionaries}>
      <SectionHeading isBrown className={styles.heading}>
        Meet the Visionaries Behind Swagatam
      </SectionHeading>
      <Section>
        <Flex
          className={styles.wrapper}
          justifyContent="space-between"
          gap="16px"
          flexWrap="wrap"
        >
          <Flex direction="column" alignItems="center">
            <div className={styles.imageWrap}>
              <div className={styles.image}>
                <img src={one} alt="image" />
              </div>
            </div>
            <H5 fontWeight="medium" color={ColorsEnum.Offwhite}>
              Mr. Pronab Sarkar
            </H5>
            <Link to={''}>
              Know more <TrendDown />
            </Link>
          </Flex>
          <Flex direction="column" alignItems="center">
            <div className={styles.imageWrap}>
              <div className={styles.image}>
                <img src={two} alt="image" />
              </div>
            </div>
            <H5 fontWeight="medium" color={ColorsEnum.Offwhite}>
              Mr. M.V.Hariharan
            </H5>
            <Link to={''}>
              Know more <TrendDown />
            </Link>
          </Flex>
          <Flex direction="column" alignItems="center">
            <div className={styles.imageWrap}>
              <div className={styles.image}>
                <img src={three} alt="image" />
              </div>
            </div>
            <H5 fontWeight="medium" color={ColorsEnum.Offwhite}>
              Mr. R. Parthiban
            </H5>
            <Link to={''}>
              Know more <TrendDown />
            </Link>
          </Flex>
          <Flex direction="column" alignItems="center">
            <div className={styles.imageWrap}>
              <div className={styles.image}>
                <img src={four} alt="image" />
              </div>
            </div>
            <H5 fontWeight="medium" color={ColorsEnum.Offwhite}>
              Mr. Achal Kumar Kochar
            </H5>
            <Link to={''}>
              Know more <TrendDown />
            </Link>
          </Flex>
        </Flex>
        <Flex className={styles.bottomSection}>
          <Flex direction="column" gap="32px">
            <H2 fontWeight="medium" color={ColorsEnum.Offwhite}>
              Mission to make Indian travel luxurious
            </H2>
            <div className={clsx(styles.border, styles.mobile)}>
              <div className={clsx(styles.imageBlock)}>
                <img src={dummyImage} alt="image" />
              </div>
            </div>

            <H6 fontWeight="medium" color={ColorsEnum.Neutral100}>
              Transforming Indian tourism through exquisite accommodations,
              bespoke itineraries, and immersive cultural experiences. We blend
              modern luxury with timeless traditions, ensuring every traveler
              discovers the opulent soul of India.
            </H6>
          </Flex>
          <div className={clsx(styles.imageBlock, styles.desktop)}>
            <img src={dummyImage} alt="image" />
          </div>
        </Flex>
      </Section>
    </div>
  );
};

export default Visionaries;
