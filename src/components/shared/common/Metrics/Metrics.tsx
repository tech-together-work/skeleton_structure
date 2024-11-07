import Star from '../../../../assets/icons/Star';
import { ColorsEnum } from '../../../../enums/ColorsEnum';
import Flex from '../../Flex/Flex';
import { H5, Text } from '../../Text/Text';
import styles from './Metrics.module.scss';

const Metrics = () => {
  return (
    <Flex className={styles.metrics} justifyContent="space-around">
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex alignItems="center">
          <Text
            className={styles.text}
            fontWeight="semibold"
            color={ColorsEnum.Primary}
            fontSize={64}
          >
            38
          </Text>
          <Text color={ColorsEnum.Primary} fontSize={40}>
            +
          </Text>
        </Flex>
        <H5 fontWeight="medium">Years in Service</H5>
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex alignItems="center">
          <Text
            className={styles.text}
            fontWeight="semibold"
            color={ColorsEnum.Primary}
            fontSize={64}
          >
            2.4k
          </Text>
          <Text color={ColorsEnum.Primary} fontSize={40}>
            +
          </Text>
        </Flex>
        <H5 fontWeight="medium">Trips Arranged</H5>
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex alignItems="center">
          <Text
            className={styles.text}
            fontWeight="semibold"
            color={ColorsEnum.Primary}
            fontSize={64}
          >
            160
          </Text>
          <Text color={ColorsEnum.Primary} fontSize={40}>
            +
          </Text>
        </Flex>
        <H5 fontWeight="medium">Countries Served</H5>
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex alignItems="center">
          <Text
            className={styles.text}
            fontWeight="semibold"
            color={ColorsEnum.Primary}
            fontSize={64}
          >
            3.9k
          </Text>
          <Text color={ColorsEnum.Primary} fontSize={40}>
            +
          </Text>
        </Flex>
        <H5 fontWeight="medium">Happy Travellers</H5>
      </Flex>
      <Star className={styles.star} />
    </Flex>
  );
};

export default Metrics;
