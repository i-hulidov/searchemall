import React, { CSSProperties } from 'react';

import Image from '../../shared/Image/Image';
import { pokemonImageBaseUrl } from 'src/data/constants/urls';
import { TPokemon } from 'src/types/Pokemons';
import { getIdFromUrl } from 'src/utils/getIdFromUrl';
import { getDisplayName } from 'src/utils/getDisplayName';

import styles from './SearchResult.styles.module.scss';

type TProps = {
  searchResult: TPokemon;
  onClick: () => void;
  style: CSSProperties;
};

const SearchResult = ({ searchResult, onClick, style }: TProps) => {
  const pokemonId = getIdFromUrl(searchResult.url);

  return (
    <div className={styles.container} onClick={onClick} style={style}>
      <div className={styles.innerWrapper}>
        <div className={styles.imageContainer}>
          <Image src={`${pokemonImageBaseUrl}/${pokemonId}.png`} alt={searchResult.name} />
        </div>
        <span className={styles.innerWrapper__name}>{getDisplayName(searchResult.name)}</span>
      </div>
    </div>
  );
};

export default SearchResult;
