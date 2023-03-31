import React from 'react';

import { PokemonStat } from 'src/components/shared/PokemonStat';
import { TPokemonStat } from 'src/types/Pokemons';
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
          <PokemonStat key={item.stat.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;
