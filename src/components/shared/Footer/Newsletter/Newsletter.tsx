import { useState } from 'react';
import styles from './Newsletter.module.scss';
import { H5 } from '../../Text/Text';
import Button from '../../Button/Button';
import TrendDown from '../../../../assets/icons/TrendDown';
import InputV1 from '../../Inputs/InputV1';

const Newsletter = () => {
  const [email, setEmail] = useState<string>('');

  return (
    <div className={styles.newsletter}>
      <H5 className={styles.heading}>
        Sign up to our newsletter
        <br />
        to get travel inspirations
      </H5>
      <InputV1
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address..."
      />
      <div className={styles.buttonWrap}>
        <Button variant="outlined-white" className={styles.button}>
          Subscribe <TrendDown />
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
