import React, { FC, InputHTMLAttributes } from 'react';

import { CloseIcon } from 'src/components/shared/CloseIcon';
import styles from './Input.styles.module.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear: () => void;
  error: string;
}

const Input: FC<IProps> = ({ type = 'text', value, error, onClear, ...rest }) => {
  return (
    <>
      <div className={styles.container}>
        <input data-testid="input" type={type} value={value} {...rest}></input>
        {!!value && <CloseIcon onClick={onClear} />}
      </div>
      {!!error && <div className={styles.error}>{error}</div>}
    </>
  );
};

export default Input;
