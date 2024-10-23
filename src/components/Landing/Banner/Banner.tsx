import styles from './Banner.module.scss';
import banner from '../../../assets/images/banner.png';
import disc from '../../../assets/images/disc.svg';
import { Text } from '../../shared/Text/Text';
import Flex from '../../shared/Flex/Flex';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={banner} alt="banner" className={styles.image} />
      <img src={disc} alt="disc" className={styles.disc} />
      <Flex
        className={styles.bannerText}
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize={150}>swagatam</Text>
      </Flex>
    </div>
  );
};

export default Banner;
