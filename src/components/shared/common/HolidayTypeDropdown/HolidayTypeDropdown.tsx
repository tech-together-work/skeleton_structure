import clsx from 'clsx';
import { HolidayTypeEnum } from '../../../../enums/HolidayTypeEnum';
import Flex from '../../Flex/Flex';
import styles from './HolidayTypeDropdown.module.scss';
import Item from './Item/Item';

interface Props {
  className?: string;
}
const HolidayTypeDropdown: React.FC<Props> = ({ className }) => {
  const arr: HolidayTypeEnum[] = [
    HolidayTypeEnum.FAMILY_TOUR,
    HolidayTypeEnum.LUXURY_TOUR,
    HolidayTypeEnum.FRIENDS_TOUR,
    HolidayTypeEnum.SOLO_TOUR,
  ];

  return (
    <Flex
      direction="column"
      gap="4px"
      className={clsx(styles.holidayDrop, className)}
    >
      {arr.map((item, index) => {
        return <Item type={item} key={index} />;
      })}
    </Flex>
  );
};

export default HolidayTypeDropdown;
