import React from 'react';

import PokemonType from './PokemonType';

import { TPokemonType } from '../types';

type TProps = {
  types: TPokemonType[];
};

const PokemonTypes = ({ types }: TProps) => {
  return (
    <div className="pokemon-types">
      {types.map((item, i) => (
        <PokemonType key={i} type={item.type.name} />
      ))}
    </div>
  );
};

export default PokemonTypes;
