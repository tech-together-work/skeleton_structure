import { Link } from 'react-router-dom';
import styles from './Landing.module.scss';
import { H1 } from '../shared/Text/Text';
import { ColorsEnum } from '../../enums/ColorsEnum';

const Landing = () => {
  return (
    <div className={styles.home}>
      <Link to={'/about'}>
        <H1 className={styles.h1} color={ColorsEnum.Neutral700}>
          Click to navigate
        </H1>
      </Link>
    </div>
  );
};

export default Landing;
