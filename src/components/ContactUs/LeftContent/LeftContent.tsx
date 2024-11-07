import { ColorsEnum } from '../../../enums/ColorsEnum';
import Flex from '../../shared/Flex/Flex';
import { H6, Text } from '../../shared/Text/Text';
import styles from './LeftContent.module.scss';

const LeftContent = () => {
  return (
    <div className={styles.content}>
      <Text fontSize={60} fontWeight="semibold" className={styles.heading}>
        Contact Us
      </Text>
      <H6
        fontWeight="medium"
        className={styles.contactText}
        color={ColorsEnum.Neutral100}
      >
        Our working hours are from 9 AM to 9 PM IST, and we pride ourselves on
        providing prompt service with an average response time of under 3 hours
      </H6>
      <Flex className={styles.bottom} justifyContent="space-between" gap="16px">
        <Flex direction="column" gap="16px" className={styles.part}>
          <H6 fontWeight="semibold">Travel Queries </H6>
          <H6 fontWeight="medium" color={ColorsEnum.Neutral100}>
            Call : +91 11 28758001 - 07
          </H6>
          <H6 fontWeight="medium" color={ColorsEnum.Neutral100}>
            Email: travel@swagatam.com
          </H6>
          <H6 fontWeight="medium" color={ColorsEnum.Neutral100}>
            Office: 301, Keltron Chamber, 18/7, Karol Bagh, New Delhi.
          </H6>
        </Flex>
        <Flex direction="column" gap="16px" className={styles.part}>
          <H6 fontWeight="semibold">Business Queries </H6>
          <H6 fontWeight="medium" color={ColorsEnum.Neutral100}>
            Call : +91 11 28758001 - 03
          </H6>
          <H6 fontWeight="medium" color={ColorsEnum.Neutral100}>
            Email: sales@swagatam.com
          </H6>
          <H6 fontWeight="medium" color={ColorsEnum.Neutral100}>
            Office: 301, Keltron Chamber, 18/7, Karol Bagh, New Delhi.
          </H6>
        </Flex>
      </Flex>
    </div>
  );
};

export default LeftContent;
