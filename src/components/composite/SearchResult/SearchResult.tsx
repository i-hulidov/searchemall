import React, { CSSProperties } from 'react';

import Image from '../../shared/Image/Image';
import { pokemonImageBaseUrl } from 'src/data/constants/urls';
import { TPokemon } from 'src/types/Pokemons';
import { getPokemonIdFromUrl } from './utilities/getPokemonIdFromUrl';

import styles from './SearchResult.styles.module.scss';

type TProps = {
  searchResult: TPokemon;
  onClick: () => void;
  style: CSSProperties;
};

const SearchResult = ({ searchResult, onClick, style }: TProps) => {
  const pokemonId = getPokemonIdFromUrl(searchResult.url);

  return (
    <div className={styles.container} onClick={onClick} style={style}>
      <div className={styles.innerWrapper}>
        <div className={styles.imageContainer}>
          <Image src={`${pokemonImageBaseUrl}/${pokemonId}.png`} alt={searchResult.name} />
        </div>
        <span className={styles.container__name}>{searchResult.name}</span>
      </div>
    </div>
  );
};

export default SearchResult;
