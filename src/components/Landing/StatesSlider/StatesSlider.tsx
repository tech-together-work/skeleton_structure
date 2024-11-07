import CurveSlider from '../../shared/common/CurveSlider/CurveSlider';
import SectionHeading from '../../shared/common/SectionHeading/SectionHeading';
import Flex from '../../shared/Flex/Flex';
import LinkButton from '../../shared/LinkButton/LinkButton';
import styles from './StatesSlider.module.scss';

const StatesSlider = () => {
  return (
    <div className={styles.statesSlider}>
      <SectionHeading isBrown className={styles.heading}>
        Looking for your next tour destination
      </SectionHeading>
      <CurveSlider />
      <Flex
        justifyContent="center"
        alignItems="center"
        className={styles.buttonWrap}
      >
        <LinkButton variant="outlined-white">View all Destinations</LinkButton>
      </Flex>
    </div>
  );
};

export default StatesSlider;
