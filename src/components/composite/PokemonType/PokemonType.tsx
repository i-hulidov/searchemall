import React from 'react';

import styles from './PokemonsType.styles.module.scss';

type TProps = {
  type: string;
};

const PokemonType = ({ type }: TProps) => {
  return <div className={`${styles.container} ${styles[type]}`}>{type}</div>;
};

export default PokemonType;
