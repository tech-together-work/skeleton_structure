import Flex from '../Flex/Flex';
import styles from './SmallBanner.module.scss';
import singlestar from '../../../assets/images/singlewhitestar-line.png';
import doubleStar from '../../../assets/images/whitestar-line.png';

import { H4 } from '../Text/Text';
import { ColorsEnum } from '../../../enums/ColorsEnum';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../../enums/RouteEnums';

const SmallBanner = () => {
  return (
    <Flex className={styles.smallBanner} justifyContent="space-between">
      <Flex alignItems="center" gap="18px" className={styles.firstWrap}>
        <img src={singlestar} alt="image" className={styles.singleLine} />
        <img src={doubleStar} alt="image" className={styles.doubleLine} />
        <H4 fontWeight="medium" color={ColorsEnum.Offwhite}>
          Let’s begin your dream journey today.
        </H4>
      </Flex>
      <Flex justifyContent="flex-end" alignItems="center" gap="24px">
        <Button variant="outlined-white">Craft a Trip</Button>
        <Link to={RoutesEnum.CONTACT}>
          <Button variant="solid-white">Reach out to us</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default SmallBanner;
