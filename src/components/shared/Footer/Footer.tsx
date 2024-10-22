import Flex from '../Flex/Flex';
import Section from '../Section/Section';
import styles from './Footer.module.scss';
import Newsletter from './Newsletter/Newsletter';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Section>
        <Flex>
          <Newsletter />
        </Flex>
      </Section>
    </footer>
  );
};

export default Footer;
