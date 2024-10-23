import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?:
    | 'solid'
    | 'outlined'
    | 'outlined-white'
    | 'outlined-black'
    | 'solid-white';
}

const Button: React.FC<Props> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <button
      type="button"
      className={clsx(
        styles.button,
        {
          [styles.outlined]: variant === 'outlined',
          [styles.outlinedWhite]: variant === 'outlined-white',
          [styles.outlinedBlack]: variant === 'outlined-black',
          [styles.white]: variant === 'solid-white',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
