import clsx from 'clsx';
import { H2 } from '../../Text/Text';
import styles from './SectionHeading.module.scss';
import Flex from '../../Flex/Flex';
import image from '../../../../assets/images/singleorange-line.png';
import brownImage from '../../../../assets/images/singlebrown-line.png';

interface Props {
  className?: string;
  stars?: boolean;
  children: React.ReactNode;
  isBrown?: boolean;
}
const SectionHeading: React.FC<Props> = ({
  className,
  children,
  isBrown = false,
}) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap="48px"
      className={clsx(styles.sectionHeading, className)}
    >
      <img
        src={isBrown ? brownImage : image}
        alt="image"
        className={styles.leftImage}
      />
      <H2 fontWeight="medium" className={clsx(styles.heading)}>
        {children}
      </H2>
      <img
        src={isBrown ? brownImage : image}
        alt="image"
        className={styles.rightImage}
      />
    </Flex>
  );
};

export default SectionHeading;
