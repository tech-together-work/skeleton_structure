import Flex from '../../shared/Flex/Flex';
import styles from './Awards.module.scss';
import award1 from '../../../assets/images/awards/award1.png';
import award2 from '../../../assets/images/awards/award2.png';
import award3 from '../../../assets/images/awards/award3.png';
import award4 from '../../../assets/images/awards/award4.png';
import award5 from '../../../assets/images/awards/award5.png';
import { H2 } from '../../shared/Text/Text';

const Awards = () => {
  return (
    <div>
      <H2 fontWeight="medium" className={styles.heading}>
        Our Awards
      </H2>
      <Flex
        justifyContent="space-between"
        gap="32px"
        alignItems="center"
        className={styles.awards}
      >
        <div>
          <img src={award1} alt="image" />
        </div>
        <div>
          <img src={award2} alt="image" />
        </div>
        <div>
          <img src={award3} alt="image" />
        </div>
        <div>
          <img src={award4} alt="image" />
        </div>
        <div>
          <img src={award5} alt="image" />
        </div>
      </Flex>
    </div>
  );
};

export default Awards;
