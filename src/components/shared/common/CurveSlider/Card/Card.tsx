import { H3, H6 } from '../../../Text/Text';
import styles from './Card.module.scss';
import dummyImage from '../../../../../assets/images/banner.png';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface Props {
  isActive?: boolean;
}
const Card: React.FC<Props> = ({ isActive }) => {
  return (
    <Link to={''} className={clsx(isActive && styles.activeLink)}>
      <div className={clsx(styles.card, isActive && styles.active)}>
        <div className={styles.imageWrap}>
          <div className={styles.grad}></div>
          <img className={styles.image} alt="image" src={dummyImage} />
          <div className={styles.subText}>
            <H6>
              Enjoy Swagatam’s Luxury group tours with your friends or family
            </H6>
          </div>
        </div>
      </div>
      <div className={styles.bottomText}>
        <H3 fontWeight="semibold">Family Tour</H3>
      </div>
    </Link>
  );
};

export default Card;
