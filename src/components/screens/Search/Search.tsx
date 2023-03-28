import React, { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';

import { PokemonsList } from '../../composite/PokemonsList';

import './Search.styles.css';

const Search = () => {
  const { loading, searchQuery, searchResults, setSearchQuery } = useContext(SearchContext);

  return (
    <div className="container">
      <input
        name="pokemon"
        type="text"
        placeholder="Enter a pokemon's name"
        value={searchQuery}
        disabled={loading}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <PokemonsList searchResults={searchResults} isEmpty={searchQuery.length >= 0 && searchResults.length === 0} />
    </div>
  );
};

export default Search;
