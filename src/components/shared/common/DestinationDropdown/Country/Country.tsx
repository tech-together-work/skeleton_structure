import { Link } from 'react-router-dom';
import { ColorsEnum } from '../../../../../enums/ColorsEnum';
import Flex from '../../../Flex/Flex';
import { H6, P } from '../../../Text/Text';
import styles from './Country.module.scss';
import clsx from 'clsx';

interface Props {
  isHovered?: boolean;
  name: string;
  href?: string;
  description?: string;
  imageUrl?: string | null;
}
const Country: React.FC<Props> = ({
  isHovered,
  name,
  href = '',
  description,
  imageUrl = '',
}) => {
  return (
    <Flex gap="12px" className={clsx(styles.item, isHovered && styles.hover)}>
      <div className={styles.icon}>
        <img src={imageUrl ? imageUrl : ''} alt="image" />
      </div>
      <Flex direction="column">
        <Link to={href}>
          <H6 fontWeight="semibold">{name}</H6>
        </Link>

        <P fontWeight="regular" color={ColorsEnum.Neutral300}>
          {description}
        </P>
      </Flex>
    </Flex>
  );
};

export default Country;
