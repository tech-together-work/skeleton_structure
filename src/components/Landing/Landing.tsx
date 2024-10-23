import styles from './Landing.module.scss';
import { H1 } from '../shared/Text/Text';
import Section from '../shared/Section/Section';
import Banner from './Banner/Banner';
import Metrics from './Metrics/Metrics';

const Landing = () => {
  return (
    <div className={styles.home}>
      <Section>
        <H1 className={styles.pageHeading}>
          Crafting Extraordinary Travel Journeys Since 1986
        </H1>
      </Section>
      <Section>
        <Banner />
      </Section>
      <Section>
        <Metrics />
      </Section>
    </div>
  );
};

export default Landing;
