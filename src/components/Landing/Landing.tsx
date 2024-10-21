import { Link } from 'react-router-dom';
import styles from './Landing.module.scss';
import { H1 } from '../shared/Text/Text';
import logo from '../../assets/images/logo.svg';

const Landing = () => {
  return (
    <div className={styles.home}>
      <img src={logo} alt="logo" />
      <Link to={'/about'}>
        <H1>Click to navigate</H1>
      </Link>
    </div>
  );
};

export default Landing;
