import { Link } from 'react-router-dom';
import { ColorsEnum } from '../../../../../enums/ColorsEnum';
import Flex from '../../../Flex/Flex';
import { H6, P } from '../../../Text/Text';
import styles from './Country.module.scss';
import clsx from 'clsx';
import { Image } from '../../../../../sanity/types/common';
import { getImageUrl } from '../../../../../sanity/helper';

interface Props {
  isHovered?: boolean;
  name: string;
  href?: string;
  description?: string;
  image?: Image | null;
}
const Country: React.FC<Props> = ({
  isHovered,
  name,
  href = '',
  description,
  image = '',
}) => {
  return (
    <Flex gap="12px" className={clsx(styles.item, isHovered && styles.hover)}>
      <div className={styles.icon}>
        <img src={image ? getImageUrl(image) : ''} alt="image" />
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
