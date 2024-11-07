import { H1, H6 } from '../../shared/Text/Text';
import styles from './Block.module.scss';
import dummyImage from '../../../assets/images/banner.png';
import clsx from 'clsx';

const Block1 = () => {
  return (
    <div className={clsx(styles.block, styles.block1)}>
      <div className={styles.content}>
        <H1 fontWeight="medium">Crafting Journeys Since 1986</H1>
        <H6 fontWeight="medium">
          Founded by five visionaries, Swagatam Tours has grown into a leading
          travel agency, recognized for personalized, value-driven experiences
          across India. Backed by numerous awards and satisfied travelers over
          38 years.
        </H6>
      </div>
      <div className={styles.image}>
        <div className={styles.wrap}>
          <div className={styles.inner}>
            <img src={dummyImage} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block1;
