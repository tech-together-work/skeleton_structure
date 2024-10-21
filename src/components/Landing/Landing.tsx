import { Link } from 'react-router-dom';
import styles from './Landing.module.scss';
import { H1, P } from '../shared/Text/Text';

const Landing = () => {
  return (
    <div className={styles.home}>
      <P>Landing</P>
      <Link to={'/about'}>
        <H1>Click me</H1>
      </Link>
    </div>
  );
};

export default Landing;
