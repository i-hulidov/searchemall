import React, { CSSProperties } from 'react';

import styles from './Loader.styles.module.scss';

type TProps = {
  style?: CSSProperties;
};

const Loader = ({ style }: TProps) => <span className={styles.loader} style={style} />;

export default Loader;
