import React from 'react';

import { TPokemonStat } from 'src/types/Pokemons';
import styles from './PokemonsStat.styles.module.scss';

type TProps = {
  item: TPokemonStat;
};

const PokemonStat = ({ item }: TProps) => {
  return (
    <div className={styles.table__row}>
      <div className={styles.table__row__item}>{item.stat.name.toUpperCase()}:</div>
      <div className={styles.table__row__item}>{item.base_stat}</div>
    </div>
  );
};

export default PokemonStat;
