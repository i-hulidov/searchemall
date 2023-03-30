import React from 'react';

import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';
import styles from './PokemonAvatar.styles.module.scss';

type TProps = {
  img: string;
  name: string;
};

const PokemonAvatar = ({ img, name }: TProps) => {
  return (
    <div className={styles.container}>
      <img className="pokemon-avatar__image" src={img} alt="pokemon" />
      <div className="pokemon-avatar__name">{capitalizeFirstLetter(name)}</div>
    </div>
  );
};

export default PokemonAvatar;
