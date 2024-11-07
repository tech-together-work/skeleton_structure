import { Link } from 'react-router-dom';
import ChevronDown from '../../../../assets/icons/ChevronDown';
import { ColorsEnum } from '../../../../enums/ColorsEnum';
import Flex from '../../Flex/Flex';
import { P } from '../../Text/Text';
import styles from './MenuItem.module.scss';

interface Props {
  name: string;
  href?: string;
  className?: string;
}
const MenuItem: React.FC<Props> = ({ name, className, href }) => {
  return (
    <Link to={href ? href : ''} className={className}>
      <Flex
        alignItems="center"
        gap="6px"
        className={styles.menuItem}
        color={ColorsEnum.Black80}
      >
        <P>{name}</P>
        <ChevronDown />
      </Flex>
    </Link>
  );
};

export default MenuItem;
