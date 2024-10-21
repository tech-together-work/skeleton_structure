import styles from './Landing.module.scss';
import { H1 } from '../shared/Text/Text';
import Section from '../shared/Section/Section';

const Landing = () => {
  return (
    <div className={styles.home}>
      <Section>
        <H1 className={styles.pageHeading}>
          Crafting Extraordinary Travel Journeys Since 1986
        </H1>
      </Section>
    </div>
  );
};

export default Landing;
