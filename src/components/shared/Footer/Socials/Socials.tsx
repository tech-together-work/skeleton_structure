import Flex from '../../Flex/Flex';
import styles from './Socials.module.scss';
import { Text } from '../../Text/Text';
import { ColorsEnum } from '../../../../enums/ColorsEnum';
import { Link } from 'react-router-dom';
import Facebook from '../../../../assets/icons/Facebook';
import Twitter from '../../../../assets/icons/Twitter';
import Instagram from '../../../../assets/icons/Instagram';

const Socials = () => {
  return (
    <div className={styles.socials}>
      <Text
        className={styles.text}
        fontSize={14}
        color={ColorsEnum.Neutral900}
        fontWeight="medium"
      >
        Swagatam Tours Private Ltd. © 2024
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        gap="40px"
        className={styles.middleWrap}
      >
        <Link to={''} className={styles.link}>
          <Text fontSize={14} color={ColorsEnum.Neutral900} fontWeight="medium">
            Terms & Conditions
          </Text>
        </Link>
        <Link to={''} className={styles.link}>
          <Text fontSize={14} color={ColorsEnum.Neutral900} fontWeight="medium">
            Privacy Policy
          </Text>
        </Link>
        <Link to={''} className={styles.link}>
          <Text fontSize={14} color={ColorsEnum.Neutral900} fontWeight="medium">
            Cancellations
          </Text>
        </Link>
      </Flex>
      <Flex
        className={styles.icons}
        justifyContent="flex-end"
        alignItems="center"
        gap="16px"
      >
        <Link to={''} target="_blank">
          <Facebook />
        </Link>
        <Link to={''} target="_blank">
          <Twitter />
        </Link>
        <Link to={''} target="_blank">
          <Instagram />
        </Link>
      </Flex>
    </div>
  );
};

export default Socials;
