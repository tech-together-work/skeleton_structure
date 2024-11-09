import styles from './MobileMenu.module.scss';

import FirstLayer from './FirstLayer/FirstLayer';
import DestinationLayer from './DestinationLayer/DestinationLayer';
import { useState } from 'react';
import clsx from 'clsx';
import HolidayTypesLayer from './HolidayTypesLayer/HolidayTypesLayer';
const MobileMenu = () => {
  const [activeSlide, setActiveSlide] = useState<string>('');

  return (
    <div className={styles.mobileMenu}>
      <FirstLayer onClick={(type) => setActiveSlide(type)} />
      <div
        className={clsx(
          styles.destinationSlide,
          activeSlide === 'destinations' && styles.slideIn
        )}
      >
        <DestinationLayer onBack={() => setActiveSlide('')} />
      </div>
      <div
        className={clsx(
          styles.holidaySlide,
          activeSlide === 'holidayTypes' && styles.slideIn
        )}
      >
        <HolidayTypesLayer onBack={() => setActiveSlide('')} />
      </div>
    </div>
  );
};

export default MobileMenu;
