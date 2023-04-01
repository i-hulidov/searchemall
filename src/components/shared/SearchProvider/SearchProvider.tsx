import React, { useEffect, useState } from 'react';

import { PokemonAPI } from 'src/api/PokemonAPI';
import { SearchContext } from 'src/contexts/SearchContext';
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

  useEffect(() => {
    PokemonAPI.getAll().then((res) => {
      setPokemonList(res);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const filteredPokemons = pokemonList.filter(contains(searchQuery));
    setSearchResults(filteredPokemons);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.length === 0) {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const value = {
    loading,
    searchQuery,
    pokemonList,
    searchResults,
    setSearchQuery,
    setLoading,
  };

  return <SearchContext.Provider value={value} {...props} />;
};

export default SearchProvider;
