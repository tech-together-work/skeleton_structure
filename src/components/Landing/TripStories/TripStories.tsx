import SectionHeading from '../../shared/common/SectionHeading/SectionHeading';
import StoriesSlider from '../../shared/common/StoriesSlider/StoriesSlider';
import styles from './TripStories.module.scss';
import rating from '../../../assets/images/rating.png';
import { P } from '../../shared/Text/Text';
import { ColorsEnum } from '../../../enums/ColorsEnum';
const TripStories = () => {
  return (
    <div className={styles.stories}>
      <SectionHeading className={styles.heading}>
        Stories from our Trips
        <div className={styles.block}>
          <img src={rating} alt="image" />
          <P color={ColorsEnum.Neutral300}>Over 500+ reviews</P>
        </div>
      </SectionHeading>
      <StoriesSlider />
    </div>
  );
};

export default TripStories;
