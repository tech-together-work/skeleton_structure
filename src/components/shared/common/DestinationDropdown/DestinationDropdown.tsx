import clsx from 'clsx';
import styles from './DestinationDropdown.module.scss';
import Flex from '../../Flex/Flex';
import LinkButton from '../../LinkButton/LinkButton';
import { H6, Text } from '../../Text/Text';
import { ColorsEnum } from '../../../../enums/ColorsEnum';
import Country from './Country/Country';
import State from './State/State';
import { useState } from 'react';

interface Props {
  className?: string;
}
const DestinationDropdown: React.FC<Props> = ({ className }) => {
  const arr = [
    { name: 'India', state: [1, 2, 3, 4, 5, 6, 7, 8] },
    { name: 'America', state: [1, 2] },
    { name: 'China', state: [1, 2, 3, 4, 5] },
  ];
  const [hoveredCountry, setHoveredCountry] = useState<number>(0);

  const handleCountryHover = (index: number) => {
    setHoveredCountry(index);
  };

  const stateList = arr[hoveredCountry]?.state.map((state: any, index) => (
    <State key={index} />
  ));

  return (
    <div className={clsx(styles.destinationDrop, className)}>
      <Flex className={styles.wrapper}>
        <Flex className={styles.countries} direction="column" gap="4px">
          {arr.map((country, index) => {
            return (
              <div key={index} onMouseEnter={() => handleCountryHover(index)}>
                <Country
                  name={country.name}
                  isHovered={hoveredCountry === index}
                />
              </div>
            );
          })}
        </Flex>
        <hr className={styles.line} />
        <div className={styles.states}>
          <Flex direction="column" gap="22px">
            <Text
              color={ColorsEnum.Neutral500}
              fontSize={18}
              fontWeight="medium"
            >
              States in {arr[hoveredCountry].name}
            </Text>
            <ul className={styles.stateList}>{stateList}</ul>
          </Flex>
        </div>
      </Flex>
      <Flex
        className={styles.craft}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex direction="column" gap="4px">
          <H6 fontWeight="semibold">Not sure where to travel? We got you!</H6>
          <Text
            color={ColorsEnum.Neutral400}
            fontSize={18}
            fontWeight="regular"
          >
            Discover your perfect trip in just few seconds
          </Text>
        </Flex>
        <LinkButton>Craft a Trip</LinkButton>
      </Flex>
    </div>
  );
};

export default DestinationDropdown;
