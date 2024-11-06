import { Link } from 'react-router-dom';
import { ColorsEnum } from '../../../../../enums/ColorsEnum';
import Flex from '../../../Flex/Flex';
import { H6, P } from '../../../Text/Text';
import styles from './Country.module.scss';
import dummyImage from '../../../../../assets/images/banner.png';
import clsx from 'clsx';

interface Props {
  isHovered?: boolean;
  name: string;
}
const Country: React.FC<Props> = ({ isHovered, name }) => {
  return (
    <Link to={''}>
      <Flex gap="12px" className={clsx(styles.item, isHovered && styles.hover)}>
        <div className={styles.icon}>
          <img src={dummyImage} alt="image" />
        </div>
        <Flex direction="column">
          <H6 fontWeight="semibold">{name}</H6>
          <P fontWeight="regular" color={ColorsEnum.Neutral300}>
            Travel with your loved once
          </P>
        </Flex>
      </Flex>
    </Link>
  );
};

export default Country;
