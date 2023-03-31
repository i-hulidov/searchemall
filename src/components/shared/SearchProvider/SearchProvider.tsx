import React, { useEffect, useState } from 'react';

import { SearchContext } from 'src/contexts/SearchContext';
import { pokemonUrl } from 'src/data/constants/urls';
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
    fetch(`${pokemonUrl}?limit=2000`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch((e) => console.log('error', e));
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
