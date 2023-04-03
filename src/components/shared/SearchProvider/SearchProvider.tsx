import React, { useEffect, useState } from 'react';

import { PokemonAPI } from 'src/api/PokemonAPI';
import { SearchContext } from 'src/contexts/SearchContext';
import useDebounce from 'src/hooks/useDebounce';
import { TPokemon } from 'src/types/Pokemons';
import { contains } from './utils/contains';

type TProps = {
  children: JSX.Element;
};

const SearchProvider = (props: TProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonList, setPokemonList] = useState<TPokemon[]>([]);
  const [searchResults, setSearchResults] = useState<TPokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const debouncedSearchQuery = useDebounce(searchQuery);

  useEffect(() => {
    PokemonAPI.getAll().then((res) => {
      setPokemonList(res);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (debouncedSearchQuery.length >= 2) {
      const filteredPokemons = pokemonList.filter(contains(debouncedSearchQuery));
      setSearchResults(filteredPokemons);
    }
  }, [debouncedSearchQuery]);

  useEffect(() => {
    if (debouncedSearchQuery.length <= 1) {
      setSearchResults([]);
    }
  }, [debouncedSearchQuery]);

  useEffect(() => {
    if (debouncedSearchQuery.length === 1) {
      setError('*Search query should be at least 2 characters');
    }
  }, [debouncedSearchQuery, searchResults]);

  useEffect(() => {
    setError('');
  }, [searchQuery]);

  const value = {
    loading,
    searchQuery,
    debouncedSearchQuery,
    error,
    pokemonList,
    searchResults,
    setSearchQuery,
    setLoading,
  };

  return <SearchContext.Provider value={value} {...props} />;
};

export default SearchProvider;
