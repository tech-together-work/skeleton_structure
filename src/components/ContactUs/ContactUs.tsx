import Flex from '../shared/Flex/Flex';
import Section from '../shared/Section/Section';
import styles from './ContactUs.module.scss';
import Form from '../shared/common/Form/Form';
import LeftContent from './LeftContent/LeftContent';

const ContactUs = () => {
  return (
    <div className={styles.contact}>
      <Section className={styles.wrapper}>
        <Flex className={styles.form} gap="64px">
          <LeftContent />
          <Form />
        </Flex>
      </Section>
    </div>
  );
};

export default ContactUs;
