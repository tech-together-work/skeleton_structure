import Flex from '../Flex/Flex';
import Section from '../Section/Section';
import styles from './Footer.module.scss';
import Newsletter from './Newsletter/Newsletter';
import Socials from './Socials/Socials';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Section>
        <Flex>
          <Newsletter />
        </Flex>
        <Socials />
      </Section>
    </footer>
  );
};

export default Footer;
