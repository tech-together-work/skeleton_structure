import { Link } from 'react-router-dom';
import FamilyTour from '../../../../../assets/icons/FamilyTour';
import { ColorsEnum } from '../../../../../enums/ColorsEnum';
import Flex from '../../../Flex/Flex';
import { H6, P } from '../../../Text/Text';
import styles from './Item.module.scss';
import { HolidayTypeEnum } from '../../../../../enums/HolidayTypeEnum';
import LuxuryTour from '../../../../../assets/icons/LuxuryTour';
import FriendsTour from '../../../../../assets/icons/FriendsTour';
import SoloTour from '../../../../../assets/icons/SoloTour';

interface Props {
  type: HolidayTypeEnum;
}
const Item: React.FC<Props> = ({ type }) => {
  const getIcon = () => {
    if (type === HolidayTypeEnum.FAMILY_TOUR) {
      return <FamilyTour />;
    }
    if (type === HolidayTypeEnum.LUXURY_TOUR) {
      return <LuxuryTour />;
    }
    if (type === HolidayTypeEnum.FRIENDS_TOUR) {
      return <FriendsTour />;
    }
    if (type === HolidayTypeEnum.SOLO_TOUR) {
      return <SoloTour />;
    }
  };
  return (
    <Link to={''}>
      <Flex gap="12px" className={styles.item}>
        <div className={styles.icon}>{getIcon()}</div>
        <Flex direction="column">
          <H6 fontWeight="semibold">Family Tour</H6>
          <P fontWeight="regular" color={ColorsEnum.Neutral300}>
            Travel with your loved once
          </P>
        </Flex>
      </Flex>
    </Link>
  );
};

export default Item;
