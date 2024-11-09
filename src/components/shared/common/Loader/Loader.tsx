import { P } from '../../Text/Text';
import Flex from '../../Flex/Flex';
import styles from './Loader.module.scss';

interface Props {
  title?: string;
}
const Loader: React.FC<Props> = ({ title = 'Loading...' }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      className={styles.loaderWrap}
    >
      <P>{title}</P>
    </Flex>
  );
};

export default Loader;
