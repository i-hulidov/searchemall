import React, { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';

import { PokemonsList } from '../../composite/PokemonsList';

import styles from './Search.styles.module.scss';

const Search = () => {
  const { loading, searchQuery, searchResults, setSearchQuery } = useContext(SearchContext);

  return (
    <div className={styles.container}>
      <input
        name="pokemon"
        type="text"
        placeholder="Enter a pokemon's name"
        value={searchQuery}
        disabled={loading}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <PokemonsList searchResults={searchResults} />
    </div>
  );
};

export default Search;
