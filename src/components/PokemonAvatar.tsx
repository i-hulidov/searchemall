import React from 'react';

import { capitalizeFirstLetter } from '../utilities';

type TProps = {
  img: string;
  name: string;
};

const PokemonAvatar = ({ img, name }: TProps) => {
  return (
    <div className="pokemon-avatar">
      <img className="pokemon-avatar__image" src={img} alt="pokemon" />
      <div className="pokemon-avatar__name">{capitalizeFirstLetter(name)}</div>
    </div>
  );
};

export default PokemonAvatar;
