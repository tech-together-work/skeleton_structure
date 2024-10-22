import React from 'react';
import styles from './Conatiner.module.scss';
import clsx from 'clsx';

export interface Props {
  className?: string;
  children: React.ReactNode;
  spacing?: boolean;
}
const Conatiner: React.FC<Props> = ({
  className,
  children,
  spacing = true,
}) => {
  return (
    <div
      className={clsx(styles.container, spacing && styles.spacing, className)}
    >
      {children}
    </div>
  );
};

export default Conatiner;
