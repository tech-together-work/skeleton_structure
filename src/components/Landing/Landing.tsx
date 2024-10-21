import { Link } from 'react-router-dom';
import styles from './Landing.module.scss';
import { H1 } from '../shared/Text/Text';

const Landing = () => {
  return (
    <div className={styles.home}>
      Landing{' '}
      <Link to={'/about'}>
        <H1>Click me</H1>
      </Link>
    </div>
  );
};

export default Landing;
