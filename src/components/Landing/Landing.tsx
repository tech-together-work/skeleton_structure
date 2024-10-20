import { Link } from 'react-router-dom';
import styles from './Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.home}>
      Landing <Link to={'/about'}>Go to about</Link>
    </div>
  );
};

export default Landing;
