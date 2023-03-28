import React from 'react';

type TProps = {
  type: string;
};

const PokemonType = ({ type }: TProps) => {
  return <div className="pokemon-type-tag">{type}</div>;
};

export default PokemonType;
