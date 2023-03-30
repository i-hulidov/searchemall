import React from 'react';

import styles from './PokemonsType.styles.module.scss';

type TProps = {
  type: string;
};

const PokemonType = ({ type }: TProps) => {
  return <div className={styles.container}>{type}</div>;
};

export default PokemonType;
