import { Link } from 'react-router-dom';
import ChevronDown from '../../../../assets/icons/ChevronDown';
import Flex from '../../Flex/Flex';
import Section from '../../Section/Section';
import { P } from '../../Text/Text';
import styles from './Breadcrumbs.module.scss';

interface Items {
  label: string;
  href: string;
}
interface Props {
  paths: Items[];
  className?: string;
}
const Breadcrumbs: React.FC<Props> = ({ paths, className }) => {
  return (
    <Section className={className}>
      <Flex className={styles.breadcrumbs} alignItems="center" gap="4px">
        <Link to={'/'} className={styles.item}>
          <P>Home</P>
          <ChevronDown />
        </Link>

        {paths.map((item, index) => {
          if (item.href === '') {
            return (
              <div key={index} className={styles.item}>
                <P>{item.label}</P>
                <ChevronDown />
              </div>
            );
          }
          return (
            <Link key={index} to={item.href} className={styles.item}>
              <P>{item.label}</P>
              <ChevronDown />
            </Link>
          );
        })}
      </Flex>
    </Section>
  );
};

export default Breadcrumbs;
