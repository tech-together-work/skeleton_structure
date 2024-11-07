import { useState } from 'react';
import ChevronDown from '../../../../assets/icons/ChevronDown';
import { ColorsEnum } from '../../../../enums/ColorsEnum';
import Country from '../../common/DestinationDropdown/Country/Country';
import Flex from '../../Flex/Flex';
import { P } from '../../Text/Text';
import styles from './DestinationLayer.module.scss';
import State from '../../common/DestinationDropdown/State/State';
import clsx from 'clsx';

interface Props {
  onBack?: () => void;
}
const DestinationLayer: React.FC<Props> = ({ onBack }) => {
  const arr = [
    { name: 'India', state: [1, 2, 3, 4, 5, 6, 7, 8] },
    { name: 'America', state: [1, 2] },
    { name: 'China', state: [1, 2, 3, 4, 5] },
  ];
  const [selectedCountry, setSelectedCountry] = useState<number | undefined>();

  const handleCountrySelect = (index: number) => {
    setSelectedCountry((prev) => (prev === index ? undefined : index));
  };

  const stateList =
    selectedCountry !== undefined &&
    arr[selectedCountry]?.state.map((_: any, index) => <State key={index} />);

  return (
    <div className={styles.destinationLayer}>
      <Flex
        alignItems="center"
        gap="8px"
        className={styles.back}
        onClick={onBack}
      >
        <ChevronDown />
        <P fontWeight="regular" color={ColorsEnum.Neutral300}>
          Destination
        </P>
      </Flex>
      {arr.map((country, index) => {
        return (
          <div
            key={index}
            className={clsx(
              styles.countryStateWrap,
              selectedCountry === index && styles.openStates
            )}
          >
            <div onClick={() => handleCountrySelect(index)}>
              <Country name={country.name} key={index} />
              <ChevronDown />
            </div>
            <ul className={clsx(styles.statesWrap)}>{stateList}</ul>
          </div>
        );
      })}
    </div>
  );
};

export default DestinationLayer;
