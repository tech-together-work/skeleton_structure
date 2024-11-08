import Metrics from '../shared/common/Metrics/Metrics';
import Container from '../shared/Container/Container';
import Section from '../shared/Section/Section';
import styles from './AboutUs.module.scss';
import Block1 from './Block/Block1';
import Block2 from './Block/Block2';
import Visionaries from './Visionaries/Visionaries';
import {
  getCountries,
  getCountryByName,
  getPosts,
  getAllCountryDetails,
  getStateDetails,
  getCities,
  getStateList,
} from '../../sanity/index';
import { getImageUrl } from '../../sanity/helper';
import { Post } from '../../sanity/types/post';
import { useEffect, useState } from 'react';

const AboutUs = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPost = async () => {
      const posts = await getPosts();
      const stateDetails = await getStateDetails();
      const states = await getStateList();
      const allDetails = await getAllCountryDetails();
      const oneCountry = await getCountryByName('india');
      const countries = await getCountries();
      const cities = await getCities();

      setPosts(posts);
      console.log('All Details \n:', allDetails);
      console.log('\nAll Countries \n:', countries, oneCountry);
      console.log('\nAll States \n:', states, stateDetails);
      console.log('\nAll Cities \n:', cities, posts);
    };
    fetchPost();
  }, []);

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
