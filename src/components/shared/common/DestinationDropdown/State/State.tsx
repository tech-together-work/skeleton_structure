import styles from './State.module.scss';
import { Text } from '../../../Text/Text';
import { ColorsEnum } from '../../../../../enums/ColorsEnum';
import { Link } from 'react-router-dom';

interface Props {
  href?: string;
  title: string;
  destinationSlug: string;
}
const State: React.FC<Props> = ({ href = '', title, destinationSlug }) => {
  return (
    <Link to={`/destination/${destinationSlug}/${href}`}>
      <Text
        className={styles.text}
        color={ColorsEnum.Neutral900}
        fontSize={18}
        fontWeight="semibold"
        variant="li"
      >
        {title}
      </Text>
    </Link>
  );
};

export default State;
