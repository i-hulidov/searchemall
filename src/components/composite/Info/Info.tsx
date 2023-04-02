import React from 'react';

import styles from './Info.styles.module.scss';

type TProps = {
  exp: number;
  weight: number;
  height: number;
};

const Info = ({ exp, weight, height }: TProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Info</div>
      <div className={styles.row}>
        <span>EXP:</span>
        <span>{exp}</span>
      </div>
      <div className={styles.row}>
        <span>Height:</span>
        <span>{height}</span>
      </div>
      <div className={styles.row}>
        <span>Weight:</span>
        <span>{weight}</span>
      </div>
    </div>
  );
};

export default Info;
