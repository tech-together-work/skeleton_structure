import { H6 } from '../../../Text/Text';
import styles from './Card.module.scss';
import dummyImage from '../../../../../assets/images/banner.png';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <Link to={''}>
      <div className={styles.card}>
        <div className={styles.imageWrap}>
          <img className={styles.image} alt="image" src={dummyImage} />
        </div>
        <H6 fontWeight="semibold">Family Tour</H6>
      </div>
    </Link>
  );
};

export default Card;
