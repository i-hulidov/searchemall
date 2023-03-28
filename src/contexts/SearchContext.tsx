import React, { createContext, useEffect, useState } from 'react';

import { pokemonUrl } from '../data/constants/urls';
import { TPokemon } from '../types/Pokemons';
import { contains } from '../utils/contains';

type TProps = {
  children: JSX.Element;
};

type TSearchContext = {
  loading: boolean;
  searchQuery: string;
  pokemonList: TPokemon[];
  searchResults: TPokemon[];
  setSearchQuery: (value: string) => void;
  setLoading: (value: boolean) => void;
};

export const SearchContext = createContext({} as TSearchContext);

export const SearchProvider = (props: TProps) => {
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
