import Metrics from '../shared/common/Metrics/Metrics';
import Container from '../shared/Container/Container';
import Section from '../shared/Section/Section';
import styles from './AboutUs.module.scss';
import Visionaries from './Visionaries/Visionaries';

const AboutUs = () => {
  return (
    <div className={styles.about}>
      <Section>
        <Metrics />
      </Section>
      <Container className={styles.visionariesContainer}>
        <Visionaries />
      </Container>
    </div>
  );
};

export default AboutUs;
