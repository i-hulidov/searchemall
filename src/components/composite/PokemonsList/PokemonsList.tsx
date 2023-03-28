import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchResult } from '../SearchResult/';
import { TPokemon } from '../../../types/Pokemons';

type TProps = {
  searchResults: TPokemon[];
  isEmpty: boolean;
};

const PokemonsList = ({ searchResults, isEmpty }: TProps) => {
  const navigate = useNavigate();

  if (isEmpty) {
    return <div>No pokemons found</div>;
  }

  return searchResults.length ? (
    <div className="search-list">
      {searchResults.map((searchResult) => (
        <SearchResult
          searchResult={searchResult}
          key={searchResult.name}
          onClick={() => navigate(`/details/${searchResult.name}`)}
        />
      ))}
    </div>
  ) : null;
};

export default PokemonsList;
