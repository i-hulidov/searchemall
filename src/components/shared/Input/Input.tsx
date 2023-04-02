import React, { FC, InputHTMLAttributes } from 'react';

import { CloseIcon } from 'src/components/shared/CloseIcon';
import styles from './Input.styles.module.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear: () => void;
}

const Input: FC<IProps> = ({ type = 'text', value, onClear, ...rest }) => {
  return (
    <div className={styles.container}>
      <input type={type} value={value} {...rest}></input>
      {!!value && <CloseIcon onClick={onClear} />}
    </div>
  );
};

export default Input;
