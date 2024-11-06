import { H4, H5, H6, Text } from '../../../Text/Text';
import styles from './Card.module.scss';
import dummyImage from '../../../../../assets/images/banner.png';
import Flex from '../../../Flex/Flex';
import Commas from '../../../../../assets/icons/Commas';
import LinkButton from '../../../LinkButton/LinkButton';

const Card = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.imageWrap}>
          <img className={styles.image} alt="image" src={dummyImage} />
        </div>
        <Flex className={styles.content} direction="column">
          <Commas />
          <Text fontSize={18} fontWeight="medium">
            We spent a week in India visiting Delhi, Agra and Jaipur. We were
            met at the airport by a representative who was so helpful, friendly,
            knowledgeable and professional. The tour company had provided us
            with 5 star hotels and organized our tours our private car, driver
            and guides in the different cities. Our guide in Delhi, Lalit was
            incredible. We truly had the best Delhi experience. We will always
            remember our time together with him. Genuinely the greatest guide.
          </Text>
          <Flex className={styles.picture} gap="16px" alignItems="center">
            <div className={styles.image}>
              <img src={dummyImage} alt="image" />
            </div>
            <Flex className={styles.text} direction="column">
              <H5>Shubham Prakash</H5>
              <Text fontSize={18} fontWeight="medium">
                Software Engineer
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </div>
      <Flex justifyContent="center" alignItems="center">
        <LinkButton variant="outlined">Read more on Trustpilot</LinkButton>
      </Flex>
    </div>
  );
};

export default Card;
