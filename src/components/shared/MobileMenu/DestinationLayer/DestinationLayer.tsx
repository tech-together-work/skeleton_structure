import { useState } from 'react';
import ChevronDown from '../../../../assets/icons/ChevronDown';
import { ColorsEnum } from '../../../../enums/ColorsEnum';
import Country from '../../common/DestinationDropdown/Country/Country';
import Flex from '../../Flex/Flex';
import { P } from '../../Text/Text';
import styles from './DestinationLayer.module.scss';
import State from '../../common/DestinationDropdown/State/State';
import clsx from 'clsx';
import { useCache } from '../../../../hooks/useCache';
import { APIKeysEnum } from '../../../../enums/APIKeysEnum';
import { Country as CountryType } from '../../../../sanity/types/country';
import NoDataFound from '../../common/NoDataFound/NoDataFound';

interface Props {
  onBack?: () => void;
}
const DestinationLayer: React.FC<Props> = ({ onBack }) => {
  const countriesStates = useCache<CountryType[]>(APIKeysEnum.COUNTRIES);
  const [selectedCountry, setSelectedCountry] = useState<number | undefined>();

  const handleCountrySelect = (index: number) => {
    setSelectedCountry((prev) => (prev === index ? undefined : index));
  };

  const stateList =
    selectedCountry !== undefined &&
    countriesStates?.[selectedCountry]?.states?.map((state, index) => (
      <State title={state.title} href={state.slug} key={index} />
    ));

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
      {countriesStates?.map((country, index) => {
        return (
          <div
            key={index}
            className={clsx(
              styles.countryStateWrap,
              selectedCountry === index && styles.openStates
            )}
          >
            <div onClick={() => handleCountrySelect(index)}>
              <Country
                href={country.slug}
                description={country.description}
                name={country.title}
                image={country.image}
                key={index}
              />
              <ChevronDown />
            </div>
            <ul className={clsx(styles.statesWrap)}>
              {stateList ? stateList : <NoDataFound />}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default DestinationLayer;
