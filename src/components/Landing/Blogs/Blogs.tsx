import styles from './Blogs.module.scss';
import BlogCard from '../../shared/common/BlogCard/BlogCard';
import SectionHeading from '../../shared/common/SectionHeading/SectionHeading';
import Section from '../../shared/Section/Section';

const Blogs = () => {
  return (
    <div>
      <SectionHeading>Blogs about travelling</SectionHeading>
      <Section>
        <BlogCard />
      </Section>
    </div>
  );
};

export default Blogs;
