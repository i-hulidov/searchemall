import React from 'react';

import { PokemonType } from '../PokemonType';
import { TPokemonType } from '../../../types/Pokemons';
import styles from './PokemonsTypes.styles.module.scss';

type TProps = {
  types: TPokemonType[];
};

const PokemonTypes = ({ types }: TProps) => {
  return (
    <div className={styles.container}>
      {types.map((item, i) => (
        <PokemonType key={i} type={item.type.name} />
      ))}
    </div>
  );
};

export default PokemonTypes;
