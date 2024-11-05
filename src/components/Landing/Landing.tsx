import styles from './Landing.module.scss';
import { H1 } from '../shared/Text/Text';
import Section from '../shared/Section/Section';
import Banner from './Banner/Banner';
import Metrics from './Metrics/Metrics';
import SmallBanner from '../shared/common/SmallBanner/SmallBanner';
import Container from '../shared/Container/Container';
import DreamTour from '../shared/common/DreamTour/DreamTour';
import Partners from './Partners/Partners';
import Awards from './Awards/Awards';
import Blogs from './Blogs/Blogs';
import HolidayTypes from './HolidayTypes/HolidayTypes';
import StatesSlider from './StatesSlider/StatesSlider';
import Luxury from './Luxury/Luxury';
import NotSureTour from '../shared/common/NotSureTour/NotSureTour';

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
      <Container spacing={false}>
        <StatesSlider />
      </Container>
      <Container spacing={false}>
        <SmallBanner />
      </Container>
      <Container spacing={false}>
        <HolidayTypes />
      </Container>
      <Container spacing={false}>
        <Luxury />
      </Container>
      <Section className={styles.partnersSection}>
        <Partners />
      </Section>
      <Section className={styles.notSureContainer}>
        <Container>
          <NotSureTour />
        </Container>
      </Section>
      <Container className={styles.awardsSection} spacing={false}>
        <Awards />
      </Container>
      <Container className={styles.blogsSection} spacing={false}>
        <Blogs />
      </Container>
      <Container className={styles.dreamTourContainer}>
        <DreamTour />
      </Container>
    </div>
  );
};

export default Landing;
