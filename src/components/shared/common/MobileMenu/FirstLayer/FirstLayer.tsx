import styles from './FirstLayer.module.scss';
import Flex from '../../../Flex/Flex';
import { ColorsEnum } from '../../../../../enums/ColorsEnum';
import ChevronDown from '../../../../../assets/icons/ChevronDown';
import { Link, useLocation } from 'react-router-dom';
import { Text } from '../../../Text/Text';
import { RoutesEnum } from '../../../../../enums/RouteEnums';
import clsx from 'clsx';
import Button from '../../../Button/Button';

interface Props {
  onClick: (type: string) => void;
}
const FirstLayer: React.FC<Props> = ({ onClick }) => {
  const location = useLocation();
  return (
    <div className={styles.firstLayer}>
      <div className={styles.one}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          className={styles.item}
          onClick={() => onClick('destinations')}
        >
          <Text
            color={ColorsEnum.Neutral900}
            fontSize={18}
            fontWeight="semibold"
          >
            Destinations
          </Text>
          <ChevronDown />
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          className={styles.item}
          onClick={() => onClick('holidayTypes')}
        >
          <Text
            color={ColorsEnum.Neutral900}
            fontSize={18}
            fontWeight="semibold"
          >
            Holiday Types
          </Text>
          <ChevronDown />
        </Flex>
        <Link
          to={RoutesEnum.ABOUT}
          className={
            location.pathname === RoutesEnum.ABOUT ? styles.activeRoute : ''
          }
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            className={clsx(styles.item, styles.link)}
          >
            <Text
              color={ColorsEnum.Neutral900}
              fontSize={18}
              fontWeight="semibold"
            >
              About
            </Text>
          </Flex>
        </Link>
      </div>
      <Flex className={styles.two} direction="column" gap="24px">
        <Button variant="outlined-black">Craft a Trip</Button>
        <Link to={RoutesEnum.CONTACT}>
          <Button>Contact Us</Button>
        </Link>
      </Flex>
    </div>
  );
};

export default FirstLayer;
