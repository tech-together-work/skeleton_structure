import clsx from 'clsx';
import { H2 } from '../../Text/Text';
import styles from './SectionHeading.module.scss';
import Flex from '../../Flex/Flex';
import image from '../../../../assets/images/singleorange-line.png';

interface Props {
  className?: string;
  stars?: boolean;
  children: React.ReactNode;
}
const SectionHeading: React.FC<Props> = ({ className, stars, children }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap="48px"
      className={styles.sectionHeading}
    >
      <img src={image} alt="image" className={styles.leftImage} />
      <H2 fontWeight="medium" className={clsx(styles.heading, className)}>
        {children}
      </H2>
      <img src={image} alt="image" className={styles.rightImage} />
    </Flex>
  );
};

export default SectionHeading;
