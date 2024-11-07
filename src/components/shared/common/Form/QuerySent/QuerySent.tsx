import Check from '../../../../../assets/icons/Check';
import Button from '../../../Button/Button';
import Flex from '../../../Flex/Flex';
import { H2, Text } from '../../../Text/Text';
import styles from './QuerySent.module.scss';
const QuerySent = () => {
  return (
    <Flex
      direction="column"
      gap="24px"
      justifyContent="center"
      alignItems="center"
      className={styles.querySent}
    >
      <Check />
      <H2 fontWeight="medium">Query sent!</H2>
      <Text fontSize={18} fontWeight="regular">
        ~ we might take couple of hours. You will receive the response to your
        inbox
      </Text>
      <Button>Sent!</Button>
    </Flex>
  );
};

export default QuerySent;
