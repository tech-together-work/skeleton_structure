import clsx from 'clsx';
import React from 'react';

import styles from './Text.module.scss';
import { ColorsEnum } from '../../../enums/ColorsEnum';

export interface TextProps {
  children?: React.ReactNode;
  className?: string;
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: ColorsEnum;
}
export interface CustomTextProps {
  fontSize: number;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  variant?: keyof JSX.IntrinsicElements;
  color?: ColorsEnum;
}
export const H1: React.FC<TextProps> = ({
  children,
  className,
  fontWeight = 'bold',
  color,
}) => {
  return (
    <h1
      style={{ color: `var(${color})` }}
      className={clsx(
        styles.heading,
        styles.h1,
        {
          [styles.regular]: fontWeight === 'regular',
          [styles.medium]: fontWeight === 'medium',
          [styles.semibold]: fontWeight === 'semibold',
          [styles.bold]: fontWeight === 'bold',
        },
        className
      )}
    >
      {children}
    </h1>
  );
};

export const H2: React.FC<TextProps> = ({
  children,
  className,
  fontWeight = 'bold',
  color,
}) => {
  return (
    <h2
      style={{ color: `var(${color})` }}
      className={clsx(
        styles.heading,
        styles.h2,
        {
          [styles.regular]: fontWeight === 'regular',
          [styles.medium]: fontWeight === 'medium',
          [styles.semibold]: fontWeight === 'semibold',
          [styles.bold]: fontWeight === 'bold',
        },
        className
      )}
    >
      {children}
    </h2>
  );
};

export const H3: React.FC<TextProps> = ({
  children,
  className,
  fontWeight = 'semibold',
  color,
}) => {
  return (
    <h3
      style={{ color: `var(${color})` }}
      className={clsx(
        styles.heading,
        styles.h3,
        {
          [styles.regular]: fontWeight === 'regular',
          [styles.medium]: fontWeight === 'medium',
          [styles.semibold]: fontWeight === 'semibold',
          [styles.bold]: fontWeight === 'bold',
        },
        className
      )}
    >
      {children}
    </h3>
  );
};

export const H4: React.FC<TextProps> = ({
  children,
  className,
  fontWeight = 'semibold',
  color,
}) => {
  return (
    <h4
      style={{ color: `var(${color})` }}
      className={clsx(
        styles.heading,
        styles.h4,
        {
          [styles.regular]: fontWeight === 'regular',
          [styles.medium]: fontWeight === 'medium',
          [styles.semibold]: fontWeight === 'semibold',
          [styles.bold]: fontWeight === 'bold',
        },
        className
      )}
    >
      {children}
    </h4>
  );
};

export const H5: React.FC<TextProps> = ({
  children,
  className,
  fontWeight = 'bold',
  color,
}) => {
  return (
    <h5
      style={{ color: `var(${color})` }}
      className={clsx(
        styles.heading,
        styles.h5,
        {
          [styles.regular]: fontWeight === 'regular',
          [styles.medium]: fontWeight === 'medium',
          [styles.semibold]: fontWeight === 'semibold',
          [styles.bold]: fontWeight === 'bold',
        },
        className
      )}
    >
      {children}
    </h5>
  );
};

export const H6: React.FC<TextProps> = ({
  children,
  className,
  fontWeight = 'semibold',
  color,
}) => {
  return (
    <h6
      style={{ color: `var(${color})` }}
      className={clsx(
        styles.heading,
        styles.h6,
        {
          [styles.regular]: fontWeight === 'regular',
          [styles.medium]: fontWeight === 'medium',
          [styles.semibold]: fontWeight === 'semibold',
          [styles.bold]: fontWeight === 'bold',
        },
        className
      )}
    >
      {children}
    </h6>
  );
};

export const P: React.FC<TextProps> = ({
  children,
  className,
  fontWeight = 'semibold',
  color,
}) => {
  return (
    <p
      style={{ color: `var(${color})` }}
      className={clsx(
        styles.text,
        styles.p,
        {
          [styles.regular]: fontWeight === 'regular',
          [styles.medium]: fontWeight === 'medium',
          [styles.semibold]: fontWeight === 'semibold',
          [styles.bold]: fontWeight === 'bold',
        },
        className
      )}
    >
      {children}
    </p>
  );
};

export const Span: React.FC<TextProps> = ({
  children,
  className,
  fontWeight = 'regular',
  color,
}) => {
  return (
    <span
      style={{ color: `var(${color})` }}
      className={clsx(
        styles.text,
        styles.span,
        {
          [styles.regular]: fontWeight === 'regular',
          [styles.medium]: fontWeight === 'medium',
          [styles.semibold]: fontWeight === 'semibold',
          [styles.bold]: fontWeight === 'bold',
        },
        className
      )}
    >
      {children}
    </span>
  );
};

export const Strong: React.FC<TextProps> = ({
  children,
  className,
  fontWeight = 'bold',
  color,
}) => {
  return (
    <strong
      style={{ color: `var(${color})` }}
      className={clsx(
        styles.text,
        styles.strong,
        {
          [styles.regular]: fontWeight === 'regular',
          [styles.medium]: fontWeight === 'medium',
          [styles.semibold]: fontWeight === 'semibold',
          [styles.bold]: fontWeight === 'bold',
        },
        className
      )}
    >
      {children}
    </strong>
  );
};

//Will be used for some other extra font sizes which are not defined above
export const Text: React.FC<CustomTextProps> = ({
  children,
  fontSize,
  className,
  onClick,
  fontWeight = 'regular',
  variant = 'p',
  color,
}) => {
  const Component = variant;
  return (
    <Component
      style={{ fontSize: `${fontSize}px`, color: `var(${color})` }}
      onClick={onClick}
      className={clsx(
        {
          [styles.regular]: fontWeight === 'regular',
          [styles.medium]: fontWeight === 'medium',
          [styles.semibold]: fontWeight === 'semibold',
          [styles.bold]: fontWeight === 'bold',
          [styles.font_26]: fontSize === 26,
        },
        className
      )}
    >
      {children}
    </Component>
  );
};
