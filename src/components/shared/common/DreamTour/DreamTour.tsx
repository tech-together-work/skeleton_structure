import styles from './DreamTour.module.scss';
import Flex from '../../Flex/Flex';
import { P, Text } from '../../Text/Text';
import { Link } from 'react-router-dom';
import Call from '../../../../assets/icons/Call';
import { ColorsEnum } from '../../../../enums/ColorsEnum';
import Mail from '../../../../assets/icons/Mail';
import Button from '../../Button/Button';
import TrendDown from '../../../../assets/icons/TrendDown';
import Section from '../../Section/Section';
import dummyImage from '../../../../assets/images/banner.png';
import clsx from 'clsx';

const DreamTour = () => {
  return (
    <Section className={styles.dreamTour}>
      <Flex
        justifyContent="space-between"
        gap="16px"
        className={styles.innerWrap}
      >
        <Flex className={styles.left} direction="column">
          <Text fontSize={54} fontWeight="medium" className={styles.heading}>
            Let our experts craft your dream tour
          </Text>
          <div className={clsx(styles.image, styles.mobileImage)}>
            <div>
              <img src={dummyImage} alt="image" />
            </div>
          </div>
          <Flex direction="column" gap="20px" className={styles.links}>
            <Link to={'tel:+919650250809'} className={styles.link}>
              <Call />
              <P color={ColorsEnum.Neutral900} fontWeight="medium">
                +91 9650250809
              </P>
            </Link>
            <Link to={'mailto:mail@swagatamtour.com'} className={styles.link}>
              <Mail />
              <P fontWeight="medium" color={ColorsEnum.Neutral900}>
                mail@swagatamtour.com
              </P>
            </Link>
          </Flex>

          <Button variant="outlined-black" className={styles.button}>
            Reach out to us
            <TrendDown />
          </Button>
        </Flex>
        <div className={clsx(styles.image, styles.deskImage)}>
          <div>
            <img src={dummyImage} alt="image" />
          </div>
        </div>
      </Flex>
    </Section>
  );
};

export default DreamTour;
