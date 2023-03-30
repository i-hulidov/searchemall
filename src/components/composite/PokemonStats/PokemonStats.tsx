import React from 'react';

import { TPokemonStat } from '../../../types/Pokemons';
import styles from './PokemonsStats.styles.module.scss';

type TProps = {
  stats: TPokemonStat[];
};

const PokemonStats = ({ stats }: TProps) => {
  return (
    <div className={styles.table}>
      <div className={`${styles.table__row} ${styles.heading}`}>
        <div className={styles.table__row__item}>Base</div>
        <div className={styles.table__row__item}>Stats</div>
      </div>
      <div className="body">
        {stats.map((item) => (
          <div key={item.stat.name} className={styles.table__row}>
            <div className={styles.table__row__item}>{item.stat.name.toUpperCase()}:</div>
            <div className={styles.table__row__item}>{item.base_stat}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;
