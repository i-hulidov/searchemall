import React from 'react';

import { pokemonImageBaseUrl } from '../constants';
import { TPokemon } from '../types';
import { getPokemonIdFromUrl } from '../utilities';

type TProps = {
  searchResult: TPokemon;
  onClick: () => void;
};

const SearchResult = ({ searchResult, onClick }: TProps) => {
  const pokemonId = getPokemonIdFromUrl(searchResult.url);

  return (
    <div className="search-result" onClick={onClick}>
      <div className="image-container">
        <img src={`${pokemonImageBaseUrl}/${pokemonId}.png`} alt={searchResult.name} />
      </div>
      <span className="search-result__name">{searchResult.name}</span>
    </div>
  );
};

export default SearchResult;
