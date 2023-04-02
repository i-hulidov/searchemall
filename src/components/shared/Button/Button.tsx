import React, { FC } from 'react';

import styles from './Button.styles.module.scss';

type TProps = {
  name: string;
  onClick: () => void;
};

const Button: FC<TProps> = ({ name, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
