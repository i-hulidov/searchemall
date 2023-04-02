import React from 'react';

import styles from './ProgressBar.styles.module.scss';

type TProps = {
  value: number;
};

const ProgressBar = ({ value }: TProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.filledPart} style={{ width: `${value}%` }}></div>
    </div>
  );
};

export default ProgressBar;
