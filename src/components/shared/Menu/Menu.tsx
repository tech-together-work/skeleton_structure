import Flex from '../Flex/Flex';
import MenuItem from './MenuItem/MenuItem';
import HolidayTypeDropdown from '../common/HolidayTypeDropdown/HolidayTypeDropdown';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <>
      <Flex alignItems="center" gap="40px" className={styles.wrap}>
        <div className={styles.destination}>
          <MenuItem name={'Destinations'} />
        </div>
        <div className={styles.holiday}>
          <MenuItem name={'Holiday Types'} />
          <HolidayTypeDropdown className={styles.holidayDrop} />
        </div>
      </Flex>
    </>
  );
};

export default Menu;
