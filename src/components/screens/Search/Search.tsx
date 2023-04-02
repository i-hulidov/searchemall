import React, { useContext } from 'react';
import Input from 'src/components/shared/Input/Input';

import { SearchContext } from 'src/contexts/SearchContext';
import { PokemonsList } from 'src/components/composite/PokemonsList';

import styles from './Search.styles.module.scss';

const Search = () => {
  const { loading, searchQuery, searchResults, setSearchQuery } = useContext(SearchContext);

  return (
    <div className={styles.container}>
      <Input
        name="pokemon"
        placeholder="Ex: Charizard"
        value={searchQuery}
        disabled={loading}
        onClear={() => setSearchQuery('')}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <PokemonsList searchResults={searchResults} />
    </div>
  );
};

export default Search;
