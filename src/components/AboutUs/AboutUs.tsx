import { useGetCountryStates } from '../../hooks/useGetCountryStates';
import Metrics from '../shared/common/Metrics/Metrics';
import Container from '../shared/Container/Container';
import Section from '../shared/Section/Section';
import styles from './AboutUs.module.scss';
import Block1 from './Block/Block1';
import Block2 from './Block/Block2';
import Visionaries from './Visionaries/Visionaries';

const AboutUs = () => {
  const data = useGetCountryStates();
  return (
    <div className={styles.about}>
      <Section>
        <Block1 />
      </Section>
      <hr />
      <Section>
        <Block2 />
      </Section>
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
