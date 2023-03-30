import React from 'react';

import { pokemonImageBaseUrl } from '../../../data/constants/urls';
import { TPokemon } from '../../../types/Pokemons';
import { getPokemonIdFromUrl } from './utilities/getPokemonIdFromUrl';

import styles from './SearchResult.styles.module.scss';

type TProps = {
  searchResult: TPokemon;
  onClick: () => void;
};

const SearchResult = ({ searchResult, onClick }: TProps) => {
  const pokemonId = getPokemonIdFromUrl(searchResult.url);

  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.imageContainer}>
        <img src={`${pokemonImageBaseUrl}/${pokemonId}.png`} alt={searchResult.name} />
      </div>
      <span className={styles.container__name}>{searchResult.name}</span>
    </div>
  );
};

export default SearchResult;
