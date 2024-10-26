import Flex from '../../shared/Flex/Flex';
import styles from './Partners.module.scss';
import taj from '../../../assets/images/partners/taj.png';
import fern from '../../../assets/images/partners/fern.png';
import fortune from '../../../assets/images/partners/fortune.png';
import ginger from '../../../assets/images/partners/ginger.png';
import pride from '../../../assets/images/partners/pride.png';

const Partners = () => {
  return (
    <Flex
      justifyContent="space-between"
      gap="32px"
      alignItems="center"
      className={styles.partners}
    >
      <div>
        <img src={taj} alt="image" />
      </div>
      <div>
        <img src={fern} alt="image" />
      </div>
      <div>
        <img src={pride} alt="image" />
      </div>
      <div>
        <img src={fortune} alt="image" />
      </div>
      <div>
        <img src={ginger} alt="image" />
      </div>
    </Flex>
  );
};

export default Partners;
