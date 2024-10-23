import React from 'react';
import styles from './Container.module.scss';
import clsx from 'clsx';

export interface Props {
  className?: string;
  children: React.ReactNode;
  spacing?: boolean;
}
const Container: React.FC<Props> = ({
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

export default Container;
