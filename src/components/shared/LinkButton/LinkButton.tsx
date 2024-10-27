import React, { LinkHTMLAttributes } from 'react';
import styles from './LinkButton.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import TrendDown from '../../../assets/icons/TrendDown';

interface Props extends LinkHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  variant?:
    | 'solid'
    | 'outlined'
    | 'outlined-white'
    | 'outlined-black'
    | 'solid-white';

  url?: string;
  singleBorder?: boolean;
}

const LinkButton: React.FC<Props> = ({
  children,
  className,
  variant,
  url,
  singleBorder = false,
  ...props
}) => {
  return (
    <Link
      to={url ? url : ''}
      className={clsx(
        styles.button,
        {
          [styles.outlined]: variant === 'outlined',
          [styles.outlinedWhite]: variant === 'outlined-white',
          [styles.outlinedBlack]: variant === 'outlined-black',
          [styles.white]: variant === 'solid-white',
          [styles.singleBorder]: singleBorder,
        },
        className
      )}
      {...props}
    >
      {children}
      <TrendDown />
    </Link>
  );
};

export default LinkButton;
