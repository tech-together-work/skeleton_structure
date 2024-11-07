import styles from './NotSureTour.module.scss';
import Flex from '../../Flex/Flex';
import { H6, Text } from '../../Text/Text';
import { ColorsEnum } from '../../../../enums/ColorsEnum';
import Section from '../../Section/Section';
import dummyImage from '../../../../assets/images/banner.png';
import clsx from 'clsx';
import LinkButton from '../../LinkButton/LinkButton';

const NotSureTour = () => {
  return (
    <Section className={styles.notSure}>
      <Flex
        justifyContent="space-between"
        gap="16px"
        className={styles.innerWrap}
      >
        <Flex className={styles.left} direction="column">
          <div className={clsx(styles.image, styles.mobileImage)}>
            <div>
              <img src={dummyImage} alt="image" />
            </div>
          </div>
          <Text fontSize={54} fontWeight="medium" className={styles.heading}>
            Not sure where to travel? We got you!
          </Text>
          <Flex direction="column" gap="20px" className={styles.links}>
            <H6 color={ColorsEnum.Neutral900} fontWeight="medium">
              Answer a few quick questions, and we'll match you with your ideal
              getaway. Discover your perfect trip in just few seconds
            </H6>
          </Flex>

          <LinkButton variant="outlined-black" className={styles.button}>
            Craft a Trip
          </LinkButton>
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

export default NotSureTour;
