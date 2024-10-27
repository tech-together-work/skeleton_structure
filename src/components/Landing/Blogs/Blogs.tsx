import styles from './Blogs.module.scss';
import BlogCard from '../../shared/common/BlogCard/BlogCard';
import SectionHeading from '../../shared/common/SectionHeading/SectionHeading';
import Section from '../../shared/Section/Section';
import dummyImage from '../../../assets/images/banner.png';

const Blogs = () => {
  return (
    <div>
      <SectionHeading>Blogs about travelling</SectionHeading>
      <Section className={styles.grid}>
        <BlogCard
          imageUrl={dummyImage}
          heading="Discover the World- Visa-Free"
          subHeading="Explore exciting destinations without the visa hassle! Discover the freedom of travel for Indian passport holders and embark on your next adventure."
          linkUrl=""
        />
        <BlogCard
          isRow
          imageUrl={dummyImage}
          heading="Discover the World- Visa-Free"
          subHeading="Explore exciting destinations without the visa hassle! Discover the freedom of travel for Indian passport holders and embark on your next adventure."
          linkUrl=""
        />
        <BlogCard
          isRow
          imageUrl={dummyImage}
          heading="Discover the World- Visa-Free"
          subHeading="Explore exciting destinations without the visa hassle! Discover the freedom of travel for Indian passport holders and embark on your next adventure."
          linkUrl=""
        />
      </Section>
    </div>
  );
};

export default Blogs;
