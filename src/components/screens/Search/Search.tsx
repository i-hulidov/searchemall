import React, { useContext } from 'react';

import Input from 'src/components/shared/Input/Input';
import PokemonNotFound from 'src/components/shared/PokemonNotFound/PokemonNotFound';
import { SearchContext } from 'src/contexts/SearchContext';
import { PokemonsList } from 'src/components/composite/PokemonsList';

import styles from './Search.styles.module.scss';

const Search = () => {
  const { loading, debouncedSearchQuery, searchQuery, searchResults, setSearchQuery, error } =
    useContext(SearchContext);

  return (
    <div className={styles.container}>
      <Input
        name="pokemon"
        placeholder="Enter the pokemon name"
        value={searchQuery}
        disabled={loading}
        error={error}
        onClear={() => setSearchQuery('')}
        onChange={(e) => setSearchQuery(e.target.value.trimStart())}
      />
      {searchResults.length ? (
        <PokemonsList searchResults={searchResults} />
      ) : debouncedSearchQuery.length ? (
        <div className={styles.notFoundContainer}>
          <PokemonNotFound />
        </div>
      ) : null}
    </div>
  );
};

export default Search;
