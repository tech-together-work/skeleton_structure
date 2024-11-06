import styles from './State.module.scss';
import { Text } from '../../../Text/Text';
import { ColorsEnum } from '../../../../../enums/ColorsEnum';
import { Link } from 'react-router-dom';

const State = () => {
  return (
    <Link to={''}>
      <Text
        className={styles.text}
        color={ColorsEnum.Neutral900}
        fontSize={18}
        fontWeight="semibold"
        variant="li"
      >
        Kerala
      </Text>
    </Link>
  );
};

export default State;
