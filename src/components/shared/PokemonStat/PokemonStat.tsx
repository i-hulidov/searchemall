import React from 'react';

import { ProgressBar } from 'src/components/shared/ProgressBar';
import { getStatDisplayName } from './utilities/getStatDisplayName';
import { TPokemonStat } from 'src/types/Pokemons';
import styles from './PokemonsStat.styles.module.scss';

type TProps = {
  item: TPokemonStat;
};

const PokemonStat = ({ item }: TProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.statsWrapper}>
        <div className={styles.container__item}>{getStatDisplayName(item.stat.name)}:</div>
        <div className={styles.container__item}>{item.base_stat}</div>
      </div>
      <div className={styles.progressBarWrapper}>
        <ProgressBar value={item.base_stat} />
      </div>
    </div>
  );
};

export default PokemonStat;
