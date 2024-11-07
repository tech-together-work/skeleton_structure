import clsx from 'clsx';
import { H5, Text } from '../../../shared/Text/Text';
import styles from './FaqCard.module.scss';
import ChevronDown from '../../../../assets/icons/ChevronDown';

interface Props {
  toggleItem: () => void;
  question: string;
  answer: string;
  isOpen: boolean;
}
const FaqCard: React.FC<Props> = ({ toggleItem, question, answer, isOpen }) => {
  return (
    <div className={styles.accordionItem} onClick={toggleItem}>
      <div className={styles.accordionHeader}>
        <H5 fontWeight="semibold">{question}</H5>
        <div className={clsx(isOpen && styles.icon)}>
          <ChevronDown />
        </div>
      </div>

      <div className={clsx(styles.accordionContent, isOpen && styles.open)}>
        <Text fontSize={18} fontWeight="regular">
          {answer}
        </Text>
      </div>
    </div>
  );
};

export default FaqCard;
