import React from 'react';
import styles from './Section.module.scss';
import clsx from 'clsx';

export interface Props {
  className?: string;
  children: React.ReactNode;
}
const Section: React.FC<Props> = ({ className, children }) => {
  return <div className={clsx(styles.section, className)}>{children}</div>;
};

export default Section;
