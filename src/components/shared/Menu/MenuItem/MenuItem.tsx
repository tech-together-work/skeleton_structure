import ChevronDown from '../../../../assets/icons/ChevronDown';
import { ColorsEnum } from '../../../../enums/ColorsEnum';
import Flex from '../../Flex/Flex';
import { P } from '../../Text/Text';
import styles from './MenuItem.module.scss';

interface Props {
  name: string;
  onClick?: () => void;
}
const MenuItem: React.FC<Props> = ({ name, onClick }) => {
  return (
    <Flex
      alignItems="center"
      gap="6px"
      className={styles.menuItem}
      onClick={onClick}
      color={ColorsEnum.Black80}
    >
      <P>{name}</P>
      <ChevronDown />
    </Flex>
  );
};

export default MenuItem;
