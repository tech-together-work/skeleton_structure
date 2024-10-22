import React, { ChangeEvent } from 'react';
import styles from './Inputs.module.scss';
import clsx from 'clsx';
import { ColorsEnum } from '../../../enums/ColorsEnum';

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  [key: string]: any;
  color?: ColorsEnum;
}

const InputV1: React.FC<InputProps> = ({
  label = false,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  color,
  ...props
}) => {
  return (
    <div
      style={{ color: color ? color : '#ffffff' }}
      className={clsx(styles.inputWrapper, styles.inputv1)}
    >
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        {...props}
      />
    </div>
  );
};

export default InputV1;
