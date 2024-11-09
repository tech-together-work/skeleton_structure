import ChevronDown from '../../../../../assets/icons/ChevronDown';
import { ColorsEnum } from '../../../../../enums/ColorsEnum';
import { HolidayTypeEnum } from '../../../../../enums/HolidayTypeEnum';
import Item from '../../../common/HolidayTypeDropdown/Item/Item';
import Flex from '../../../Flex/Flex';
import { P } from '../../../Text/Text';
import styles from './HolidayTypesLayer.module.scss';

interface Props {
  onBack?: () => void;
}

const HolidayTypesLayer: React.FC<Props> = ({ onBack }) => {
  return (
    <div className={styles.holidayLayer}>
      <Flex
        alignItems="center"
        gap="8px"
        className={styles.back}
        onClick={onBack}
      >
        <ChevronDown />
        <P fontWeight="regular" color={ColorsEnum.Neutral300}>
          Holiday Types
        </P>
      </Flex>
      <Flex direction="column" gap="4px" className={styles.list}>
        <Item type={HolidayTypeEnum.FAMILY_TOUR} />
        <Item type={HolidayTypeEnum.LUXURY_TOUR} />
        <Item type={HolidayTypeEnum.FRIENDS_TOUR} />
        <Item type={HolidayTypeEnum.SOLO_TOUR} />
      </Flex>
    </div>
  );
};

export default HolidayTypesLayer;
