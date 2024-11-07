import { useState } from 'react';
import SectionHeading from '../../shared/common/SectionHeading/SectionHeading';
import Section from '../../shared/Section/Section';
import styles from './Faq.module.scss';
import FaqCard from './FaqCard/FaqCard';

const Faq = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);
  const accordionItems = [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
  ];
  const toggleSection = (index: number) => {
    setOpenSections((prev: number[]) =>
      prev.includes(index)
        ? prev.filter((i: number) => i !== index)
        : [...prev, index]
    );
  };
  return (
    <div className={styles.faqWrapper}>
      <SectionHeading className={styles.heading}>
        Frequently
        <br />
        Asked Questions
      </SectionHeading>
      <Section className={styles.list}>
        {accordionItems.map((item, index) => {
          return (
            <FaqCard
              isOpen={openSections.includes(index)}
              key={index}
              toggleItem={() => toggleSection(index)}
              question={item.title}
              answer={item.content}
            />
          );
        })}
      </Section>
    </div>
  );
};

export default Faq;
