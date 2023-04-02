import React, { FC } from 'react';

import styles from './Button.styles.module.scss';

type TProps = {
  name: string;
  className?: string;
  onClick: () => void;
};

const Button: FC<TProps> = ({ name, onClick, className }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
