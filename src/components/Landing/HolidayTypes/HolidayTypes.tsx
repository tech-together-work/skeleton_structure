import BlockSlider from '../../shared/common/BlockSlider/BlockSlider';
import SectionHeading from '../../shared/common/SectionHeading/SectionHeading';
import styles from './HolidayTypes.module.scss';
const HolidayTypes = () => {
  return (
    <div className={styles.holidayTypes}>
      <SectionHeading className={styles.heading}>
        Find your travel inspiration by style
      </SectionHeading>
      <BlockSlider />
    </div>
  );
};

export default HolidayTypes;
