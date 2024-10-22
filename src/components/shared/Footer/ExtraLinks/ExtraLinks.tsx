import { Link } from 'react-router-dom';
import { ColorsEnum } from '../../../../enums/ColorsEnum';
import Flex from '../../Flex/Flex';
import { P } from '../../Text/Text';
import styles from './ExtraLinks.module.scss';
import Call from '../../../../assets/icons/Call';
import Mail from '../../../../assets/icons/Mail';
import clsx from 'clsx';

const ExtraLinks = () => {
  const resources = ['India', 'Nepal', 'Sri Lanka', 'Tibet', 'Bhutan'];
  return (
    <Flex className={styles.extraLinks}>
      <Flex flexDirection="column" gap="8px" className={styles.firstWrap}>
        <P className={styles.head} color={ColorsEnum.Neutral300}>
          Destination
        </P>
        {resources.map((item, index) => {
          return (
            <Link to={''} className={styles.link}>
              <P key={index} color={ColorsEnum.Neutral900}>
                {item}
              </P>
            </Link>
          );
        })}
      </Flex>
      <Flex flexDirection="column" gap="8px" className={styles.secWrap}>
        <P className={styles.head} color={ColorsEnum.Neutral300}>
          Resources
        </P>
        <Link to={''} className={styles.link}>
          <P color={ColorsEnum.Neutral900}>Home</P>
        </Link>
        <Link to={''} className={styles.link}>
          <P color={ColorsEnum.Neutral900}>Destinations</P>
        </Link>
        <Link to={''} className={styles.link}>
          <P color={ColorsEnum.Neutral900}>Holiday Types</P>
        </Link>
        <Link to={''} className={styles.link}>
          <P color={ColorsEnum.Neutral900}>About</P>
        </Link>
        <Link to={''} className={styles.link}>
          <P color={ColorsEnum.Neutral900}>Contact</P>
        </Link>
      </Flex>
      <Flex flexDirection="column" gap="8px" className={styles.thirdWrap}>
        <P className={styles.head} color={ColorsEnum.Neutral300}>
          Call us
        </P>
        <Link to={'tel:+919650250809'} className={styles.link}>
          <Call />
          <P color={ColorsEnum.Neutral900}>+91 9650250809</P>
        </Link>
        <P
          className={clsx(styles.head, styles.email)}
          color={ColorsEnum.Neutral300}
        >
          Email us
        </P>
        <Link to={'mailto:mail@swagatamtour.com'} className={styles.link}>
          <Mail />
          <P color={ColorsEnum.Neutral900}>mail@swagatamtour.com</P>
        </Link>
        <Link to={'mailto:sales@swagatamtour.com'} className={styles.link}>
          <Mail />
          <P color={ColorsEnum.Neutral900}>sales@swagatamtour.com</P>
        </Link>
      </Flex>
    </Flex>
  );
};

export default ExtraLinks;
